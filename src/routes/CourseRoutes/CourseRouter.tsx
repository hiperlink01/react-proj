import CourseMgmt from '../../pages/Course/CourseMgmt';
import Courses from '../../pages/Course/pages/Courses';
import Lessons from '../../pages/Course/pages/Lessons';
import Modules from '../../pages/Course/pages/Modules';
import Roadmaps from '../../pages/Course/pages/Roadmaps';

// We are defining a single object here, which contains an array of its own children.
export const courseRoutes = {
  path: "/courses",
  element: <CourseMgmt />,
  children: [
    {
      index: true, 
      element: <Courses />,
    },
    {
      path: "lessons",
      element: <Lessons />,
    },
    {
      path: "modules",
      element: <Modules />,
    },
    {
      path: "roadmaps",
      element: <Roadmaps />,
    }
  ],
};