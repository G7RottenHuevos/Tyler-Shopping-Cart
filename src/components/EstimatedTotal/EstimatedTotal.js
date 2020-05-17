import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class EstimatedToatal extends Component {
    render() {
        return(
            
            <Row>
                <Col md={6}><h2> {`$${this.props.price}`}</h2></Col>
            </Row>
        )
    }
}