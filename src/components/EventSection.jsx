import {
  MapPin,
  Clock3,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function EventSection() {

  return (
    <section
      className="
        relative
        py-24
        md:py-44
        lg:py-56
        px-4
        sm:px-6
        overflow-hidden
        bg-[#F8F6F2]
      "
    >

      {/* FLORAL IZQUIERDA */}
      <div
        className="
          absolute
          left-[-140px]
          top-20
          w-[420px]
          h-[420px]
          opacity-[0.05]
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/src/assets/floral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* FLORAL DERECHA */}
      <div
        className="
          absolute
          right-[-140px]
          bottom-20
          w-[420px]
          h-[420px]
          opacity-[0.05]
          pointer-events-none
          scale-x-[-1]
        "
        style={{
          backgroundImage: "url('/src/assets/floral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* CONTENIDO */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-8
          md:gap-14
          items-start
          relative
          z-10
        "
      >

        {/* INFORMACIÓN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            relative
            bg-white/50
            backdrop-blur-xl
            border
            border-[#E7D8BC]
            rounded-[28px]
            md:rounded-[40px]
            p-7
            sm:p-10
            md:p-12
            lg:p-16
          "
        >

          {/* SUBTITULO */}
          <p
            className="
              uppercase
              tracking-[6px]
              md:tracking-[8px]
              text-[#C8A96B]
              text-[10px]
              md:text-[11px]
              lg:text-sm
              mb-6
              md:mb-8
            "
          >
            Ceremonia & Recepción
          </p>

          {/* TITULO */}
          <h2
            className="
              font-luxury
              text-[#1A1A1A]
              text-4xl
              sm:text-5xl
              md:text-5xl
              lg:text-7xl
              font-light
              leading-[1]
              mb-8
              md:mb-10
            "
          >
            Valle Arriba
            <span className="block text-[#C8A96B]">
              Centro de Eventos
            </span>
          </h2>

          {/* DECORADOR */}
          <div
            className="
              flex
              items-center
              gap-4
              mb-8
              md:mb-12
            "
          >
            <div className="w-12 h-[1px] bg-[#D8C2A0]" />
            <span className="text-[#C8A96B] text-sm">✦</span>
            <div className="w-12 h-[1px] bg-[#D8C2A0]" />
          </div>

          {/* INFO */}
          <div className="space-y-6 md:space-y-8">

            {/* UBICACIÓN */}
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className="
                  w-11
                  h-11
                  md:w-14
                  md:h-14
                  rounded-full
                  bg-[#F5EEDF]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <MapPin className="text-[#C8A96B] w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
              </div>

              <div>
                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-[#C8A96B]
                    text-[10px]
                    mb-1.5
                    md:mb-2
                  "
                >
                  Ubicación
                </p>
                <h3
                  className="
                    text-[#1A1A1A]
                    text-base
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    font-light
                    leading-snug
                  "
                >
                  Km 4.5 vía al alto de patios vía la Calera. A 10 minutos de la Cra 7 con Calle 85., Colombia
                </h3>
              </div>
            </div>

            {/* HORA */}
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className="
                  w-11
                  h-11
                  md:w-14
                  md:h-14
                  rounded-full
                  bg-[#F5EEDF]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Clock3 className="text-[#C8A96B] w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
              </div>

              <div>
                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-[#C8A96B]
                    text-[10px]
                    mb-1.5
                    md:mb-2
                  "
                >
                  Hora
                </p>
                <h3
                  className="
                    text-[#1A1A1A]
                    text-base
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    font-light
                  "
                >
                  4:00 PM
                </h3>
              </div>
            </div>

          </div>

          {/* BOTÓN */}
          <a
            href="https://maps.app.goo.gl/cAWUAQYSgcdtfbQp7"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              mt-10
              md:mt-14
              px-8
              md:px-10
              py-4
              md:py-5
              rounded-full
              border
              border-[#C8A96B]
              text-[#C8A96B]
              uppercase
              tracking-[4px]
              text-[10px]
              md:text-[11px]
              transition-all
              duration-500
              hover:bg-[#C8A96B]
              hover:text-white
            "
          >
            <Sparkles size={14} />
            Ver Ubicación
          </a>

        </motion.div>

        {/* MAPA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* MARCO */}
          <div
            className="
              absolute
              -inset-3
              md:-inset-4
              rounded-[33px]
              md:rounded-[45px]
              border
              border-[#E8DCC5]
            "
          />

          {/* MAPA */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              md:rounded-[40px]
              border
              border-[#E8DCC5]
              h-[320px]
              sm:h-[400px]
              md:h-[500px]
              lg:h-[580px]
              shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            "
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.542022342906!2d-74.02441602490678!3d4.675413941876018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f917e44b6ff9d%3A0x3dad705baa38f84c!2sValle%20Arriba%20Centro%20de%20Eventos!5e0!3m2!1ses-419!2sco!4v1782159445270!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* OVERLAY MAPA */}
            <div
              className="
                absolute
                inset-0
                pointer-events-none
                bg-gradient-to-t
                from-[#F8F6F2]/20
                to-transparent
              "
            />

          </div>

        </motion.div>

      </div>

      {/* WAVE SUPERIOR */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] sm:h-[90px] md:h-[120px] rotate-180"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F6F2"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

      {/* WAVE INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] sm:h-[90px] md:h-[120px]"
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