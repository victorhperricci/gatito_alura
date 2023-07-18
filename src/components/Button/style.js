import { StyleSheet } from 'react-native';
import { cores } from '../../../styles/estilosGlobal';

export const ButtonStyle = (pequeno, invertido) => StyleSheet.create({
  botao: {
    width: 140,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: invertido ? cores.laranja : cores.roxo,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.roxo : cores.laranja,
  }
});
