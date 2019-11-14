import React, {useState} from 'react';
import APIURL from '../helpers/environment';

const BASEURL = APIURL + "/user";

const Auth = (props) => {

  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = login ? BASEURL + "/signin" : BASEURL + "/signup";
    const reqBody = {
      user: {
        username: email,
        password: password
      }
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    }).then(r => r.json())
      .then(rjson => props.updateToken(rjson.token))
      .catch(err => console.log(err.message));
  };
  



  return (
    <div id="auth">
      <h2>{login ? "login" : "signup"}</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">email</label>
        <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="button" name="loginToggle" onClick={e => setLogin(!login)}>{login ? "signup" : "login"}</button>
        <button type="submit" name="submit">submit</button>
      </form>
    </div>
  );
}

export default Auth;