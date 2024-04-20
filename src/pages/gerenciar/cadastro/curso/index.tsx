import React from 'react'
import Head from "next/head";
import SidenavCadastro from "@/components/sideNavGerenciar";
import AdicionarCurso from '@/components/AdicionarCurso';

export default function CadastroCursos() {
    return (
        <>
            <Head>
                <title>Programa Genio | Cadastrar Cursos</title>
            </Head>
            <div className="flex">
                <div className="w-1/6 h-screen bg-slate-50 sticky top-0 p-4">
                    <SidenavCadastro />
                </div>
                <div className="w-5/6 p-4">
                    <AdicionarCurso />
                </div>
            </div>
        </>
    )
}