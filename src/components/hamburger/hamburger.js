import styles from "./hamburger.module.scss";

export default function Hamburger() {
    return (
        <div
            className={styles.hamburger}
            onClick={() => console.log("qwe asd")}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
