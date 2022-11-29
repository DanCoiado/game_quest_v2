import { useState, useEffect } from "react"
import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./LoginForm.css"

function LoginForm( {btnText} ) {
    const [email, setEmail]=useState("")
    const [usuarios, setUsuarios]=useState([])
    const [password, setPassword]=useState("")

    useEffect(()=>{
        console.log("Renderizei")
        fetch('http://localhost:5000/users')
        .then((response) => response.json())
        .then((data) => setUsuarios(data));
    },[])

    function submit (evento) {
        evento.preventDefault() // Sempre que for formulário colocar
        console.log(email)  
        if (!email.includes("@") && !email.includes(".com")){
            alert("Email inválido")
        }
        let object={
            "name": "Jose",
            "nickname": "Dan",
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
    }

    function alterarEmail (evento) {
        let eventoEmail = evento.target.value
        setEmail(evento.target.value)
        console.log("alterei",email)
    }

    function alterarPassword (evento) {
        let eventoPassword = evento.target.value
        setPassword(evento.target.value)
        console.log("alterei",password)
    }

    return (
        <form className="form" onSubmit={(e)=> submit(e)}>
            <Input 
                type="text" 
                text="E-mail" 
                name="name" 
                placeholder="E-mail" 
                handleOnChange={(e)=> alterarEmail(e)}
            />
            <Input 
                type="password" 
                text="Senha" 
                name="name" 
                placeholder="Senha" 
                handleOnChange={(e)=> alterarPassword(e)}
            />
            <div className="form_btn">
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default LoginForm