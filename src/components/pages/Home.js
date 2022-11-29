import logoquest from './../../images/logoQuestBranco.svg';

import './CSS/Home.css';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
    <div className='FundoTotal'>
        <div className="FundoApp" >
            <div className='Fun-app-logo'>
                <img className="App-logo" src={logoquest}  alt="logo" />
            </div>
            <div className='Botao'> 
                <LinkButton to = "/Jogo" text='Jogar'/>
                {/* <button className='Jogar'>
                    <Link to='/Jogo'>Jogar</Link>
                    Jogar
                </button>  */}
            </div> 
            <div className='Botao'> 
                <LinkButton to = "/Login" text='Login'/>
            </div> 
            <div className='Botao'> 
                <LinkButton to = "/Cadastro" text='Cadastre-se'/>
            </div> 
        </div>
    </div>
    )
}

export default Home