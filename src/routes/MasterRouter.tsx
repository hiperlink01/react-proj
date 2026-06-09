import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { courseRoutes } from './CourseRoutes/CourseRouter';
import { financeRoutes } from './FinanceRoutes/FinanceRouter';
import { peopleRoutes } from './PeopleRoutes/PeopleRouter'

// We define our routing tree as an array of objects
export const masterRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  courseRoutes,
  financeRoutes,
  peopleRoutes
]);