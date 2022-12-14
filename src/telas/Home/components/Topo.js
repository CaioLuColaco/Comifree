import React from 'react'
import { View, Image, StyleSheet, Text} from "react-native"

import logo from "../../../../assets/adaptive-icon.png"

export default function Topo() {
    return <>
        <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Text style={estilos.boasVindas}>Olá Poupador,</Text>
            <Text style={estilos.legenda}>Encontre os fornecedores mais próximos de você!</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
      backgroundColor: '#F6F6F6',
      padding: 16,
    },
    compra: {
      backgroundColor: '#EAF5F3',
      padding: 16,
    },
    compraMensagem: {
      fontSize: 16,
      lineHeight: 26,
      color: '#464646',
    },
    imagem: {
      width: 45,
      height: 38,
    },
    boasVindas: {
      marginTop: 15,
      fontSize: 26,
      lineHeight: 42,
      fontWeight: 'bold',
      color: '#464646'
    },
    legenda: {
      fontSize: 16,
      lineHeight: 26,
      color: '#A3A3A3',
    }
  });