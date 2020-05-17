import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import './App.css';

var button = "Button"


class App extends Component {
constructor(props) {
  super(props);

  this.state={
    total: " 72 Ratings (54% Positive)", 
    PickupSavings: "the",
    estimatedTotal: 33.48
  }
};

  render() {
  return (
    <div className="container">
      <Container className="purchase-card">
      <SubTotal price={this.state.total} />
      <hr>
      </hr>
      <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
      <hr>
      </hr>
      <TaxesFees taxes={this.state.taxes} />
      <hr> 
      </hr> 
      <input type="number" value="1" min="0" max="100" step="1"/>
      <div className="cart"><button >Add To Cart </button></div>
      <hr>
      </hr>
      <PickupSavings price={this.state.PickupSavings}/>
      </Container>
      </div>
      );
  }
}

export default App;
