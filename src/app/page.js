import Image from "next/image";
import styles from "../styles/pages/Home.module.css";

const getData = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const resp = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await resp.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return data.results;
};

export default async function Home() {
  
  const pokemons = await getData();

  console.log(pokemons);

  return (
    <>
      <div className={styles.title_container}>
        <Image src={"/images/pikachu.png"} width={100} height={100} alt="PokeNext Pikachu"/>
        <h1>Poke<span>Next</span></h1>
        <Image src={"/images/ash.png"} width={80} height={180} alt="PokeNext Ash" />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  );
}
