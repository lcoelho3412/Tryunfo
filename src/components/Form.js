import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="new-athlete-card" onSubmit={ () => {} }>
        <div>
          <label htmlFor="name-area" className="name-input-area">
            Name
            <input
              type="text"
              name="nameOfCard"
              id="name-input"
              data-testid="name-input"
              placeholder="Athlete name"
              maxLength="32"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-area" className="description-input-area">
            Descrition
            <input
              type="textarea"
              name="descrptionOfCard"
              id="description-input"
              data-testid="description-input"
              placeholder="Athlete description"
              maxLength="32"
            />
          </label>
        </div>
        <div className="attr1-container">
          <label htmlFor="attr1-area" className="attr1-input-area">
            Sprinter
            <input
              type="number"
              name="attr1Card"
              id="attr1-input"
              data-testid="attr1-input"
              min="0"
              max="100"
            />
          </label>
          <label htmlFor="attr2-area" className="attr2-input-area">
            Climber
            <input
              type="number"
              name="attr2Card"
              id="attr2-input"
              data-testid="attr2-input"
              min="0"
              max="100"
            />
          </label>
          <label htmlFor="attr3-area" className="attr3-input-area">
            GC
            <input
              type="number"
              name="attr3Card"
              id="attr3-input"
              data-testid="attr3-input"
              min="0"
              max="100"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input" className="img-area">
            <input type="test" name="cardImage" data-testid="image-input" />
          </label>
        </div>
        <div>
          <label htmlFor="rarity">
            Rarity
            <select name="cardRare" data-testid="rare-input">
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
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            data-testid="save-button"
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
