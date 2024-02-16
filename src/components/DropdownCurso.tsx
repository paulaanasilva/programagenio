import Link from "next/link";
import React from "react";
import { DropdownMenu, DropdownItem, Dropdown } from "semantic-ui-react";

interface DropdownCursoProps {
  idCurso: string;
}

const DropdownCurso = ({ idCurso }: DropdownCursoProps) => (
  <>
    <div>
      <Dropdown pointing="right">
        <DropdownMenu>
          <Link href={`/meus-cursos/${idCurso}`}>
            <DropdownItem className="m-1 text-black" text="Acessar Curso" />
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  </>
);

export default DropdownCurso;
