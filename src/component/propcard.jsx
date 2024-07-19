import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import HeartRating from './heartrating.jsx';  // Import the HeartRating component

const PropCard = ({ properties }) => {
  return (
    <>
      {properties.map((property) => (
        <div className="prop_card" key={property.prop_id}>
          <Link to={`/buy/${property.prop_id}`} className="prop_link">
            <div className="card_image">
              <img src={property.prop_image_big} alt={property.prop_name} />
            </div>
            </Link>
           
         
          <div className="card_content">
          <Link to={`/buy/${property.prop_id}`} className="prop_link">
          <h3>{property.prop_name}</h3>
          </Link> <div className="heart_icon">
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
