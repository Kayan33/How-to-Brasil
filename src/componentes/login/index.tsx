import '../../style/stylelogin.css'
import '../../style/style.css'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 
type Props={
    titulo: string;
}

function LogiN(Propriedades: Props) {
    const  navigate = useNavigate();
    const  params = useParams();
    function handleClick(){
        navigate('/Cadastrar')
    }
    return (
       
        <div className="divlogin">

            <div className="divlogin1">
                <a className="logo" href="/">
                    How to Brazil
                </a>
                    <p className="acesso"> <strong>Acesso</strong></p>
                    <p className="acesso1">Insira seu e-mail e senha para fazer login. </p>
           

                    <input type="email" placeholder='Email' />
                        <br/>
                    <input type="password" placeholder='Senha' />
                        <br/>
                    <Link className="entrar" to="/Cadastrar">Entrar</Link>
                    

                <div className="conectado_esqueci">

                    <label>Mantenha-me conectado</label><input className="check" type="checkbox" />
                   

                </div>
                <a className="esqueci">Esqueci minha senha</a>

            
                    <Link className="cadastre" to="/Cadastrar">Não é cadastrado?  Cadastre-se</Link> 
                 
                    {Propriedades.titulo}

                    <button onClick={handleClick}> Voltar </button>
                    
                    
        </div>
    </div>
 
    )
}
 export default LogiN;