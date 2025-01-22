import { Outlet } from 'react-router'
import styled from 'styled-components'

import {
  Button,
  Copyright,
  Dropdown,
  Footer,
  Header,
  HeaderCentre,
  HeaderGD,
  HomeIcon,
  Logo,
  NavLink,
} from './Components/Header/HeaderStyledComponents'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
`

const App = () => {
  return (
    <Layout>
      <Header>
        <HeaderGD>
          <HomeIcon image="agn-logo.png" />
        </HeaderGD>
        <HeaderCentre>
          <NavLink href="#">Qui sommes nous</NavLink>
          <Dropdown>
            <span>Nos Sections</span>
            <ul>
              <li>Section de Réponse à Incident</li>
              <li>Section Industrielle et Logistique</li>
              <li>Section de Soustien Opérationnel</li>
            </ul>
          </Dropdown>
          <NavLink href="#">Nos services</NavLink>
        </HeaderCentre>
        <HeaderGD>
          <Button>NOUS REJOINDRE</Button>
        </HeaderGD>
      </Header>
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
