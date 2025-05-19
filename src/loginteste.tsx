import { useState } from 'react';
import imagemfundo from './assets/img/avatar.jpg';

export default function loginteste() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de autenticação
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Lado esquerdo - imagem */}
      <div className="hidden md:block md:w-1/2">
        <img
         src={imagemfundo} className="object-cover w-full h-full " alt="Imagem de login"></img>
      </div>

      {/* Lado direito - formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-4">
        <div className="w-full max-w-md px-4 sm:px-8">
          {/* Logo e título */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className="text-black text-4xl font-bold flex items-center">
                <span className="inline-block mr-2">
                  <svg viewBox="0 0 24 24" width="40" height="40" className="fill-current">
                    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/>
                    <path d="M12,6a3,3,0,0,0-3,3v6a3,3,0,0,0,6,0V9A3,3,0,0,0,12,6Z"/>
                  </svg>
                </span>
                LOGIN
              </div>
            </div>
          </div>

          <p className="text-left text-sm text-gray-800 mb-8">
            faça o login para se identificar<br />
            criar seus eventos e compartilhar suas fotos
          </p>

          {/* Inputs */}
          <div className="space-y-6">
            <div className="relative">
              <div className="text-sm mb-1 text-gray-700">email</div>
              <input
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
            
            <div className="relative">
              <div className="text-sm mb-1 text-gray-700">password</div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Checkbox e link */}
            <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
              <label className="flex items-center mb-2 sm:mb-0">
                <input 
                  type="checkbox" 
                  className="mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="select-none">permanecer conectado</span>
              </label>
              <a className="hover:underline text-gray-500 cursor-pointer">
                esqueci a senha
              </a>
            </div>

            {/* Botões */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors duration-300"
            >
              ENTRAR
            </button>
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-orange-300 hover:bg-orange-400 text-white font-medium transition-colors duration-300"
            >
              CRIAR CONTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}