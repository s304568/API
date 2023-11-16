import API from "./components/API";
import NameProvider, { NameContext } from "./NameProvider";
import NameForm from "./NameForm";

import "./App.css";
import { useContext, useState } from "react";
import NameShower from "./NameShower";

function App() {
  const nameContext = useContext(NameContext);

  return (
    <>
      <NameProvider>
        <API />
        <NameForm />
        <p>Global state (from App.tsx)</p>
        <NameShower />
      </NameProvider>
    </>
  );
}

export default App;
