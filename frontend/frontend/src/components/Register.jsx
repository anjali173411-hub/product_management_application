// import React, { useState } from "react";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();

//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Register</h2>

//         <form onSubmit={handleRegister}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">Register</button>
//         </form>

//         <p>
//           Already have an account? <a href="/">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from "react";
import axios from "axios";

function Register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      alert("Registration successful!");

      setEmail("");
      setPassword("");

      // Go back to Login
      setShowRegister(false);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
          <div>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setShowRegister(false)}
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              padding: 0,
              fontSize: "inherit",
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;