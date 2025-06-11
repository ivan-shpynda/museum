import Link from "next/link";
import styles from "./logotext.module.scss";

export default function Logotext({}) {
    return (
        <Link href="/" className={styles.logo_text}>
            МУЗЕЙ ПАМʼЯТI МИТРОПОЛИТА
            <div className={styles.logo_text_bold}>АНДРЕЯ</div>
        </Link>
    );
}
