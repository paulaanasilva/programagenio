import { useState, useEffect } from "react";
import Image from "next/image";

async function getVagas(): Promise<Vaga[]> {
  try {
    const response = await fetch("/api/sensores");
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    const data: Vaga[] = await response.json();
    return data;
  } catch (error) {
    console.error("Falha ao buscar vagas:", error);
    return [];
  }
}

interface Vaga {
  id: number;
  filled: boolean;
  pref: boolean;
}

export default function Home() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [vagasPreferenciais, setVagasPreferenciais] = useState<Vaga[]>([]);
  const [vagasDisponiveis, setVagasDisponiveis] = useState<Vaga[]>([]);

  useEffect(() => {
    getVagas().then((data) => {
      if (data.length === 0) {
        return;
      }
      setVagas(data.sort((a, b) => a.id - b.id));
      setVagasPreferenciais(data.filter((vaga) => vaga.pref));
      setVagasDisponiveis(data.filter((vaga) => !vaga.filled));
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 bg-[#0D9474]">
      <div className="relative w-full">
        <div className="absolute top-0 right-0 z-10">
          <Image
            src="/logo.png"
            alt="Logo do Estacionamento"
            width={300}
            height={100}
          />
        </div>
      </div>
      <div className="z-4 w-full justify-center font-mono text-sm ">
        <div className="font-bold text-white text-3xl text-center pt-2">
          Estacionamento A
        </div>
        <div className="text-white text-3xl text-center p-2">
          Vagas Preferênciais: {vagasPreferenciais.length}
        </div>
        <div className="text-white text-3xl text-center p-2">
          Vagas Disponíveis: {vagasDisponiveis.length}
        </div>
        <div className="p-2 bg-gray-400 rounded-md border-black border-[1px]">
          <div className="w-full flex flex-wrap justify-center">
            {vagas.map((vaga, index) => (
              <div
                key={index}
                className="border-2 border-black p-1 m-1 rounded-md flex w-2 h-20 justify-center items-center"
                style={{ width: "calc(25% - 8px)" }}
              >
                <div
                  className={`flex items-center justify-center rounded-full p-6 w-4 h-4 ${
                    vaga.filled
                      ? "bg-red-700"
                      : vaga.pref
                      ? "bg-blue-700"
                      : "bg-green-700"
                  }`}
                >
                  <strong className="text-white text-3xl">{vaga.id}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-screen bg-green-500 py-2 text-center text-black font-semibold text-sm">
        Projeto Integrador - Grupo 8
      </div>
    </main>
  );
}
