import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import CardCurso from "@/components/CardCurso";
import { curso } from "@prisma/client";
import router from "next/router";
import Link from "next/link";

export default function MeusCursos() {
  const [cursos, setCursos] = useState<curso[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cursos")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const handleMostraCurso = (id: string) => {
  //   void router.push(`/meus-cursos/${id}`);
  // };

  return (
    <>
      <Head>
        <title>Programa Genio | Dashboard | Cadastrar Cursos</title>
      </Head>
      <p></p>
      <h3 className="my-4">Meus Cursos</h3>
      <div>
        {cursos.map((curso) => (
          <CardCurso
            key={curso.id_curso}
            id={curso.id_curso}
            img={"/logoPortugol.png"}
            title={curso.nome_curso}
            description={curso.descricao}
          />
        ))}
        <Link href="http://localhost:3000/api/disciplinas?id=f4132b41-febb-4f17-a33b-ebc01318a7b7">
          <h1>Go to Disciplinas</h1>
        </Link>
      </div>
    </>
  );
}
