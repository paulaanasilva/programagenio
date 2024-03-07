import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cursos = await prisma.curso.findMany({});
    res.status(200).json(cursos);
  } else if (req.method === "POST") {
    const { nome, descricao } = req.body;
    const curso = await prisma.curso.create({
      data: {
        nome,
        descricao,
      },
    });
    res.status(201).json(curso);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
