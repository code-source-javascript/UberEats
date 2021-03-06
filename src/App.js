import React, { useState } from "react";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/Login/loginPage";

export const EatContext = React.createContext({});

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [countryCodeBar, setCountryCodeBar] = useState(false);
  const store = {
    sideBar,
    setSideBar,
    countryCodeBar,
    setCountryCodeBar,
  };
  return (
    <EatContext.Provider value={store}>
      <div className="">
        {/* <Homepage /> */}
        <LoginPage />
      </div>
    </EatContext.Provider>
  );
}

export default App;
