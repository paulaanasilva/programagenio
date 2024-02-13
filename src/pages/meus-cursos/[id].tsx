import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { curso, disciplina } from "@prisma/client";
import SideNavConteudo from "@/components/sideNavConteudo";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [curso, setCurso] = useState<curso>();
  const [disciplinas, setDisciplinas] = useState<disciplina[]>();

  const fetchCursoAndDisciplinasById = async (id: string) => {
    try {
      console.log(id);
      const response = await axios.get(
        `http://localhost:3000/api/cursos/${id}`
      );
      const curso = response.data;
      setCurso(curso);
      setDisciplinas(
        curso.disciplina_curso.map(
          (disciplina_curso: any) => disciplina_curso.disciplina
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCursoAndDisciplinasById(id as string);
    }
  }, [id]);

  function conteudo() {
    return (
      <div>
        {curso && (
          <div>
            <h1 className="tituloCurso p-3">{curso.nome_curso}</h1>
            <ul>
              {disciplinas &&
                disciplinas.map((disciplina) => (
                  <li key={disciplina.id_disciplina}>
                    {disciplina.nome_disciplina}- {disciplina.descricao} - {disciplina.carga_horaria}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <SideNavConteudo
        conteudo={conteudo()}
      />
    </>
  );
}
