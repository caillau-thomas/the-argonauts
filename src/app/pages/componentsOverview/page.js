import styles from "./page.module.css";
import LongCards from "@/app/components/cards/descriptionsCards/descriptionsCards";
import ShortCardsGroup from "@/app/components/cards/shortCards/shortCardsGroup";
import ButtonEnliste from "@/app/components/buttons/buttonsEnlist";
export default function ComponenstOverview() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 style={{width: '100%'}}>Cards</h2>
        <div className={styles.pannels}>
          <div className={styles.heading}>
            <h3>Descriptions Cards</h3><br />
            Le components est semi transparant, mais ca se voit pas sur du blanc
          </div>
          <div className={styles.example}>
            <LongCards
              title="description card"
              description="description card"
              style={{
                width: '25vw',
                height: '10vh',
                padding: '30px',
              }} />
          </div>
        </div>
        <div className={styles.pannels}>
          <div className={styles.heading}>
            <h3>Ships Cards Group</h3><br />
            Le components est semi transparant, mais ca se voit pas sur du blanc, on verra si ca reste ou pas
          </div>
          <div className={styles.example}>
            <ShortCardsGroup
              title="Ship categorie"
              description="Ship categorie"
              numCards={8}
              cardStyle={{
                width: '10vw',
                height: '10vh',
                padding: '30px',
              }}
            />
          </div>
        </div>
        <div className={styles.pannels}>
          <div className={styles.heading}>
            <h3>members Cards Group</h3><br />
            Le components est semi transparant, mais ca se voit pas sur du blanc, on verra si ca reste ou pas
          </div>
          <div className={styles.example}>
            <ShortCardsGroup
              title="Members"
              description="Members"
              numCards={8}
              cardStyle={{
                width: '10vw',
                height: '10vh',
                padding: '30px',
              }}
            />
          </div>
        </div>
        <h2 style={{width: '100%'}}>Buttons & Logo</h2>
        <div className={styles.pannels} style={{backgroundColor: 'grey'}}>
          <div className={styles.heading}>
            <h3>Buttons</h3><br />
            Enlist
          </div>
          <div className={styles.example}>
            <ButtonEnliste />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        TEST
      </footer>
    </div>
  );
}
