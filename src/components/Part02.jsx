import React, { Component } from 'react';
import '../styles/Part02.css';

class Part02 extends Component {
    render() { 
        return (
            <div className="PartPage" idName="part02">
                <div className="FullImg">
                    <img className="Fundo" src="./imgs/pg02_notxt_background.png" alt="mas um microondas diferente, ele tem um buraco!"/>
                    <div className="MarContainerP2">
                        <img className="MarOlhoP2" src="./imgs/pg02_notxt_mar_olho.png" alt="mas um microondas diferente, ele tem um buraco!"/>
                    </div>
                    <div className="MicPg2Parts">
                        <img className="Balao" src="./imgs/pg02_notxt_balao.png" alt="mas um microondas diferente, ele tem um buraco!"/>
                        <img className="MicOlhoP2" src="./imgs/pg02_notxt_mic_olho.png" alt="mas um microondas diferente, ele tem um buraco!"/>
                        <img className="Buraco" src="./imgs/pg02_notxt_buraco.png" alt="mas um microondas diferente, ele tem um buraco!"/>
                    </div>
                    <p className="TxtPage02 Linha1" >mas um microondas &#013;diferente</p>
                    <p className="TxtPage02 Linha2" >ele tem um buraco!</p>
                </div>
            </div>
        );
    }
}
 
export default Part02;