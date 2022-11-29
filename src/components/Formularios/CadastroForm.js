import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./CadastroForm.css"

function CadastroForm( {btnText} ) {

    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [nickname, setNickname]=useState("")
    const [password, setPassword]=useState("")
    const [confirmpassword, setConfirmpassword]=useState("")
    // const history = useHistory();

    useEffect(()=>{
        console.log("Renderizei")
        fetch('http://localhost:5000/users')
        .then((response) => response.json())
        .then((data) => setNome(data));
    },[])

    function submit (evento) {
        evento.preventDefault() // Sempre que for formulário colocar
        console.log(email)  
        if (!email.includes("@") && !email.includes(".com")){
            alert("Email inválido")
            return;
        }
        if (password != confirmpassword){
            alert("Senhas imcompatíveis")
            return;
        }

        let object={
            "name": nome,
            "nickname": nickname,
            "email": email,
            "password": password
        }
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
        alert("Cadastro realizado")
        // history.push("/Home");
    }

    function alterarNome (evento) {
        let eventoNome = evento.target.value
        setNome(evento.target.value)
    }

    function alterarEmail (evento) {
        let eventoEmail = evento.target.value
        setEmail(evento.target.value)
    }

    function alterarNickname (evento) {
        let eventoNickname = evento.target.value
        setNickname(evento.target.value)
    }

    function alterarPassword (evento) {
        let eventoPassword = evento.target.value
        setPassword(evento.target.value)
    }

    function alterarConfirmPassword (evento) {
        let eventoConfirmPassword = evento.target.value
        setConfirmpassword(evento.target.value)
    }

    return (
        <form  className="form" onSubmit={(e)=> submit(e)}>
            <Input 
                type="text" 
                text="Nome" 
                name="name" 
                placeholder="Nome" 
                handleOnChange={(e)=> alterarNome(e)}
            />
            <Input 
                type="text" 
                text="Nickname" 
                name="nickname" 
                placeholder="Nickname" 
                handleOnChange={(e)=> alterarNickname(e)}
            />            
            <Input 
                type="text" 
                text="E-mail" 
                name="email" 
                placeholder="E-mail" 
                handleOnChange={(e)=> alterarEmail(e)}
            />
            <Input 
                type="password" 
                text="Senha" 
                name="password" 
                placeholder="Senha" 
                handleOnChange={(e)=> alterarPassword(e)}
            />
            <Input 
                type="password" 
                text="confirmaSenha" 
                name="confirmpassword" 
                placeholder="Confirmar senha"
                handleOnChange={(e)=> alterarConfirmPassword(e)}
            />
            <div className="form_btn">
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default CadastroForm