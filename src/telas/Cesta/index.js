import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"

import Topo from "./components/Topo"
import Corpo from "./components/Corpo"
import Lista from "./components/Lista"

export default function Cesta() {
    return < ScrollView >
        <Topo />

        <View style={estilos.cesta}>
            <Corpo />
            <Lista />
        </View>


    </ ScrollView> 
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})