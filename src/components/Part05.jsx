import React, { Component } from 'react';
import '../styles/Part05.css';

class Part05 extends Component {
    render() { 
        return (
            <div className="PartPage">
                <div className="FullImg">
                    <img className="Fundo" src="./imgs/pg05_notxt_background.png" alt="a verdade é que não devemos julgar pela aparência"/>
                    <img className="MenBoca" src="./imgs/pg05_notxt_men_boca.png" alt="a verdade é que não devemos julgar pela aparência"/>
                    <img className="MenMao" src="./imgs/pg05_notxt_men_mao.png" alt="a verdade é que não devemos julgar pela aparência"/>
                    <img className="MenOlho" src="./imgs/pg05_notxt_men_olho.png" alt="a verdade é que não devemos julgar pela aparência"/>
                    <p className="TxtPage05">A verdade &#013;é que não &#013;devemos &#013;julgar &#013;pela &#013;aparência.</p>
                </div>
            </div>
        );
    }
}
 
export default Part05;