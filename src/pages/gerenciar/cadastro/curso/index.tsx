import AdicionarCurso from "@/components/AdicionarCurso";
import Head from "next/head";

import SidenavCadastro from "@/components/sideNavCadastro";

export default function CadastroCursos() {
    return (
        <>
        <Head>
            <title>Programa Genio | Cadastrar Cursos</title>
        </Head>

        <SidenavCadastro />
        <AdicionarCurso />
        </>
    )
}