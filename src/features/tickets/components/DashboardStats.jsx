import React from "react";

export const DashboardStats = ({ tickets, setFiltro, value }) => {
  const safeTickets = tickets || [];

  const criticalCount = safeTickets.filter(
    (t) => t.prioridad == "critica"
  ).length;
  const highCount = safeTickets.filter((t) => t.prioridad == "alta").length;
  const openCount = safeTickets.filter(
    (t) => t.estado == "abierto"
  ).length;

  return (
    <div className="flex flex-col gap-6 mb-6">
      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Critical Issues */}
        <div className="flex flex-col gap-1 rounded-xl p-5 border border-red-500/20 bg-gradient-to-br from-[#1e1b2e] to-[#151221] relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-red-500">
              warning
            </span>
          </div>
          <p className="text-[#929bc9] text-sm font-medium z-10">
            Critical Issues
          </p>
          <div className="flex items-baseline gap-2 z-10">
            <p className="text-white text-3xl font-bold">{criticalCount}</p>
          </div>
        </div>

        {/* High Priority */}
        <div className="flex flex-col gap-1 rounded-xl p-5 border border-yellow-500/20 bg-gradient-to-br from-[#1e1e24] to-[#15151a] relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-yellow-500">
              priority_high
            </span>
          </div>
          <p className="text-[#929bc9] text-sm font-medium z-10">
            High Priority
          </p>
          <div className="flex items-baseline gap-2 z-10">
            <p className="text-white text-3xl font-bold">{highCount}</p>
          </div>
        </div>

        {/* Open Tickets */}
        <div className="flex flex-col gap-1 rounded-xl p-5 border border-blue-500/20 bg-gradient-to-br from-[#1a1d2d] to-[#111422] relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-blue-500">
              pending_actions
            </span>
          </div>
          <p className="text-[#929bc9] text-sm font-medium z-10">
            Open Tickets
          </p>
          <div className="flex items-baseline gap-2 z-10">
            <p className="text-white text-3xl font-bold">{openCount}</p>
          </div>
        </div>
      </div>

      {/* Toolbar (Buscador y Filtros) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-[#111422] p-4 rounded-xl border border-[#232948]">
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-[#929bc9] text-xl">
              search
            </span>
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2.5 border border-[#232948] rounded-lg leading-5 bg-[#0b0e17] text-white placeholder-[#58608a] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
            placeholder="Busca el ticket por ID"
            type="text"
            value={value}
            onChange={(e) => {setFiltro(e.target.value)}}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-lg cursor-pointer shadow-blue-600/20 whitespace-nowrap" onClick={() => setFiltro('')}>
            All Tickets
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#232948] text-[#929bc9] hover:text-white text-sm font-medium rounded-lg hover:bg-[#2f365f] transition-colors whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            Critical
          </button>
        </div>
      </div>
    </div>
  );
};
