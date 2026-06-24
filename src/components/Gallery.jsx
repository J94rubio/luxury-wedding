import { useState } from "react";
import imagen_1 from '../assets/gallery/imagen_1.jpeg';
import imagen_2 from '../assets/gallery/imagen_2.jpeg';
import imagen_3 from '../assets/gallery/imagen_3.jpeg';
import imagen_4 from '../assets/gallery/imagen_4.jpeg';
import imagen_5 from '../assets/gallery/imagen_5.jpeg';
import imagen_6 from '../assets/gallery/imagen_6.jpeg';
import imagen_7 from '../assets/gallery/imagen_7.jpeg';
import imagen_8 from '../assets/gallery/imagen_8.jpeg';
import imagen_9 from '../assets/gallery/imagen_9.jpeg';

export default function Gallery() {
  const images = [
    imagen_8, imagen_3, imagen_4, imagen_5,
    imagen_6, imagen_7, imagen_1, imagen_9
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  const getIndex = (offset) => (current + offset + images.length) % images.length;

  return (
    <section className="py-32 px-6 overflow-hidden">

      <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-6">

        {/* BOTÓN PREV */}
        <button
          onClick={prev}
          className="z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition duration-300 flex items-center justify-center text-xl"
        >
          ‹
        </button>

        {/* CARRUSEL */}
        <div className="flex items-center justify-center gap-3 md:gap-6 w-full min-w-0">

          {/* IZQUIERDA */}
          <div
            onClick={prev}
            className="hidden md:block flex-shrink-0 w-[200px] lg:w-[220px] aspect-[3/4] overflow-hidden rounded-[24px] opacity-50 scale-90 cursor-pointer transition-all duration-500"
          >
            <img
              src={images[getIndex(-1)]}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* CENTRO */}
          <div className="flex-shrink-0 w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] aspect-[3/4] overflow-hidden rounded-[30px] shadow-xl transition-all duration-500">
            <img
              src={images[getIndex(0)]}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* DERECHA */}
          <div
            onClick={next}
            className="hidden md:block flex-shrink-0 w-[200px] lg:w-[220px] aspect-[3/4] overflow-hidden rounded-[24px] opacity-50 scale-90 cursor-pointer transition-all duration-500"
          >
            <img
              src={images[getIndex(1)]}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

        {/* BOTÓN NEXT */}
        <button
          onClick={next}
          className="z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition duration-300 flex items-center justify-center text-xl"
        >
          ›
        </button>

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-6" : "bg-gold/30 w-2"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

// export default function Gallery() {
//   const images = [
//     imagen_8,
//     imagen_3,
//     imagen_4,
//     imagen_5,
//     imagen_6,
//     imagen_7,
//     imagen_1,
//     imagen_9
//   ];

//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
//   const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

//   // índices de las 3 tarjetas visibles: izquierda, centro, derecha
//   const getIndex = (offset) => (current + offset + images.length) % images.length;

//   return (
//     <section className="py-32 px-6 overflow-hidden">

//       <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-6">

//         {/* BOTÓN PREV */}
//         <button
//           onClick={prev}
//           className="z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition duration-300 flex items-center justify-center text-xl"
//         >
//           ‹
//         </button>

//         {/* CARRUSEL */}
//         <div className="flex items-center justify-center gap-3 md:gap-6 w-full">

//           {/* IZQUIERDA */}
//           <div
//             onClick={prev}
//             className="hidden md:block flex-shrink-0 w-[220px] h-[360px] overflow-hidden rounded-[24px] opacity-50 scale-90 cursor-pointer transition-all duration-500"
//           >
//             <img
//               src={images[getIndex(-1)]}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* CENTRO */}
//           <div className="flex-shrink-0 w-full max-w-[340px] md:max-w-[420px] h-[460px] md:h-[560px] overflow-hidden rounded-[30px] shadow-xl transition-all duration-500">
//             <img
//               src={images[getIndex(0)]}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* DERECHA */}
//           <div
//             onClick={next}
//             className="hidden md:block flex-shrink-0 w-[220px] h-[360px] overflow-hidden rounded-[24px] opacity-50 scale-90 cursor-pointer transition-all duration-500"
//           >
//             <img
//               src={images[getIndex(1)]}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>

//         </div>

//         {/* BOTÓN NEXT */}
//         <button
//           onClick={next}
//           className="z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition duration-300 flex items-center justify-center text-xl"
//         >
//           ›
//         </button>

//       </div>

//       {/* DOTS */}
//       <div className="flex justify-center gap-2 mt-8">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               i === current ? "bg-gold w-6" : "bg-gold/30"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   );
// }