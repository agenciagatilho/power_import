export default function ({ $axios }, inject) {
  const baseUrl = 'https://api.rd.services'

  function params (data, auth = false) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', '*')

    return {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
  }

  const data = {
    auth: 'api_key=sLfJmLQstPeSTauTdMYPULcbWqDxhWlhzTOM',
    conversion (data) {
      return {
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: data.conversion_identifier,
          name: data.name,
          email: data.email,
          mobile_phone: data.telphone,
          traffic_source: window.location.pathname.split('utm_source')[1]?.split('&')[0] || 'organic',
          traffic_medium: window.location.pathname.split('utm_medium')[1]?.split('&')[0] || '',
          traffic_campaign: window.location.pathname.split('utm_campaign')[1]?.split('&')[0] || '',
          traffic_value: window.location.pathname.split('utm_value')[1]?.split('&')[0] || 'organic'
        }
      }
    }
  }

  const api = {
    async send (item) {
      return await fetch(baseUrl + '/platform/conversions?' + data.auth, params(data.conversion(item)))
    }
  }

  inject('api', api)
}
