import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [error, setError] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    

    const validateUser = async (user: string, pass: string) => {
        return user === 'admin' && pass === 'admin';
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValid = await validateUser(user, pass);

        if (!isValid) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <>
            {<div className="flex items-center justify-center h-screen">
                <div className="page-login">
                    <div className="ui centered grid container">
                        <div className="five wide column">
                            {error && (
                                <div className="ui icon warning message">
                                    <i className="lock icon"></i>
                                    <div className="content">
                                        <p>Nome de usuário ou senha incorretos</p>
                                    </div>
                                </div>
                            )}
                            <div className="ui fluid card items-center">
                                <img className="logologin m-2" src="sologo.jpeg" />
                                <div className="content">
                                    <form className="ui form" method="POST" onSubmit={handleSubmit}>
                                        <div className="field">
                                            <label>E-mail ou usuário</label>
                                            <input type="text" name="user" onChange={e => setUser(e.target.value)} />
                                        </div>
                                        <div className="field">
                                            <label>Senha</label>
                                            <input type="password" name="pass" onChange={e => setPass(e.target.value)} />
                                        </div>
                                        <div>
                                            <button className="ui right floated violet button" type="submit">
                                                Entrar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default LoginPage;