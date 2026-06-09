import { RouterProvider } from 'react-router-dom';
import { masterRouter } from './routes/MasterRouter';

export default function App() {
  return <RouterProvider router={masterRouter} />;
}