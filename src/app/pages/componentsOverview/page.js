import Image from "next/image";
import styles from "./page.module.css";
import DescriptionsCards from "@/app/components/cards/descriptionsCards/descriptionsCards";

export default function ComponenstOverview() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.pannels}>
          <div className={styles.heading}>
            CARDS COMPONENTS
          </div>
          <div className={styles.example}>
            <DescriptionsCards
              title="Mon Titre"
              description="Voici la description de la carte avec des bordures inclinées."
              style={{
                width: '400px',
                height: '200px',
                padding: '30px',
                backgroundColor: 'grey',
              }} />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        TEST
      </footer>
    </div>
  );
}
