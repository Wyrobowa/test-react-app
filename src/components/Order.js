import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Helpers
import { formatPrice } from '../helpers';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  }

  removeFromOrder = ({ currentTarget }) => {
    const index = currentTarget.getAttribute('data-index');
    this.props.removeFromOrder(index);
  }

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish?.status === 'available';

    if (!fish) return null;

    return (
      <CSSTransition classNames="order" key={key} timeout={{ enter: 500, exit: 500 }}>
        <li key={key}>
          {isAvailable
            ? (
              <span>
                <TransitionGroup component="span" className="count">
                  <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                    <span>{count}</span>
                  </CSSTransition>
                </TransitionGroup>
                <>lbs {fish.name}</>
                <>{formatPrice(count * fish.price)}</>
                <button onClick={this.removeFromOrder} data-index={key}>&times;</button>
              </span>
            ) : (
              <>Sorry, {fish?.name || 'fish'} is no longer available!</>
            )}
        </li>
      </CSSTransition>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, currentValue) => {
      const fish = this.props.fishes[currentValue];
      const count = this.props.order[currentValue];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return acc + (count * fish.price);
      }

      return acc;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds?.length > 0 && orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
