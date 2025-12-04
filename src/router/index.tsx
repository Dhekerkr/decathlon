import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import DecathlonChallenge from '../pages/DecathlonChallenge';
import Qcm from '../pages/Qcm';
import Results from '../pages/Results';
import MovementDetails from '../pages/MovementDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DecathlonChallenge />,
      },
      {
        path: 'qcm',
        element: <Qcm />,
      },
      {
        path: 'results',
        element: <Results />,
      },
      {
        path: 'movement/:id',
        element: <MovementDetails />,
      },
    ],
  },
]);
