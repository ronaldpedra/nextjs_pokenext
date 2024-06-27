import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/wraped/PokeCard.module.css"

export default function PokeCard({ pokemon }) {
    return (
        <div className={styles.pokecard}>
            <div className={styles.img_container}>
            <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width={120}
            height={120}
            alt={pokemon.name}
            />
            </div>
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}
