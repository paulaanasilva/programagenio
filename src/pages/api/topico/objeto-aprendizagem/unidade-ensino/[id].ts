import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";
import { objeto_aprendizagem } from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid id" });
    }

    const topicoWithObjetoAprendizagem = await prisma.topico.findMany({
      where: { id_unidade_ensino: String(id) },
      include: { objeto_aprendizagem: true },
    });

    if (topicoWithObjetoAprendizagem) {
      res.status(200).json(topicoWithObjetoAprendizagem);
    } else {
      res.status(404).json({ message: "Curso not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
