import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Links = () => {
  return(
    <>
      <Link to="/courses" >Courses</Link>
      <Link to="/courses/lessons" >Lessons</Link>
      <Link to="/courses/modules" >Modules</Link>
      <Link to="/courses/roadmaps">Roadmaps</Link>
    </>
  )
}

export default function CourseMgmt() {
      return(
      <div className="d-flex vh-100 overflow-hidden bg-surface">
        <Sidebar otherLinks = { <Links /> } /> 
        <div className="flex-grow-1 overflow-auto p-4 bg-body">
          <Outlet/>
        </div>
      </div>
    );
}