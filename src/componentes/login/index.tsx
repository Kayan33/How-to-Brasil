import '../../style/stylelogin.css'
import '../../style/style.css'
 
function Login() {
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
                    <input className="entrar" type="submit" value="Entrar" />

                <div className="conectado_esqueci">

                    <label>Mantenha-me conectado</label><input className="check" type="checkbox" />
                   

                </div>
                <a className="esqueci">Esqueci minha senha</a>

            
                    <a className="cadastre">Não é cadastrado?  Cadastre-se</a> 
                    
        </div>
    </div>
 
    )
}
 export default Login;