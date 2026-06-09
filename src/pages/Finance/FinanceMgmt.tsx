import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Links = () => {
  return(
    <> 
      <Link to="/finance" >Payments</Link>
      <Link to="/finance/plans" >Plans</Link>
      <Link to="/finance/subscriptions" >Subcriptions</Link>
    </>
  )
}

export default function FinanceMgmt() {
      return(
      <div className="d-flex vh-100 overflow-hidden bg-surface">
        <Sidebar otherLinks = { <Links /> } /> 
        <div className="flex-grow-1 overflow-auto p-4 bg-body">
          <Outlet/>
        </div>
      </div>
    );
}
