// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         <form onSubmit={handleLogin}>
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

//           <button type="submit">Login</button>
//         </form>

//         <p>
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn, setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
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

      // Store JWT token
      localStorage.setItem("token", response.data.token);

      alert("Login successful!");

      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => setShowRegister(true)}
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              padding: 0,
              fontSize: "inherit",
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;