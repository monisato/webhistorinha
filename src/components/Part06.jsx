import React, { Component } from 'react';
import '../styles/Part06.css';

class Part06 extends Component {
    render() { 
        return (
            <div className="PartPage">
                <div className="FullImg">
                    <img className="Fundo" src="./imgs/pg06_notxt_background.png" alt="devemos aceitar as coisas como elas são"/>
                    <img className="MarYey" src="./imgs/pg06_notxt_mar_yey.png" alt="devemos aceitar as coisas como elas são"/>
                    <img className="MicYey" src="./imgs/pg06_notxt_mic_yey.png" alt="devemos aceitar as coisas como elas são"/>
                    <img className="MicBoca6" src="./imgs/pg06_notxt_mic_boca.png" alt="devemos aceitar as coisas como elas são"/>
                    <p className="TxtPage06">Devemos aceitar as coisas como elas são.</p>
                </div>
            </div>
        );
    }
}
 
export default Part06;