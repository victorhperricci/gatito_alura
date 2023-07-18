import { StyleSheet } from 'react-native';
import { cores } from '../../../../styles/estilosGlobal';

export const ServicosItemStyle = StyleSheet.create({
  informacao: {
    padding: 24,
  },
  header: {
    // backgroundColor: 'red'
  },
  nome: {
    color: cores.laranja,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,

  },
  calculo: {
    color: cores.escuro,
    fontSize: 14,
    marginVertical: 8,
  },
  preco: {
    color: cores.roxo,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    // marginHorizontal: 24,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
    // backgroundColor: 'red'
  },
  carrinho: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: cores.escuro,
    fontSize: 16,
    marginRight: 8,
  },
  quantidade: {
    width: 42,
  }
});
