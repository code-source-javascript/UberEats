import React, { useState } from "react";
import Homepage from "./pages/homepage";

export const EatContext = React.createContext({});

function App() {
  const [sideBar, setSideBar] = useState(false);
  const store = {
    sideBar,
    setSideBar,
  };
  return (
    <EatContext.Provider value={store}>
      <div className="">
        <Homepage />
      </div>
    </EatContext.Provider>
  );
}

export default App;
