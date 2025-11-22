import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./components/Index"; 
import Signup from "./components/Signup"; 
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/" || location.pathname === "/index" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Navigation />}
      <Routes>
        <Route index element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
