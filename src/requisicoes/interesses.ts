import { useState } from "react"
import { tyInteresses } from "../types/Interesses"



const [Interesses, setInteresses] = useState<tyInteresses[]>([])

function Requisicoes (){

    

    const Interesses = () => {

        fetch ("")

        .then((response) => {
            return response.json()
        } )

        .then ((json) => {
            setInteresses(json)
        })
        
    }}