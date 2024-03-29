import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import CardCurso from "@/components/CardCurso";
import { curso } from "@prisma/client";

export default function MeusCursos() {
  const [cursos, setCursos] = useState<curso[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/curso")
      .then((response) => {
        setCursos(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Programa Genio | Meus Cursos</title>
      </Head>
      <p></p>
      <h3 className="my-4">Meus Cursos</h3>
      <div>
        {cursos.map((curso) => (
          <CardCurso
            key={curso.id}
            id={curso.id}
            img={"/logoPortugol.png"}
            title={curso.nome}
            description={curso.descricao || ""}
          />
        ))}
      </div>
    </>
  );
}
