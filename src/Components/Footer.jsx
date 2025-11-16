import React from 'react'

const footer = () => {
  return (
    // <footer>: Estilo básico e fundo escuro
        <footer className="bg-gradient-to-r from-[#7700ff] to-[#06df67] shadow-[0_0_15px_rgba(100,000,100,0.4)] text-black py-6 px-4">
            
            <div className="max-w-4xl mx-auto">
                
                {/* O GRID RESPONSIVO: De 2 colunas para 1 */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-b border-black pb-4">
                    
                    {/* Colum 1: Logo and Links */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-bold text-black mb-2">Robot Emil</h3>
                        
                        <nav className="flex flex-col gap-1 text-sm">
                            <a href="#" className="hover:text-green-500">Documentation</a>
                            <a href="#" className="hover:text-green-500">Resources</a>
                            <a href="https://maricindra.github.io/Portfolio_QA" className="hover:text-green-500">About us</a>
                        </nav>
                    </div>

                    {/* Coluna 2: Mídias Sociais e Contato */}
                    <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                        <h4 className="font-semibold text-purple-6 mb-2 hover:text-purple-600">Connect</h4>
                        
                        {/* Ícones de Mídias Sociais */}
                        <div className="flex space-x-3 text-lg">
                            {/* Boxicons */}
                            <a href="https://github.com/maricindra"><i className='bx bxl-github hover:text-purple-600'></i></a>
                            <a href="mailto:marinacindra13@gmail.com"><i className='bx bxl-gmail hover:text-purple-600'></i></a>
                            <a href="https://www.linkedin.com/in/marina-cindra13/"><i className='bx bxl-linkedin hover:text-purple-600'></i></a>
                        </div>
                        
                        <p className="text-sm mt-3 hover:text-purple-600">marinacindra13@gmail.com</p>
                    </div>

                </div>
                
                {/* Linha de Copyright (centralizada) */}
                <div className="mt-4 text-center text-xs hover:text-purple-600">
                    <p>&copy; {new Date().getFullYear()} - Brazil -  Robot Emil - Marina Cindra  - Computer engineer</p>
                </div>

            </div>
        </footer>
  )
}

export default footer

//    <img className="absolute w-full py-7 border-t opacity-60 -z-1" src="/public/github.png" alt="github"/>
