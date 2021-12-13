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

const apiFetchPut = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token')
    if (token) {
      body.token = token
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'PUT',
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
    window.location.href = '/'
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

  getUser: async token => {
    const json = await apiFetchGet('/user/info', { token })
    return json
  },

  getListUsers: async () => {
    const json = await apiFetchGet('/user/listusers')
    return json.users
  },

  getMyCoursers: async token => {
    const json = await apiFetchGet('/course/mycourse', { token })
    return json.coursersAndGrades
  },

  createQuestion: async (
    title,
    answer_true,
    course_id,
    answerOne,
    answerTwo,
    answerThree,
    answerFour
  ) => {
    const json = await apiFetchPost('/question/create', {
      title,
      answer_true,
      course_id,
      answerOne,
      answerTwo,
      answerThree,
      answerFour
    })

    return json
  },

  getPass: async email => {
    const json = await apiFetchGet('/user/recoverpassword', {
      email
    })
    return json
  },

  altPassword: async (token, newPassword) => {
    const json = await apiFetchPut('/user/altpassword', {
      token,
      newPassword
    })
    return json
  },

  altProfile: async (token, novoName, novoEmail, novaPassword) => {
    const json = await apiFetchPut('/user/update', {
      token,
      novoName,
      novoEmail,
      novaPassword
    })
    return json
  },

  getQuestions: async id_course => {
    const json = await apiFetchGet('/course/tasks', {
      id_course
    })

    return json.tasks_course
  },

  createClass: async (token, id) => {
    const json = await apiFetchPost('/class/add', { token, id })

    return json
  }
},
      
  resolveTask: async (answers) => {
   const json = await apiFetchPost('/course/resolvetask', {answers})
   
   return json
  }

export default () => SimodisAPI
