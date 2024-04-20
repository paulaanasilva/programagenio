import React from 'react'
import Head from 'next/head'
import SidenavCadastro from "@/components/sideNavCadastro";


export default function Gerenciar() {
    return (
        <>
            <Head>
                <title>Programa Genio | Gerenciar</title>
            </Head>
            <div className="flex">
                <div className="w-1/6 h-screen bg-gray-200 sticky top-0 p-4">
                    <SidenavCadastro />
                </div>
                <div className="w-5/6 bg-white p-4">
                    <p>Dados do Gerenciar - ainda será avaliado</p>
                </div>
            </div>
        </>
    );
}
