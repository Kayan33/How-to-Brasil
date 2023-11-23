import "../../style/stylecadastro.css"
import "../../style/style.css"

function Cadastro(){

    return(
    <div className="cadastro-bg">
    <div className="cadastro">
        <a href=""></a> </div>
        <div className="cadastro1">
            <input type="text" value="Digite seu email" />
<br />
            <input type="text" value="Primeiro Nome" />
<br /> 
            <input type="text" value="Último Nome" />
<br />         
            <input type="text" value="Digite sua senha" />
<br />
            <input type="text" value="Confirmar sua senha" />
<br />


<p className="ofertas">Deseja receber ofertas e promoções por e-mail?</p>
         <div className="ofertas">
            <input type="checkbox" name="sim" id="sim" />
            <p>Sim</p>
            <input type="checkbox" name="não" id="não" />
            <p>Não</p>
            <br /><br />
            </div>
            <p className="aceite">Ao clicar no botão abaixo estará concordando com os termos e regras de uso de nossa plataforma</p>
            <input type="button" value="Cadastrar-se" form="" />
<br />
         </div>
    </div>
    )
}

export default Cadastro