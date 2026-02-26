import React, { useState } from "react";
import { createTicket } from "../services/getTickets";
import { useNavigate } from "react-router-dom";

export const CreateTicketForm = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [estado, setEstado] = useState('');
  const [equipo, setEquipo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const ticketData = {
        titulo,
        descripcion,
        prioridad,
        equipo: parseInt(equipo, 10),
      };

      console.log("Ticket Data: ", ticketData);
      const success = await createTicket(ticketData);

      if (success) {
        navigate("/dashboard", { replace: true });
      } else {
        setErrorMsg("Error al crear el ticket, revisa tu consola");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const ticketData = {
      titulo,
      descripcion,
      prioridad,
      estado,
      equipo,
    };
    console.log('Ticket Data:', ticketData);
  };

  return (
    <div className="w-full max-w-130 mx-auto">
      {/*<!-- Card -->*/}
      <div className="bg-white dark:bg-[#191e33] rounded-xl shadow-xl border border-gray-200 dark:border-[#323b67] overflow-hidden">
        {/*<!-- Header Section -->*/}
        <div className="px-8 pt-10 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined text-3xl">bug_report</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Create Ticket
          </h1>
          <p className="text-gray-500 dark:text-[#929bc9] text-sm">
            Client Portal Access for Hardware Inventory
          </p>
        </div>
        {/*<!-- Form Section -->*/}
        <div className="px-8 pb-10">
          <form
            action="#"
            className="flex flex-col gap-5"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/*<!-- Ticket -->*/}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-700 dark:text-white"
                for="ticket"
              >
                Titulo
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                  <span className="material-symbols-outlined text-[20px]">
                    label
                  </span>
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#5b6488] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  id="ticket"
                  name="ticket"
                  placeholder="Titulo del ticket"
                  required
                  type="text"
                  value={titulo}
                  onChange={(e) => {
                    setTitulo(e.target.value);
                  }}
                />
              </div>
            </div>
            {/*<!-- Decripción -->*/}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-700 dark:text-white"
                for="descripcion"
              >
                Decripción
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                  <span className="material-symbols-outlined text-[20px]">
                    description
                  </span>
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#5b6488] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Una descripción clara de lo que sucede"
                  required=""
                  type="text"
                  value={descripcion}
                  onChange={(e) => {
                    setDescripcion(e.target.value);
                  }}
                />
              </div>
            </div>
            {/*<!-- Prioridad -->*/}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-700 dark:text-white"
                for="prioridad"
              >
                Prioridad
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                  <span className="material-symbols-outlined text-[20px]">
                    priority
                  </span>
                </span>
                <select
                  className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                  id="prioridad"
                  name="prioridad"
                  value={prioridad}
                  onChange={(e) => {
                    setPrioridad(e.target.value);
                  }}
                >
                  <option value='baja'>
                    Selecciona una prioridad
                  </option>
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                  <option value="critica">Critica</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-[#929bc9]">
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </span>
              </div>
            </div>
            {/* Equipo */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-700 dark:text-white"
                for="equipo"
              >
                Equipo
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                  <span className="material-symbols-outlined text-[20px]">
                  desktop_windows
                  </span>
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#5b6488] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  id="equipo"
                  name="equipo"
                  placeholder="Id del equipo"
                  required
                  type="text"
                  value={equipo}
                  onChange={(e) => {
                    setEquipo(e.target.value);
                  }}
                />
              </div>
            </div>
            {/*<!-- Submit Button -->*/}
            <button
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary py-3.5 px-8 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#191e33]"
              type="submit"
            >
              Create Ticket
            </button>
          </form>
        </div>
        {/*<!-- Bottom decorative line -->*/}
        <div className="h-1 w-full bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    </div>
  );
};
