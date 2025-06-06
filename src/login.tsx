import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoFingerPrintSharp } from "react-icons/io5";
import imagemfundo from "./assets/img/thi-login.jpg";

function Login() {
  return (
    <>
      <div className="h-screen w-full flex">
        <div className="w-1/2 h-full">
          {
            <img
              src={imagemfundo}
              alt="imagem de fundo"
              className="w-full h-full object-cover"
            />
          }
        </div>

        <div className="flex flex-col items-center justify-start w-1/2 h-full">
          <div className=" flex flex-row">
            <IoFingerPrintSharp size={130} className="text-black" />
            <p className="text-[100px] pb-30 font-bold text-black">LOGIN</p>
          </div>
          <div className="w-160  pb-10 text-[30px] text-black">
            <span>
              {" "}
              faça o login para se identificar <br /> criar seus eventos e
              compartilhar suas fotosa{" "}
            </span>
          </div>
          <div className="flex flex-col items-center justify-start w-1/2 h-full">
            <div className=" ">
              <Input
                type="email"
                id="email"
                required
                placeholder="Email"
              ></Input>
              <Input
                type="password"
                id="password"
                required
                placeholder="***********"
              ></Input>
            </div>
            <input type="checkbox" />
            <label>permanecer conectado</label>
            <a
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              href="#"
            >
              esqueci a senha
            </a>
            <div className="">
              <Button variant="outline">Entrar</Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Button variant="outline">Criar Conta</Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
