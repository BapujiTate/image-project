import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  };

  imageHandeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Upload Your Image Here!</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            name="image_upload"
            accept="image/*"
            id="input"
            onChange={this.imageHandeler}
          ></input>
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <span className="material-icons">add_a_photo</span>
              &nbsp;Click to Add Image
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
