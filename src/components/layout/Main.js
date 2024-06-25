import styles from "../../css/layout/Main.module.css"

export default function Main({ children }) {
    return (
        <div className={styles.main_container}>{children}</div>
    )
}