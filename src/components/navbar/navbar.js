"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();
    const isHomePage = pathName === "/";
    return (
        <div className={styles.navbar}>
            <div>
                <Image
                    src={"/logo.png"}
                    alt="logo-img"
                    width={76}
                    height={76}
                />
                {isHomePage ? (
                    <div />
                ) : (
                    <Image
                        src={"/logo-add.png"}
                        alt="logo-img"
                        width={120}
                        height={66}
                    />
                )}
            </div>

            <ul>
                <li>
                    <Link href="/">ГОЛОВНА</Link>
                </li>
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
        </div>
    );
}
