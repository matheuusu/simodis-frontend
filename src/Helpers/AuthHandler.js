import Cookies from 'js-cookie'

//Criando Hook para efetuar Login.
//Esse Cookie receberá o token, que faz referência ao usuário cadastro com ele.
//Esse Cookie ficará salvo no Browser.
export const doLogin = token => {
  Cookies.set('token', token)
}

export const isAdmin = () => {
  const admin = Cookies.get('isAdmin')
  return admin
}

export const doAdmin = isAdmin => {
  Cookies.set('isAdmin', isAdmin)
}

export const doId = id => {
  Cookies.set('id', id)
}

export const getId = () => {
  const id = Cookies.get('id')
  return id
}

//Verificando se o usuário está logado;
//Essa verificação servirá às rotas privadas.
export const isLogged = () => {
  const token = Cookies.get('token')
  return token ? true : false
}

export const myToken = () => {
  const myToken = Cookies.get('token')
  return myToken
}

export const outId = () => {
  Cookies.remove('id')
}

export const logout = () => {
  Cookies.remove('token')
  Cookies.remove('id')
  Cookies.remove('isAdmin')
}
