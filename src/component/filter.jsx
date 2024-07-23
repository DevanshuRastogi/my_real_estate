// Filter.jsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  Paper,
} from "@mui/material";

const Filter = () => {
  const [location, setLocation] = useState("Scotland");
  const [placeTypes, setPlaceTypes] = useState(["All"]);
  const [priceRange, setPriceRange] = useState([100, 10000]);
  const [size, setSize] = useState({ min: "", max: "" });
  const [features, setFeatures] = useState(["Ac & Heating"]);

  const [styles, setStyles] = useState(["A-Frame"]);

  const handlePlaceTypeChange = (type) => {
    if (type === "All") {
      setPlaceTypes(["All"]);
    } else {
      const newTypes = placeTypes.includes("All")
        ? [type]
        : placeTypes.includes(type)
        ? placeTypes.filter((t) => t !== type)
        : [...placeTypes, type];
      setPlaceTypes(newTypes.length ? newTypes : ["All"]);
    }
  };

  const handleFeatureChange = (feature) => {
    setFeatures(
      features.includes(feature)
        ? features.filter((f) => f !== feature)
        : [...features, feature]
    );
  };

  const handleStyleChange = (style) => {
    setStyles(
      styles.includes(style)
        ? styles.filter((s) => s !== style)
        : [...styles, style]
    );
  };

  return (
    <div className="filter_section">
      <h3>Filter</h3>

      <div className="country_selector">
        <h5>Location</h5>
        <div className="cs_select">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Amritsar">Amritsar</option>
            <option value="Raipur">Raipur</option>
          </select>
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>

      <div className="place_picker">
        <h5>Type of Place</h5>
        <div className="check_grid">
          {["All", "Office", "Building", "Shop", "Apartment", "House"].map(
            (type) => (
              <label key={type} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={placeTypes.includes(type)}
                  onChange={() => handlePlaceTypeChange(type)}
                />
                <span className="checkbox-custom"></span>
                {type}
              </label>
            )
          )}
        </div>
      </div>

      <div className="price_range">
        <h5> Price Range</h5>

        <Slider
          value={priceRange}
          className="pr_slide"
          onChange={(_, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={100}
          max={10000}
        />
        <div className="price_show">
          <Typography>${priceRange[0]}</Typography>
          
          <Typography>${priceRange[1]}</Typography>
        </div>
      </div>

      <div className="size_scale">
        <h5>Size</h5>
        <div className="size_inputs">
          <input
            type="text"
            placeholder="Min"
            value={size.min}
            onChange={(e) => setSize({ ...size, min: e.target.value })}
          />
          <div className="sq_ft1">
          sq ft
          </div>
          
          <input
            type="text"
            placeholder="Max"
            value={size.max}
            onChange={(e) => setSize({ ...size, max: e.target.value })}
          />
        </div>
      </div>

      <div className="feature_selector">
        <h5>Features</h5>
        <div className="check_grid">
          {[
            "Ac & Heating",
            "Dishwasher",
            "Balcony",
            "Fitness Center",
            "Clubhouse",
            "Spa",
            "Pool",
            "Valet Parking",
          ].map((feature) => (
            <label key={feature} className="checkbox-label">
              <input
                type="checkbox"
                checked={features.includes(feature)}
                onChange={() => handleFeatureChange(feature)}
              />
              <span className="checkbox-custom"></span>
              {feature}
            </label>
          ))}
        </div>
      </div>

      <div className="style_selector">
        <h5>Style</h5>
        <div className="check_grid">
          {["A-Frame", "Cottage", "Dome", "Spanish"].map((style) => (
            <label key={style} className="checkbox-label">
              <input
                type="checkbox"
                checked={styles.includes(style)}
                onChange={() => handleStyleChange(style)}
              />
              <span className="checkbox-custom"></span>
              {style}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;

{
  /* <div className="price_range">
<h5> Price Range</h5>

<Slider
  value={priceRange}
  className="pr_slide"
  onChange={(_, newValue) => setPriceRange(newValue)}
  valueLabelDisplay="auto"
  min={100}
  max={10000}
/>
<Box display="flex" justifyContent="space-between">
  <Typography>${priceRange[0]}</Typography>
  <Typography>${priceRange[1]}</Typography>
</Box>
</div> */
}
