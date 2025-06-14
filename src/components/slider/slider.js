import styles from "./slider.module.scss";
import Image from "next/image";

export default function Slider() {
    return (
        <div className={styles.frame}>
            <div className={styles.image_container}>
                <Image
                    src="/images/image-3.png"
                    className={styles.image}
                    alt="logo-img"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
}
