import React, { Component } from 'react';
import '../styles/Part04.css';

class Part04 extends Component {
    render() { 
        return (
            <div className="PartPage">
                <div className="FullImg">
                    <img className="Fundo" src="./imgs/pg04_notxt_background.png" alt="está quebrado ou é assim mesmo?"/>
                    <img className="MarOlho4" src="./imgs/pg04_notxt_olho.png" alt="está quebrado ou é assim mesmo?"/>
                    <img className="PocDirEmb" src="./imgs/pg04_notxt_poc_dir_emb.png" alt="está quebrado ou é assim mesmo?"/>
                    <img className="PocDirEmc" src="./imgs/pg04_notxt_poc_dir_emc.png" alt="está quebrado ou é assim mesmo?"/>
                    <img className="PocEsq" src="./imgs/pg04_notxt_poc_esq.png" alt="está quebrado ou é assim mesmo?"/>
                    <img className="Mic4" src="./imgs/pg04_notxt_mic.png" alt="está quebrado ou é assim mesmo?"/>
                    <p className="TxtPage04">Está quebrado ou é &#013;assim mesmo?</p>
                </div>
            </div>
        );
    }
}
 
export default Part04;