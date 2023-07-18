import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { ServicosItemStyle } from "./style";

// components
import { InputChooseQuantity } from "../../../components/InputChooseQuantity";
import { Button } from "../../../components/Button";

export function ServicosItem({ item }) {
  const [quantidade, setQuantidade] = useState(1)
  const [preco, setPreco] = useState(0)
  const [expandir, setExpandir] = useState(false)

  const calculaPreco = (quantidade) => {
    setPreco(item.preco * quantidade)
  }

  const inverteExpandir = () => {
    setExpandir(!expandir)
  }

  useEffect(() => {
    calculaPreco(quantidade)
  }, [quantidade])

  return (
    <View style={ServicosItemStyle.informacao}>
      <TouchableOpacity style={ServicosItemStyle.header} onPress={inverteExpandir} activeOpacity={.6}>
        <Text style={ServicosItemStyle.nome} >{item.nome}</Text>
        <Text style={ServicosItemStyle.descricao}>{item.descricao}</Text>
        <Text style={ServicosItemStyle.preco}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.preco)}
        </Text>
      </TouchableOpacity>

      {expandir && (
        <View style={[ServicosItemStyle.carrinho]}>
          <View>
            <View style={ServicosItemStyle.valor}>
              <Text style={ServicosItemStyle.descricao}>Quantidade:</Text>
              <InputChooseQuantity
                valor={quantidade}
                setQuantidade={setQuantidade}
                estilos={ServicosItemStyle.quantidade}
              />
            </View>

            <View style={ServicosItemStyle.valor}>
              <Text style={ServicosItemStyle.descricao}>Total:</Text>
              <Text style={ServicosItemStyle.preco}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(preco)}
              </Text>
            </View>
          </View>

          <Button title="Adicionar ao Carrinho" />
        </View>
      )}

      <View style={ServicosItemStyle.divisor} />
    </View>
  )
}
