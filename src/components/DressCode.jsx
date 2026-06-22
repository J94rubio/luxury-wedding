import { motion } from "framer-motion";
import women2 from "../assets/icons/women2.png";
import men from "../assets/icons/men.png";

const colores = [
  { nombre: "Blanco", hex: "#FFFFFF" },
  { nombre: "Verde Oliva", hex: "#607119" }
];

export default function DressCode() {
  return (
    <section className="py-32 px-6 bg-[#F8F6F2]">
      <div className="max-w-3xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-gold text-sm mb-6"
        >
          Código de vestimenta
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-luxury text-5xl text-dark mb-14"
        >
            Formal Elegante
    
        </motion.h2>
        

        {/* Íconos vestimenta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-16 mb-14"
        >
          {/* Damas */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center">
              <img src={women2} alt="Damas" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <p className="uppercase tracking-[3px] text-dark text-xs font-medium mb-1">
                Damas
              </p>
              {/* <p className="text-dark/50 text-xs leading-relaxed max-w-[140px]">
                Formal elegante
              </p> */}
            </div>
          </div>

          {/* Separador vertical */}
          <div className="w-[1px] bg-gold/20 self-stretch" />

          {/* Caballeros */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center">
              <img src={men} alt="Caballeros" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <p className="uppercase tracking-[3px] text-dark text-xs font-medium mb-1">
                Caballeros
              </p>
              {/* <p className="text-dark/50 text-xs leading-relaxed max-w-[140px]">
                Formal elegante (traje o esmoquin)
              </p> */}
            </div>
          </div>
        </motion.div>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-10 h-[1px] bg-gold/40" />
          <span className="text-gold text-sm">✦</span>
          <div className="w-10 h-[1px] bg-gold/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-dark/40 text-xs mb-8"
        >
          Colores reservados
        </motion.p>

        {/* Paleta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {colores.map((color, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 rounded-full border border-dark/10 shadow-sm"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-[11px] uppercase tracking-[2px] text-dark/50">
                {color.nombre}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-dark/40 text-xs mt-10 max-w-sm mx-auto leading-relaxed"
        >
          Por favor evita usar estos tonos para que los novios puedan lucir únicos en su día especial. ¡Gracias por tu comprensión!
        </motion.p>

      </div>
    </section>
  );
}