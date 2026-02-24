import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { TicketCard } from "./TicketCard";
import { DashboardStats } from "./DashboardStats";

export const TicketList = () => {
  const { data, isLoading, error } = useFetch();
  const [filtro, setFiltro] = useState('');

  const ticketsFiltrados = data.filter(ticket => 
    ticket.id.toString().includes(filtro)
  );

  if (isLoading) {
    return <h2>Cargando Dashboard...</h2>;
  }

  if (error) {
    return <h4>`Error en ${error}`</h4>;
  }


  return (
    <div>
      <DashboardStats tickets={data} setFiltro={setFiltro} value={filtro}/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ticketsFiltrados?.map((ticket) => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </div>
    </div>
  );
};
