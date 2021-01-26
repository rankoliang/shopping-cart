import PlaceholderImage from './PlaceholderImage';
import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Product = ({ product: { name, description, price } }) => {
  return (
    <div className="column is-one-third">
      <div className="card h-100 pb-6">
        <div className="card-image">
          <figure className="image is-4by3">
            <PlaceholderImage width={600} height={450} />
          </figure>
        </div>
        <div className="card-content">
          <h3 className="title is-4">{name}</h3>
          <h4 className="subtitle is-5">{description}</h4>
        </div>
        <Footer className="card-footer">
          <div className="card-footer-item">{price}</div>
          <button className="card-footer-item button is-primary h-100">
            Add to Cart
          </button>
        </Footer>
      </div>
    </div>
  );
};

export default Product;
