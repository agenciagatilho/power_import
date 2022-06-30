// eslint-disable-next-line no-empty-pattern
export default function ({}, inject) {
  const main = {
    async send () {
      const myHeaders = new Headers()
      myHeaders.append('Access-Control-Allow-Origin', '*')
      myHeaders.append('mode', 'no-cor')

      const formdata = new FormData()
      formdata.append('email', 'desenvolvimento@agenciagatilho.com.br')
      formdata.append('name', 'aaa')
      formdata.append('msg', 'aaa')

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      }

      const response = await (await fetch('https://viener.com.br/sendEmail.php', requestOptions)).body()
      console.log(response)
    }
  }
  main.send()
  inject('api', main)
}
