import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoFingerPrintSharp } from "react-icons/io5";
import imagemfundo from './assets/img/thi-login.jpg';

function Login() {
    return (
    <><div className="flex h-screen">
        <div className="flex-1 flex items-center justify-left">
            <img src={imagemfundo} alt="" width={1000} height={1000}></img>
       </div>

       <div className="flex-1 flex items-center justify-center">
       
       <div className="flex flex-col items-center justify-start w-full">
          <i> <IoFingerPrintSharp size={96}/>  </i>
        <p>login</p>
        <span> faca o login para se identificar </span>
        <span>
             criar seus eventos e compartilhar suas fotosa </span>
        </div>

    <div className="flex flex-col items-center justify-start w-full">
       <div className="flex flex-col items-center justify-start w-full">
        <Input type="email" id="email" required placeholder="Email"></Input> 
        <Input type="password" id="password" required placeholder="senha"></Input> 

        </div>
        <div className="flex flex-col items-center justify-start w-full"> 
        <Button variant="outline">Entrar</Button>
        </div>
       <div className="flex flex-col items-center justify-start w-full">
        <Button variant="outline">Criar Conta</Button>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
        <input type="checkbox" />
        <label>permanecer conectado</label> 
        </div>
        <a className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} href="#">esqueci a senha</a>
        </div>
        </div>

        </div>
    </>
    )





} export default Login;