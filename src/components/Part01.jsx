import React, { Component } from 'react';
import '../styles/Parts.css';

class Part01 extends Component {
    render() { 
        return (
            <div className="Part" idName="part01">
                <img className="Fundo" src="./imgs/pg01.jpeg" alt="Marcelo tem um microondas"/>
            </div>
        );
    }
}
 
export default Part01;