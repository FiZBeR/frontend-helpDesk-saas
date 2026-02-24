import React from "react";
import { CreateTicketForm } from "../../features/tickets/components/CreateTicketForm";

export const NewTicket = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex items-center justify-center p-4">
        <CreateTicketForm/>
    </div>
  );
};
