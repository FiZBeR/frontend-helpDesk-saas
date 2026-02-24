import React from 'react'
import { useFetch } from '../../../hooks/useFetch'

export const TicketList = () => {

    const { data, isLoading, error} = useFetch();

    if(isLoading){
        return <h2>Cargando Dashboard...</h2>
    }

    if(error){
        return <h4>`Error en ${error}`</h4>
    }

    if(data.length == 0){
        return <h1>No hay tickets que mostrar</h1>
    }

  return (
    <div>
        <h1>Tickets</h1>
        <ul>
            {data?.map(ticket => (
                <li key={ticket.id}>
                    <div>
                        <div>
                            <p>{ticket.titulo} - estado: {ticket.estado}</p>
                        </div>
                        <div>
                            <p>Prioridad: {ticket.prioridad} - dias abiertos: {ticket.dias_abiertos}</p>
                            <p>{ticket.descripcion}</p>
                            <p>Equipo: {ticket.equipo}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
