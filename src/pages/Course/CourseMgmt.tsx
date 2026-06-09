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
      <>
        <Sidebar otherLinks = { <Links /> } /> 
        <div>
          <Outlet/>
        </div>
      </>
    );
}