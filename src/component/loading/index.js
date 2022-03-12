import { Spinner } from "reactstrap";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center m-auto">
    <Spinner size="lg" color="warning" />
  </div>
);

export default loading;
