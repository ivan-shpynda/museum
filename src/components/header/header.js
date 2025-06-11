"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import Social from "@/components/social/social";
import Hamburger from "@/components/hamburger/hamburger";
import Logotext from "../logotext/logotext";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <Logotext />
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/events">ВИСТАВКИ ТА ПОДІЇ</Link>
                        </li>
                        <li>
                            <Link href="/history">ІСТОРІЯ МУЗЕЮ</Link>
                        </li>
                        <li>
                            <Link href="/mission">МІСІЯ</Link>
                        </li>
                        <li>
                            <Link href="/contacts">КОНТАКТИ</Link>
                        </li>
                    </ul>
                    <Social />
                </nav>
                <Hamburger />
            </div>
        </header>
    );
}
