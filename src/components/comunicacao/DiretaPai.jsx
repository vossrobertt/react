import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={15} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Robert" idade={27} nerd={true}></DiretaFilho>
        </div>
    )
}