import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Archive.scss';

const BASEURL = 'http://localhost:3014/xw';

const Archive = (props) => {


  // useEffect to get puzzles from server and set them to archive
  const getArchive = () => {
    if (props.loggedIn) {
      // fetch
      fetch(BASEURL, {
        method: 'GET',
        headers: {
          'Authorization': props.token
        }
      }).then(r => r.json())
        .then(rjs => {
          for (let p of rjs) {
            p.meta = {};
            p.meta.title = p.title;
            p.meta.author = p.author;
            p.meta.copyright = p.copyright;
            delete p.title;
            delete p.author;
            delete p.copyright;
            p.dims = {x: p.dims[0], y: p.dims[1]}
            
          }
          props.archiveAddPuzzles(rjs);
        })

    } else {
      // clear archive
      console.log('deleting all')
      props.archiveDeleteAll();
    }

    // return () => {
    //   //if (!props.loggedIn) {
    //     console.log("deleting all");
    //     props.archiveDeleteAll();
    //   //e}
    // };

  }

  useEffect(getArchive, [props.loggedIn]);



  return (
    <div id="archive">
      <ul id="archive-ul">
        {props.archive.map((p, i) => <li key={i}><Link to={"/puzzle/"+p.id}>{p.meta.title}</Link></li>)}
      </ul>
    </div>
  );
};

export default Archive;