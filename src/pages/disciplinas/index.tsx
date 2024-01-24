import React, { useEffect, useState } from 'react';
import { getDisciplinas } from './api'; // Assuming there is an API function to fetch the disciplinas

interface Disciplina {
    id_disciplina: string;
    descricao: string;
    carga_horaria: number;
    nome_disciplina: string;
    cod_disciplina: number;
}

const DisciplinasList: React.FC = () => {
    const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

    useEffect(() => {
        const fetchDisciplinas = async () => {
            try {
                const response = await getDisciplinas(); // Call the API function to fetch the disciplinas
                setDisciplinas(response.data); // Assuming the API response contains the disciplinas data
            } catch (error) {
                console.error('Error fetching disciplinas:', error);
            }
        };

        fetchDisciplinas();
    }, []);

    return (
        <div>
            <h1>Disciplinas</h1>
            <ul>
                {disciplinas.map((disciplina) => (
                    <li key={disciplina.id_disciplina}>
                        {disciplina.nome_disciplina} - {disciplina.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisciplinasList;
