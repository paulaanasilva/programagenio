import React, { use, useEffect, useState } from "react";
import Head from 'next/head'
import axios from "axios";
import Card from "@/components/Card";
import { curso } from "@prisma/client";
import AdicionarCurso from "@/components/AdicionarCurso";

export default function MeusCursos() {

  const [cursos, setCursos] = useState<curso[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cursos').then(response => {
      setCursos(response.data);
    }).catch(error => {
      console.error(error);
    });
  }
  , []);


  return (
    <>
      <Head>
        <title>Programa Genio | Meus Cursos</title>
      </Head>
      <p></p>
      <h2 className="my-4">Meus Cursos</h2>
      <div>
        {cursos.map((curso) => (
          <Card
            key={curso.id_curso}
            img={"/logoPortugol.png"}
            title={curso.nome_curso}
            description={curso.descricao}
            progress={"42% Completo"}
          />
        ))}
        <AdicionarCurso />
      </div>
    </>
  );
}

