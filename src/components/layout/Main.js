import styles from "../../styles/layout/Main.module.css"

export default function Main({ children }) {
    return (
        <main className={styles.main_container}>
            {children}
        </main>
    )
}