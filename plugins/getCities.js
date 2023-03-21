export default function ({ $axios }, inject) {
  function params () {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', '*')

    return {
      method: 'GET',
      headers
    }
  }

  const cities = {
    get: async (uf) => {
      const response = await (await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
        params()
      )).json()

      const cities = []
      for (const key in response) {
        const element = response[key]
        cities.push(element.nome)
      }

      return cities
    }
  }

  inject('cities', cities)
}
