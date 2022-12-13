import React from "react"
import { Image, View, Text, StyleSheet, FlatList } from "react-native"

import imageMilk from "../../../../assets/frutas/leite.png"

export default function Lista() {
    const lista = [
        {
            nome: "Caixa de Leite.",
            foto: imageMilk
        },
        {
            nome: "Caixa de Leite. ",
            foto: imageMilk
        }
    ]

    return <>
        <Text style={estilos.titulo}>Itens do Produto</Text>
        { lista.map(({ nome, foto }) => {
            return  <View key={nome} style={estilos.item}>
                <Image source={foto} style={estilos.imagem}></Image>
                <Text style={estilos.nome} >{ nome }</Text>
            </View>
        }) }
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontFamily: "MontserratBold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight:26,
        marginLeft: 11,
        color: "#464646"
    }
})