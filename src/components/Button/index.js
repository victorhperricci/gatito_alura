import { Text, TouchableOpacity } from "react-native"

import { ButtonStyle } from "./style"

export const Button = ({ title, onPress, pequeno = false, invertido = false, estilos }) => {
  const defaultStyle = ButtonStyle(pequeno, invertido)


  return (
    <TouchableOpacity
      style={[defaultStyle.botao, estilos]}
      onPress={onPress}
      activeOpacity={.6}
    >
      <Text style={defaultStyle.valor}>{title}</Text>
    </TouchableOpacity>
  )
}
