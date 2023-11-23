import API from "./components/API";

import NameProvider, { NameContext } from "./NameProvider";
import NameForm from "./NameForm";
import UserDataProvider, { UserDataContext } from "./UserDataProvider";
import UserDataForm from "./components/UserDataForm";

import "./App.css";
import { useContext, useState } from "react";
import NameShower from "./NameShower";
import UserDataShower from "./UserDataShower";



function App() {
  const nameContext = useContext(NameContext);
  const userDataContext = useContext(UserDataContext)

  return (
    <>
<UserDataProvider>
  <UserDataForm/>
  <p>Global state (from App.tsx)</p>
  <UserDataShower/>
  </UserDataProvider>
-----------------------
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
