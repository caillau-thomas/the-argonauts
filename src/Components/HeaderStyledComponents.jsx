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
  pointer-events: auto !important;
  position: relative;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  background-color: black;
  color: var(--color-text-secondary);
  padding: 40px 20px 20px;
  margin-top: auto;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px; /* Augmenté pour mobile */
    align-items: center;
    width: 100%;
  }

  .footer-links {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center; /* Centré par défaut */
    width: 100%;
  }

  .footer-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    padding: 12px 16px; /* Plus de padding pour mobile */
    transition: color 0.3s ease, border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
    display: inline-block; /* Important pour le clic */
    min-height: 10px; /* Hauteur minimale pour mobile */
    line-height: 1.4;
  }

  .footer-links a:hover,
  .footer-links a:active,
  .footer-links a:focus {
    color: #6f4caf;
    border-bottom: 2px solid #4CAF50;
  }

  .footer-prevention {
    font-size: 16px;
    line-height: 1.6;
    color: #cccccc;
    text-align: center;
    max-width: 600px;
  }

  .footer-credit {
    text-align: center;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #333;
    font-size: 16px;
    color: #888;
    width: 100%;
  }

  .footer-credit a {
    color: #ffffff !important;
  }

  @media (max-width: 768px) {
    padding: 30px 15px 20px;
    
    .footer-links {
      flex-direction: row;
      justify-content: center;
    }

    .footer-links a {
      font-size: 20px;
      padding: 14px 20px; 
      flex: 1;
      max-width: 80px;
      text-align: center;
    }
  }
`

export const HomeIcon = styled.div`
  background-image: url(${Home}); 
  background-size: 7rem;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;                   
  height: 100px; 
  
  @media (max-width: 1080px) {     
    height: 80px;
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
