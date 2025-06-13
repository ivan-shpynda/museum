"use client";

import styles from "./hamburger.module.scss";
import { useState } from "react";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={styles.hamburger}
            onClick={() => setIsOpen((value) => !value)}
        >
            <div className={`${isOpen ? styles.opened : ""} ${styles.wrapper}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
