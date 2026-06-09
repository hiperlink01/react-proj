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
      <>
        <Sidebar otherLinks = { <Links /> } /> 
        <div>
          <Outlet/>
        </div>
      </>
    );
}
