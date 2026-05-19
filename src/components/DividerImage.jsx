import { motion } from "framer-motion";

export default function DividerImage({
  image,
  height = "h-[260px] md:h-[420px]",
}) {
  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        ${height}
      `}
    >

      {/* IMAGEN */}
      <motion.img
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        src={image}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* OVERLAY SUAVE */}
      <div
        className="
          absolute
          inset-0
          bg-black/[0.08]
        "
      />

      {/* GLOW SUPERIOR */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-24
          bg-gradient-to-b
          from-[#F8F6F2]
          to-transparent
          z-10
        "
      />

      {/* GLOW INFERIOR */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-24
          bg-gradient-to-t
          from-[#F8F6F2]
          to-transparent
          z-10
        "
      />

      {/* TEXTURA LUXURY */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')",
        }}
      />

      {/* WAVE SUPERIOR */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          overflow-hidden
          leading-none
          z-20
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
          z-20
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

      {/* DETALLE CENTRAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          z-30
        "
      >

        <div
          className="
            w-16
            h-16
            rounded-full
            border
            border-white/50
            bg-white/10
            backdrop-blur-md
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              text-white
              text-xl
            "
          >
            ✦
          </div>

        </div>

      </motion.div>

    </section>
  );
}