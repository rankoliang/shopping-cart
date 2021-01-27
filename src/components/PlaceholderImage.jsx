const PlaceholderImage = ({ length, width, height }) => {
  return (
    <img
      src={`https://via.placeholder.com/${
        length ? length : `${width}x${height}`
      }`}
      alt="placeholder"
    />
  );
};

export default PlaceholderImage;
