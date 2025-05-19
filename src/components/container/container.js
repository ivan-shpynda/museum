import Image from "next/image";
import styles from "./container.module.scss";
export default function Container() {
    return (
        <div>
            <div className={styles.container1}>
                <div className={styles.headingBlock}>
                    <h1 className={styles.heading}>
                        Музей памʼяті Митрополита Андрея
                    </h1>
                    <p className={styles.subheading}>
                        Продовжуємо Культурно-Просвітницьку Місію Андрея
                        Шептицького
                    </p>
                    <div className={styles.btnBlock}>
                        <button className={styles.buttonPrimary}>
                            АКТУАЛЬНЕ
                        </button>
                        <button className={styles.buttonSecondary}>
                            ПІДТРИМАТИ
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src="/museum/cross2.png"
                        alt="cross-image"
                        width={460}
                        height={600}
                    />
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.flexWrapper}>
                    <Image
                        src="/museum/museum1.png"
                        alt="museum1"
                        width={534}
                        height={364}
                    />
                    <div>
                        <h2 className="">Історія музею</h2>
                        <p className={styles.container2text}>
                            Музей Митрополита Андрея Шептицького відкрили
                            наприкінці серпня 2020 року у приміщенні колишніх
                            келій Костелу Святого Казимира. Отець Севастьян
                            Дмитрух - знаний фахівець сакрального мистецтва у
                            Львові та директор музею...
                        </p>
                        <button className={styles.button3}>
                            Дізнатись більше
                        </button>
                    </div>
                </div>
                <div className={styles.container2ButtonImage}>
                    <Image
                        className="{styles.museum3}"
                        src="/museum/museum3.png"
                        alt="museum"
                        width={1200}
                        height={502}
                    />
                </div>
            </div>
            <div className={styles.container3}>
                <Image
                    src="/museum/container3.png"
                    alt="image"
                    width={1200}
                    height={700}
                />
            </div>
        </div>
    );
}
