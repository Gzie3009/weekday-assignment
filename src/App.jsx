import "./App.css";
import DisplayCard from "./Components/DisplayCard";
import Jobs from "./Components/Jobs";
import Navbar from "./Components/Navbar";
import ProfileComponent from "./Components/ProfileComponent";
import Sidebar from "./Components/Sidebar";
import { Provider } from "react-redux";
import { store } from "./Core/Redux/store";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import BottomProfileDrawer from "./Components/BottomProfileBar";
import TabSection from "./Components/TabSection";
export default function App() {
  const user = {
    firstName: "Mrinmoy",
    lastName: "Saikia",
    currentSalary: {
      fixedSalary: 32,
      variable: 4.2,
      stocks: 12,
    },
    expectedSalary: 55,
    jobSwitchStatus: "",
    email: "dev.work.gzie@gmail.com",
    wnumber: "7086817628",
    jobConfidentiality: "",
    referralGivingStatus: false,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <main className="flex w-full">
          <Sidebar />
          <div className="w-full h-[100vh] overflow-x-hidden overflow-y-scroll">
            <Navbar />
            <DisplayCard />
            <BottomProfileDrawer />
            <TabSection/>
          </div>
          <ProfileComponent />
        </main>
      </Provider>
    </BrowserRouter>
  );
}
