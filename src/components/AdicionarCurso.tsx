import React, { useState } from "react";

const AdicionarCurso: React.FC = () => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const novoCurso = {
      nome_curso: nomeCurso,
      descricao: descricao,
      imagem: imagem,
    };

    try {
      const formData = new FormData();
      formData.append("nome_curso", nomeCurso);
      formData.append("descricao", descricao);
      formData.append("imagem", imagem as File);

      const response = await fetch("/api/cursos", {
        method: "POST",
        body: formData,
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
      <div>
        <label htmlFor="imagem">Imagem:</label>
        <input
          type="file"
          id="imagem"
          onChange={(event) => setImagem(event.target.files?.[0] || null)}
        />
      </div>
      <button type="submit">Adicionar Curso</button>
    </form>
  );
};

export default AdicionarCurso;