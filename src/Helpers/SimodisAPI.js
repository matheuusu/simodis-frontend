import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://localhost:4000";

const apiFetchPost = async (endpoint, body) => {
    //Verificando se algum token foi enviado no Body
    if(!body.token){
        //Se não foi enviado, pega do Cookies do navegador.
        let token = Cookies.get('token');
        //Se ele existir no Cookies, envia o token no Body da requisição.
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    //Verificando se há algum notallowed vindo do Middleware (Backend)
    if (json.notallowed){
        window.location.href = '/';
        return;
    }

    return json;
}

//Criando um Hooks com as funções que farão requisições no WebService
const SimodisAPI = {
    login: async (nome, senha) => {
        const json = await apiFetchPost(
            '/user/signin',
            {nome, senha}
        );
        return json;
    }
}

export default () => SimodisAPI;