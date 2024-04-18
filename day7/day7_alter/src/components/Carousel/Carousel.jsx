import { useState } from 'react'
import styles from './style.module.css'

export default function Carousel({images,defaultImageIndex=0}) {
    const [selectedImageIndex,setSelectedImageIndex] = useState(defaultImageIndex);

    const handlePrev = () => {

    }

    const handleNext = () => {

    }

    return (
        <div className={styles.carousel}>
            <div className={styles.images}>
                {images.map((img,i)=>(
                    <img src={img.src} key={i} alt="Image" />
                ))}
            </div>
        </div>
    )
}