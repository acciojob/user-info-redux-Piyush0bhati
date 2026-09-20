import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../redux/action/userAction";



const User = () => {

    const user = useSelector(state => state)
    const dispatch = useDispatch()



    return (
        <div>
            <h1>User Information</h1>

            
            Name: <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => dispatch(updateName(e.target.value))}
            />
            <br /><br />
            Email: <input 
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />

            {/* <hr /> */}
            <h3>Current Values in Store:</h3>
            <p>Name- {user.name}</p>
            <p>Email- {user.email}</p>

        </div>
    )
}
export default User