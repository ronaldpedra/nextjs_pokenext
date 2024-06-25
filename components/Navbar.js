import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>Sobre</Link>
                </li>
                <li>
                    <Link href={'/products'}>Produtos</Link>
                </li>
                <ul>
                    <li>
                        <Link href={'/products/pants/bluepants'}>Calça Azul</Link>
                    </li>
                    <li>
                        <Link href={'/products/pants/redpants'}>Calça Vermelha</Link>

                    </li>
                </ul>
            </ul>
        </>
    )
}