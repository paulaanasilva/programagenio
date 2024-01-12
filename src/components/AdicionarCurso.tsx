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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome_curso">Nome do Curso:</label>
        <input
          type="text"
          id="nome_curso"
          value={nomeCurso}
          onChange={(event) => setNomeCurso(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </div>
      <button type="submit">Adicionar Curso</button>
    </form>
  );
};

export default AdicionarCurso;
