import styles from "../styles/core/Home.module.css";

export default function Home() {

  const getData = async () => {

    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const resp = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await resp.json()
    
    return data
  }

  console.log(getData())
  
  return (
    <>
      <h1>PokeNext</h1>
    </>
  );
}
