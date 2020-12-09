export function getAll() {
  return fetch('https://lojavirtual-api--tarleylana.repl.co/api/v1/categorias')
          .then(res => res.json())
          .catch(erro => {
            console.error('Erro ao buscar categorias.', erro)
            return []
          })
}