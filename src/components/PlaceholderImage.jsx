const PlaceholderImage = ({ length, width, height }) => {
  return (
    <img
      src={`https://via.placeholder.com/${length ? length : `${width}x${height}`}`}
    />
  );
};

export default PlaceholderImage;
