import React, { useState } from 'react'
import styled from 'styled-components'

import bc1 from '../../public/bc1.jpg'
import bc2 from '../../public/bc2.jpg'
import bc3 from '../../public/bc3.jpg'
import bc4 from '../../public/bc4.jpg'
import bc5 from '../../public/bc5.png'
import bc6 from '../../public/bc6.jpg'
import { H2, H6 } from './GlobalStyle'

/////////////////////////////////////////////////
// STYLED COMPONENTS
/////////////////////////////////////////////////

export const GalleryContainer = styled.div`
  margin: 0 var(--space-5xl);
  padding: 0 var(--space-m) var(--space-2xl) var(--space-m);
  background-color: var(--color-background);
  text-align: center;

  @media (max-width: 1080px) {
    margin: 0;
    padding: 0 var(--space-s) var(--space-xl) var(--space-s);
  }
`

export const GalleryCard = styled.div`
  padding-bottom: 20px;
`

export const CarouselWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`

export const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${props => `translateX(-${props.currentIndex * 100}%)`};
`

export const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`

export const SlideImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;

  @media (max-width: 1080px) {
    height: 300px;
  }
`

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background-color 0.2s;
  left: ${props => (props.direction === 'prev' ? '15px' : 'auto')};
  right: ${props => (props.direction === 'next' ? '15px' : 'auto')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 1080px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`

export const Dot = styled.div`
  width: ${props => (props.isActive ? '24px' : '10px')};
  height: 10px;
  border-radius: 5px;
  background-color: ${props =>
    props.isActive ? 'var(--color-tertiary)' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.3s ease;
`

const PhotoGallery = () => {
  const photos = [
    { src: bc1, alt: 'Photo 1' },
    { src: bc2, alt: 'Photo 2' },
    { src: bc3, alt: 'Photo 3' },
    { src: bc4, alt: 'Photo 4' },
    { src: bc5, alt: 'Photo 5' },
    { src: bc6, alt: 'Photo 6' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = index => {
    setCurrentIndex(index)
  }

  const handleTouchStart = e => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) nextSlide()
    if (distance < -50) prevSlide()

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <GalleryContainer>
      <GalleryCard>
        <H2>
          AU DELA DU{' '}
          <span style={{ color: 'var(--color-tertiary)' }}>JEU</span>
        </H2>
        <H6 style={{ textAlign: 'justify' }}>
          <br />
          Au-delà du jeu, nous participons activement à la vie de la communauté lors d’événements IRL tels que les Bar Citizens.
          À Montpellier, où nous avons l'habitude d'être présents, nous avons franchi un cap lors de notre dernière participation 
          en juin 2026: nous n'avons pas seulement été spectateurs, mais de véritables acteurs en proposant une exposition et 
          un giveaway de modèles 3D. Une belle première expérience que nous espérons bien renouveler !<br /><br />
        </H6>
      </GalleryCard>

      <CarouselWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <NavButton direction="prev" onClick={prevSlide} aria-label="Image précédente">
          &#10094;
        </NavButton>

        <SliderTrack currentIndex={currentIndex}>
          {photos.map((photo, index) => (
            <Slide key={index}>
              <SlideImage src={photo.src} alt={photo.alt} />
            </Slide>
          ))}
        </SliderTrack>

        <NavButton direction="next" onClick={nextSlide} aria-label="Image suivante">
          &#10095;
        </NavButton>
      </CarouselWrapper>

      <DotsContainer>
        {photos.map((_, index) => (
          <Dot
            key={index}
            isActive={currentIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </GalleryContainer>
  )
}

export default PhotoGallery