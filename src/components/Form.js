import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="new-athlete-card" onSubmit={ onSaveButtonClick }>
        <div>
          <label htmlFor="name-area" className="name-input-area">
            Nome da carta
            <input
              type="text"
              name="cardName"
              id="name-input"
              data-testid="name-input"
              placeholder="Athlete name"
              maxLength="32"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-area" className="description-input-area">
            Descrição da carta
            <input
              type="textarea"
              name="cardDescription"
              id="description-input"
              data-testid="description-input"
              placeholder="Athlete description"
              maxLength="32"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="attr1-container">
          <label htmlFor="attr1-area" className="attr1-input-area">
            Sprinter
            <input
              type="number"
              name="cardAttr1"
              id="attr1-input"
              data-testid="attr1-input"
              min="0"
              max="100"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-area" className="attr2-input-area">
            Climber
            <input
              type="number"
              name="cardAttr2"
              id="attr2-input"
              data-testid="attr2-input"
              min="0"
              max="100"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-area" className="attr3-input-area">
            GC
            <input
              type="number"
              name="cardAttr3"
              id="attr3-input"
              data-testid="attr3-input"
              min="0"
              max="100"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input" className="img-area">
            <input
              type="test"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rarity">
            Rarity
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="cardTrunfo">
            Carta Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  /*  hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
