import { useState } from 'react'
import styled from 'styled-components'

import incident from '../assets/Sections/Incidents.png'
import logistique from '../assets/Sections/logistique.png'
import { isMediaQuery } from '../utils/isMediaQuery.js'
import { H6 } from './GlobalStyle.jsx'
import { IncidentResponseTimeline } from './IncidentResponseTimeline.jsx'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-template-rows: repeat(2, max-content);
  padding: var(--space-s);
  
  & > .title {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  & > .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > img {
      width: 75%;
      height: auto;
    }
  }
  
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

const images = [incident, logistique, incident]

export const SectionsTimeline = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [fade, setFade] = useState(false)
  const isMobile = isMediaQuery('(max-width: 1080px)')

  return (
    <Layout>
      <div className="description">
        {!isMobile && <img src={images[currentImage]} style={{ opacity: fade ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }} />}
      </div>
      <IncidentResponseTimeline onHoverSection={index => {
        setFade(true)
        setTimeout(() => {
          setCurrentImage(index)
          setFade(false)
        }, 200)
      }} />
      <H6 className="title">DES MISSIONS VARIEES POUR UN ENGAGEMENT COMMUNS</H6>
    </Layout>
  )
}
