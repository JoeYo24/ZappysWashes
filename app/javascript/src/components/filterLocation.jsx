import React, { useState } from 'react'
import './filterLocation.scss'

const FilterLocation = ({ locations, selectedType }) => {
  const [scrollX, setScrollX] = useState(0);
  const filteredLocations = selectedType ? locations.filter(location =>  location.type === selectedType) : locations;

  {/*const handleScroll = (direction) => {
    const container = document.getElementById('scroll-container');
    const scrollWidth = container.scrollWidth;
    const scrollAmount = 200; 

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
      setScrollX(Math.max(scrollX - scrollAmount, 0));
    } else if (direction === 'right') {
      container.scrollRight += scrollAmount;
      setScrollX(Math.min(scrollX + scrollAmount, scrollWidth - container.clientWidth));
    }
  } */}
  return (
    <div className="d-flex scroll-container" id='scroll-container'>
      {/* <button className='scroll-button left' onClick={() => handleScroll('left')}> &#10094;</button> */}
      {filteredLocations.map((location, index) => (
        <div className='card rounded location' key={index}>
          <img src={location.image} alt={location.name} />
          <h4>{location.name}</h4>
          <p>{location.address}</p>
        </div>
      ))}
      {/*<button className='scroll-button right' onClick={() => handleScroll('right')}>&#10095;</button>*/}
    </div>
  )
}

export default FilterLocation
