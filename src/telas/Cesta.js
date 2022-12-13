import React from "react"
import { StyleSheet, Image, Dimensions, Text, View } from "react-native"

import topo from "../../assets/topo.png"
import logo from "../../assets/logo.png"
const width = Dimensions.get("screen").width

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes do produto</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Caixa de 1L de leite Itambé</Text>
            <View style={estilos.marca}>
                <Image source={logo} style={estilos.logoFornecedor}/>
                <Text style={estilos.fornecedor}>Mercadinho São Luiz</Text>
            </View>
            <Text style={estilos.description}>Uma unidade de uma caixa de 1L de leite da conhecida Itambé, responsável por produtos lacteos de grande qualidade.</Text>
            <Text style={estilos.price}>R$ 5,00</Text>
        </View>
    </> 
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16, 
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 66
    }, 
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    marca: {
        flexDirection: "row",
        paddingVertical: 12
    },
    logoFornecedor: {
        width: 32,
        height: 32
    },
    fornecedor: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: "bold"
    },
})