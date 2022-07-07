import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/index.css';

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
      hasTrunfo: false,
      cards: [],
      allCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [...prevState.cards, newCard],
      allCards: [...prevState.cards, newCard],
    }));
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
    const numberCheck = (+cardAttr1 + +cardAttr2 + +cardAttr3) <= maxTotalAttr;
    const maxIndividualAttr = (Number(cardAttr1) <= maxAttr
      && Number(cardAttr2) <= maxAttr
       && Number(cardAttr3) <= maxAttr);
    const minIndividualAttr = (Number(cardAttr1) >= minAttr
      && Number(cardAttr2) >= minAttr
       && Number(cardAttr3) >= minAttr);
    return !(stringCheck && numberCheck && maxIndividualAttr && minIndividualAttr);
  }

  cardDeleter = ({ target }) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.filter(({ cardName }) => cardName !== target.id),
      allCards: cards.filter(({ cardName }) => cardName !== target.id),
    });
  }

 cardNameFilter = (filter) => {
   const { allCards } = this.state;
   const filterCard = allCards.filter((e) => e.cardName.includes(filter));
   this.setState({ cards: filterCard });
 }

 render() {
   const { cards } = this.state;

   return (
     <div>
       <h1>Tryunfo</h1>
       <Form
         { ...this.state }
         isSaveButtonDisabled={ this.isSaveButtonDisabled() }
         hasTrunfo={ cards.some(({ cardTrunfo: trunfo }) => trunfo === true) }
         onSaveButtonClick={ this.onSaveButtonClick }
         onInputChange={ this.onInputChange }
         cardNameFilter={ this.cardNameFilter }
       />
       <Card { ...this.state } />
       <div className="container">
         <section className="Card__content">
           {cards.map((card) => (
             <div key={ card.cardName }>
               <Card
                 cardName={ card.cardName }
                 cardDescription={ card.cardDescription }
                 cardAttr1={ card.cardAttr1 }
                 cardAttr2={ card.cardAttr2 }
                 cardAttr3={ card.cardAttr3 }
                 cardImage={ card.cardImage }
                 cardRare={ card.cardRare }
                 cardTrunfo={ card.cardTrunfo }
               />
               <button
                 type="button"
                 data-testid="delete-button"
                 id={ card.cardName }
                 onClick={ this.cardDeleter }
               >
                 Excluir
               </button>
             </div>
           ))}
         </section>
       </div>
     </div>
   );
 }
}

export default App;
