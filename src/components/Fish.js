import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
    }),
    index: PropTypes.string,
    addToOrder: PropTypes.func,
  }

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const { name, price, status, desc, image } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add to cart' : 'Sold out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
