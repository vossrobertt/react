import React from 'react'
import './App.css'

import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#08 - Rendeirazacao Condicional " color="#9C95DC">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Tabela Produtos " color="#362417">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição " color="#92817A">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filho" color="#749F82">
                <Familia sobrenome="Junior">
                    <FamiliaMembro nome="Robert" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Pedro" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#1746A2">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#5F9DF7">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#425F57">
                <ComParametro
                    titulo="Situaçao Do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#FF731D">
                <Primeiro></Primeiro>
            </Card>

        </div>



    </div>
);