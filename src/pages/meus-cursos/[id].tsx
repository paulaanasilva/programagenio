import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { unidade_ensino, curso } from "@prisma/client";
import SideNavConteudo from "@/components/sideNavConteudo";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const [isChecked, setIsChecked] = useState(false);


  const [curso, setCurso] = useState<curso>();
  const [unidadeEnsino, setUnidadeEnsino] = useState<unidade_ensino[]>();

  const fetchUnidadeEnsinoByIdCurso = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/curso/unidade-ensino/${id}`);
      const curso = response.data;
      setCurso(curso);
      setUnidadeEnsino(curso.unidade_ensino);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUnidadeEnsinoByIdCurso(id as string);
    }
  }, [id]);




  function conteudo() {
    return (
      <div>
        {curso && (
          <div>
            <h1 className="tituloCurso p-3">{curso.nome}</h1>
            <ul>
              {unidadeEnsino &&
                unidadeEnsino.map((unidade) => (
                  <li key={unidade.id}>

                      {unidade.nome} | {unidade.carga_horaria}

                  </li>
                ))}

            </ul>
            <h1>Aqui exibe o conteúdo</h1>
            <ul>

            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <SideNavConteudo
        sideNav={
          curso && (
            <div>
              <ul>
                
              </ul>
            </div>
          )
        }
        conteudo={conteudo()}
      />
    </>
  );
}
