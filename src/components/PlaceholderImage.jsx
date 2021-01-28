import React from 'react';

const PlaceholderImage = React.memo(
  ({ width, height, keyword = '', ...props }) => {
    const encodedKW = encodeURI(keyword);
    return (
      <img
        src={`https://source.unsplash.com/random/${`${width}x${height}`}?${encodedKW}`}
        alt="placeholder"
        {...props}
      />
    );
  }
);

export default PlaceholderImage;
