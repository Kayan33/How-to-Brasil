import { useState } from "react"
import { tyCadUsuario } from "../types/cadastro"

const [cadUsuario, setCadUsuarios] = useState<tyCadUsuario[]>([])

function Requisicoes (){

    

    const cadUsuario = () => {

        fetch ("")

        .then((response) => {
            return response.json()
        } )

        .then ((json) => {
            setCadUsuarios(json)
        })
        
    }}