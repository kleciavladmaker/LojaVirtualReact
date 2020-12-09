const URL = 'https://lojavirtual-api--tarleylana.repl.co/api/v1/produtos'

export function get(idCategoria) {
  return fetch(`${URL}?idCategoria=${idCategoria}`)
          .then(res => res.json())
          .catch(err => {
            console.error('Falha ao buscar produtos', err)
            return []
          })
}

export function getAll() {
   return fetch(`${URL}`)
          .then(res => res.json())
          .catch(err => {
            console.error('Falha ao buscar produtos', err)
            return []
          })
}