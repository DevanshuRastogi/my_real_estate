import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeartRating from './heartrating.jsx';
import { gsap } from "gsap";

const PropCard = ({ properties }) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, properties.length);

    gsap.set(cardsRef.current, { opacity: 0, y: 50 });
    
    gsap.to(cardsRef.current, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: {
        amount: 1,
        from: "random"
      },
      ease: "power3.out"
    });
  }, [properties]);

  return (
    <>
      {properties.map((property, index) => (
        <div 
          className="prop_card" 
          key={property.prop_id}
          ref={el => cardsRef.current[index] = el}
        >
          <Link to={`/buy/${property.prop_id}`} className="prop_link">
            <div className="card_image">
              <img src={property.prop_image_big} alt={property.prop_name} />
            </div>
          </Link>
          
          <div className="card_content">
            <Link to={`/buy/${property.prop_id}`} className="prop_link">
              <h3>{property.prop_name}</h3>
            </Link> 
            <div className="heart_icon">
              <HeartRating />
            </div>
            <div className="city_price">
              <div className="city">
                <p className="p_city">{property.property_address.city}</p>
              </div>
              <div className="price">
                <p className="p_price">&#8377;{property.Price} Lakhs</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropCard;