import React from "react"
import { View, StyleSheet } from "react-native"
import Topo from "./components/Topo"
import Corpo from "./components/Corpo"

export default function Cesta() {
    return <>
        <Topo />
        <View style={estilos.cesta}>
            <Corpo />
        </View>
    </> 
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})