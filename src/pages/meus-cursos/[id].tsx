import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { unidade_ensino, curso, topico, objeto_aprendizagem } from "@prisma/client";
import SideNavConteudo from "@/components/sideNavConteudo";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const [isChecked, setIsChecked] = useState(false);


  const [curso, setCurso] = useState<curso>();
  const [unidadeEnsino, setUnidadeEnsino] = useState<unidade_ensino[]>();
  const [topico, setTopico] = useState<topico[]>();
  const [objetoAprendizagem, setobjetoAprendizagem] = useState<objeto_aprendizagem[]>();



  const fetchByIdCurso = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/curso/unidade-ensino/topico/objeto-aprendizagem/${id}`);
      const curso = response.data;
      console.log("Mostrando o curso",curso);
      setCurso(curso);
      setUnidadeEnsino(curso.unidade_ensino);
      setTopico(curso.unidade_ensino.topico);
      setobjetoAprendizagem(curso.unidade_ensino.topico.objeto_aprendizagem);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchByIdCurso(id as string);
    }
  }, [id]);





  function conteudo() {
    return (
      <div>
        {curso && (
          <div>
            <h2>{curso.nome}</h2>
            <p>{curso.descricao}</p>
          </div>
        )}
        {unidadeEnsino && unidadeEnsino.map((unidade, index) => (
          <div key={index}>
            <h3>{unidade.nome}</h3>
            <p>{unidade.descricao}</p>
          </div>
        ))}
        {topico && topico.map((top, index) => (
          <div key={index}>
            <h4>{top.nome}</h4>
          </div>
        ))}
        {objetoAprendizagem && objetoAprendizagem.map((objeto, index) => (
          <div key={index}>
            <p>{objeto.descricao}</p>
          </div>
        ))}
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
                <p>Aqui acompanho o curso</p>
              </ul>
            </div>
          )
        }
        conteudo={conteudo()}
      />
    </>
  );
}
