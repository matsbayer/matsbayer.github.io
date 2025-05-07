function App() {

  return (
    <>
      <div className="absolute w-screen h-screen flex flex-col lg:flex-row items-center justify-center z-0" >
        <div className="bg-primary-300 w-full lg:w-1/2 h-1/2 lg:h-full"></div>
        <div className="bg-primary-200 w-full lg:w-1/2 h-1/2 lg:h-full"></div>
      </div>
      <div className="absolute w-full h-full z-10 grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 items-center justify-items-center">
        <div className="w-full h-full text-primary-100 text-6xl lg:text-7xl xl:text-8xl flex flex-col items-center justify-center">
          <p className="text-primary-100 font-archivoBlack">Mats<br />Bayer</p>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center" >
          <img src="/avatar_bubble.png" className="w-2/3  md:w-1/2 lg:w-full"></img>
        </div>
        <div className="w-full h-full text-6xl lg:text-7xl xl:text-8xl flex flex-col items-center justify-center gap-4 lg:gap-8">
          <p className="text-primary-400 font-leagueSpartan font-bold">Software<br />Developer</p>
            <div className="flex flex-row items-center justify-center gap-6">
              <a href="https://github.com/matsbayer">
                <img src="/github.svg" className="w-12 h-12 lg:(w-16 h-16)" />
              </a>
              <a href="https://www.linkedin.com/in/mats-bayer/">
                <img src="/linkedin.svg" className="w-12 h-12 lg:(w-16 h-16)" />
              </a>
            </div>
        </div>  
      </div>
    </>
    
  )
}

export default App