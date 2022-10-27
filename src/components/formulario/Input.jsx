import React, { useState } from "react";
import "./Input.css"

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        console.log(e)
    }

    return (
        <div className="Input">
           <input value={valor} onChange={} />
        </div>
    )
}