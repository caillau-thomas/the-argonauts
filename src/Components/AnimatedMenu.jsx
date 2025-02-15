import { motion } from 'motion/react'
import styled from 'styled-components'

import { Button } from '../Pages/Home/Home.jsx'

const StyledMenu = styled(motion.nav)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  @media (max-width: 1080px) {
    display: flex;
  }
`

const MenuBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--color-secondary);
  z-index: -1;
`

const MenuLink = styled(motion.a)`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: var(--color-tertiary);
  }
`

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const linkVariants = {
  open: {
    y:          0,
    opacity:    1,
    visibility: 'visible',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y:          -50,
    opacity:    0,
    visibility: 'hidden',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const backgroundVariants = {
  open: {
    clipPath:   'inset(0% 0% 0% 0%)',
    transition: {
      type:      'spring',
      stiffness: 250,
      damping:   40,
      duration:  0.3,
    },
  },
  closed: {
    clipPath:   'inset(0% 0% 100% 0%)',
    transition: {
      type:      'spring',
      stiffness: 400,
      damping:   40,
      duration:  0.3,
    },
  },
}

export const AnimatedMenu = ({ open, onClose }) => {
  return (
    <StyledMenu initial={false} animate={open ? 'open' : 'closed'} variants={menuVariants}>
      <MenuBackground variants={backgroundVariants} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
        <MenuLink href="#" variants={linkVariants} onClick={onClose}>
          L'ORGANISATION
        </MenuLink>
        <MenuLink href="#Sections" variants={linkVariants} onClick={onClose}>
          NOS SECTIONS
        </MenuLink>
        <MenuLink href="#" variants={linkVariants} onClick={onClose}>
          NOS SERVICES
        </MenuLink>
        <MenuLink variants={linkVariants} >
          <Button>NOUS REJOINDRE</Button>
        </MenuLink>
      </div>
    </StyledMenu>
  )
}
