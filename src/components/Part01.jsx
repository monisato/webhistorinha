import React, { Component } from 'react';
import '../styles/Part01.css'

class Part01 extends Component {
    render() { 
        return (
            <div className="PartPage">
                <div className="FullImg">
                    <img className="Fundo" src="./imgs/pg01_notxt_background.png" alt="Marcelo tem um microondas"/>
                    <div className="MarContainer">
                        <img className="MarBraDir" src="./imgs/pg01_notxt_mar_bra_dir.png" alt="Marcelo tem um microondas"/>
                        <img className="MarOlho" src="./imgs/pg01_notxt_mar_olho.png" alt="Marcelo tem um microondas"/>
                    </div>
                    <div className="MicContainer">
                        <img className="Mic" src="./imgs/pg01_notxt_mic.png" alt="Marcelo tem um microondas"/>
                        <img className="MicOlho" src="./imgs/pg01_notxt_mic_olho.png" alt="Marcelo tem um microondas"/>
                        <img className="MicBraEsq" src="./imgs/pg01_notxt_mic_bra_esq.png" alt="Marcelo tem um microondas"/>
                    </div>
                    <p className="TxtPage" idName="TxtPage01">Marcelo &#013;tem um &#013;microondas</p>
                </div>
            </div>
        );
    }
}
 
export default Part01;