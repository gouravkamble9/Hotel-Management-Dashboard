import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import NotFound from "./pages/PageNotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import { isAuthenticated } from "./utils/Auth";
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Reports from "./components/Reports/Reports";
import AppContext from "./utils/context";
import Favourite from "./components/favourite/favourite";
import Schedule from "./components/Schedule/Schedule";
import Message from "./components/Message/Message";
import Setting from "./components/Setting/Setting";
import Task from "./components/Task/Task";


const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AppContext>
    </BrowserRouter>
  );
};

function DashboardWithSidebar() {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  return (
    <div className="dash-sec">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="dash-route">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Reports/>} />
          <Route path="/favourite" element={<Favourite/>} />
          <Route path="/task" element={<Task/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/setting" element={<Setting/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
