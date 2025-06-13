import styles from "./social.module.scss";
import Image from "next/image";
import YouTubeIcon from "../../assets/youtube.svg";
import FacebookIcon from "../../assets/facebook.svg";
export default function Social() {
    return (
        <div className={styles.wrap}>
            <a href="https://www.youtube.com/@InfoMMASH" target="_blank">
                <YouTubeIcon className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/Sheptyckymuz" target="_blank">
                <FacebookIcon className={styles.icon} />
            </a>
        </div>
    );
}
