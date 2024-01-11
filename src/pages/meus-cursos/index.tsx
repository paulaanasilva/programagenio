import React from "react";
import Head from 'next/head'
import Image from 'next/image'



export default function MeusCursos() {
  return (
    <>
      <Head>
        <title>Programa Genio | Meus Cursos</title>
      </Head>
      <p></p>
      <h2 className="my-4">Meus Cursos</h2>
      <div className="border-collapse border border-slate-400 rounded-lg p-3">
        <div className="flex">
          <Image className="imgCurso rounded-lg m-1" src='/logoPortugol.png' width={300} height={200} alt="Imagem de identificação do curso"/>
          <div className="m-1">
            <h3>Programação para iniciantes usando Portugol Studio</h3>
            <span>42% Completo</span>
            <br />
            <span>Aprenda lógica de programação usando ferramentas e abordagens criadas para iniciantes</span>
          </div>
        </div>
      </div>
    </>
  );
}

