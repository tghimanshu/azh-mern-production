import React, { useState, useCallback, Fragment } from "react";
// import { Redirect } from "react-router-dom";
import http from "utils/http";
import { successAlert, dangerAlert } from "utils/alerts";
import ReCAPTCHA from "react-google-recaptcha";
import { CropModel } from "utils/model";
import SectionTitle from "advisor/sectionTitle";

export const AdvisorRegistor = ({ history }) => {
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(0);
  const [experience, setexperience] = useState(0);
  const [regNo, setregNo] = useState("");
  const [expertise, setexpertise] = useState("");
  const [location, setlocation] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [cp, setcp] = useState(false);

  const [showCrop, setShowCrop] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [ogImage, setOgImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  function onCaptchaChange(value) {
    setcp(value);
  }

  const handleClose = () => {
    if (croppedImage === null) {
      setprofilePic("");
      setShowCrop(false);
      setCroppedImage(null);
    } else {
      setprofilePic("");
      setShowCrop(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return seterror("Please Accept the Terms!");
    }
    if (cp === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return seterror("Captcha Required!");
    }
    try {
      await http.post("/advisor/", {
        username: username,
        name: name,
        email: email,
        contact: contact,
        experience: experience,
        sebi_no: regNo,
        expertise: expertise,
        location: location,
        password: pass,
        profile_pic: profilePic,
      });
      // console.log(result);
      seterror(
        successAlert("Registration SuccessFul, Please Login!", seterror)
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
      if (typeof error.response.data === "string") {
        seterror(dangerAlert(error.response.data));
      } else {
        const errors = error.response.data;
        seterror(dangerAlert(errors[0].message));
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await http.post("/advisor/upload", formData, config);

      setprofilePic(data);
    } catch (error) {}
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const cropImage = async (e) => {
    try {
      setShowCrop(true);
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setprofilePic(imageDataUrl);
      setShowCrop(true);
      setOgImage(file);
    } catch (e) {}
  };

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });

  async function getCroppedImg(imageSrc, crop) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 250;
    canvas.height = 250;

    // draw rotated image and store data.
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    // As Base64 string
    return canvas.toDataURL("image/jpeg");
  }

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const handleUploadImage = async (e, ogImage) => {
    try {
      setShowCrop(false);
      const croppedimg = await getCroppedImg(profilePic, croppedAreaPixels);
      setCroppedImage(croppedimg);
      uploadImage(dataURLtoFile(croppedimg, ogImage.name));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form method="POST" className="container pt-3" onSubmit={handleSubmit}>
      {error}
      <div className="form-group">
        <label htmlFor="adv-username">
          User Name: <span className="text-danger">*</span>
        </label>
        <input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-username"
          id="adv-username"
          placeholder="Enter User Name Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-name">
          Name: <span className="text-danger">*</span>
        </label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-name"
          id="adv-name"
          placeholder="Enter Name Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-email">
          E-Mail: <span className="text-danger">*</span>
        </label>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-email"
          id="adv-email"
          placeholder="Enter Email Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-contact">
          Contact: <span className="text-danger">*</span>
        </label>
        <input
          value={contact}
          onChange={(e) => setcontact(parseInt(e.target.value))}
          required={true}
          className="form-control"
          type="number"
          name="adv-contact"
          id="adv-contact"
          placeholder="Enter Contact Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-experience">
          Experience (In Years): <span className="text-danger">*</span>
        </label>
        <input
          value={experience}
          onChange={(e) => setexperience(parseInt(e.target.value))}
          required={true}
          className="form-control"
          type="number"
          name="adv-experience"
          id="adv-experience"
          placeholder="Enter Experience"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-reg_no">
          SEBI Registration Number: <span className="text-danger">*</span>
        </label>
        <input
          value={regNo}
          onChange={(e) => setregNo(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-reg_no"
          id="adv-reg_no"
          placeholder="Enter SEBI Registration Number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-position">
          Your Expertise: <span className="text-danger">*</span>
        </label>
        <input
          value={expertise}
          onChange={(e) => setexpertise(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-position"
          id="adv-position"
          placeholder="Enter Your Expertise"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-location">
          Location: <span className="text-danger">*</span>
        </label>
        <input
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-location"
          id="adv-location"
          placeholder="Enter Location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-pass">
          Password: <span className="text-danger">*</span>
        </label>
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="adv-pass"
          placeholder="Enter Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-cpass">
          Confirm Password: <span className="text-danger">*</span>
        </label>
        <input
          value={cpass}
          onChange={(e) => setcpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="adv-cpass"
          placeholder="Confirm Password"
        />
      </div>
      <label htmlFor="adv-profile_pic">
        Profile_pic: <span className="text-danger">*</span>
      </label>
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              onChange={cropImage}
              type="file"
              className="custom-file-input"
              id="adv-inputGroupFile02"
            />
            <label className="custom-file-label" htmlFor="adv-inputGroupFile02">
              {profilePic === ""
                ? "Choose file"
                : profilePic.split("advisors\\")[1]}
              <span className="text-danger">*</span>
            </label>
          </div>
        </div>

        {croppedImage && (
          <img
            src={croppedImage}
            alt={croppedImage}
            className="text-center mb-3"
          />
        )}
      </div>
      <div className="custom-control custom-checkbox">
        <input
          onChange={(e) => setisChecked(!Boolean(isChecked))}
          checked={isChecked}
          type="checkbox"
          name="adv-terms"
          id="adv-terms"
          className="custom-control-input"
          //   style={{ width: "1.25rem", height: "1.25rem" }}
          required={true}
        />
        <label
          htmlFor="adv-terms"
          className="custom-control-label"
          //   style={{ fontSize: "1.24rem" }}
        >
          I Agree to the{" "}
          <a href="page.php?name=terms-conditions">Terms &amp; Conditions.</a>
          <span className="text-danger">*</span>
        </label>
      </div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={onCaptchaChange}
      />
      <button
        type="submit"
        name="adv-submit"
        className="btn btn-success btn-block"
      >
        Register
      </button>
      <CropModel
        show={showCrop}
        imageUrl={profilePic}
        crop={crop}
        zoom={zoom}
        setCrop={setCrop}
        setZoom={setZoom}
        handleUploadImage={handleUploadImage}
        onCropComplete={onCropComplete}
        handleClose={handleClose}
        ogImage={ogImage}
      />
    </form>
  );
};

export const FPAdvisorRegister = ({ history }) => {
  return (
    <Fragment>
      <SectionTitle
        title="Advisor Register"
        breadcrumbs={[
          { link: "/", name: "Home", active: true },
          { link: "/advisorregister", name: "Advisor Register", active: true },
        ]}
      />
      <div className="container px-5">
        <AdvisorRegistor history={history} />
      </div>
    </Fragment>
  );
};
