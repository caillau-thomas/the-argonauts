import styles from "./page.module.css";
import LongCards from "../../components/cards/longCards/longCards"
import ReversedLongCards from "@/app/components/cards/reversedLongCards/reversedLongCards";
import ButtonsEnlist from "@/app/components/buttons/buttonsEnlist";
import Heading from "@/app/components/heading/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.landing}>
        <Heading />
      </div>
      <main id="main" className={styles.main}>
        <div className={styles.about}>
          <div className={styles.aboutTxt}>
            <h1>BIENVENUE CHEZ LES ARGONAUTS</h1><br />
            <h3>Argonaut est une organisation dynamique fondée en 2014, spécialisée dans diverses activités qui allient la chasse à la prime, le sauvetage ainsi que les différents métiers de l&apos;industrie. Nous cherchons à être indépendants et autonomes dans l&apos;ensemble des branches dans lesquelles nous exerçons</h3>
          </div>
        </div>
        <div className={styles.section}>
          <ReversedLongCards
            title="BIENVENUE CHEZ LES ARGONAUTS"
            description="Argonaut est une organisation dynamique fondée en 2014, spécialisée dans diverses activités qui allient la chasse à la prime, le sauvetage ainsi que les différents métiers de l'industrie. Nous cherchons à être indépendants et autonomes dans l'ensemble des branches dans lesquelles nous exerçons"
            style={{
              width: '50vw',
              height: '20vh',
              padding: '30px',
            }} />
          <LongCards
            title="BIENVENUE CHEZ LES ARGONAUTS"
            description="Argonaut est une organisation dynamique fondée en 2014, spécialisée dans diverses activités qui allient la chasse à la prime, le sauvetage ainsi que les différents métiers de l'industrie. Nous cherchons à être indépendants et autonomes dans l'ensemble des branches dans lesquelles nous exerçons"
            style={{
              width: '50vw',
              height: '20vh',
              padding: '30px',
            }} />
        </div>
        <div className={styles.enlist}>
          <h1>VOUS VOULEZ EN<br />SAVOIR PLUS ?</h1>
          <ButtonsEnlist />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="/pages/componentsOverview"
          rel="noopener noreferrer"
        >
          Page des components
        </a>
      </footer>
    </div>
  );
}
