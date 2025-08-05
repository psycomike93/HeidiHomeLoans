import { RevealOnScroll } from "../components/RevealOnScroll";

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div class="sbox" className="border-2 border-black rounded shadow-xl/80  padding: px-5 py-5 margin: my-5 width: min-w-max ;">
        <h2 className="text-black text-5xl ">Service 1</h2>
        <div className="flex items-center justify-center ">
            <ul class= "list-disc">
                <li>Price</li>
                <li>Details</li>
                <li>ETC.</li>
            </ul>
        </div>
        </div>
        <div className="border-2 border-black rounded shadow-xl/80 padding: px-5 py-5 margin: my-5 width: min-w-max">
        <h2 className="text-black text-5xl">Service 2</h2>
        <div className="flex items-center justify-center ">
            <ul class= "list-disc">
                <li>Price</li>
                <li>Details</li>
                <li>ETC.</li>
            </ul>
        </div>
        </div>
        <div className="border-2 border-black rounded shadow-xl/80 padding: px-5 py-5 margin: my-5 width: min-w-max">
        <h2 className="text-black text-5xl">Service 3</h2>
        <div className="flex items-center justify-center ">
            <ul class= "list-disc">
                <li>Price</li>
                <li>Details</li>
                <li>ETC.</li>
            </ul>
        </div>
        </div>
        <div className="border-2 border-black rounded shadow-xl/80 padding: px-5 py-5 margin: my-5 width: min-w-max">
        <h2 className="text-black text-5xl">Service 4</h2>
        <div className="flex items-center justify-center ">
            <ul class= "list-disc">
               <li>Price</li>
                <li>Details</li>
                <li>ETC.</li>
            </ul>
        </div>
        </div>

      </RevealOnScroll>
    </section>
  );
};