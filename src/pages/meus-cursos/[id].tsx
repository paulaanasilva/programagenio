import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  curso,
  objeto_aprendizagem,
  topico,
  unidade_ensino,
} from "@prisma/client";
import SideNavConteudo from "@/components/sideNavConteudo";

export interface TopicoWithRelations extends topico {
  id: string;
  nome: string;
  descricao: string;
  objeto_aprendizagem: objeto_aprendizagem[];
}

export interface UnidadeEnsinoWithRelations extends unidade_ensino {
  id: string;
  nome: string;
  descricao: string;
  topico: TopicoWithRelations[];
}

export interface CursoWithRelations extends curso {
  id: string;
  nome: string;
  descricao: string;
  unidade_ensino: UnidadeEnsinoWithRelations[];
}

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const [isChecked, setIsChecked] = useState(false);

  const [curso, setCurso] = useState<CursoWithRelations>();

  const fetchByIdCurso = async (id: string) => {
    try {
      const response = await axios.get<CursoWithRelations>(
        `http://localhost:3000/api/curso/unidade-ensino/topico/objeto-aprendizagem/${id}`
      );
      setCurso(response.data);
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
          <>
            <div className="bg-slate-200 p-3">
              <h2>{curso.nome}</h2>
              <p>{curso.descricao}</p>
            </div>
            <>
              {curso.unidade_ensino.map((unidade, index) => (
                <>
                  <div className="bg-slate-300 p-3" key={index}>
                    <h3>{unidade.nome}</h3>
                    <p>{unidade.descricao}</p>
                  </div>
                  <>
                    {unidade.topico &&
                      unidade.topico.map((top, index) => (
                        <>
                          <div className="bg-slate-400 p-3" key={index}>
                            <h4>{top.nome}</h4>
                          </div>
                          {top.objeto_aprendizagem &&
                            top.objeto_aprendizagem.map((objeto, index) => (
                              <div className="bg-slate-500 p-3" key={index}>
                                <p>{objeto.descricao}</p>
                              </div>
                            ))}
                        </>
                      ))}
                  </>
                </>
              ))}
            </>
          </>
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
