import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { useState } from "react";
import { auth } from "../config/firebaseconfig";


//Função para autenticação do usuario 
export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function creatUser(){
        await createUserWithEmailAndPassword(auth, email, password)
        .then(
            value => {
                console.log('\n' + value.user.uid.email);
                console.log('realizado com sucesso')
            }
        )
        .catch( error => console.log(error))
    }
}