import Link from "next/link";
import styles from "../../css/layout/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/products'}>Produtos</Link></li>
                <li><Link href={'/todo'}>A fazer</Link></li>
                <li><Link href={'/about'}>Sobre nós</Link></li>
                <li><Link href={'/contact'}>Contato</Link></li>
            </ul>
        </nav>
    )
}