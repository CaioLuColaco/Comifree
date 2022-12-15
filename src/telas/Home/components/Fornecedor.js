import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function Produtor({ name, location, aoPressionar }) {

    return <TouchableOpacity 
            style={estilos.cartao}
            onPress={aoPressionar}
        >
        <Image source={{url: 'https://api.lorem.space/image/pizza?w=150&amp;amp;amp;amp;h=220'}} style={estilos.imagem} accessibilityLabel={name} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{ name }</Text>
                <Text style={estilos.endereco}>{ location }</Text>
            </View>
        </View>
    </TouchableOpacity>

}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",

        // Android
        elevation: 4,

        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    endereco: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
});