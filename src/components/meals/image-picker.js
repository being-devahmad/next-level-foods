'use client'

import { useEffect, useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({ label, name }) {
    const imageInput = useRef()
    function handlePicClick() {
        imageInput.current.click()
    }

    const [pickdImage, setPickedImage] = useState([])
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (!file) {
            return
        }

        // This will make mime or blob url for the picked or selected image
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    useEffect(() => {
        console.log('pickedImage-->', pickdImage)
    }, [pickdImage])

    return (
        <div className={classes.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickdImage && <p>No image picked yet.</p>}
                    {pickdImage && <Image src={pickdImage} fill />}
                </div>
                <input
                    ref={imageInput}
                    className={classes.input}
                    type="file"
                    id="image"
                    accept="image/png , image/jpg"
                    name={name}
                    onChange={handleImageChange}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePicClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}