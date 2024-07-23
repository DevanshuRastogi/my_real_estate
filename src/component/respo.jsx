import React from "react";
import { Link } from "react-router-dom";

import CallIco from "../assets/images/Phone.png";
import EmailIco from "../assets/images/Mail.png";

const RespoCard = ({ properties }) => {
  return (
    <>
      {properties.map((property) => (
        <div className="all_respo_card" key={property.prop_id}>
          <div className="img_buyer">
            <Link to={`/buy/${property.prop_id}`} className="prop_link">
              <div className="card_image">
                <img src={property.prop_image_big} alt={property.prop_name} />
              </div>
            </Link>

            <div className="side_content">
              <h3>{property.property_response.buyer}</h3>

              <div className="buyer_phn_address">
                <div className="phn_only">
                <div className="call_mail_ico">
                  {" "}
                  <img src={CallIco} alt="" />
                </div>
                <p className="buyer_phn cmn">
                  {property.property_response.buyer_contact}
                </p>
                </div>
                <div className="phn_only">
                  <div className="call_mail_ico">
                    {" "}
                    <img src={EmailIco} alt="" />
                  </div>
                  <p className="buyer_addrs cmn">
                    {property.property_response.buyer_address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card_content">
            <Link to={`/buy/${property.prop_id}`} className="prop_link">
              <div className="city_name">
                <div className="city">
                  <p className="p_city">
                    {property.property_address.street}{" "}
                    {property.property_address.city}{" "}
                    {property.property_address.Country}{" "}
                    {property.property_address.pincode}
                  </p>
                </div>
                <div className="property_name">
                  <p>{property.prop_name}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RespoCard;
