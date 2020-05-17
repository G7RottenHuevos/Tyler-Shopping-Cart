import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SubTotal extends Component {
    render () {
        return(
            <Row className="show-grid">
            <div className="title">Sold and Shipped by: Rotten Huevos</div>
             <div className="ratings"> 72 Ratings (54% Positive)</div>
            </Row>
        )
    }
}