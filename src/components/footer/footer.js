import styles from "./footer.module.scss";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrap}>
                <div className={styles.firstBlock}>
                    <p>МУЗЕЙ ПАМʼЯТІ МИТРОПОЛИТА АНДРЕЯ</p>
                    <p>вул. М. Кривоноса, 1, Львів, Львівська область, 79000</p>
                    <p>телефон: +380 32 297 66 00</p>
                    <p>e-mail: museum.andrey@gmail.com</p>
                    <p>Графік роботи: щодня з 10:00 до 18:00</p>
                </div>
                <div>
                    <p>ГОЛОВНА</p>
                    <p>ВИСТАВКИ ТА ПОДІЇ</p>
                    <p>ІСТОРІЯ МУЗЕЮ</p>
                    <p>МІСІЯ</p>
                    <p>ПІДТРИМАТИ</p>
                    <p>МЕДІА ПРО НАС</p>
                </div>
                <div>
                    <Image
                        src="/museum/map.png"
                        alt="map"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
}
