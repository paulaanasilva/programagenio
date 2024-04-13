import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import {
  curso,
  objeto_aprendizagem,
  topico,
  unidade_ensino,
} from "@prisma/client";
import DropdownManage from "@/components/DropdownGerenciar";


import SideNavConteudo from "@/components/sideNavConteudo";
import { Accordion } from "semantic-ui-react";

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

  function conteudoObjetoAprendizagem() {
    return (
      <>
        {curso && (
          <>
            <div>
              <p className="p-2">{curso.descricao}</p>
            </div>
          </>
        )}
      </>
    );
  }

  function tituloCurso() {
    return (
      <>
        {curso && (
          <>
            <div>
              <h3 className="text-purple-500 p-2">{curso.nome}</h3>
            </div>
          </>
        )}
      </>
    );
  }

  function listaEstruturaCurso() {
    const panels = (curso?.unidade_ensino ?? []).map((unidade) => ({
      key: unidade.id,
      title: unidade.nome,
      content: {
        content: (
          <Accordion
            panels={unidade.topico.map((top) => ({
              key: top.id,
              title: top.nome,
              content: (
                [<div>
                  {top.objeto_aprendizagem.map((objeto) => (
                    <Link key={objeto.id} className="text-black" href={`/login/${objeto.id}`}>
                      <p className="p-2">{objeto.descricao}</p>
                    </Link>
                  ))}
                </div>]
              ),
            }))}
          />
        ),
      },
    }));

    return <Accordion panels={panels} />;
  }


  function dadoSidenav() {
    return (
      <>
        {tituloCurso()}
        {listaEstruturaCurso()}
      </>
    );
  }

  return (
    <>
      <SideNavConteudo
        sideNav={dadoSidenav()}
        exibeConteudoObjetoAprendizagem={conteudoObjetoAprendizagem()}
      />
    </>
  );
}

