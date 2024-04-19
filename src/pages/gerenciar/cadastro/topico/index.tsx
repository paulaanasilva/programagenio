import Head from "next/head";
import SidenavCadastro from "@/components/sideNavCadastro";

export default function Topico() {
  return (
    <>
        <Head>
            <title>Programa Genio | Cadastrar Cursos</title>
        </Head>

        <SidenavCadastro />
        <h1>Aqui é Topicos</h1>
    </>
  );
}