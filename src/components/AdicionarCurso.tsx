import React, { useRef, useState } from "react";
import Popup from "./Popup";

const AdicionarCurso: React.FC = () => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoCurso = {
      nome: nomeCurso,
      descricao: descricao,
    };

    try {
      const response = await fetch("/api/curso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoCurso),
      });

      if (response.ok) {
        console.log("Curso adicionado com sucesso!");
      } else {
        console.error("Erro ao adicionar curso.");
      }
    } catch (error) {
      console.error("Erro ao adicionar curso:", error);
    }
    setShowPopup(true);

  };

  const handleClosePopup = () => {
    setShowPopup(false);
    resetForm();
    window.location.reload();
  };

  const resetForm = () => {
    const form = document.getElementById('myForm') as HTMLFormElement;
    if (form) {
      form.reset();
      window.location.reload();
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} onReset={resetForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="myForm">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-left">Curso</h2>
                <div className="border-b-2 border-gray-200 mb-4"></div>
                <label htmlFor="nome" className="block text-gray-700 text-lg font-bold mb-2">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nomeCurso}
                    onChange={(event) => setNomeCurso(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="descricao" className="block text-gray-700 text-lg font-bold mb-2">Descrição:</label>
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    style={{resize: "none"}}
                />
            </div>
            <div className="flex items-center justify-left">
                <button type="submit" className="bg-[#9F2697] hover:bg-[#821B7B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5">
                    Salvar
                </button>
                <button type="reset" className="bg-[#7A8F9E] hover:[#53626D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Excluir
                </button>
            </div>
        </form>
        {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-left">Detalhes do Curso</h2>
          <div className="border-b-2 border-gray-200 mb-4"></div>
          <div className="flex flex-1">
            <h4 className="text-2x1 font-light text-left">Unidade de Ensino</h4>
            <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-gray-200 ml-10"></div>
            <div className=" w-full">
              <p>Nenhum Registro Encontrado</p>
              <a href="/gerenciar/cadastro/curso/unidade-de-ensino" className="bg-[#9F2697] hover:bg-[#821B7B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                Incluir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default AdicionarCurso;
