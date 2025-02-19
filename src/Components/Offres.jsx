import React from 'react'
import styled from 'styled-components'

import enroll1 from '../assets/Backgrounds/enroll1.jpg'
import enroll2 from '../assets/Backgrounds/enroll2.jpg'
import enroll3 from '../assets/Backgrounds/enroll3.jpg'
import enroll4 from '../assets/Backgrounds/enroll4.jpg'
import enroll5 from '../assets/Backgrounds/enroll5.jpg'
import enroll6 from '../assets/Backgrounds/enroll6.jpg'
import enroll7 from '../assets/Backgrounds/enroll7.jpg'
import enroll8 from '../assets/Backgrounds/enroll8.jpg'
import {
  PrimaryCardContent,
} from '../Components/CardStyledComponents'

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: var(--space-2xl);
 
@media (max-width: 1080px) {
  display: none;
}
               
               
            
`

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 50vh;
  margin: 0 auto;
  gap: var(--space-s);
`

const Item = styled.div`
  flex: 0 0 200px;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 8;
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;

  &:nth-of-type(1) {
    background-image: url(${enroll1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(2) {
    background-image: url(${enroll2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(3) {
    background-image: url(${enroll3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(4) {
    background-image: url(${enroll4});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .content {
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-end;

    transform: translateY(100%);
    transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
    visibility: hidden;

    span {
      display: block;
      margin-top: 5px;
      font-size: 1.2rem;
    }
  }

  &:hover {
    flex: 0 0 300px;
    transform: translateY(-30px);
  }

  &:hover .content {
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
  }
`

const ItemSecondary = styled.div`
  flex: 0 0 200px;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 8;
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;

  &:nth-of-type(1) {
    background-image: url(${enroll5});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(2) {
    background-image: url(${enroll6});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(3) {
    background-image: url(${enroll7});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(4) {
    background-image: url(${enroll8});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .content {
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-end;

    transform: translateY(100%);
    transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
    visibility: hidden;

    span {
      display: block;
      margin-top: 5px;
      font-size: 1.2rem;
    }
  }

  &:hover {
    flex: 0 0 380px;
    transform: translateY(-30px);
  }

  &:hover .content {
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
  }
`

const Offres = () => {
  return (
    <Wrapper>
      <PrimaryCardContent style={{ margin: '0 auto', paddingBottom: 'var(--space-s)' }}>NOS OPPORTUNITÉES</PrimaryCardContent>
      <Container>
        <Item>
          <div className="content">
            <h2>INFANTERIE</h2>
            <span>
              LA SECTION DE REPONSE A INCIDENT RECHERCHES DES PILOTES, DES
              EQUIPAGES ET DES OPERATEURS AUX SOL, POUR MENER A BIEN SES
              MISSIONS DE SECURITÉS.
            </span>
            <span>
              MISSIONS:ESCORTE, COUVERTURE AERIENNE, PROTECTION AU SOL,
              RECONNAISSANCE ETC...{' '}
            </span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>PILOTES ET EQUIPAGE</h2>
            <span>NOUS RECHERCHON DES PILOTES ET DES MEMBRES D'EQUIPAGE.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, SAUVETAGE</span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>PERSONNELS INDUSTRIELLE</h2>
            <span>
              NOUS RECHERCHONS DU PERSONNEL POUR L'EXTRACTION ET LE TRAITEMENT
              DES RESSOURCES.
            </span>
            <span>MISSIONS: </span>
            <span>MINAGE, RECYCLAGE, RAFINNAGE</span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>PERSONNEL LOGISTIQUE</h2>
            <span>NOUS RECHERCHONS DU PERSONNEL POUR LE TRANSPORT DE FRET</span>
            <span>MISSIONS: </span>
            <span>FRET</span>
          </div>
        </Item>
      </Container>
      <Container>
        <ItemSecondary>
          <div className="content">
            <h2>CONSTRUCTION</h2>
            <span>
              NOUS RECHERCHONS DU PERSONNEL AFIN DE CONSTRUIRE NOS
              INFRASTRUCTURES.
            </span>
            <span>MISSIONS: </span>
            <span>
              CONSTRUTION DE BASE, D'AVANT POSTE, DE SITE D'EXTRACTION
            </span>
          </div>
        </ItemSecondary>
        <ItemSecondary>
          <div className="content">
            <h2>PERSONNEL MEDICALE</h2>
            <span>
              NOUS RECHERCHONS DU PERSONNEL MEDICALE POUR RENFORCER NOS EQUIPES
            </span>
            <span>MISSIONS: SAUVETAGE, ASSISTANCE MEDICALE.</span>
          </div>
        </ItemSecondary>
        <ItemSecondary>
          <div className="content">
            <h2>INGÉNIEURIE</h2>
            <span>
              NOUS RECHERCHONS DDES INGÉNIEURS POUR RENFORCER NOS EQUIPES
            </span>
            <span>MISSIONS: </span>
            <span>MAINTENACE ET REPARATION DE LA FLOTTE</span>
          </div>
        </ItemSecondary>
        <ItemSecondary>
          <div className="content">
            <h2>CANDIATER SPONTANÉMENT !</h2>
            <span>
              VOUS SOUHAITEZ APPORTER VOTRE EMPREINTE À NOS ACTIVITÉ, ALORS
              POSTULEZ SPONTANEMENT AFIN D'APPORTER VOTRE EXPERTISE !
            </span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </ItemSecondary>
      </Container>
    </Wrapper>
  )
}

export default Offres
