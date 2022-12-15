import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import logo from "../../../../assets/logo.png"

export default function Corpo({dados}) {
    const {title, description, price, name} = dados
    return <>
        <Text style={estilos.nome}>{title}</Text>
        <View style={estilos.marca}>
            <Image source={logo} style={estilos.logoFornecedor}/>
            <Text style={estilos.fornecedor}>{name}</Text>
        </View>
        <Text style={estilos.description}>{description}</Text>
        <Text style={estilos.price}>R$ {price}</Text>
        <Pressable style={ ({pressed}) => [{opacity: pressed ? 0.6 : 1}, estilos.button] } onPress={() => {}}>
            <Text style={estilos.textButton}>Comprar</Text>
        </Pressable>
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
    button: {
        backgroundColor: "#2A9F85",
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6
    },
    textButton: {
        textAlign: "center",
        fontFamily: "MontserratBold",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26
    }
})