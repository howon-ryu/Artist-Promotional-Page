import "./Adminlogin.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const data = {
    id: userId,
    password: userPw,
  };
  const onClickLogin = () => {
    console.log("입력id,pw 확인");
    console.log("ID : ", userId);
    console.log("PW : ", userPw);
    axios
      .post("http://api.1971artist.com:3000/admins/login", data)
      .then((res) => {
        if (res.data.code === 1000) {
          navigate("/adminabout");
          const token = res.data.result.jwt;
          console.log(token);
          return token;
        } else if (res.data.code === 3003) {
          alert("아이디가 잘못되었습니다.");
        } else if (res.data.code === 4000) {
          alert("비밀번호가 잘못되었습니다.");
        } else if (userId === "") {
          alert("아이디를 입력해주세요.");
        }
      })
      .catch();
  };

  useEffect(() => {});

  return (
    <div classname="adminnavbar">
      <div className="login">
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>ID</label>
          <input
            type="text"
            className="loginInput"
            value={userId}
            onChange={handleInputId}
          ></input>
          <label>PASSWARD</label>
          <input
            type="password"
            className="loginInput"
            value={userPw}
            onChange={handleInputPw}
          ></input>
          <button className="loginButton" onClick={onClickLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}