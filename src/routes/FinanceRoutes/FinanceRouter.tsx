import FinanceMgmt from '../../pages/Finance/FinanceMgmt';
import Payments from '../../pages/Finance/pages/Payments';
import Plans from '../../pages/Finance/pages/Plans'
import Subscriptions from '../../pages/Finance/pages/Subscriptions';

export const financeRoutes = {
  path: "/finance",
  element: <FinanceMgmt />,
  children: [
    {
      index: true, 
      element: <Payments />,
    },
    {
      path: "subscriptions",
      element: <Subscriptions />,
    },
    {
      path: "plans",
      element: <Plans />,
    }
  ],
};