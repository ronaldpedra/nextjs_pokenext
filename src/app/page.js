import Image from "next/image";
import styles from "../css/pages/Home.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.home_container}>
        <h1 className={styles.title}>Página Inicial</h1>
      </div>
      <Image src={'/images/city.jpg'} width={'400'} height={'500'} alt="Cidade à noite" />
    </>
  );
}
