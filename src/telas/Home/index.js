import React from "react"
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './components/Fornecedor';
import Topo from './components/Topo';

import green from '../../../assets/fornecedores/green.png';
import salad from '../../../assets/fornecedores/salad.png';
import jennyJack from '../../../assets/fornecedores/jenny-jack.png';
import grow from '../../../assets/fornecedores/grow.png';
import potager from '../../../assets/fornecedores/potager.png';

import brocolis from "../../../assets/frutas/Brocolis.png"
import pepino from "../../../assets/frutas/Pepino.png"
import tomate from "../../../assets/frutas/Tomate.png"
import batata from "../../../assets/frutas/Batata.png"
import abobora from "../../../assets/frutas/Abobora.png"

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home() {
    const lista = [
        {
          nome: "Green",
          imagem: green,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Brócolis e Pepino",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
                imagem: pepino
              },
              itens: [
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
                {
                  nome: "Pepino",
                  imagem: pepino,
                },
              ]
            },
            {
              detalhes: {
                nome: "Brócolis",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: brocolis
              },
              itens: [
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
              ]
            }
          ]
        },
        {
          nome: "Green Norte",
          imagem: green,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Brócolis e Pepino",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
                imagem: pepino
              },
              itens: [
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
                {
                  nome: "Pepino",
                  imagem: pepino,
                },
              ]
            },
            {
              detalhes: {
                nome: "Brócolis",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: brocolis
              },
              itens: [
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
              ]
            }
          ]
        },
        {
          nome: "Salad",
          imagem: salad,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Salada completa",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: pepino
              },
              itens: [
                {
                  nome: "Tomate",
                  imagem: tomate,
                },
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
                {
                  nome: "Pepino",
                  imagem: pepino,
                },
              ]
            },
            {
              detalhes: {
                nome: "Tomate e pepino",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: tomate
              },
              itens: [
                {
                  nome: "Tomate",
                  imagem: tomate,
                },
                {
                  nome: "Pepino",
                  imagem: pepino,
                },
              ]
            }
          ]
        },
        {
          nome: "Jenny Jack Farm",
          imagem: jennyJack,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Muita Batata",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: batata
              },
              itens: [
                {
                  nome: "Batata",
                  imagem: batata,
                },
              ]
            },
            {
              detalhes: {
                nome: "Tomate e Brócolis",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: brocolis
              },
              itens: [
                {
                  nome: "Tomate",
                  imagem: tomate,
                },
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
              ]
            }
          ]
        },
        {
          nome: "Grow",
          imagem: grow,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Abobora e pepino",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: pepino
              },
              itens: [
                {
                  nome: "Abóbora",
                  imagem: abobora,
                },
                {
                  nome: "pepino",
                  imagem: pepino,
                }
              ]
            },
            {
              detalhes: {
                nome: "Tomate e Abobora",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: abobora
              },
              itens: [
                {
                  nome: "Tomate",
                  imagem: tomate,
                },
                {
                  nome: "Abóbora",
                  imagem: abobora,
                }
              ]
            }
          ]
        },
        {
          nome: "Potager",
          imagem: potager,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Pepinos",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: pepino
              },
              itens: [
                {
                  nome: "Pepino",
                  imagem: pepino,
                },
              ]
            },
            {
              detalhes: {
                nome: "Brócolis, pepino e Cenoura",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: brocolis
              },
              itens: [
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
                {
                  nome: "pepino",
                  imagem: pepino,
                },
                {
                  nome: "Cenoura",
                  imagem: pepino,
                }
              ]
            }
          ]
        },
        {
          nome: "Potager Sul",
          imagem: potager,
          distancia: gerarNumeroAleatorio(1, 500),
          estrelas: gerarNumeroAleatorio(1, 5),
          cestas: [
            {
              detalhes: {
                nome: "Pepinos",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: pepino
              },
              itens: [
                {
                  nome: "Pepino",
                  imagem: pepino,
                },
              ]
            },
            {
              detalhes: {
                nome: "Brócolis, pepino e Cenoura",
                descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                preco: "R$ 40,00",
    
                imagem: brocolis
              },
              itens: [
                {
                  nome: "Brócolis",
                  imagem: brocolis,
                },
                {
                  nome: "pepino",
                  imagem: pepino,
                },
                {
                  nome: "Cenoura",
                  imagem: pepino,
                }
              ]
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
      ({ item }) => <Produtor {...item} aoPressionar={() => {}} />
    }
    keyExtractor={({ nome }) => nome}
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