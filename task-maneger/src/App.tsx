import React from "react";
import { RecoilRoot } from "recoil";
import MainTabs from "./components/MainTabs";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="app-container">
        {" "}
     
        <h1 className="app-header">Welcome to your Task Manager!</h1>{" "}
       
        <MainTabs />
      </div>
    </RecoilRoot>
  );
}

export default App;
