const checkActive = (...alternativePaths) => {
  return (match, location) => {
    if (match) return true;

    return alternativePaths.includes(location.pathname);
  };
};

export { checkActive };
