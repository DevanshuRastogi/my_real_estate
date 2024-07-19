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
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
    <>
      <div className="filter_section">
        <h5>Filter</h5>

        <div className="country_selector">
          <h5>Location</h5>
          <Select
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            startAdornment={<LocationOnIcon />}
          >
            <MenuItem value="id1">Mumbai</MenuItem>
            <MenuItem value="id2">Delhi</MenuItem>
            <MenuItem value="id3">Hyderabad</MenuItem>
            <MenuItem value="id4">Lucknow</MenuItem>
            <MenuItem value="id5">Amritsar</MenuItem>
            <MenuItem value="id6">Raipur</MenuItem>
          </Select>
        </div>
        <div className="place_picker">
          <h5>Types of Places</h5>
          {["All", "Office", "Building", "Shop", "Apartment", "House"].map(
            (type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={placeTypes.includes(type)}
                    onChange={() => handlePlaceTypeChange(type)}
                    color="primary"
                  />
                }
                label={type}
              />
            )
          )}
        </div>

        <div className="price_range">
          <h5> Price Range</h5>

          <Slider
            value={priceRange}
            onChange={(_, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={100}
            max={10000}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography>${priceRange[0]}</Typography>
            <Typography>${priceRange[1]}</Typography>
          </Box>
        </div>

        <div className="size_scale">
          <h5>Size</h5>
          <Box display="flex" justifyContent="space-between">
            <TextField
              label="Min"
              value={size.min}
              onChange={(e) => setSize({ ...size, min: e.target.value })}
              variant="outlined"
              size="small"
              sx={{ width: "45%" }}
            />
            <TextField
              label="Max"
              value={size.max}
              onChange={(e) => setSize({ ...size, max: e.target.value })}
              variant="outlined"
              size="small"
              sx={{ width: "45%" }}
            />
          </Box>
          </div>

       <div className="feature_selector">
          <h5>Feature</h5>
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
            <FormControlLabel
              key={feature}
              control={
                <Checkbox
                  checked={features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                  color="primary"
                />
              }
              label={feature}
            />
          ))}
        </div>

       <div className="style_selector">
        <h5>Style</h5>
     
          {["A-Frame", "Cottage", "Dome", "Spanish"].map((style) => (
            <FormControlLabel
              key={style}
              control={
                <Checkbox
                  checked={styles.includes(style)}
                  onChange={() => handleStyleChange(style)}
                  color="primary"
                />
              }
              label={style}
            />
          ))}
            </div>
      </div>
    </>
  );
};

export default Filter;
