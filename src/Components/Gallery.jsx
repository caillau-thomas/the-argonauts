import React, { useState } from 'react'

import bc1 from '../../public/bc1.jpg'
import bc2 from '../../public/bc2.jpg'
import bc3 from '../../public/bc3.jpg'
import { H2, H6 } from './GlobalStyle'

const PhotoGallery = () => {
  const photos = [
    { src: bc1, alt: 'Photo 1' },
    { src: bc2, alt: 'Photo 2' },
    { src: bc3, alt: 'Photo 3' },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryStyle = {
    margin:          0,
    padding:         '0 var(--space-m) var(--space-2xl) var(--space-m)',
    backgroundColor: 'var(--color-background)',
    textAlign:       'center',
  }
  const gridStyle = {
    display:             'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap:                 '30px',
    minWidth:            'auto',
    margin:              '0 auto',
  }

  const itemStyle = isHovered => ({
    overflow:     'hidden',
    borderRadius: '8px',
    boxShadow:    '0 4px 8px rgba(0,0,0,0.1)',
    transition:   'transform 0.3s ease',
    transform:    isHovered ? 'scale(1.05)' : 'scale(1)',
  })

  const imgStyle = {
    width:     '100%',
    height:    '200px',
    objectFit: 'cover',
    display:   'block',
  }

  return (
    <div style={galleryStyle}>
      <div style={{ paddingBottom: '20px' }}>
        <H2>
        AU DELA DU{' '}
          <span style={{ color: 'var(--color-tertiary)' }}>JEU</span>
        </H2>
      </div>
      <div style={gridStyle}>
        {photos.map((photo, index) => (
          <div
            key={index}
            style={itemStyle(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={photo.src} alt={photo.alt} style={imgStyle} />
          </div>
        ))}
      </div>
      <H6>
        <br />Evénements IRL et Bar Citizens
      </H6>
    </div>
  )
}

export default PhotoGallery
