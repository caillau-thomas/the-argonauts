import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import styled from 'styled-components'

import { NavLink } from './HeaderStyledComponents.jsx'

const Layout = styled.div`
  .content {
    background-color: var(--color-secondary);
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    > .link {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s;
    }
  }
`

const itemVariants = {
  open: {
    y:          0,
    opacity:    1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y:          50,
    opacity:    0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}


export const AnimatedMenu = ({ open, onClose }) => {
  const Item = ({ href, children }) => {
    return (
      <motion.a
        className="link"
        href={href}
        onClick={onClose}
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }
  
  return (
    <Layout>
      <motion.div
        animate={open ? 'open' : 'closed'}
      >
        <motion.div 
          className="content"
          variants={{
            open: {
              opacity:    1,scale:      1,
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            },
            closed: {
              opacity:    0, scale:      0,
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          <Item className="link" href="#">L'ORGANISATION</Item>
          <Item className="link" href="#Sections">NOS SECTIONS</Item>
          <Item className="link" href="#">NOS SERVICES</Item>
        </motion.div>
      </motion.div>
    </Layout>
  )
}
