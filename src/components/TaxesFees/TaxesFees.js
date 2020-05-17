import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class TaxesFees extends Component {
    render() {
        return(
            <Row className="show-grid">
            <Col md={6}>Estimated Delivery: TUE, 5/5 - MON, 5/11 </Col>
            </Row>
        )
    }
}