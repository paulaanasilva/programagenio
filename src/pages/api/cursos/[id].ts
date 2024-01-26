import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";
import { curso } from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    console.log("api", id);
    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid id" });
    }

    const cursoWithDisciplinas = await prisma.curso.findFirstOrThrow({
      where: {
        id_curso: id as string,
      },
      include: {
        disciplina_curso: {
          include: {
            disciplina: true,
          },
        },
      },
    });
    console.log("api", cursoWithDisciplinas);
    if (cursoWithDisciplinas) {
      res.status(200).json(cursoWithDisciplinas);
    } else {
      res.status(404).json({ message: "Curso not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
