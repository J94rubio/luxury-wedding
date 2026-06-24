import { useState, useEffect } from "react";

export default function RSVP() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    asistentes: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState(false);
  const [invitado, setInvitado] = useState(null); // { nombre, cupos }

  // Leer ?invitado= de la URL y buscar en el backend
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("invitado");
    if (!slug) return;

    fetch(`https://wedding-rsvp-backend-2drr.onrender.com/api/invitados/buscar?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInvitado(data.invitado);
          // Prellenar el nombre en el formulario
          setForm((prev) => ({ ...prev, nombre: data.invitado.nombre }));
        }
      })
      .catch(() => {});
  }, []);

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
      const res = await fetch("https://wedding-rsvp-backend-2drr.onrender.com/api/confirmaciones/", {
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
    setForm((prev) => ({ ...prev, telefono: "", asistentes: "", mensaje: "" }));
    setErrors(false);
  };

  return (
    <>
      <section className="py-32 px-6 text-center">
        <p className="uppercase tracking-[6px] text-gold text-sm mb-6 font-bold">
          Confirma tu asistencia
        </p>

        <h2 className="font-luxury text-5xl text-dark mb-4">
          Te Esperamos
        </h2>

        <p className="uppercase tracking-[6px] text-gold text-sm mb-6 ">
          Por favor, confirma tú asistencia a más tardar el 20 de agosto. <br />
          Será un honor contar con su presencia.
        </p>

        {/* Saludo personalizado */}
        {invitado && (
          <p className="text-dark/60 text-sm tracking-widest mb-10">
            {" "}
            <span className="font-script text-gold text-4xl">{invitado.nombre}</span>{" "}
          </p>
        )}

        {!invitado && <div className="mb-10" />}

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
                <h3 className="font-luxury text-2xl text-dark mb-4">
                  ¿Nos acompañas?
                </h3>

                {/* Alert cupos personalizados */}
                {invitado && (
                  <div className="flex gap-3 bg-amber-50 border border-[#d4c9b0] rounded-lg px-4 py-3 mb-4">
                    <span className="text-gold text-lg leading-none mt-0.5">⚠</span>
                    <p className="text-[11px] text-[#7a6a4f] leading-relaxed">
                      Recuerda tenemos reservado{" "}
                      <span className="font-semibold">{invitado.cupos} {invitado.cupos === 1 ? "cupo" : "cupos"}</span>{" "}
                      para ti.
                    </p>
                  </div>
                )}

                {/* Alert genérico si no hay invitado personalizado */}
                {!invitado && (
                  <div className="flex gap-3 bg-amber-50 border border-[#d4c9b0] rounded-lg px-4 py-3 mb-4">
                    <span className="text-gold text-lg leading-none mt-0.5">⚠</span>
                    <p className="text-[11px] text-[#7a6a4f] leading-relaxed">
                      Por favor verifica la cantidad de cupos reservados para ti indicados en la parte inferior del sobre de la invitación.
                    </p>
                  </div>
                )}

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
                      {Array.from({ length: invitado?.cupos || 5 }, (_, i) => (
                        <option key={i + 1}>{i + 1} {i + 1 === 1 ? "persona" : "personas"}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Mensaje (opcional)">
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="¿Algo que quieras decirnos...?"
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