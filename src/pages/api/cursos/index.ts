import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";
import multer from 'multer';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const upload = multer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cursos = await prisma.curso.findMany({});
    res.status(200).json(cursos);
  } else if (req.method === "POST") {
    upload.none()(req, res, async () => {
      const { nome_curso, descricao } = req.body;
      const imagem = req.file;
      const curso = await prisma.curso.create({
        data: {
          nome_curso,
          descricao,
          imagem
        },
      });
      res.status(201).json(curso);
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}



