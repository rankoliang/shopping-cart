import styled from 'styled-components';

const StyledQuantityControl = styled.button`
  height: 1em;
  width: 1em;
`;

const QuantityControl = ({ children, colorClass, ...props }) => {
  return (
    <StyledQuantityControl
      className={`button is-large p-0 ml-1 is-outlined ${colorClass}`}
      {...props}
    >
      {children}
    </StyledQuantityControl>
  );
};

export default QuantityControl;
