import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { isMediaQuery } from '../utils/isMediaQuery.js'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
`

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  width: 100%;
`

const VerticalLine = styled(motion.div)`
  position: absolute;
  left: 16px;
  top: 35px;
  width: 2px;
  height: calc(100% - var(--space-l));
  background: linear-gradient(to bottom, var(--color-tertiary) 0%, var(--color-tertiary) calc(100% - 120px - 50px), var(--color-background) calc(100% - 5px));
  border-radius: 0 0 50% 50%;
  transform-origin: top;
  
  @media (max-width: 1080px) { left: 14px; top: 31px; }
`

const TimelinePoint = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-background);
  border: 2px solid var(--color-tertiary);
  
  @media (max-width: 1080px) {
    width: 26px;
    height: 26px;
  }
`

const Section = styled(motion.div)`
  margin-left: 50px;
  height: 100%;

  @media (max-width: 1080px) { margin-left: 44px; }
`

const SectionTitle = styled(motion.h3)`
  color: var(--color-primary);
  font-size: var(--font-size-large);
  font-weight: 400;
  padding-bottom: 0.5rem;
  text-shadow: var(--shadow-text);
  margin: 0;
  text-align: left;
  
  @media (max-width: 1080px) {
    font-size: var(--font-size-2m);
  }
`

const SectionContent = styled(motion.div)`
  background-color: #4a5061;
  border-radius: 4px;
  padding: var(--space-s);
  height: calc(150px - 2 * var(--space-s));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: 300;
  color: var(--color-primary);
  font-size: var(--font-size-large);
  display: flex;
  align-items: center;
  
  @media (max-width: 1080px) {
    height: calc(180px - 2 * var(--space-s));
    text-align: left;
    font-size: var(--font-size-2m);
  }
`

export const IncidentResponseTimeline = ({ onHoverSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' })
  const isMobile = isMediaQuery('(max-width: 1080px)')

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
    return () => setIsVisible(false)
  }, [isInView])

  const sections = [
    { id: 1, content: 'Spécialisées dans la sécurité et le sauvetage, regroupe les unités de combat et les équipes médicales', title: 'REPONSE A INCIDENTS' },
    { id: 2, content: 'Regroupe l’ensemble des métiers industriels et civils nécessaires au bon fonctionnement de l’organisation', title: 'SOUTIEN ET LOGISTIQUE' },
  ]

  const lineVariants = {
    hidden:  { scaleY: 0 },
    visible: {
      scaleY:     1,
      transition: {
        duration: 0.8,
        ease:     'easeInOut',
      },
    },
  }

  const pointVariants = {
    hidden:  { scale: 0, opacity: 0 },
    visible: i => ({
      scale:      1,
      opacity:    1,
      transition: {
        delay:     0.3 + i * 0.2,
        duration:  0.5,
        type:      'easeOut',
        stiffness: 200,
      },
    }),
  }

  const titleVariants = {
    hidden:  { opacity: 0, x: -20 },
    visible: i => ({
      opacity:    1,
      x:          0,
      transition: {
        delay:    0.5 + i * 0.2,
        duration: 0.5,
        ease:     'easeOut',
      },
    }),
  }

  const contentVariants = {
    hidden:  { opacity: 0, y: 20 },
    visible: i => ({
      opacity:    1,
      y:          0,
      transition: {
        delay:    0.7 + i * 0.2,
        duration: 0.4,
        ease:     'easeOut',
      },
    }),
  }

  const sizes = {
    main:   { distance: 140, title: 55, gap: 24, threshold: 7 },
    mobile: { distance: 180, title: 39, gap: 24, threshold: 1 },
  }
  const pointSpacing = Object.values(isMobile ? sizes.mobile : sizes.main).slice(0,3).reduce((acc, size) => acc + size, 0)

  return (
    <Container ref={ref}>
      <TimelineContainer>
        <VerticalLine initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={lineVariants} />
        {sections.map((section, index) => (
          <Section key={section.id} onMouseEnter={() => onHoverSection(index)}>
            <TimelinePoint
              custom={index}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={pointVariants}
              style={{ top: `${index * pointSpacing + sizes[isMobile ? 'mobile' : 'main'].threshold}px` }}
            />

            <SectionTitle
              custom={index}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={titleVariants}
            >
              {section.title}
            </SectionTitle>

            <SectionContent
              custom={index}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={contentVariants}
            >
              {section.content}
            </SectionContent>
          </Section>
        ))}
      </TimelineContainer>
    </Container>
  )
}

