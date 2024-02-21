import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import CardCurso from "@/components/CardCurso";
import { curso } from "@prisma/client";
import router from "next/router";
import Link from "next/link";

export default function MeusCursos() {
  const [cursos, setCursos] = useState<curso[]>([]);

  return (
    <>
      <Head>
        <title>Programa Genio | Portugol Studio</title>
      </Head>
      <p></p>
      <div>
        <iframe
          src="https://portugol-webstudio.github.io"
          title="Portugol Webstudio"
          width="100%"
          height="800px"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}
