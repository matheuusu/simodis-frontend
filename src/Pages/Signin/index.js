import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import useApi from '../../Helpers/SimodisAPI';
import { doLogin } from '../../Helpers/AuthHandler';

const Signin = () => {

    const api = useApi();
    
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [disable, setDisable] = useState(false);

    const handleFazerLogin = async (e) => {
        e.preventDefault();
        setDisable(true);

        if(!usuario || !senha){
            alert("Informe suas credenciais!");
        }else{

            const json = await api.login(usuario, senha);

            if(json.error){
                alert(JSON.stringify(json.error));
                setDisable(false);
                return;
            }else{
                doLogin(json.token);
                window.location.href = '/home';
            }
        }
    }

    return (
        <BrowserRouter>
            <div id="login-scr" class="content">
                <header>
                    <p>
                        <a href="">Simodis</a>
                    </p>
                </header>

                <div id="bg">
                    <div className="ball top" />
                    <div className="ball bottom" />
                </div>

                <main>
                    <div class="container">
                        <section>
                            <h2>Acessar a conta</h2>
                            <form action="/session" method="POST">
                                <label htmlFor="login-id" className="sr-only">Insira sua Matrícula</label>
                                <input 
                                    type="text" 
                                    id="login-id" 
                                    name="email" 
                                    placeholder="Insira sua matricula" 
                                    value={usuario}
                                    disabled={disable}
                                    onChange={
                                        (e) => {setUsuario(e.target.value)}
                                    }
                                />
                                
                                <label htmlFor="login-pass" className="sr-only">Insira sua senha</label>
                                <input 
                                    type="password" 
                                    id="login-pass" 
                                    name="password" 
                                    placeholder="Insira sua senha" 
                                    value={senha}
                                    disabled={disable}
                                    onChange={
                                        (e) => {setSenha(e.target.value)}
                                    }
                                />
                                
                                <button onClick={handleFazerLogin}>
                                    <img src="../images/enter-room.svg" alt="Login" />
                                    Login
                                </button>
                            </form>
                        </section>

                        <div className="separator">
                            <div />
                            <div>ou</div>
                            <div />
                        </div>
                        
                        <section>
                            <h2>Não consegue acessar a conta?</h2>
                            <a href="/recovery-pass" className="button outlined">
                                <img src="/images/users.svg" alt="Recuperar senha" />
                                Recuperar senha
                            </a>
                        </section>
                    </div>
                </main>
            </div>
        </BrowserRouter>    
    );
}

export default Signin;