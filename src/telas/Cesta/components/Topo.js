import React from "react";
import { Image, Text, StyleSheet, Dimensions } from "react-native"

import topo from "../../../../assets/topo.png"

const width = Dimensions.get("screen").width

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes do produto</Text>
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
        padding: 66,
        fontFamily: "MontserratBold"
    }
})