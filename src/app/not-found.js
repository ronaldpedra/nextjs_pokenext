import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Não encontrado</h2>
            <p>Não foi possível encontrar a página procurada</p>
            <Link href={'/'}>Home</Link>
        </div>
    )
}