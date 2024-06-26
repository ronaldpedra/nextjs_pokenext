import Image from "next/image"
import styles from "../../styles/pages/About.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <h3>Sobre o Projeto Pokémon</h3>
            <p>O mundo dos Pokémon é fascinante e cheio de aventuras. Este projeto é dedicado a explorar esse universo incrível, desde as origens das criaturas até as batalhas épicas. Aqui, você encontrará informações sobre os diferentes tipos de Pokémon, suas habilidades, habitats e muito mais.</p>
            <p>Nossa missão é criar um espaço onde fãs de Pokémon de todas as idades possam se conectar e compartilhar sua paixão. Acreditamos que a comunidade Pokémon é especial e queremos celebrá-la.</p>
            <p>Este projeto ainda está em desenvolvimento, mas estamos trabalhando duro para adicionar novos conteúdos regularmente. Esperamos que você goste de explorar o mundo dos Pokémon conosco!</p>
            <h3>O que você pode encontrar aqui:</h3>
            <ul>
                <li>
                    Informações detalhadas sobre Pokémon, incluindo tipos, habilidades, estatísticas e muito mais.
                </li>
                <li>
                    Guias e tutoriais para ajudá-lo a melhorar suas habilidades de treinamento e batalha.
                </li>
                <li>
                    Notícias e atualizações sobre o mundo Pokémon, incluindo novos jogos, lançamentos e eventos.
                </li>
                <li>
                    Uma comunidade vibrante de fãs de Pokémon para que você possa se conectar e compartilhar sua paixão.
                </li>
            </ul>
            <h3>Junte-se a nós nesta aventura épica!</h3>


            
            <Image src={'/images/charizard.png'} width={300} height={300} alt="Charizard" />
        </div>
    )
}