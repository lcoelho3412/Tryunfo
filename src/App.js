import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  addNewCard = (card) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: false,
      cardTrunfo: false,
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.addNewCard(this.state);
  };

  isSaveButtonDisabled = () => {
    const maxTotalAttr = 210;
    const maxAttr = 90;
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const stringCheck = !(cardName && cardImage && cardDescription);
    const numberCheck = (parseInt(cardAttr1, 10)
     + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10) !== maxTotalAttr);
    const maxIndividualAttr = !(parseInt(cardAttr1, 10)
      && parseInt(cardAttr2, 10)
       && parseInt(cardAttr3, 10) === maxAttr);
    return (stringCheck && numberCheck && maxIndividualAttr);
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div className="container">
          {cards.map((card) => (
            <div className="Card__content" key={ card.cardName }>
              {card.cardName}
              <p>{`Sprinter ${card.cardAttr1}`}</p>
              <img src={ card.cardImage } alt="" width={ 100 } />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
