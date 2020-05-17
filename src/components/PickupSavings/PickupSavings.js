import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavins: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};

export default class PickupSavings extends Component {



    render() {
     return(
            <Row className="show-grid">
                <div className= "btn1" >
                      <button>Add To Compare</button>
                </div>
               
                <div className="btn2">
                     <button> Add To Wish List</button>
                </div>

               
                
            </Row>
        
    )
        
   }
}
