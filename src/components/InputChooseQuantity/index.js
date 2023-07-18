import { TextInput } from "react-native"
import { InputChooseQuantityStyle } from "./style"

export const InputChooseQuantity = ({ valor, setQuantidade, estilos }) => {
  const numberToString = String(valor)

  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/)
    if (!verificaInteiro) return

    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')

    acaoRetorno(removeZeroEsquerda)
  }

  return (
    <TextInput
      style={[InputChooseQuantityStyle.campo, estilos]}
      selectTextOnFocus
      value={numberToString}
      keyboardType="number-pad"
      maxLength={2}
      onChangeText={(valor) => atualiza(valor, setQuantidade)}
    />
  )
}
