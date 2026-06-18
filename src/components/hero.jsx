// src/components/Hero.tsx

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import imagen_10 from '../assets/gallery/imagen_10.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F6F2]">

      {/* CONTENIDO */}
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* IMAGEN */}
        <div className="relative h-[55vh] md:h-screen overflow-hidden">

          <img
            src={imagen_10}
            alt="Danna y Brian"
            className="
              w-full
              h-full
              object-cover
              scale-[1.02]
            "
          />

          {/* OVERLAY SUAVE */}
          <div
            className="
              absolute
              inset-0
              bg-black/5
            "
          />

          {/* CURVA EDITORIAL */}
          <div
            className="
              hidden
              md:block
              absolute
              top-0
              -right-24
              w-52
              h-full
              bg-[#F8F6F2]
              rounded-l-[120px]
              z-10
            "
          />

        </div>

        {/* TEXTO */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-8
            md:px-20
            py-24
            bg-[#F8F6F2]
            overflow-hidden
          "
        >

          {/* FLORAL BACKGROUND */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.05]
              pointer-events-none
            "
          >
            <div
              className="
                absolute
                right-[-100px]
                bottom-0
                w-[420px]
                h-[420px]
                bg-contain
                bg-no-repeat
                bg-right-bottom
              "
              style={{
                backgroundImage:
                  "url('/src/assets/floral.png')",
              }}
            />
          </div>

          {/* TEXTO SUPERIOR */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              uppercase
              tracking-[8px]
              text-[#C8A96B]
              text-[11px]
              md:text-sm
              mb-10
            "
          >
            Nos Casamos
          </motion.p>

          {/* NOMBRES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="relative z-10"
          >

            <h1
              className="
                font-luxury
                text-[#B8955A]
                text-[72px]
                md:text-[130px]
                leading-[0.92]
                font-light
                tracking-[2px]
              "
            >
              Danna
            </h1>

            <div
              className="
                text-[#C8A96B]
                text-4xl
                md:text-5xl
                my-3
                font-light
              "
            >
              &
            </div>

            <h1
              className="
                font-luxury
                text-[#B8955A]
                text-[72px]
                md:text-[130px]
                leading-[0.92]
                font-light
                tracking-[2px]
              "
            >
              Brian
            </h1>

          </motion.div>

          {/* DECORADOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
              w-40
              h-[1px]
              bg-[#D8C2A0]
              mt-12
              mb-6
              relative
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                text-[#C8A96B]
                text-sm
                bg-[#F8F6F2]
                px-4
              "
            >
              ✦
            </div>

          </motion.div>

          {/* FECHA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="
              uppercase
              tracking-[6px]
              text-[#1A1A1A]
              text-[12px]
              md:text-sm
            "
          >
          19 • Septiembre • 2026
          </motion.p>

          {/* CIUDAD */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="
              mt-4
              text-[#1A1A1A]
              text-sm
              tracking-[3px]
            "
          >
            Bogotá

          </motion.p>

          {/* Mensaje Inicial */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="
              mt-4
              text-[#1A1A1A]
              text-sm
              tracking-[3px]
              italic
            "
          >
            <br />
            Dicen que el tiempo pone cada cosa en su lugar. El nuestro nos encontró, nos permitió crecer juntos y nos regaló incontables aventuras. Hoy, con el corazón lleno de amor, damos un paso más en este viaje y queremos compartirlo con ustedes.
          </motion.p>

          {/* SCROLL ICON */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="
              absolute
              bottom-10
              text-[#C8A96B]
            "
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </motion.div>

        </div>

      </div>

      {/* WAVE INFERIOR */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F6F2"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

    </section>
  );
}