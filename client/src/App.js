import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Homescreen";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

import Upload from "./Pages/UserDashboard/Upload";
import AnalyzeDashboard from "./Pages/UserDashboard/Analyze";
import ForecastDashboard from "./Pages/UserDashboard/Forecast";
import ChatBotPage from "./Pages/UserDashboard/Chatbot";
import ProfilePage from "./Pages/UserDashboard/Profile";

import UserDashboardLayout from "./Pages/UserDashboardLayout";
import PublicLayout from "./Pages/PublicLayout";

import About from "./Pages/Home/About";
import { initHotjar } from "./utils/hotjar";

function App() {

  useEffect(()=>{
    initHotjar();
  },[]);

  return (
    <div>
       <Router>
      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/herosection" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

        </Route>

        <Route element={<UserDashboardLayout />}>
          <Route path="/upload" element={<Upload />} />
          <Route path="/analyze" element={<AnalyzeDashboard />} />
          <Route path="/forecast" element={<ForecastDashboard />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;