import { useState } from "react"
import { typeUsuario } from "../types/usuarios"

const [cadUsuario, setCadUsuarios] = useState<typeUsuario[]>([])

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