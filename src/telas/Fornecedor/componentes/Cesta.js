import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto';

// {"categoryId": 3, "companyId": 4, "createdAt": "2022-12-15T00:04:34.985Z", "description": "Leito perfeito para os intolerantes a lactose",
//  "id": 6, "price": 6, "quantity": 50, "title": "Leite sem lactose", "updatedAt": "2022-12-15T00:04:34.985Z", "price": "2023-01-15T03:00:00.000Z"}

export default function Cesta({ title, description, price, produtor }) {
    const navigation = useNavigation();
    const {name} = produtor
    return <TouchableOpacity
        style={estilos.cesta}
        onPress={() => navigation.navigate('Cesta', {title, description, price, name})}>
        <View style={estilos.conteudo}>
            <Image source={{url: 'https://api.lorem.space/image/pizza?w=150&amp;amp;amp;amp;h=220'}} style={estilos.imagem} />

            <View style={estilos.textos}>
                <Texto style={estilos.nome}>{title}</Texto>
                <Texto style={estilos.descricao}>{description}</Texto>
                <Texto style={estilos.preco}>R$ {price}</Texto>
            </View>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
    },
    conteudo: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
    },
    imagem: {
        width: 62,
        height: 62,
        borderRadius: 6,
    },
    textos: {
        flex: 1,
        marginLeft: 8,
    },
    nome: {
        color: '#464646',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 14,
        lineHeight: 22,
    },
    preco: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 4,
    }
});
