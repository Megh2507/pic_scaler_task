import React, { useState } from "react";
import "./imguploader.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { FaUpload } from "react-icons/fa";

function Imageiploader() {
  const [progress, setProgress] = useState(0);
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [newimg, setNewimg] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setImg(e.target.files[0]);
  };
  const addImage = (imageBlob) => {
    setImgs((prevImgs) => [...prevImgs, imageBlob]);
  };

  const callAPI = () => {
    console.log("api called");
    const formData = new FormData();
    formData.append("image", img);
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        const progress = (progressEvent.loaded / progressEvent.total) * 100;
        setProgress(progress);
      },
    };

    axios
      .post(
        "https://test-enhance-jagcolvycq-ue.a.run.app/model/predict",
        formData,
        config
      )
      .then((res) => {
        console.log(res.data);
        if (imgs.length < 5) {
          const fileInput = document.getElementById("fileInput");
          if (fileInput.files.length === 1) {
            addImage(fileInput.files[0]);
          } else {
            alert("No file selected. Select a file and try again.");
          }
        } else {
          alert("More than 5 images are not allowed");
        }

        setProgress(0);
      })
      .catch((err) => console.log(err));
  };
  console.log(imgs);
  return (
    <div className="imguploadbody">
      <div className="img-bod-1">
        <div className="img-bod-inner-1">
          <h3>Drag and Drop or Upload</h3>
          <input
            className="custom-file-input"
            id="fileInput"
            type="file"
            onChange={changeHandler}
          />
          <div className="upload-btn-section">
            <button onClick={callAPI}>Upload</button>
            <FaUpload color="#fff" size={20} />
          </div>

          {/* <ProgressBar animated now={progress} /> */}
          <ProgressBar animated now={progress} className="pb" />
        </div>
      </div>
      {/* <input id='fileInput' type="file" onChange={changeHandler}/> */}
      {/* <button onClick={callAPI}>Uploadz</button> */}
      {/* <ProgressBar animated now={45} /> */}
      {/* <ProgressBar animated now={progress} className="pb"/> */}
      <br />
      <div id="myimgs">
        <div className="myimgs-body">
          {imgs.length===0 && <h2 style={{color:"#a3a5a6"}}>No Images</h2>}
          {imgs &&
            imgs.map((val) => {
              return (
                <img
                  style={{ height: "200px", width: "200px", borderRadius:"20px"}}
                  src={URL.createObjectURL(val)}
                  alt=""
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Imageiploader;
