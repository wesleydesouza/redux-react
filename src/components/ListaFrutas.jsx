import React from "react";
import { useSelector } from "react-redux";
import AdicionaFruta from "./AdicionaFruta";
import Fruta from "./Frutas";

const ListaFrutas = () => {
   
    const frutas = useSelector(state => state.frutasReducers.frutas)

    return(
        <>
            <h1>Lista de Frutas</h1>

            <AdicionaFruta/>

            {frutas.map(fruta => (
                <Fruta key={fruta.id} fruta={fruta}/>
            ))}
        </>
    )
}

export default ListaFrutas;