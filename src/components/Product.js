// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <h1>Hi</h1>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
  size: 'regular'
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.number.isRequired,
  customProp: function(props) {
    if (props.weight < 80 || props.weight > 300 ) {
      return new Error(
        'That weight is not valid.'
      );
    }
  }
};


export default Product
