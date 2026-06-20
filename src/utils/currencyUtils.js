const moedaPais = 'BRL'
const idioma = 'pt-BR'

function formataPreco(preco) {
  return Number(preco).toLocaleString(idioma, {
    style: 'currency',
    currency: moedaPais
  })
}

export { formataPreco }
