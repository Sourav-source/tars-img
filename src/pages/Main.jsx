// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllHotels, fetchAllHotelsByCity } from "../../redux/hotelsSlice";
// import { useLocation } from "react-router-dom";

// function Hotels() {
//   // redux states
//   //   const { loading, error, hotel } = useSelector((state) => state.hotel);
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (location.pathname.includes("cities")) {
//       dispatch(fetchAllHotelsByCity(location.pathname.slice(8)));
//     } else {
//       dispatch(fetchAllHotels());
//     }
//   }, [dispatch, location.pathname]);

//   return <div>Hotels</div>;
// }

// export default Hotels;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/userSlice";
// import { useNavigate } from "react-router-dom";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import toast from "react-hot-toast";
// import "./Login.css";

// // Form input validation regex
// const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
// const pswdRegex = /^([A-Za-z\d@$!%*#?&]{8,20})$/;

// const Login = () => {
//   // states
//   const [email, setEmail] = useState("");
//   const [isValidEmail, setIsValidEmail] = useState(false);
//   const [emailErrorMsg, setEmailErrorMsg] = useState("");
//   const [password, setPassword] = useState("");
//   const [isValidPswd, setIsValidPswd] = useState(false);
//   const [pswdErrorMsg, setPswdErrorMsg] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [emailBlur, setEmailBlur] = useState(false);
//   const [pswdBlur, setPswdBlur] = useState(false);

//   const [emailInputChange, setEmailInputChange] = useState(false);
//   const [pswdInputChange, setPswdInputChange] = useState(false);

//   // redux states
//   const { loading, error } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     function validateEmail(email) {
//       if (email !== "") {
//         setIsValidEmail(emailRegex.test(email));
//         setEmailErrorMsg("Please provide a valid email address");
//       } else if (
//         email === "" &&
//         (emailBlur === true || emailInputChange === true)
//       ) {
//         setIsValidEmail(emailRegex.test(email));
//         setEmailErrorMsg("Email cannot be empty");
//       }
//     }

//     function validatePassword(password) {
//       if (password !== "") {
//         setIsValidPswd(pswdRegex.test(password));
//         setPswdErrorMsg("Please provide a valid password");
//       } else if (
//         password === "" &&
//         (pswdBlur === true || pswdInputChange === true)
//       ) {
//         setIsValidPswd(pswdRegex.test(password));
//         setPswdErrorMsg("Password cannot be empty");
//       }
//     }

//     validateEmail(email);
//     validatePassword(password);
//   }, [email, password, emailBlur, pswdBlur, emailInputChange, pswdInputChange]);

//   const handleEmailInput = (e) => {
//     setEmail(e.target.value);
//     setEmailInputChange(true);
//   };

//   const handlePasswordInput = (e) => {
//     setPassword(e.target.value);
//     setPswdInputChange(true);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     let userCredential = {
//       email,
//       password,
//     };
//     isValidEmail &&
//       isValidPswd &&
//       dispatch(loginUser(userCredential)).then((result) => {
//         console.log(result.payload.status);
//         if (result.payload.status === 200) {
//           toast.success(result.payload.message);
//           setEmail("");
//           setPassword("");
//           navigate("/");
//         } else
//           toast.error(
//             `${result.payload.status} ${result.payload.message} User Not Found`
//           );
//       });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = () => {
//     navigate("/register"); // Redirect to the signup page
//   };

//   const handleOtplogin = () => {
//     navigate("/otplogin");
//   };

//   const handleForgotPassword = () => {
//     navigate("/passwordChangeMail");
//   };

//   return (
//     <div className="card-signin">
//       <h1 className="car-signin-header">Login</h1>
//       {loading && (
//         <img
//           src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
//           alt="Loading"
//           className="loading-image"
//         />
//       )}
//       <form onSubmit={handleLogin}>
//         <div className="form-group-signin">
//           <input
//             style={{ border: "2px solid black", position: "relative" }}
//             type="email"
//             value={email}
//             onChange={(e) => handleEmailInput(e)}
//             onBlur={() => setEmailBlur(true)}
//             placeholder="Enter Your Email"
//             className="input-signin"
//           />
//           {!isValidEmail && (
//             <span className="input-error-display">{emailErrorMsg}</span>
//           )}
//           <MdEmail
//             size={25}
//             className="eye-icon"
//             style={{ position: "absolute", right: "2%", top: "17%" }}
//           />
//         </div>
//         <div className="form-group-signin">
//           <input
//             style={{ border: "2px solid black", position: "relative" }}
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => handlePasswordInput(e)}
//             onBlur={() => setPswdBlur(true)}
//             placeholder="Enter Your Password"
//             className="input-signin"
//           />
//           {!isValidPswd && (
//             <span className="input-error-display">{pswdErrorMsg}</span>
//           )}
//           <button
//             type="button"
//             className="show-password-button-signin"
//             onClick={togglePasswordVisibility}
//             style={{ position: "absolute", top: "9%", right: "2%" }}
//           >
//             {showPassword ? (
//               <AiFillEye
//                 size={25}
//                 alt="Toggle Password Visibility"
//                 className="eye-icon"
//               />
//             ) : (
//               <AiFillEyeInvisible
//                 size={25}
//                 alt="Toggle Password Visibility"
//                 className="eye-icon"
//               />
//             )}
//           </button>
//           <div style={{ marginTop: "15px" }}>
//             <span>Forgot Your Password ?</span>
//             <button className="signup-button" onClick={handleForgotPassword}>
//               Click Here
//             </button>
//           </div>
//         </div>
//         <button
//           type="submit-login"
//           className="signin-button"
//           disabled={loading}
//         >
//           Sign In
//         </button>
//         <button
//           type="submit-otp"
//           onClick={handleOtplogin}
//           disabled={loading}
//           className="signin-button"
//         >
//           OTP SignIn
//         </button>

//         <br />

//         <div className="dhac">
//           Don't have an account?
//           <button
//             type="button"
//             onClick={handleSignUp}
//             className="signup-button"
//           >
//             Click Here
//           </button>
//         </div>
//       </form>
//       <br />
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;

// import React from "react";
// import "./Register.css";

// const Register = () => {
//   return (
//     <>
//       <div className="card-signup">
//         <form className="form-container">
//           <div className="form-input-group">
//             <div className="selected-image-preview">
//               <img src="" alt="Selected" />
//             </div>
//             <label htmlFor="profile-image" className="upload-button-signup">
//               Select Profile Picture
//               <br />
//               <input type="file" id="profile-image" accept="image/*" />
//             </label>
//           </div>
//           <div className="input-field">
//             <input
//               type="text"
//               placeholder="Name"
//               required
//               className="input-field-signup"
//             />
//             <input
//               type="text"
//               placeholder="Gender"
//               required
//               className="input-field-signup"
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               required
//               className="input-field-signup"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="input-field-signup"
//             />
//             <input
//               type="text"
//               placeholder="Mobile"
//               required
//               className="input-field-signup"
//             />
//             <input
//               type="password"
//               placeholder="Password  "
//               required
//               className="input-field-signup"
//             />
//           </div>
//           <div className="button-block">
//             <button type="submit">Sign Up</button>
//           </div>
//         </form>
//       </div>
//       <div className="last-message">Already have an account?</div>
//       <button type="submit-sign">Sign in</button>
//     </>
//   );
// };

// export default Register;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import { useSelector } from "react-redux";
import ImageModal from "../components/ImageModal";

function Main() {
  const { searchvalue } = useParams();
  const { loading, error, image } = useSelector((state) => state.image);
  console.log(image?.data.results);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  return (
    <>
      {!loading && (
        <h1 className="my-4 text-2xl font-bold text-gray-900">{searchvalue}</h1>
      )}
      {loading ? (
        <div role="status" className="loading-center">
          <svg
            aria-hidden="true"
            className="w-20 h-20 mr-2 text-gray-200 w- animate-spin fill-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : !loading && error === null ? (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {image?.data.results &&
              image?.data.results.map((img) => (
                <ImageCard
                  img={img}
                  key={img.id}
                  setIsOpen={setIsOpen}
                  setModalDetails={setModalDetails}
                />
              ))}
          </div>
          <ImageModal
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            setModalDetails={setModalDetails}
            modalDetails={modalDetails}
          />
        </>
      ) : (
        <>{error}</>
      )}
    </>
  );
}

export default Main;
