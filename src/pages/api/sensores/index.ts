// pages/api/sensores.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Sensores } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const sensores: Sensores[] = await prisma.sensores.findMany();
        res.json(sensores);
        break;
      case "POST":
        const { filled, pref } = req.body;
        const newSensor: Sensores = await prisma.sensores.create({
          data: {
            filled,
            pref,
          },
        });
        res.status(201).json(newSensor);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    // Log do erro no servidor
    console.error("Failed to handle request:", error);

    // Enviar uma resposta de erro genérico
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
