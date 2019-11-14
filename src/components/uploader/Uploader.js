import React from 'react';
import parseAL from '../../utils/ALParser';
import APIURL from '../../helpers/environment';

const BASEURL = APIURL + "xw";


const Uploader = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(document.getElementById("file-upload"));

    let p = await document.getElementById("file-upload").files[0].arrayBuffer();
    p = new Uint8Array(p);
    p = Array.from(p);
    p = p.map(x => x.toString(16).padStart(2,'0')).join('');
    p = parseAL(p);
    
    // p.title = p.meta.title;
    // p.author = p.meta.author;
    // p.copyright = p.meta.copyright;
    // delete p.meta;

    fetch(BASEURL + '/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token
      },
      body: JSON.stringify({xw:p})
    });

  };

  return (
    <div id="uploader">
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Upload an across lite format puzzle</h2>
        <label htmlFor="fileUpload">file upload</label>
        <input name="fileUpload" id="file-upload" type="file" />
        <button name="submit" type="submit">upload</button>
      </form>
    </div>
  );
};

export default Uploader;