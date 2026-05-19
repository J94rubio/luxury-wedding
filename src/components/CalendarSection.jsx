// src/components/CalendarSection.jsx

import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function CalendarSection() {

  const calendarDays = [
    ["", 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, "", "", "", ""],
  ];

  return (
    <section
      className="
        relative
        py-44
        md:py-56
        px-6
        overflow-hidden
        bg-[#F8F6F2]
      "
    >

      {/* FLORAL LEFT */}
      <div
        className="
          absolute
          left-[-120px]
          top-20
          w-[350px]
          h-[350px]
          opacity-[0.06]
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/src/assets/floral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* FLORAL RIGHT */}
      <div
        className="
          absolute
          right-[-120px]
          bottom-20
          w-[350px]
          h-[350px]
          opacity-[0.06]
          pointer-events-none
          scale-x-[-1]
        "
        style={{
          backgroundImage: "url('/src/assets/floral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p
            className="
              uppercase
              tracking-[8px]
              text-[#C8A96B]
              text-[11px]
              md:text-sm
              mb-6
            "
          >
            Reserva la Fecha
          </p>

          {/* DECORADOR */}
          <div className="flex items-center justify-center gap-3 mb-10">

            <div className="w-10 h-[1px] bg-[#D8C2A0]" />

            <span className="text-[#C8A96B] text-sm">
              ✦
            </span>

            <div className="w-10 h-[1px] bg-[#D8C2A0]" />

          </div>

          {/* MES */}
          <h2
            className="
              font-luxury
              text-[#1A1A1A]
              text-4xl
              md:text-5xl
              font-light
              mb-14
            "
          >
            Septiembre 2026
          </h2>

        </motion.div>

        {/* CALENDARIO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            max-w-2xl
            mx-auto
          "
        >

          {/* HEADER */}
          <div
            className="
              flex
              items-center
              justify-between
              mb-10
              px-4
            "
          >

            <ChevronLeft
              size={22}
              strokeWidth={1.5}
              className="text-[#1A1A1A]"
            />

            <p
              className="
                uppercase
                tracking-[4px]
                text-[#1A1A1A]
                text-sm
              "
            >
              Septiembre 2026
            </p>

            <ChevronRight
              size={22}
              strokeWidth={1.5}
              className="text-[#1A1A1A]"
            />

          </div>

          {/* GRID */}
          <div className="grid grid-cols-7 gap-y-8">

            {/* DIAS */}
            {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => (
              <div
                key={index}
                className="
                  text-[#1A1A1A]
                  text-sm
                  uppercase
                  tracking-[3px]
                  font-medium
                "
              >
                {day}
              </div>
            ))}

            {/* FECHAS */}
            {calendarDays.flat().map((day, index) => (

              <div
                key={index}
                className="
                  h-12
                  flex
                  items-center
                  justify-center
                  relative
                "
              >

                {/* CORAZÓN */}
                {day === 26 ? (

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 12,
                      delay: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="relative"
                  >

                    <Heart
                      size={42}
                      fill="#C8A96B"
                      stroke="#C8A96B"
                      strokeWidth={1}
                    />

                    <span
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        text-white
                        text-sm
                        font-medium
                        mt-[1px]
                      "
                    >
                      26
                    </span>

                  </motion.div>

                ) : (

                  <span
                    className="
                      text-[#1A1A1A]
                      text-sm
                    "
                  >
                    {day}
                  </span>

                )}

              </div>

            ))}

          </div>

        </motion.div>

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