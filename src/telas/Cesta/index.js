import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"

import Topo from "../../components/Topo"
import Corpo from "./components/Corpo"
import Lista from "./components/Lista"

export default function Cesta({route}) {
    return < ScrollView >
        <Topo titulo={"Detalhes do Produto"}/>

        <View style={estilos.cesta}>
            <Corpo dados={{...route.params}}/>
            {/* <Lista /> */}
        </View>

    </ ScrollView> 
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})