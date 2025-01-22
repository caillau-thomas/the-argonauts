import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around; 
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  gap: var(--space-s);
`

export const HeaderGD = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-s);
`
export const HeaderCentre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--space-s);
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  background-color: var(--color-secondary);
  color: var(--color-text-secondary);
  padding: var(--space-s);
`

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--space-s);
`

export const HomeIcon = styled.div`
  background-image: url('https://image.noelshack.com/fichiers/2025/04/3/1737561974-agn-logo.png'); 
  background-size: cover;        
  background-position: center;
  width: 100px;                   
  height: 100px; 
`


export const Logo = styled.div`
  background-image: url('https://image.noelshack.com/fichiers/2025/04/3/1737561974-madebycommunity.png'); 
  background-size: cover;        
  background-position: center;
  width: 60px;                   
  height: 60px; 
`

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--color-secondary);
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > ul {
    display: block;
  }

  ul {
    display: none;
    position: absolute;
    background-color: var(--color-primary);
    min-width: 18em;
    box-shadow: var(--shadow-small);
    z-index: 1;
    list-style: none;
    padding: var(--space-3xs);
    border-radius: var(--radius-medium);

    li {
      padding: 8px 16px;
      cursor: pointer;

      &:hover {
        background-color: var(--color-secondary);
        color: var(--color-primary);
      }
    }
  }
`

export const Button = styled.button`
  padding: var(--space-s);
  background-color: var(--color-dark);
  color: var(--color-light);
  border: none;
  border-radius: var(--radius-medium);
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: var(--color-secondary);
  color: var(--color-primary);
`
