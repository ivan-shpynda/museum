import Wrapper from "@/components/wrapper/wrapper";
import styles from "./page.module.scss";
export default function Contacts() {
    return (
        <div className={styles.wrap}>
            <Wrapper>
                <h1>Контакти</h1>
                <p>м. Львів, вул. Максима Кривоноса 1, 79000</p>
                <p>Тел: 050 519 1371</p>
                <p>Email: museum.andrey@gmail.com</p>
            </Wrapper>
        </div>
    );
}
