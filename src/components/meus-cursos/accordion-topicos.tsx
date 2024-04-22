import {
  CursoWithRelations,
  UnidadeEnsinoWithRelations,
} from "@/pages/meus-cursos/[id]";
import React, { Component, useState } from "react";
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";
import { useRouter } from "next/router";

interface AccordionTopicosProps {
  readonly unidade: UnidadeEnsinoWithRelations;
}

export const AccordionTopicos = ({ unidade }: AccordionTopicosProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const router = useRouter();

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(index);
    }
  };

  const handleSelectObject = (topico_id: string, object_id: string) => {
    router.push(
      `/meus-cursos/${unidade.id_curso}/${unidade.id}/${topico_id}/${object_id}`
    );
  };

  return (
    <Accordion>
      {unidade.topico.map((topico, index) => (
        <div key={topico.id}>
          <AccordionTitle
            active={activeIndex === index}
            onClick={() => handleClick(index)}
          >
            <Icon name="dropdown" />
            {topico.nome}
          </AccordionTitle>
          <AccordionContent active={activeIndex === index}>
            {topico.objeto_aprendizagem.map((objeto, index) => (
              <div
                key={objeto.id}
                onClick={() => handleSelectObject(topico.id, objeto.id)}
              >
                <p>{objeto.codigo_unidade_ensino}</p>
                <p>{objeto.descricao}</p>
              </div>
            ))}
          </AccordionContent>
        </div>
      ))}
    </Accordion>
  );
};
