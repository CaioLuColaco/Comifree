import React from "react"
import { StyleSheet, FlatList, View, Image, Text } from "react-native"
import Topo from "../../components/Topo"
import Cesta from "./componentes/Cesta"

export default function Fornecedor({ route, navigation}) {
    const { nome, imagem, cestas } = route.params
    const TopoFornecedor = () => {
        return <>
            <Topo titulo={"Produtos do Fornecedor"} altura={250}/>
            <View style={estilos.conteudo}>
                <View style={estilos.logo}>
                    <Image source={imagem} style={estilos.produtorImage}/>
                    <Text style={estilos.produtor}>{nome}</Text>
                </View>
                <Text style={estilos.cestas}>Produtos</Text>
            </View>
        </>
    }
    return <FlatList 
        data={cestas}
        renderItem={
            ({item}) => <Cesta {...item} produtor={{nome, imagem}}/> }
        ListHeaderComponent={TopoFornecedor}
        style={estilos.lista}
    />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});