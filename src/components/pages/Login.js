import logoquest from './../../images/logoQuest.svg';
import './CSS/Login.css';

import LinkButton from '../layout/LinkButton';
import LoginForm from '../Formularios/LoginForm';
import { useEffect } from 'react';

function Login() {

    useEffect(()=>{
        
    },[])

    return (
        <div className='login-FundoTotal'>
            <div className="login-FundoApp" >
                <div className='login-FundoBranco'>
                    <div className='login-DivEsquerda'>
                        <div className='login-gradient-LogoQuest'>
                            <img className="login-LogoQuest" src={logoquest} alt="logo" />
                        </div>
                        <div className='login-Cadastro'>
                            <p> Ainda não tem conta ?</p>
                            <div className='btn-Cadastro'>
                                <LinkButton to = "/Cadastro" text='Cadastre-se'/>
                            </div>
                            {/* 
                            <button className='botao-Cadastro'>Cadastre-se</button> */}
                        </div>

                    </div>
                    <div className='login-DivDireita'>
                        <div className='login-Texto-Login'>
                            <p>Login</p>
                        </div>
                        <div className='login-Div-Forms'>
                            <LoginForm btnText="Entrar" />
                            {/* <form className='login-Forms-Containt'>
                                <div className='login-Forms-Input-Container'>
                                    {/* <label>E-mail</label> 
                                    <input placeholder='E-mail' type='text' name='E-mail' />
                                </div>
                                <div className='login-Forms-Input-Container'>
                                    {/* <label>Senha</label> 
                                    <input placeholder='Senha' type='text' name='Senha' />
                                </div>
                            </form> */}
                        </div>
                        
                        {/* <div className='login-Login'>
                            <div className='botao-Login'>
                                <LinkButton to = "/Jogo" text='Login'/>
                            </div>
                            {/* <button className='botao-Login'>Login</button> */}
                        {/*</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login