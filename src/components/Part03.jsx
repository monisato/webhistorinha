import React, { Component } from 'react';
import '../styles/Part03.css';

class Part03 extends Component {
    render() { 
        return (
            <div className="PartPage">
                <div className="FullImg">
                    <img className="Fundo" src="./imgs/pg03_notxt_background.png" alt="sua mãe e amigos falavam: -Essa coisa está quebrada!"/>
                    <img className="MaeBoca" src="./imgs/pg03_notxt_mae_boca.png" alt="sua mãe e amigos falavam: -Essa coisa está quebrada!"/>
                    <img className="MaeOlho" src="./imgs/pg03_notxt_mae_olho.png" alt="sua mãe e amigos falavam: -Essa coisa está quebrada!"/>
                    <img className="MicBoca" src="./imgs/pg03_notxt_mic_boca.png" alt="sua mãe e amigos falavam: -Essa coisa está quebrada!"/>
                    <img className="Cara1" src="./imgs/pg03_notxt_cara1.png" alt="sua mãe e amigos falavam: -Essa coisa está quebrada!"/>
                    <img className="Cara2" src="./imgs/pg03_notxt_cara2.png" alt="sua mãe e amigos falavam: -Essa coisa está quebrada!"/>
                    <p className="TxtPage03">Sua mãe e amigos falavam: &#013;-Essa coisa está quebrada!</p>
                </div>
            </div>
        );
    }
}
 
export default Part03;