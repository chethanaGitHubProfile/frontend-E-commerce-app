import { ReserveProvider } from "../../reducers/Reserve-Reducer";
import Layout from "../Layout/Layout";
import ReservationForm from "./Reservation-Form";
import ReservationTable from "./Reservation-Table";

export default function ReservationContainer() {
  return (
    <ReserveProvider>
      <Layout>
        <div>
          <h2>Reservation Container</h2>
          <ReservationForm />
          <ReservationTable />
        </div>
      </Layout>
    </ReserveProvider>
  );
}
