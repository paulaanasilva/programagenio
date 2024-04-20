import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Head from 'next/head'
import {
  curso,
  objeto_aprendizagem,
  topico,
  unidade_ensino,
} from "@prisma/client";
import DropdownManage from "@/components/DropdownGerenciar";


import SideNavConteudo from "@/components/sideNavConteudo";
import { Accordion } from "semantic-ui-react";
import ObjetoAprendizagem from "../objeto-aprendizagem";

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
  const [objetoAprendizagemArray, setObjetoAprendizagemArray] = useState<objeto_aprendizagem[]>([]);


  /*
  Paginação
  */
  const [currentPage, setCurrentPage] = useState<number[]>([]);
  const [itemsPerPage,] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(objetoAprendizagemArray.length / itemsPerPage);


  const fetchByIdCurso = async (id: string) => {
    try {
      const response = await axios.get<CursoWithRelations>(
        `http://localhost:3000/api/curso/unidade-ensino/topico/objeto-aprendizagem/${id}`
      );
      setCurso(response.data);

      const array = response.data.unidade_ensino.flatMap(unidade => unidade.topico.flatMap(top => top.objeto_aprendizagem));
      setObjetoAprendizagemArray(array);


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

  function objetoAprendizagem(objetoAprendizagemId: string) {
    <>
      <Head>
        <title>Programa Genio | Dashboard</title>
      </Head>
      <h1>Aqui é INDEX</h1>
    </>
  }

  function listaEstruturaCurso() {
    const panels = (curso?.unidade_ensino ?? []).map((unidade) => ({
      key: unidade.id,
      title: unidade.nome,
      content: {
        content: (
          <Accordion
            panels={unidade.topico.map((top, index) => ({
              key: top.id,
              title: top.nome,
              content: (
                [<div key={top.id}>
                  {top.objeto_aprendizagem.slice((currentPage[index] - 1) * itemsPerPage, currentPage[index] * itemsPerPage).map((objeto) => (
                    <div key={objeto.id}>
                      <div>
                        {Array.from({ length: Math.ceil(top.objeto_aprendizagem.length / itemsPerPage) }, (_, i) => i + 1).map((pageNum) => (
                          <button key={pageNum} onClick={() => setCurrentPage(prev => {
                            const newCurrentPage = [...prev];
                            newCurrentPage[index] = pageNum;
                            objetoAprendizagem(objeto.id);
                            return newCurrentPage;
                          })}>
                            {pageNum}
                          </button>
                        ))}
                      </div>
                    </div>
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
        exibeConteudoObjetoAprendizagem={listaEstruturaCurso()}
      />
    </>
  );
}

