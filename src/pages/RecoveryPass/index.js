import React from "react";

const RecoveryPass = () => {
    return (


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
                        <h2>Recuperar senha</h2>
                        <form action="" method="">
                            <label className="sr-only" htmlFor="room-pass">Insira sua matrícula</label>
                            <input type="number" name="login-id" id="login-id" placeholder="Insira sua matrícula" />

                            <button>
                            <img src="../images/users-white.svg" alt="Enviar" />
                            Enviar
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default RecoveryPass;