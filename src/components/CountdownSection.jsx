// src/components/CountdownSection.jsx

import Countdown from "react-countdown";
import { motion } from "framer-motion";

export default function CountdownSection() {

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="relative z-10">

      {/* RELOJ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          flex
          items-center
          justify-center
          flex-wrap
          gap-3
          md:gap-6
        "
      >

        {/* DIAS */}
        <div className="flex items-end gap-2">

          <span
            className="
              text-[50px]
              md:text-[150px]
              leading-none
              font-extralight
              tracking-[4px]
              text-[#1A1A1A]
            "
          >
            {String(days).padStart(2, "0")}
          </span>

        </div>

        <span
          className="
            text-[#C8A96B]
            text-4xl
            md:text-7xl
            font-extralight
            mb-2
          "
        >
          :
        </span>

        {/* HORAS */}
        <div className="flex items-end gap-2">

          <span
            className="
              text-[50px]
              md:text-[150px]
              leading-none
              font-extralight
              tracking-[4px]
              text-[#1A1A1A]
            "
          >
            {String(hours).padStart(2, "0")}
          </span>

        </div>

        <span
          className="
            text-[#C8A96B]
            text-4xl
            md:text-7xl
            font-extralight
            mb-2
          "
        >
          :
        </span>

        {/* MIN */}
        <div className="flex items-end gap-2">

          <span
            className="
              text-[50px]
              md:text-[150px]
              leading-none
              font-extralight
              tracking-[4px]
              text-[#1A1A1A]
            "
          >
            {String(minutes).padStart(2, "0")}
          </span>

        </div>

        <span
          className="
            text-[#C8A96B]
            text-4xl
            md:text-7xl
            font-extralight
            mb-2
          "
        >
          :
        </span>

        {/* SEG */}
        <div className="flex items-end gap-2">

          <span
            className="
              text-[50px]
              md:text-[150px]
              leading-none
              font-extralight
              tracking-[4px]
              text-[#1A1A1A]
            "
          >
            {String(seconds).padStart(2, "0")}
          </span>

        </div>

      </motion.div>

      {/* LABELS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
        viewport={{ once: true }}
        className="
          flex
          justify-center
          gap-8
          md:gap-20
          mt-8
        "
      >

        {["DÍAS", "HORAS", "MIN", "SEG"].map((item, index) => (

          <span
            key={index}
            className="
              uppercase
              tracking-[5px]
              text-[#C8A96B]
              text-[10px]
              md:text-xs
            "
          >
            {item}
          </span>

        ))}

      </motion.div>

    </div>
  );

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

      {/* FLORAL IZQUIERDA */}
      <div
        className="
          absolute
          left-[-120px]
          top-10
          w-[380px]
          h-[380px]
          opacity-[0.05]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/src/assets/floral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* FLORAL DERECHA */}
      <div
        className="
          absolute
          right-[-120px]
          bottom-10
          w-[380px]
          h-[380px]
          opacity-[0.05]
          pointer-events-none
          scale-x-[-1]
        "
        style={{
          backgroundImage:
            "url('/src/assets/floral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* SUBTITULO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[8px]
            text-[#C8A96B]
            text-[11px]
            md:text-sm
            mb-8
          "
        >
          Faltan
        </motion.p>

        {/* DECORADOR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            flex
            items-center
            justify-center
            gap-4
            mb-20
          "
        >

          <div className="w-10 md:w-16 h-[1px] bg-[#D8C2A0]" />

          <span className="text-[#C8A96B] text-sm">
            ✦
          </span>

          <div className="w-10 md:w-16 h-[1px] bg-[#D8C2A0]" />

        </motion.div>

        {/* COUNTDOWN */}
        <Countdown
          date={new Date("2026-09-19T16:00:00")}
          renderer={renderer}
        />

      </div>

      {/* WAVE SUPERIOR */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          viewBox="0 0 1440 120"
          className="
            relative
            block
            w-full
            h-[90px]
            md:h-[120px]
            rotate-180
          "
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F6F2"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
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
          className="
            relative
            block
            w-full
            h-[90px]
            md:h-[120px]
          "
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