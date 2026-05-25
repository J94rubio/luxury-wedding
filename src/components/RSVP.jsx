// export default function RSVP() {
//   return (
//     <section className="py-32 px-6 text-center">

//       <p className="uppercase tracking-[6px] text-gold text-sm mb-6">
//         Confirma tu asistencia
//       </p>

//       <h2 className="font-luxury text-5xl text-dark mb-10">
//         Te Esperamos
//       </h2>

//       <a
//         href="https://wa.me/573001112233"
//         target="_blank"
//         className="inline-block border border-gold text-gold px-12 py-5 rounded-full uppercase tracking-[4px] hover:bg-gold hover:text-white transition duration-300"
//       >
//         Confirmar por WhatsApp
//       </a>

//     </section>
//   );
// }

import { useState } from "react";

export default function RSVP() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    asistentes: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.nombre || !form.telefono || !form.asistentes) {
      setErrors(true);
      return;
    }
    setErrors(false);
    setStatus("loading");

    try {
      const res = await fetch("http://127.0.0.1:5000/api/confirmaciones/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          telefono: form.telefono,
          asistencia: form.asistentes,
          mensaje: form.mensaje,
        }),
      });

      if (!res.ok) throw new Error("Error del servidor");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStatus("idle");
    setForm({ nombre: "", telefono: "", asistentes: "", mensaje: "" });
    setErrors(false);
  };

  return (
    <>
      <section className="py-32 px-6 text-center">
        <p className="uppercase tracking-[6px] text-gold text-sm mb-6">
          Confirma tu asistencia
        </p>

        <h2 className="font-luxury text-5xl text-dark mb-10">
          Te Esperamos
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="inline-block border border-gold text-gold px-12 py-5 rounded-full uppercase tracking-[4px] hover:bg-gold hover:text-white transition duration-300"
        >
          Confirmar asistencia
        </button>
      </section>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="bg-[#fdfaf5] rounded-lg p-10 w-full max-w-md relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-gray-600"
            >
              ×
            </button>

            {status === "success" ? (
              <div className="text-center py-4">
                <p className="text-5xl text-gold mb-4">✓</p>
                <h3 className="font-luxury text-2xl text-dark mb-2">
                  ¡Confirmado!
                </h3>
                <p className="text-sm text-gray-500">
                  Gracias, tu asistencia fue registrada.
                  <br />
                  ¡Te esperamos con mucha alegría!
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 w-full bg-gold text-white py-3 rounded-full uppercase tracking-[4px] text-sm"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <p className="uppercase tracking-[4px] text-gold text-xs mb-1">
                  Confirmación
                </p>
                <h3 className="font-luxury text-2xl text-dark mb-6">
                  ¿Nos acompañas?
                </h3>

                <div className="space-y-4">
                  <Field label="Nombre completo *">
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border border-[#d4c9b0] rounded-md px-4 py-2.5 text-sm bg-[#fefcf7] text-dark focus:outline-none focus:border-gold"
                    />
                  </Field>

                  <Field label="Teléfono *">
                    <input
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+57 300 000 0000"
                      className="w-full border border-[#d4c9b0] rounded-md px-4 py-2.5 text-sm bg-[#fefcf7] text-dark focus:outline-none focus:border-gold"
                    />
                  </Field>

                  <Field label="¿Cuántos asisten? *">
                    <select
                      name="asistentes"
                      value={form.asistentes}
                      onChange={handleChange}
                      className="w-full border border-[#d4c9b0] rounded-md px-4 py-2.5 text-sm bg-[#fefcf7] text-dark focus:outline-none focus:border-gold"
                    >
                      <option value="">Selecciona</option>
                      <option>1 persona</option>
                      <option>2 personas</option>
                      <option>3 personas</option>
                      <option>4 personas</option>
                      <option>5 o más</option>
                    </select>
                  </Field>

                  <Field label="Mensaje (opcional)">
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Restricciones alimentarias, algo que quieras decirnos..."
                      rows={3}
                      className="w-full border border-[#d4c9b0] rounded-md px-4 py-2.5 text-sm bg-[#fefcf7] text-dark focus:outline-none focus:border-gold resize-none"
                    />
                  </Field>
                </div>

                {errors && (
                  <p className="text-red-500 text-xs mt-3">
                    Por favor completa todos los campos requeridos.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-xs mt-3">
                    Ocurrió un error al enviar. Intenta de nuevo.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="mt-6 w-full border border-gold text-gold py-3.5 rounded-full uppercase tracking-[4px] text-sm hover:bg-gold hover:text-white transition duration-300 disabled:opacity-50"
                >
                  {status === "loading" ? "Enviando..." : "Confirmar asistencia"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[2px] text-gray-400 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}