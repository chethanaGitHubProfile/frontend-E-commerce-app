import Layout from "../Layout/Layout";
import EmployeeMenu from "../Layout/EmployeeMenu";
export default function ReservationTable() {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <EmployeeMenu />
          </div>
          <div className="col-md-9">
            <h2>Reservation table</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
