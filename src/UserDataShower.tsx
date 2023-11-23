import { useContext } from "react";
import { UserDataContext } from "./UserDataProvider";

function UserDataShower() {
const userDataContext = useContext(UserDataContext);

return (
<>
<p>Global User data: {userDataContext?.userData.name}</p>
<p>Global User data: {userDataContext?.userData.age}</p>
<p>Global User data: {userDataContext?.userData.address}</p>
</>
);

}

export default UserDataShower;