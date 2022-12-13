import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import logo from "../../../../assets/logo.png"

export default function Corpo() {
    return <>
        <Text style={estilos.nome}>Caixa de 1L de leite Itambé</Text>
        <View style={estilos.marca}>
            <Image source={logo} style={estilos.logoFornecedor}/>
            <Text style={estilos.fornecedor}>Mercadinho São Luiz</Text>
        </View>
        <Text style={estilos.description}>Uma unidade de uma caixa de 1L de leite da conhecida Itambé, responsável por produtos lacteos de grande qualidade.</Text>
        <Text style={estilos.price}>R$ 5,00</Text>
    </>
}

const estilos = StyleSheet.create({
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
        marginLeft: 12,
        fontFamily: "MontserratRegular"
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