import Cookies from "js-cookie";

//Criando Hook para efetuar Login.
//Esse Cookie receberá o token, que faz referência ao usuário cadastro com ele.
//Esse Cookie ficará salvo no Browser.
export const doLogin = (token) => {
    Cookies.set('token', token );
}

//Verificando se o usuário está logado;
//Essa verificação servirá às rotas privadas.
export const isLogged = () => {
    const token = Cookies.get('token');
    return (token) ? true : false;
}

export const myToken = () => {
    const myToken = Cookies.get('token');
    return(myToken);
}