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
import DropdownCurso from "./DropdownCurso";
import router from "next/router";

interface CardProps {
  id: string;
  img: string;
  title: string;
  description: string;
}

function CardCurso(props: CardProps) {
  
  return (
    <>
      <div
        className="border-collapse border border-slate-400 rounded-lg my-3 p-3 box"
        onClick={() => router.push(`/meus-cursos/${props.id}`)}
      >
        <div>
          <Image
            className="imgCurso rounded-lg m-1"
            src={props.img}
            width={300}
            height={100}
            alt="Imagem de identificação do curso"
          />
        </div>
        <div>
          <div className="m-1">
            <h3>{props.title}</h3>
            <span>{props.description}</span>
          </div>
        </div>
        <div className="push"></div>
        <div>
          <DropdownCurso idCurso={props.id} />
        </div>
      </div>
    </>
  );
}

export default CardCurso;
