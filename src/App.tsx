function App() {

  return (
    <>
      
      <div className="bg-[url('/src/assets/img/valorant.jpg')] absolute bg-cover bg-center w-[240px] h-[360px] m-50 
      rounded-[20px]" >
        <div className="absolute top-2 left-2">
        <div className="bg-[#83C5BE] h-[30px] w-[50px] mb-1 rounded-t-[10px]">
          <p className="text-black text-2xl text-center font-light">ter</p>
        </div>
        <div className="bg-[#006D77] w-[50px] rounded-b-[10px]">
          <p className="text-white text-3xl text-center font-semibold">21</p>
          <p className="text-white text-2xl text-center font-light pb-px">jul</p>
          </div>
        </div>
        <div className="absolute bottom-24 left-2">
          <h2 className="text-4xl font-semibold text-white">valorant</h2>
          <p className="text-2xl font-light text-white">às 19h</p>
        </div>
        <div className="absolute bottom-3 left-2 right-2">
          <button className="w-full bg-[#006D77] text-white py-2 rounded-[13px] font-bold">confirmar</button>
        </div>
      </div>

  
      
    </>
  )
}

export default App
