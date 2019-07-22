// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

// Importando css e scss
import './content.scss';

//importando componentes

//Content
const Content = () => (

    <div className="content-container">
        <div className="cc-content">
            <h1>ReserveJá</h1>
            <a class="waves-effect waves-light btn">button</a>
            <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
            <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
        </div>
    </div>    
);

export default Content;