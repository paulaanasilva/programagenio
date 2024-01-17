{
  /* <div className="border-collapse border border-slate-400 rounded-lg p-3">
  <div className="flex">
    <Image
      className="imgCurso rounded-lg m-1"
      src="/logoPortugol.png"
      width={300}
      height={200}
      alt="Imagem de identificação do curso"
    />
    <div className="m-1">
      <h3>Programação para iniciantes usando Portugol Studio</h3>
      <span>42% Completo</span>
      <br />
      <span>
        Aprenda lógica de programação usando ferramentas e abordagens criadas
        para iniciantes
      </span>
    </div>
  </div>
</div>; */
}
import React from "react";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div className="border-collapse border border-slate-400 rounded-lg p-3 m-3">
      <div className="flex">
        <Image
          className="imgCurso rounded-lg m-1"
          src={props.img}
          width={300}
          height={200}
          alt="Imagem de identificação do curso"
        />
        <div className="m-1">
          <h3>{props.title}</h3>
          <br />
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
