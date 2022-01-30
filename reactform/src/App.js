import './App.css';
import Form from './components/Form';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Table from './components/Table';
import Updateform from './components/UpdateForm';
const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Table /> },
    { path: '/add', element: <Form /> },
    { path: '/update/:id', element: <Updateform /> },


  ]);
  return routes;
}
const appviwer = () => {
  return(
    <Router>
      <App />
    </Router>
  );

};

export default appviwer;
