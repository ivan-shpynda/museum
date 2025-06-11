"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Slider from "@/components/slider/slider";

const images = [
    { url: "/images/image-2.png" },
    { url: "/images/image-3.png" },
    { url: "/images/image-4.png" },
];

export default function Home() {
    return (
        <>
            <div className={`container ${styles.main_wrap}`}>
                <div className={styles.logo_wrap}>
                    <Image
                        src="/images/logo.png"
                        alt="logo-img"
                        width={270}
                        height={270}
                    />
                    <h1>
                        МУЗЕЙ ПАМʼЯТI МИТРОПОЛИТА <span>АНДРЕЯ</span>
                    </h1>
                </div>
                <Slider />
            </div>
        </>
    );
}
