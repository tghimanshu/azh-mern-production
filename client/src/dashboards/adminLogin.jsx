import http from "../utils/http";
import React, { useState } from "react";

const AdminLogin = ({ history }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await http.post("/admin/login", user);
      localStorage.setItem("auth-token", result.data);
      history.push("/admin");
    } catch (error) {
      const errors = error.response;
      setError(errors.data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className="mt-5 main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back, Admin</h1>
                <p className="lead">Sign in to your account to continue</p>
                {error === "" ? (
                  ""
                ) : (
                  <div className="alert alert-danger">{error}</div>
                )}
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          value={user.email}
                          onChange={(e) => {
                            const temp = { ...user };
                            temp.email = e.target.value;
                            setUser(temp);
                          }}
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          value={user.password}
                          onChange={(e) => {
                            const temp = { ...user };
                            temp.password = e.target.value;
                            setUser(temp);
                          }}
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <small>
                          <a href="pages-reset-password.html">
                            Forgot password?
                          </a>
                        </small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox align-items-center">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            value="remember-me"
                            name="remember-me"
                            checked=""
                          />
                          <label className="custom-control-label text-small">
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          onClick={handleLogin}
                          className="btn btn-lg btn-primary"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
