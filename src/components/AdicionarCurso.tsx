import React, { useState } from "react";

const AdicionarCurso: React.FC = () => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const novoCurso = {
      nome_curso: nomeCurso,
      descricao: descricao,
    };

    try {
      const response = await fetch("/api/cursos", {
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
  };

  return (
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome_curso" className="block text-sm font-medium leading-6 text-gray-900">Nome do Curso:</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    id="nome_curso"
                    value={nomeCurso}
                    onChange={(event) => setNomeCurso(event.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="col-span-full">
                <label htmlFor="descricao" className="block text-sm font-medium leading-6 text-gray-900">Descrição:</label>
                  <div className="mt-2">
                    <textarea
                      id="descricao"
                      value={descricao}
                      onChange={(event) => setDescricao(event.target.value)}
                      className="block w-1/3 rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Adicionar Curso</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AdicionarCurso;
