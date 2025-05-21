import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoFingerPrintSharp } from "react-icons/io5";
import imagemfundo from './assets/img/avatar.jpg';

function Login() {
    return (
    <><div className="flex h-screen">
        <div className="flex-1 flex items-center justify-left">
        <img src={imagemfundo} alt="" width={1000} height={1000}></img>
       </div>

       <div className="flex-1 flex items-center justify-center"> 
       
       <i> <IoFingerPrintSharp size={96}/>  </i>
        <p>login</p>
        <span> faca o login para se identificar criar seus eventos e compartilhar suas fotosa </span>
        
        <Input type="email" id="email" required placeholder="Email"></Input> 
        <Input type="password" id="password" required placeholder="senha"></Input> 
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <Button variant="outline">Entrar</Button>
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="outline">Criar Conta</Button>
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="checkbox" />
        <label>permanecer conectado</label> 
        </div>
        <a className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} href="#">esqueci a senha</a>
        </div>
            

        </div>
    </>
    )





} export default Login;