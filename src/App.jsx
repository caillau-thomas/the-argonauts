import { Outlet } from 'react-router'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;

  & > nav {
    display: flex;
    align-items: center;
    background-color: #0b56e7;
    color: white;
    padding: 1rem;
  }
`

const App = () => {
  return (
    <Layout>
      <nav>Header trop bien</nav>
      <span>toto</span>
      <Outlet />
    </Layout>
  )
}

export default App
