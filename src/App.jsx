import { useRef, useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'

import { AnimatedMenu } from './Components/AnimatedMenu.jsx'
import {
  BurgerButton,
  Button,
  Copyright,
  Footer,
  Header,
  HeaderCentre,
  HeaderGD,
  HomeIcon,
  Logo,
  NavLink,
} from './Components/HeaderStyledComponents'

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
        <BurgerButton onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </BurgerButton>
        <HeaderGD>
          <HomeIcon image="agn-logo.png" />
        </HeaderGD>
        {/* HeaderCentre visible sur grand écran */}
        <HeaderCentre>
          <NavLink href="#Organisation">L'ORGANISATION</NavLink>
          <NavLink href="#Sections">NOS SECTIONS</NavLink>
          <NavLink href="#">NOS SERVICES</NavLink>
        </HeaderCentre>
        <HeaderGD>
          <Button>NOUS REJOINDRE</Button>
        </HeaderGD>
      </Header>
      <AnimatedMenu open={menuOpen} onClose={toggleMenu} />
      <Outlet />
      <Footer>
        <Logo image="made-by-the-community-logo.jpg" />
        <Copyright>
          © 2024 Argonauts - Star Citizen®, Roberts Space Industries® et Cloud
          Imperium® sont des marques déposées de Cloud Imperium Rights LLC. Ce
          projet est un site de fans et n'est en aucun cas affilié à Cloud
          Imperium Games.
        </Copyright>
      </Footer>
    </Layout>
  )
}

export default App
