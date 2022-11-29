
import logoquest from './../../images//logoQuest.svg';
import './CSS/Cadastro.css';

import CadastroForm from '../Formularios/CadastroForm';
import LinkButton from '../layout/LinkButton';
import { useHistory } from 'react-router-dom';

function Cadastro() {

    // const history = useHistory()

    function createPost(user) {
        
        // initialize name, nick, email e senha
        user.name = []
        user.nickname = []
        user.email = []
        user.password = []
        user.confirmpassword = []

        fetch("http:/localhost:5000/users",{

            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='cadastro-FundoTotal'>
            <div className="cadastro-FundoApp" >
                <div className='cadastro-FundoBranco'>
                    <div className='cadastro-DivEsquerda'>
                        <div className='cadastro-gradient-LogoQuest'>
                            <img className="cadastro-LogoQuest" src={logoquest} alt="logo" />
                        </div>
                        <div className='cadastro-Cadastro'>
                            <p> Já possui cadastro ?</p>
                            <div className='btn-Login'>
                                <LinkButton to = '/Login' text = 'Login'/>
                            </div>
                        </div>

                    </div>
                    <div className='cadastro-DivDireita'>
                        <div className='cadastro-Texto-Login'>
                            <p>Crie sua conta</p>
                        </div>
                        <div className='cadastro-Div-Forms'>
                            <CadastroForm  btnText="Cadastrar" />
                            {/* <form className='cadastro-Forms-Containt'>
                                <div className='cadastro-Forms-Input-Container'>
                                    <label>E-mail</label> 
                                    <input placeholder='E-mail' type='text' name='E-mail' />
                                </div>
                                <div className='cadastro-Forms-Input-Container'>
                                    <label>Senha</label> 
                                    <input placeholder='Senha' type='text' name='Senha' />
                                </div>
                            </form> */}
                        </div>
                        
                        {/* <div className='cadastro-Login'>
                            <button className='botao-Login'>Login</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro