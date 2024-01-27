import { useState } from "react"
import { tyUsuario } from "../types/login"


const [usuario, setUsuarios] = useState<tyUsuario[]>([])

function Requisicoes (){

    

    const usuario = () => {

        fetch ("")

        .then((response) => {
            return response.json()
        } )

        .then ((json) => {
            setUsuarios(json)
        })
        
    }}