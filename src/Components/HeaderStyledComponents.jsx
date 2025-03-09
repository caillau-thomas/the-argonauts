import styled from 'styled-components'

import Home from '/assets/Icons/homeIcon.png'


/////////////////////////////
////// Grands écrans////////
///////////////////////////

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around; 
  position: fixed;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.210);
  width: 100%;
  color: var(--color-primary);
  background-color: var(--color-secondary);
  font-size: var(--font-size-2m);
  font-weight: 200;
  z-index: 10;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`

export const HeaderGD = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-s);
  .button {
    @media (max-width: 1080px) {
      display: none;
    }
  }
`
export const HeaderCentre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--space-s);

  @media (max-width: 1080px) {
    display: none;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  background-color: black;
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
  background-image: url(${Home}); 
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;                   
  height: 100px; 
  
  @media (max-width: 1080px) {
    width: 100px;                   
    height: 100px;
  }
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
`

export const Button = styled.button`
  padding: var(--space-2xs);
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 2px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;
  color: var(--color-secondary);
  font-size: var(--font-size-1m);
  font-family: var(--font-primary);
`
////////////////////////////
////Tablettes-mobiles//////
//////////////////////////
