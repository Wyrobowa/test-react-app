import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
  }

  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    const updatedFish = {
      ...this.props.fish,
      [name]: value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  handleDelete = () => {
    this.props.deleteFish(this.props.index);
  }

  render() {
    return (
      <div className="fish-edit">
        <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name}/>
        <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price}/>
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
        <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image}/>
        <button onClick={this.handleDelete}>Remove fish</button>
      </div>
    );
  }
}

export default EditFishForm;
