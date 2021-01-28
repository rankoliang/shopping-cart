import styled from 'styled-components';

const StyledQuantityControl = styled.button`
  height: 1em;
  width: 1em;
`;

const QuantityControl = ({ children, colorClass }) => {
  return (
    <StyledQuantityControl
      className={`button is-large p-0 ml-1 is-outlined ${colorClass}`}
    >
      {children}
    </StyledQuantityControl>
  );
};

export default QuantityControl;
