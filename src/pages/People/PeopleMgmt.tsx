import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Links = () => {
  return(
    <> 
      <Link to="/people" >Users</Link>
      <Link to="/people/certificates" >Certificates</Link>
    </>
  )
}

export default function PeopleMgmt() {
      return(
      <>
        <Sidebar otherLinks = { <Links /> } /> 
        <div>
          <Outlet/>
        </div>
      </>
    );
}

