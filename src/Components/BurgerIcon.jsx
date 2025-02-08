import { motion } from 'motion/react'
import styled from 'styled-components'

const BurgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  
  @media (max-width: 1024px) {
    position: absolute;
    left: var(--space-s);
    display: flex;
  }
`

const BurgerLine = styled(motion.div)`
  width: 2rem;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 5px;
  position: absolute;
`

export const BurgerIcon = ({ open, onClick }) => {
  return (
    <BurgerButton onClick={onClick}>
      <BurgerLine
        animate={{
          rotate: open ? 45 : 0,
          y:      open ? 0 : -8,
        }}
      />
      <BurgerLine
        animate={{
          opacity: open ? 0 : 1,
          scale:   open ? 0 : 1,
        }}
      />
      <BurgerLine
        animate={{
          rotate: open ? -45 : 0,
          y:      open ? 0 : 8,
        }}
      />
    </BurgerButton>
  )
}
