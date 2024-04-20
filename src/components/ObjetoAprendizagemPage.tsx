import React, { useState } from 'react';

interface objetoAprendizagemId {
    objetoAprendizagemId: string;
}

function ObjetoAprendizagemPage(props : objetoAprendizagemId) {
    console.log(props.objetoAprendizagemId);

    return (
        <>
        <p>Exige os dados do objeto do aprendizagem</p>
        {props.objetoAprendizagemId}
        </>
    )
};

export default ObjetoAprendizagemPage;