import { FormEvent, useState, useContext } from "react";
import { UserDataContext } from "../UserDataProvider";

function UserDataForm() {
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState(0);
  const [localAddress, setLocalAddress] = useState("");
  const userDataContext = useContext(UserDataContext);



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      name: localName,
      age: localAge,
      address: localAddress
    }
    userDataContext?.setUserData(userData);
    setLocalName("");
    setLocalAge(0);
    setLocalAddress("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="UserDataInput">Name: Age: Adress:</label>

        <input
          type="text"
          id="UserDataInput"
          autoComplete="off"
          onChange ={(e) => setLocalName(e.target.value)}
          value={localName}
          required
        />

    <input
          type="number"
          id="UserDataInput"
          autoComplete="off"
          onChange ={(e) => setLocalAge(Number.parseInt(e.target.value))}
          value={localAge}
          required
        />

<input
          type="text"
          id="UserDataInput"
          autoComplete="off"
          onChange ={(e) => setLocalAddress(e.target.value)}
          value={localAddress}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserDataForm;
