/* eslint-disable react-hooks/exhaustive-deps */
import { CursoWithRelations } from "@/pages/meus-cursos/[id]";
import React, { Component, use, useEffect, useState } from "react";
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";
import { AccordionTopicos } from "./accordion-topicos";
import { useRouter } from "next/router";

interface AccordionUnidadesProps {
  readonly curso: CursoWithRelations;
}

export const AccordionUnidades = ({ curso }: AccordionUnidadesProps) => {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);
  const router = useRouter();

  const { id, id_unidade, id_topico, id_objeto } = router.query;

  const handleClick = (id: string) => {
    if (activeId === id) {
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  };

  useEffect(() => {
    if (id_unidade) handleClick(id_unidade as string);
  }, [id_unidade]);

  return (
    <Accordion>
      {curso.unidade_ensino.map((unidade) => (
        <>
          <AccordionTitle
            key={unidade.id}
            active={activeId === unidade.id}
            onClick={() => handleClick(unidade.id)}
          >
            <Icon name="dropdown" />
            {unidade.nome}
          </AccordionTitle>
          <AccordionContent key={unidade.id} active={activeId === unidade.id}>
            <div className="pl-3">
              <AccordionTopicos key={unidade.id} unidade={unidade} />
            </div>
          </AccordionContent>
        </>
      ))}
    </Accordion>
  );
};
