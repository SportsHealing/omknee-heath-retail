import { Navigate } from "react-router-dom";

/** Permanent client-side redirect used when a route has moved. */
const Redirect = ({ to }: { to: string }) => <Navigate to={to} replace />;

export default Redirect;
