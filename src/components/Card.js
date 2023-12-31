import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div>

        <div data-testid="name-card">{cardName}</div>
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <span data-testid="attr1-card">{cardAttr1}</span>
        <span data-testid="attr2-card">{cardAttr2}</span>
        <span data-testid="attr3-card">{cardAttr3}</span>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        { cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
