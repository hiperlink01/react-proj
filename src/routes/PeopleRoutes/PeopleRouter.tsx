import PeopleMgmt from '../../pages/People/PeopleMgmt';
import Users from '../../pages/People/pages/Users';
import Certificates from '../../pages/People/pages/Certificates';

export const peopleRoutes = {
  path: "/people",
  element: <PeopleMgmt />,
  children: [
    {
      index: true, 
      element: <Users />,
    },
    {
      path: "certificates",
      element: <Certificates />,
    }
  ]
};