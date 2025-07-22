import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard';
import IndexLinks from './Components/Organisms/IndexLinks/IndexLinks';
import DashboardRedirect from './Pages/DashboardRedirect/DashboardRedirect';
import NotFound from './Pages/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/dashboard/:zipcode" element={<Dashboard />} />
          <Route path="/zipcodes" element={<IndexLinks />} />
          <Route path="/counties" element ={<IndexLinks />} />
          <Route path="/cities" element ={<IndexLinks />} />
          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;

