import React, { useState } from 'react';
// import './SearchBar.scss';
import { Button, MenuItem, Select, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Sell');
  const [propertyType, setPropertyType] = useState('Residential');

  return (
    <div className="search-bar-container">
      <div className="tab-container">
        <ul>
          <li 
            className={activeTab === 'Sell' ? 'selected' : ''} 
            onClick={() => setActiveTab('Sell')}
          >
            Sell
          </li>
          <li 
            className={activeTab === 'Buy' ? 'selected' : ''} 
            onClick={() => setActiveTab('Buy')}
          >
            Buy
          </li>
        </ul>
      </div>
      <div className="search-box">
        <div className="property-type">
          <HomeIcon className="icon-house" />
          <FormControl variant="standard">
            <Select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              disableUnderline
            >
              <MenuItem value="Residential">Residential</MenuItem>
              <MenuItem value="Villas">Villas</MenuItem>
              <MenuItem value="Apartments">Apartments</MenuItem>
              <MenuItem value="Buildings">Buildings</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="divider"></div>
        <div className="search-input">
          <SearchIcon className="icon-search" />
          <input type="text" placeholder="Search by location or Property ID..." />
        </div>
        <Button 
          variant="contained" 
          className={`search-button ${activeTab === 'Buy' ? 'buy' : 'sell'}`}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
