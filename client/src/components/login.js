//import { useState } from "react";
const Login = () =>{
   
    
    return (
        <div>
          <form>
            <fieldset>
            <label>Username</label>
            <input
              type="text"
              id="add-nick-name"
              placeholder="Nickname"
              required
              value={user.nickname}
              onChange={handleNicknameChange}
            />
            <label>Email</label>
            <input
              type="text"
              id="add-email"
              placeholder="Email"
              required
              value={user.email}
              onChange={handleEmailChange}
            />
            </fieldset>
          </form>  
        </div>
    )
};

export default Login;