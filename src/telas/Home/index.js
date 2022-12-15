import React, { useState, useEffect} from "react"
import { FlatList, Text, StyleSheet } from 'react-native';
import { buscarFornecedores } from "../../services/requisicoes/fornecedores";

import Produtor from './components/Fornecedor';
import Topo from './components/Topo';

export default function Home({ navigation }) {
    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
      const resultado = buscarFornecedores()
      setFornecedores(resultado)
    }, [] )

    // const lista = [
    //     {
    //       nome: "Green",
    //       imagem: green,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Brócolis e Pepino.",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    //             imagem: pepino
    //           },
    //           itens: [
    //             {
    //               nome: "Brócolis ",
    //               imagem: brocolis,
    //             },
    //             {
    //               nome: "Pepino  ",
    //               imagem: pepino,
    //             },
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Brócolis.",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: brocolis
    //           },
    //           itens: [
    //             {
    //               nome: "Brocolis",
    //               imagem: brocolis,
    //             },
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       nome: "Green Norte",
    //       imagem: green,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Brócolis e Pepinos. ",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    //             imagem: pepino
    //           },
    //           itens: [
    //             {
    //               nome: "Brócolis   ",
    //               imagem: brocolis,
    //             },
    //             {
    //               nome: "Pepino.  ",
    //               imagem: pepino,
    //             },
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Brocoli",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: brocolis
    //           },
    //           itens: [
    //             {
    //               nome: "Brócolis    ",
    //               imagem: brocolis,
    //             },
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       nome: "Salad",
    //       imagem: salad,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Salada completa",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: pepino
    //           },
    //           itens: [
    //             {
    //               nome: "Tomate.",
    //               imagem: tomate,
    //             },
    //             {
    //               nome: "Brócolis.    ",
    //               imagem: brocolis,
    //             },
    //             {
    //               nome: "Pepino.    ",
    //               imagem: pepino,
    //             },
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Tomate e pepino ",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: tomate
    //           },
    //           itens: [
    //             {
    //               nome: "Tomates",
    //               imagem: tomate,
    //             },
    //             {
    //               nome: "Pepino.     ",
    //               imagem: pepino,
    //             },
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       nome: "Jenny Jack Farm",
    //       imagem: jennyJack,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Muita Batata ",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: batata
    //           },
    //           itens: [
    //             {
    //               nome: "Batatas",
    //               imagem: batata,
    //             },
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Tomate e Brócolis. ",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: brocolis
    //           },
    //           itens: [
    //             {
    //               nome: "Tomate.      ",
    //               imagem: tomate,
    //             },
    //             {
    //               nome: "Brócolis.         ",
    //               imagem: brocolis,
    //             },
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       nome: "Grow",
    //       imagem: grow,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Aboboras e pepino",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: pepino
    //           },
    //           itens: [
    //             {
    //               nome: "Abóboras. ",
    //               imagem: abobora,
    //             },
    //             {
    //               nome: "pepinos.",
    //               imagem: pepino,
    //             }
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Tomate e Aboboras",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: abobora
    //           },
    //           itens: [
    //             {
    //               nome: "Tomate.  ",
    //               imagem: tomate,
    //             },
    //             {
    //               nome: "Abobora",
    //               imagem: abobora,
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       nome: "Potager",
    //       imagem: potager,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Pepinos.        ",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: pepino
    //           },
    //           itens: [
    //             {
    //               nome: "Pepino.        ",
    //               imagem: pepino,
    //             },
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Brócolis, pepino e Cenoura",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: brocolis
    //           },
    //           itens: [
    //             {
    //               nome: "Brocolis.          ",
    //               imagem: brocolis,
    //             },
    //             {
    //               nome: "Pepinos",
    //               imagem: pepino,
    //             },
    //             {
    //               nome: "Cenouras",
    //               imagem: pepino,
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       nome: "Potager Sul",
    //       imagem: potager,
    //       distancia: gerarNumeroAleatorio(1, 500),
    //       estrelas: gerarNumeroAleatorio(1, 5),
    //       cestas: [
    //         {
    //           detalhes: {
    //             nome: "Pepinos.         ",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: pepino
    //           },
    //           itens: [
    //             {
    //               nome: "Pepino.      ",
    //               imagem: pepino,
    //             },
    //           ]
    //         },
    //         {
    //           detalhes: {
    //             nome: "Brócolis, pepino e Cenoura",
    //             descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    //             preco: "R$ 40,00",
    
    //             imagem: brocolis
    //           },
    //           itens: [
    //             {
    //               nome: "Brocolis.     ",
    //               imagem: brocolis,
    //             },
    //             {
    //               nome: "Pepino. ",
    //               imagem: pepino,
    //             },
    //             {
    //               nome: "cenoura",
    //               imagem: pepino,
    //             }
    //           ]
    //         }
    //       ]
    //     }
    // ]
 
    const lista = [
      {
        "id": 1,
        "name": "Colaços House",
        "location": "Estrada do fio 2570",
        "createdAt": "2022-12-11T23:37:10.448Z",
        "updatedAt": "2022-12-11T23:38:11.717Z",
        "products": [
          {
            "id": 1,
            "title": "Rum",
            "description": "Bebida alcoolica muito boa com cocacola",
            "price": 22.4,
            "quantity": 10,
            "validity": "2022-12-26T03:00:00.000Z",
            "categoryId": 1,
            "companyId": 1,
            "createdAt": "2022-12-11T23:50:45.680Z",
            "updatedAt": "2022-12-11T23:53:08.092Z"
          },
          {
            "id": 14,
            "title": "Chocolate meio amargo",
            "description": "Chocolate que não é tão doce",
            "price": 5.9,
            "quantity": 50,
            "validity": "2022-01-19T03:00:00.000Z",
            "categoryId": 3,
            "companyId": 1,
            "createdAt": "2022-12-15T00:15:47.520Z",
            "updatedAt": "2022-12-15T00:15:47.520Z"
          }
        ]
      },
      {
        "id": 3,
        "name": "Sadia",
        "location": "Rua Benjamim Brasil, 1937 - Jardim Cearense, Fortaleza - CE, 60761-795",
        "createdAt": "2022-12-14T23:41:08.145Z",
        "updatedAt": "2022-12-14T23:41:08.145Z",
        "products": [
          {
            "id": 9,
            "title": "Nuggets de frango",
            "description": "Partes do frango juntas e a milanesa, vendido congelado",
            "price": 20.9,
            "quantity": 15,
            "validity": "2022-12-18T03:00:00.000Z",
            "categoryId": 4,
            "companyId": 3,
            "createdAt": "2022-12-15T00:10:19.829Z",
            "updatedAt": "2022-12-15T00:10:19.829Z"
          },
          {
            "id": 10,
            "title": "Pizza de calabresa",
            "description": "Deliciosa pizza de calabresa",
            "price": 22.9,
            "quantity": 25,
            "validity": "2022-12-25T03:00:00.000Z",
            "categoryId": 4,
            "companyId": 3,
            "createdAt": "2022-12-15T00:10:59.465Z",
            "updatedAt": "2022-12-15T00:10:59.465Z"
          },
          {
            "id": 11,
            "title": "Galeto congelado",
            "description": "Galetinho ja temperado, pronta para ir ao forno",
            "price": 39.9,
            "quantity": 10,
            "validity": "2022-01-15T03:00:00.000Z",
            "categoryId": 4,
            "companyId": 3,
            "createdAt": "2022-12-15T00:11:45.771Z",
            "updatedAt": "2022-12-15T00:11:45.771Z"
          }
        ]
      },
      {
        "id": 4,
        "name": "Nestlé",
        "location": "Rod. Quarto Anel Viário NCJD, Sala 13, Maracanaú - CE",
        "createdAt": "2022-12-14T23:42:34.788Z",
        "updatedAt": "2022-12-14T23:42:34.788Z",
        "products": [
          {
            "id": 6,
            "title": "Leite sem lactose",
            "description": "Leito perfeito para os intolerantes a lactose",
            "price": 6,
            "quantity": 50,
            "validity": "2023-01-15T03:00:00.000Z",
            "categoryId": 3,
            "companyId": 4,
            "createdAt": "2022-12-15T00:04:34.985Z",
            "updatedAt": "2022-12-15T00:04:34.985Z"
          },
          {
            "id": 7,
            "title": "Leite Ninho",
            "description": "O famoso leite ninho, tão querido pelos Brasileiros",
            "price": 10,
            "quantity": 30,
            "validity": "2023-01-03T03:00:00.000Z",
            "categoryId": 3,
            "companyId": 4,
            "createdAt": "2022-12-15T00:06:18.219Z",
            "updatedAt": "2022-12-15T00:06:18.219Z"
          },
          {
            "id": 8,
            "title": "Iogurte de Morango",
            "description": "Iogurte sabor morango, rico em nutrientes",
            "price": 8,
            "quantity": 35,
            "validity": "2022-12-28T03:00:00.000Z",
            "categoryId": 3,
            "companyId": 4,
            "createdAt": "2022-12-15T00:07:34.572Z",
            "updatedAt": "2022-12-15T00:07:34.572Z"
          },
          {
            "id": 12,
            "title": "Sucrilhos Nescau",
            "description": "Sucrilhos de bolinhas de nescau",
            "price": 12.9,
            "quantity": 20,
            "validity": "2022-01-05T03:00:00.000Z",
            "categoryId": 5,
            "companyId": 4,
            "createdAt": "2022-12-15T00:13:36.605Z",
            "updatedAt": "2022-12-15T00:13:36.605Z"
          },
          {
            "id": 13,
            "title": "Farinha de Aveia",
            "description": "Aveia moída",
            "price": 14.9,
            "quantity": 30,
            "validity": "2022-01-09T03:00:00.000Z",
            "categoryId": 5,
            "companyId": 4,
            "createdAt": "2022-12-15T00:14:06.075Z",
            "updatedAt": "2022-12-15T00:14:06.075Z"
          }
        ]
      },
      {
        "id": 5,
        "name": "AMBEV",
        "location": "R. Leste Cinco, 460 - Distrito Industrial I, Maracanaú - CE, 61939-020",
        "createdAt": "2022-12-14T23:43:19.020Z",
        "updatedAt": "2022-12-14T23:43:19.020Z",
        "products": [
          {
            "id": 3,
            "title": "Cerveja Brahma Duplo Malte",
            "description": "Cerveja com dois tipos de maltes diferentes, um para o sabor e outro para o aroma e para a cor",
            "price": 4.8,
            "quantity": 30,
            "validity": "2022-10-22T03:00:00.000Z",
            "categoryId": 1,
            "companyId": 5,
            "createdAt": "2022-12-14T23:56:42.072Z",
            "updatedAt": "2022-12-14T23:56:42.072Z"
          },
          {
            "id": 4,
            "title": "Cerveja Stellas Artois",
            "description": "Cerveja muito boa e que combina muito com um churrasco",
            "price": 5,
            "quantity": 40,
            "validity": "2023-01-05T03:00:00.000Z",
            "categoryId": 1,
            "companyId": 5,
            "createdAt": "2022-12-15T00:01:36.915Z",
            "updatedAt": "2022-12-15T00:01:36.915Z"
          },
          {
            "id": 5,
            "title": "Cerveja Skol",
            "description": "Cerveja muito tradicional do Brasil",
            "price": 3.6,
            "quantity": 40,
            "validity": "2023-01-10T03:00:00.000Z",
            "categoryId": 1,
            "companyId": 5,
            "createdAt": "2022-12-15T00:02:38.642Z",
            "updatedAt": "2022-12-15T00:02:38.642Z"
          }
        ]
      }
    ]

    const TopoLista = () => {
        return <>
          <Topo />
          <Text style={estilos.titulo}>Fornecedores</Text>
        </>
    }

    return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item} aoPressionar={() => { navigation.navigate('Fornecedor', {...item})}} />
    }
    keyExtractor={({ name }) => name}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
} 

const estilos = StyleSheet.create({
    lista: {
      backgroundColor: '#ffffff',
    },
    titulo: {
      fontSize: 20,
      lineHeight: 32,
      marginHorizontal: 16,
      marginTop: 16,
      fontWeight: 'bold',
      color: '#464646',
    }
  })