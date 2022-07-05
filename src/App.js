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
    const minAttr = 0;
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const stringCheck = (cardName && cardImage && cardDescription);
    const numberCheck = (Number(cardAttr1)
     + Number(cardAttr2)
      + Number(cardAttr3) <= maxTotalAttr);
    const maxIndividualAttr = (Number(cardAttr1) <= maxAttr
      && Number(cardAttr2) <= maxAttr
       && Number(cardAttr3) <= maxAttr);
    const minIndividualAttr = (Number(cardAttr1) >= minAttr
      && Number(cardAttr2) >= minAttr
       && Number(cardAttr3) >= minAttr);
    console.log(stringCheck);
    console.log(numberCheck);
    console.log(maxIndividualAttr);
    console.log(Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    return !(stringCheck && numberCheck && maxIndividualAttr && minIndividualAttr);
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
