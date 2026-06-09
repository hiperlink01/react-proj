import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Links = () => {
  return(
    <> 
      <Link to="/courses">Course Management</Link>
      <Link to="/finance">Financial Management</Link>
      <Link to="/people">People Management</Link>
    </>
  )
}

export default function Home() {
      return(
      <div className="d-flex vh-100 overflow-hidden bg-surface">
        <Sidebar otherLinks = { <Links /> } /> 
        <div className="flex-grow-1 overflow-auto p-4 bg-body">
          <h1>Platform Master Home</h1>
        </div>
      </div>
    );
}