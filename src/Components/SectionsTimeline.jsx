import { useState } from 'react'
import styled from 'styled-components'

import incident from '/assets/Sections/Incidents.png'

// import logistique from '/assets/Sections/logistique.png'
import { isMediaQuery } from '../utils/isMediaQuery.js'
import { IncidentResponseTimeline } from './IncidentResponseTimeline.jsx'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-template-rows: repeat(2, max-content);
  width: 80%;
  padding: var(--space-s) var(--space-m);
  & > .title {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  & > .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    & > img {
      width: 100%;
      height: auto;
    }
  }
  
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    width: 100%;
    justify-content: center;
    padding: var(--space-s) var(--space-m) var(--space-s) var(--space-xs);
  }
`

const images = [incident, incident, incident]

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
        setFade(false)
        setTimeout(() => {
          setCurrentImage(index)
          setFade(false)
        }, 200)
      }} />
    </Layout>
  )
}
