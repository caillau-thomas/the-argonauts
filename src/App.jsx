import { useRef, useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'

import { AnimatedMenu } from './Components/AnimatedMenu.jsx'
import { BurgerIcon } from './Components/BurgerIcon.jsx'
import {
  Button,
  Footer,
  Header,
  HeaderCentre,
  HeaderGD,
  HomeIcon,
  Logo,
  NavLink,
} from './Components/HeaderStyledComponents'
import { isMediaQuery } from './utils/isMediaQuery.js'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
`

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Layout>
      <Header ref={headerRef}>
        <BurgerIcon open={menuOpen} onClick={toggleMenu} />
        <HeaderGD>
          <HomeIcon image="agn-logo.png" />
        </HeaderGD>
        {/* HeaderCentre visible sur grand écran */}
        <HeaderCentre>
          <NavLink href="#Organisation">L'ORGANISATION</NavLink>
          <NavLink href="#Sections">NOS SECTIONS</NavLink>
          <NavLink href="#Irl">AU DELA DU JEU</NavLink>
        </HeaderCentre>
        <HeaderGD>
          <a href="#Enrol">
            <Button className="button">NOUS REJOINDRE</Button>
          </a>
        </HeaderGD>
      </Header>
      {isMediaQuery('(max-width: 1080px)') && <AnimatedMenu open={menuOpen} onClose={toggleMenu} />}
      <Outlet />
      <Footer>
        <Logo image="made-by-the-community-logo.jpg" />
        <div className="footer-content">
          <div className="footer-links">
            <a
              href="https://robertsspaceindustries.com/en/orgs/ONU"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color:          '#ffffff',
                textDecoration: 'none',
                borderBottom:   '1px solid transparent',
                transition:     'all 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.borderBottom = '1px solid #ffffff'}
              onMouseLeave={e => e.target.style.borderBottom = '1px solid transparent'}
            >
              Page RSI
            </a>
            <a
              href="https://discord.gg/TmKrUHjB65"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color:          '#ffffff',
                textDecoration: 'none',
                borderBottom:   '1px solid transparent',
                transition:     'all 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.borderBottom = '1px solid #ffffff'}
              onMouseLeave={e => e.target.style.borderBottom = '1px solid transparent'}
            >
              Discord
            </a>
          </div>

          <div className="footer-prevention">
            ©2026 Argonauts - Star Citizen®, Roberts Space Industries® et 
            Cloud Imperium® sont des marques déposées de Cloud Imperium Rights 
            LLC. Ce projet est un site de fans et n'est en aucun cas affilié à 
            Cloud Imperium Games.
          </div>

          <div className="footer-credit">
            Site créé par <strong>Thomas C.   </strong>{' '}
            <a
              href="https://caillau-thomas.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color:          '#ffffff',
                textDecoration: 'none',
                borderBottom:   '1px solid transparent',
                transition:     'all 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.borderBottom = '1px solid #ffffff'}
              onMouseLeave={e => e.target.style.borderBottom = '1px solid transparent'}
            >
              Portfolio
            </a>
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default App
