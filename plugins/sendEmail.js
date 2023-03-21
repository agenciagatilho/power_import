// eslint-disable-next-line no-empty-pattern
export default function ({}, inject) {
  const main = {
    async send (data) {
      const formdata = new FormData()
      formdata.append('email', data.email)
      formdata.append('name', data.name)
      formdata.append('msg', data.msg)
      formdata.append('subject', data.subject)

      const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        body: formdata,
        redirect: 'follow'
      }

      const response = (await fetch('https://viener.com.br/sendEmail.php', requestOptions))
      return response
    }
  }
  inject('api', main)
}
