import React from "react";

const Signin = () =>{
    return(
        <div>             
            <header>
                <p>
                    <a href="">Simodis</a>
                </p> 
            </header>
            <div id="bg">
                <div className="ball top" />
                <div className="ball bottom" />
            </div>            
       
            <section>
                <h2>Acessar a conta</h2>
                <form action="/session" method="POST">
                    <label htmlFor="login-id" className="sr-only">Insira sua Matrícula</label>
                    <input type="text" id="login-id" name="email" placeholder="Insira sua matricula" />
                    <label htmlFor="login-pass" className="sr-only">Insira sua senha</label>
                    <input type="password" id="login-pass" name="password" placeholder="Insira sua senha" />
                <button>
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
    );
}

export default Signin;