import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const constTopicoWithObjetoAprendizagem = await prisma.topico.findMany({
      include: {
        objeto_aprendizagem: true,
      },
    });

    res.status(200).json(constTopicoWithObjetoAprendizagem);
  }
  res.status(405).json({ message: "Method not allowed" });
}

