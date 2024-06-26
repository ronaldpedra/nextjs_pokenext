import Image from "next/image";
import styles from "../styles/core/Home.module.css";

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
    <div>
      <div>
        <h1>PokeNext</h1>
        <Image src={"/images/pokeball.png"} width={50} height={50} />
      </div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
