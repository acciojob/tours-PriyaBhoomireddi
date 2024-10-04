import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <article>
      <img src={tour.image} alt={tour.name} />
      <h2>{tour.name}</h2>
      <p>
        {isExpanded ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'See less' : 'Show more'}
        </button>
      </p>
      <h3>${tour.price}</h3>
      <button onClick={() => removeTour(tour.id)}>Delete Tour</button>
    </article>
  );
};

export default Tour;
