import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import TextoIntrodutorio from './TextoIntrodutorio'
import CardCategoria from './CardCategoria'

import * as CategoriaApi from './CategoriaApi'

import './HomeScreen.css'

export default function HomeScreen() {
  const [categorias, setCategorias] = useState([])

  useEffect(()  => {
    carregarCategorias()
  }, [])

   async function carregarCategorias() {
    const dados = await CategoriaApi.getAll()
    console.log('REtorno da API...')
    setCategorias(dados)
  }

  return(
    <>
      <Header />
      <section>
        <TextoIntrodutorio />
        <aside>
          {
            categorias
              .filter(c => c.ativa)
              .map(c => 
                <Link to={'/categorias/' + c.id}>
                  <CardCategoria
                    nome={c.nome}
                    img={c.img128}
                  />
                </Link>
            )
          }
        </aside>
      </section>
      <Footer />
    </>  
  )
}