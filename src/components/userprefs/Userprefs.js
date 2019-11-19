import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import APIURL from '../../helpers/environment';
import './Userprefs.scss';

const BASEURL = APIURL + '/userprefs';


const Userprefs = (props) => {

  const [firstName, setFirstName] = useState(props.userprefs.firstName);
  const [lastName,  setLastName ] = useState(props.userprefs.lastName);


  const fetchUserPrefs = () => {
    if (props.loggedIn) {
      
      function handleRJS (rjs) {
        console.log(rjs);
        if (rjs.ups)
        props.userprefsMod({firstName: rjs.ups.firstName, lastName: rjs.ups.lastName});

        if (!rjs.ups) {
          fetch(BASEURL, {
            method: 'POST',
            headers: {
              'Authorization': props.token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {firstName: '', lastName: ''}})
          }).then(r => r.json())
        }

      }
      
      fetch(BASEURL, {
        method: 'GET',
        headers: {
          'Authorization': props.token
        }
      }).then(r => r.json())
        .then(handleRJS);

      
        



    } else {
      //delete userprefs
      props.userprefsMod({});
    }

  };

  useEffect(fetchUserPrefs, [props.loggedIn]);


  const submitNewUPs = (e) => {
    e.preventDefault();

    fetch(BASEURL, {
      method: 'PUT',
      headers: {
        'Authorization': props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          firstName,
          lastName
        }
      })
    }).then(r => r.json())
      .then(rjs => console.log("UP put",rjs))
      .then(rjs => props.userprefsMod(rjs));

  };

  const deleteUPs = () => {
    fetch(BASEURL, {
      method: 'DELETE',
      headers: {
        'Authorization': props.token
      }
    }).then(r => r.json())
      .then(rjs => console.log("UP deletion:",rjs))
      .then(() => props.userprefsMod({}));
  };




  return (
    <div id="userprefs">
      <form onSubmit={submitNewUPs}>
        <label htmlFor="first-name">First name:</label>
        <input name="first-name" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <br />
        <label htmlFor="last-name">Last name:</label>
        <input name="last-name" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <br />
        <button type="button" onClick={deleteUPs}>delete userprefs</button>
        <button type="submit" onClick={e => submitNewUPs(e)}>submit new userprefs</button>
      </form>
    </div>
  );
}


export default Userprefs;