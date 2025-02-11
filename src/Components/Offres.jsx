import React from 'react'
import styled from 'styled-components'

import enroll1 from '../assets/Backgrounds/enroll1.jpg'
import enroll2 from '../assets/Backgrounds/enroll2.jpg'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: var(--space-s);
`

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 40vh;
  gap: var(--space-s);
  @media (max-width: 1024px) {
    
  }
`

const Item = styled.div`
  flex: 0 0 180px;
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
    background-image: url(${enroll1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(4) {
    background-image: url(${enroll2});
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
    flex: 0 0 400px;
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
      <Container>
        <Item>
          <div className="content">
            <h2>INFANTERIE</h2>
            <span>
            LA SECTION DE REPONSE A INCIDENT RECHERCHES DES PILOTES, DES
            EQUIPAGES ET DES OPERATEURS AUX SOL, POUR MENER A BIEN SES MISSIONS
            DE SECURITÉS.
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
            <span>NOUS RECHERCHON DES PILOTES DE CHASSE.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>RECHERCHE D'EQUIPAGE</h2>
            <span>NOUS RECHERCHON DES MEMBRES D'EQUIPAGE POUR NOS APPAR.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>RECHERCHE DE PILOTES</h2>
            <span>NOUS RECHERCHON DES PILOTES DE CHASSE.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </Item>
      </Container>
      <Container>
        <Item>
          <div className="content">
            <h2>RECHERCHE DE PILOTES</h2>
            <span>NOUS RECHERCHON DES PILOTES DE CHASSE.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>MEMBRE DE L'EQUIPE DE SECURITÉ</h2>
            <span>
            LA SECTION DE REPONSE A INCIDENT RECHERCHES DES PILOTES, DES
            EQUIPAGES ET DES OPERATEURS AUX SOL, POUR MENER A BIEN SES MISSIONS
            DE SECURITÉS.
            </span>
            <span>
            MISSIONS:ESCORTE, COUVERTURE AERIENNE, PROTECTION AU SOL,
            RECONNAISSANCE ETC...{' '}
            </span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>RECHERCHE D'EQUIPAGE</h2>
            <span>NOUS RECHERCHON DES MEMBRES D'EQUIPAGE POUR NOS APPAR.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </Item>
        <Item>
          <div className="content">
            <h2>RECHERCHE DE PILOTES</h2>
            <span>NOUS RECHERCHON DES PILOTES DE CHASSE.</span>
            <span>MISSIONS: </span>
            <span>ESCORTE, COUVERTURE AERIENNE, CHASSE À LA PRIMES</span>
          </div>
        </Item>
      </Container>
    </Wrapper>
  )
}

export default Offres
