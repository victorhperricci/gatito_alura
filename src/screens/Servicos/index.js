import { Text, SafeAreaView, StatusBar } from "react-native";
import estilosGlobal from "../../../styles/estilosGlobal";

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'Não dê banho no seu gato! Mas se precisar nós damos por você',
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.9,
    descricao: 'Uma dose da vacina V4. Seu gato precisa de duas',
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.9,
    descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano',
  },
  {
    id: 4,
    nome: 'Vacina Giárdia',
    preco: 99.9,
    descricao: 'Uma dose da vacina Giárdia. Seu gato precisa de duas',
  },
  {
    id: 5,
    nome: 'Consulta',
    preco: 99.9,
    descricao: 'Uma consulta com veterinário',
  }
]

export function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços</Text>
    </SafeAreaView>
  )
}
