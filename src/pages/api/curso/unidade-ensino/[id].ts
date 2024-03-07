import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";
import { unidade_ensino } from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    console.log("api", id);
    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid id" });
    }

    const cursoWithUnidadeEnsino = await prisma.curso.findUnique({
      where: { id: String(id) },
      include: { unidade_ensino: true },
    });

    console.log("api", cursoWithUnidadeEnsino);
    if (cursoWithUnidadeEnsino) {
      res.status(200).json(cursoWithUnidadeEnsino);
    } else {
      res.status(404).json({ message: "Curso not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
