import { RevealOnScroll } from "../components/RevealOnScroll";



export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 border-3 border-black rounded shadow-xl/80 px-6 py-6 mx-6 my-20" >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent leading-right">
            Heidi Home Loans
          </h1>

          <p className="tex-gray-400 text-5xl mb-8 max-w-5xl mx-auto text-center ">
            If you have a tagline or just want to say Hello, you can put it here.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#services"
              className="border border-black/40 text-black bg-gray-600/30 py-3 px-6 mx-3 my-3 rounded shadow-lg/60 font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 30, 46, 0.2)] hover:bg-white/65"
            >
              Services
            </a>

            <a
              href="#contact"
              className="border border-black/40 text-black bg-gray-600/30 shadow-lg/60 py-3 px-6 mx-3 my-3 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 30, 46, 0.2)] hover:bg-white/65"
            >
              Contact Me
            </a>
            
            
          </div>
        </div>
         <div className="text-center z-10 px-4 border-3 border-black rounded shadow-xl/80  px-6 py-6 mx-6 my-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent leading-right">
            About Me
            </h1>
            <p className="tex-gray-400 text-5xl mb-8 max-w-5xl mx-auto text-center ">
              Tell everyone about yourself!
            </p>
         </div>
      </RevealOnScroll>
    </section>
  );
};