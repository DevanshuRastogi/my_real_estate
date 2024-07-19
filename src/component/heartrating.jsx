import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const HeartRating = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <div onClick={handleClick}>
      <Rating
        value={value}
        max={1}
        icon={<FavoriteIcon style={{ color: 'red' }} />}
        emptyIcon={<FavoriteBorderIcon style={{ color: 'grey' }} />}
        onChange={(event, newValue) => setValue(newValue)} // Optional for other ratings
        readOnly // This prevents hover effects
      />
    </div>
  );
};

export default HeartRating;
