import type { WorkoutType } from "@/type/WorkoutMockTypes";

const workout: WorkoutType = {
    perna: [
        { workout: 'Polichinelo', description: '1 a 2 minutos (alongamento / aquecimento)' },
        { workout: 'Agachamento', description: '3 series de 10-12 repetições' },
        { workout: 'Elevação Pélvica', description: '3 series de 10-12 repetições' },
        { workout: 'Panturrilha', description: '3 series de 10-12 repetições' },
        { workout: 'Elevação Pélvica', description: '(Caso ache que foi muito pouco) 3 series de 10-12 repetições cada perna' },
    ],
    'abdmen+gluteos': [
        { workout: 'Polichinelo', description: '1 a 2 minutos (alongamento / aquecimento)' },
        { workout: 'Abdominal Reto', description: '3 series de 10-12 repetições' },
        { workout: 'Abdominal Infra', description: '3 series de 10-12 repetições' },
        { workout: 'Abdominal Prancha Lateral', description: 'De 30 segundos ao tanto que aguentar(dos dois lados)' },
        { workout: 'Glúteos em 4 apoios', description: '3 series de 10-12 repetições cada perna' },
        { workout: 'Superman(Glúteos)', description: '3 series de 10-12 repetições cada perna' },
    ],
    superiores: [
        { workout: 'Polichinelo', description: '1 a 2 minutos (alongamento / aquecimento)' },
        { workout: 'Flexões de joelho', description: '2 séries de 10-12 repetições' },
        { workout: 'Elevação lateral com garrafinha de água', description: '2 séries de 10-12 repetições' },
        { workout: 'Triceps Dips em Cadeira', description: '2 séries de 10-12 repetições' },
        { workout: 'Curl de Bíceps com garrafa', description: '2 séries de 10-12 repetições' },
    ]
};


export { workout };    


