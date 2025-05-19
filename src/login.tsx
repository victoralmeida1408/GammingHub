import { Input } from "@/components/ui/input";
import { IoFingerPrintSharp } from "react-icons/io5";
import imagemfundo from './assets/img/avatar.jpg';

function Login() {
    return (
    <>
        <img src={imagemfundo} alt="" width={90} height={90}></img>
        <i> <IoFingerPrintSharp size={96}/>  </i>
        <p>login</p>
        <span> faca o login para se identificar criar seus eventos e compartilhar suas fotosa </span>
        
        <Input ></Input> 

        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <button type="button"> Entrar</button>
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button type="button"> Criar Conta</button> 
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="checkbox" />
        <label>permanecer conectado</label> 
        </div>
        <a className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} href="#">esqueci a senha</a>
    </>
    )





} export default Login;