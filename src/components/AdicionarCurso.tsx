import React, { useState } from "react";
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
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 text-lg font-bold mb-2">Nome do Curso:</label>
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
                />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Adicionar Curso
                </button>
            </div>
        </form>
        {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
</div>
  );
};

export default AdicionarCurso;
