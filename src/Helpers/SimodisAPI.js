import Cookies from 'js-cookie'
import qs from 'qs'

const BASEAPI = 'https://backend-simodis.herokuapp.com'

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token')
    if (token) {
      body.token = token
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/'
    return
  }

  return json
}

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get('token')
    if (token) {
      body.token = token
    }
  }

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`)
  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}

//Criando um Hooks com as funções que farão requisições no WebService
const SimodisAPI = {
  login: async (email, password) => {
    const json = await apiFetchPost('/user/signin', { email, password })
    return json
  },

  createUser: async (name, email, password, isAdmin) => {
    const json = await apiFetchPost('/user/signup', {
      name,
      email,
      password,
      isAdmin
    })
    return json
  },

  addCursos: async (name, description, users_id) => {
    const json = await apiFetchPost('/course/add', {
      name,
      description,
      users_id
    })
    return json
  },

  getCoursers: async () => {
    const json = await apiFetchGet('/course/list')
    return json.coursers
  },

  getUser: async (token) => {
    const json = await apiFetchGet('/user/info', { token })
    return json
  },

  getCourseGrade: async (token) => {
    const json = await apiFetchGet('/course/mycourse', {token})
    return json.coursersAndGrades
  }
}

export default () => SimodisAPI
