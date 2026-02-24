import { TicketList } from "../../features/tickets/components/TicketList";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
      <section className="mx-auto max-w-7xl">
        <h1>Dashboard de Soporte</h1>
        <div>
          <Link to="/ticket/nuevo" className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
            Creat Ticket
          </Link>
          <TicketList />
        </div>
      </section>
    </div>
  );
};
