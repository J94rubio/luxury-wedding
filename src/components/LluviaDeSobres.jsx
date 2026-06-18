import { motion } from "framer-motion";

export default function LluviaDeSobres() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-gold text-sm mb-6"
        >
          Un detalle especial
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-luxury text-5xl text-dark mb-8"
        >
          Lluvia de Sobres
        </motion.h2>

        {/* Ícono sobre */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center">
            <span className="text-3xl">✉</span>
          </div>
        </motion.div>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-10 h-[1px] bg-gold/40" />
          <span className="text-gold text-sm">✦</span>
          <div className="w-10 h-[1px] bg-gold/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-dark/60 text-sm leading-loose max-w-lg mx-auto"
        >
          Lo más importante para nosotros es contar con tu compañía. Si quieres hacernos un obsequio, hemos elegido la modalidad de lluvia de sobres. ¡Gracias por ser parte de este momento tan especial!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-luxury italic text-2xl text-gold mt-10"
        >
          "Tu presencia es nuestro mayor regalo"
        </motion.p>

      </div>
    </section>
  );
}