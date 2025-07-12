import Link from "next/link";

export default function notFound() {
    return (
        <>
            <h1>Сторінку не знайдено</h1>
            <p>
                Можливо, ви шукали щось важливе, як митрополит Шептицький шукав
                істину. Ми допоможемо вам її знайти.
            </p>
            <br />
            <Link href="/">Перейти на головну сторінку</Link>
        </>
    );
}
