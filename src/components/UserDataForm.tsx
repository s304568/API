import { FormEvent, useState, useContext } from "react";
import { UserDataContext } from "../UserDataProvider";

function UserDataForm() {
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState("");
  const [localAdress, setLocalAdress] = useState("");
  const userDataContext = useContext(UserDataContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userDataContext?.setUserData(localUserData);
    setLocalUserData("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="UserDataInput">Name: Age: Adress:</label>

        <input
          type="text"
          id="UserDataInput"
          autoComplete="off"
          onChange={(e) => setLocalUserData(e.target.value)}
          value={localUserData}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserDataForm;
