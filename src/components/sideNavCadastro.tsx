import React from "react";

function SideNavCadastro() {
    return (
        <nav className="w-1/4 h-screen bg-gray-200 sticky top-0 p-4">
            <h2 className="text-lg font-bold mb-4">Cadastro</h2>
            <ul>
                <li className="mb-2">
                    <a href="/gerenciar/cadastro/topico" className="text-gray-700 hover:text-gray-900">Topico</a>
                </li>
                <li className="mb-2">
                    <a href="/gerenciar/cadastro/curso" className="text-gray-700 hover:text-gray-900">Curso</a>
                </li>
                <li className="mb-2">
                    <a href="/gerenciar/cadastro/turma" className="text-gray-700 hover:text-gray-900">Turma</a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavCadastro;
