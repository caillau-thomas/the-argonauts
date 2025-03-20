import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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
  top: 29px;
  width: 2px;
  height: calc(100% - var(--space-l));
  background: linear-gradient(to bottom, var(--color-tertiary) 0%, var(--color-tertiary) calc(100% - 120px - 50px), var(--color-background) calc(100% - 5px));
  border-radius: 50%;
  transform-origin: top;
`

const TimelinePoint = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-background);
  border: 2px solid var(--color-tertiary);
`

const Section = styled(motion.div)`
  margin-left: 50px;
  height: 100%;
`

const SectionTitle = styled(motion.h3)`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  letter-spacing: 0.5px;
  margin: 0;
`

const SectionContent = styled(motion.div)`
  background-color: #4a5061;
  border-radius: 4px;
  padding: var(--space-m);
  min-height: calc(120px - 2 * var(--space-m));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const IncidentResponseTimeline = ({ onHoverSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' })

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
    return () => setIsVisible(false)
  }, [isInView])

  const sections = [
    { id: 1, content: 'Protecteurs de l’ombre, nous escortons, secourons et défendons. Quel que soit le danger, nous veillons sur les nôtres et sur les citoyens du Verse.', title: 'SECTION DE REPONSE A INCIDENTS' },
    { id: 2, content: 'Forgeant notre autonomie, nous extrayons, transportons et construisons. De l’exploitation des ressources à la logistique de haute précision, nous bâtissons l’avenir des Argonauts.', title: 'SECTION INDUSTRIEL & LOGISTIQUE' },
    { id: 3, content: 'Soutien vital des Argonauts, nous réparons, soignons et sécurisons. De la maintenance de notre flotte au secours des blessés, nous assurons la continuité des opérations.', title: 'SECTION D\'APPUIE' },
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
      fontWeight:    '300',
      color:         'var(--color-primary)',
      fontSize:      'var(--font-size-large)',
      letterSpacing: 'var(--space-3xs)',
      textShadow:    'var(--shadow-text)',
      margin:        0,
      opacity:       1,
      x:             0,
      transition:    {
        delay:    0.5 + i * 0.2,
        duration: 0.5,
        ease:     'easeOut',
      },
    }),
  }

  const contentVariants = {
    hidden:  { opacity: 0, y: 20 },
    visible: i => ({
      fontWeight:    '200',
      color:         'var(--color-primary)',
      fontSize:      'var(--font-size-2m)',
      letterSpacing: 'var(--space-3xs)',
      opacity:       1,
      y:             0,
      transition:    {
        delay:    0.7 + i * 0.2,
        duration: 0.4,
        ease:     'easeOut',
      },
    }),
  }

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
              style={{ top: `${index * (120 + 30 + 25) - 5}px` }}
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

