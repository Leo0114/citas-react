import React, { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintoma, setSintoma] = useState("");

  const [error, setError] = useState(false);
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setDueño(paciente.dueño);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintoma(paciente.sintoma);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar formulario
    if ([nombre, dueño, email, fecha, sintoma].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    /* Objeto de paciente */
    const objetoPaciente = {
      nombre,
      dueño,
      email,
      fecha,
      sintoma,
    };
    if (paciente.id) {
      //Editando registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el form
    setNombre("");
    setDueño("");
    setEmail("");
    setFecha("");
    setSintoma("");
  };

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">
      <h2 className=" font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className=" text-lg mt-5 text-center mb-10">
        Añadir Pacientes y {""}
        <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-white shadow-lg rounded-xl py-10 px-5 mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className=" mb-5">
          <label
            className="text-gray-700 block font-bold uppercase"
            htmlFor="mascota"
          >
            Nombre mascota
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-xl"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>

        <div className=" mb-5">
          <label
            className="text-gray-700 block font-bold uppercase"
            htmlFor="dueño"
          >
            Nombre dueño
          </label>
          <input
            value={dueño}
            onChange={(e) => setDueño(e.target.value)}
            id="dueño"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-xl"
            type="text"
            placeholder="Nombre del dueño"
          />
        </div>

        <div className=" mb-5">
          <label
            className="text-gray-700 block font-bold uppercase"
            htmlFor="email"
          >
            email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-xl"
            type="email"
            placeholder="Correo electronico"
          />
        </div>

        <div className=" mb-5">
          <label
            className="text-gray-700 block font-bold uppercase"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            id="alta"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-xl"
            type="date"
          />
        </div>

        <div className=" mb-5">
          <label
            className="text-gray-700 block font-bold uppercase"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
            placeholder="Describe los sintomas"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-xl"
            id="sintomas"
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full rounded-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
