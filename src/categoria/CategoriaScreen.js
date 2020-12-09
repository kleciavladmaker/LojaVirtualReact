import React, {useEffect, useState} from 'react'
import {
  useParams,
  useHistory
} from 'react-router-dom'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import {Menu} from 'primereact/menu'
import {Button} from 'primereact/button'

import Header from '../home/Header'
import Footer from '../home/Footer'

import './CategoriaScreen.css'

import * as CategoriaApi from '../home/CategoriaApi'
import * as ProdutoApi from './ProdutoApi'

/*
const categorias = [
  {nome: 'Android'}, 
  {nome: 'Apple'}, 
  {nome: 'Playstation'}, 
  {nome: 'Windows'}, 
]

const produtos = [
  {nome: 'Produto 1', descricao: 'Descrição do produto 1', preco: 100.59, imagem: '[IMAGEM]'},
  {nome: 'Produto 2', descricao: 'Descrição do produto', preco: 100.59, imagem: '[IMAGEM]'},
  {nome: 'Produto 3', descricao: 'Descrição do produto', preco: 100.59, imagem: '[IMAGEM]'},
  {nome: 'Produto 4', descricao: 'Descrição do produto', preco: 100.59, imagem: '[IMAGEM]'},
  {nome: 'Produto 5', descricao: 'Descrição do produto', preco: 100.59, imagem: '[IMAGEM]'},
  {nome: 'Produto 6', descricao: 'Descrição do produto', preco: 100.59, imagem: '[IMAGEM]'},
]
*/
export default function CategoriaScren() {
  const {id} = useParams()
  const history = useHistory()

  const [categorias, setCategorias] = useState([])
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    carregarCategorias()
  }, [])

  async function carregarCategorias() {
    const dados = await CategoriaApi.getAll()
    setCategorias(dados)
  }

  useEffect(() => {
    carregarProdutos()
  }, [id])

  async function carregarProdutos() {
    const dados = await ProdutoApi.get(id)
    setProdutos(dados)
  }

  const itens = [
    {
      label: 'Quer ver outras categorias?',
      items: categorias.map(c => {
        return {label: c.nome, command: () => history.push(`/categorias/${c.id}`)}
      })
    }
  ]

  return (
    <>
      <Header />
      <nav>
        <Button label="Ver carrinho" icon="pi pi-success" iconPos="right" className="p-button-rounded p-button-success" />
      </nav>
      <section>
        <nav>
          <Menu model={itens}/>
        </nav>
        <aside>
          <table>
            <thead>
              <tr>  
                <th></th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {
                produtos.map(p => (
                  <tr>
                    <td>
                      <img src={p.img} alt={p.nome} />
                    </td>
                    <td>
                      <p>{p.nome}</p>
                      <p>{p.descricao}</p>
                    </td>
                    <td>{p.preco}</td>
                    <td>
                     <Button icon="pi pi-check" className="p-button-rounded p-button-danger" />
                    </td>
                  </tr>
                ))
              }


            </tbody>
          </table>
        </aside>
      </section>
      <Footer />  
    </>
  )
}