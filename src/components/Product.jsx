import PlaceholderImage from './PlaceholderImage';
import faker from 'faker';

const Product = () => {
  return (
    <div className="column is-one-third">
      <div className="card h-100">
        <div className="card-image">
          <figure class="image is-4by3">
            <PlaceholderImage width={400} height={300} />
          </figure>
        </div>
        <div class="card-content">
          <h3 class="title is-4">{faker.commerce.productName(2)}</h3>
          <p class="subtitle is-5">{faker.lorem.words(5)}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
