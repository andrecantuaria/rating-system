import { useState } from 'react';
import Star from './Star';

function StarRating() {

  const [selectedStars, setSelectedStars] = useState(0);

  const starLabels = [
    "Very bad!",
    "Bad!",
    "Good!",
    "Very good!",
    "Excellent!"
  ];

  const starCheck = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <section>
      <div className="star-container">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            selected={index < selectedStars}
            onClick={() => starCheck(index)}
          />
        ))}
      </div>
      <div className="star-label-container">
        <p className="star-label">{selectedStars === 0 ? "No ratings" : starLabels[selectedStars - 1]}</p>
      </div>
    </section>
    
  )
}

export default StarRating