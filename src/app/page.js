import styles from "../styles/core/Home.module.css";

const getData = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const resp = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await resp.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default async function Home() {
  const resultado = await getData();

  console.log(resultado.props.pokemons);

  return (
    <>
      <h1>PokeNext</h1>
      {resultado.props.pokemons.map((pokemon) => (
        <p>{pokemon.name} - {pokemon.url}</p>
      ))}
    </>
  );
}
