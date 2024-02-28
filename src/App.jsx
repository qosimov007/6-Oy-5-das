import React from "react";
import "./assets/logo.png";
import img from "./assets/Ellipse.png";
import "./App.css";
import { useState, useRef } from "react";
import icon1 from "./assets/worldwide.png";
import icon2 from "./assets/instagram.png";
import icon3 from "./assets/telegram.png";
import icon4 from "./assets/facebook.png";
import icon5 from "./assets/github.png";
import logo from "./assets/darkor.png";

function App() {
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");
  const countryRef = useRef("");

  const [form, setForm] = useState({
    usernameError: "",
    emailError: "",
    numberError: "",
    countryError: "",

    username: "",
    email: "",
    phone: "",
    country: "",
  });

  function validateError(form) {
    // if (!form.username) {
    //   setForm({ ...form, usernameError: 'kompaniya nomida xatolik bor '});
    //   return false;
    // } else {
    
    //   setForm({ ...form, usernameError:""});

    // }


    // if (!form.phone) {
    //   setForm({ ...form, numberError: "telefon raqamda xatolik bor" });
    //   return false;
    // } else {
    //   setForm({ ...form, numberError: ''});
    // }


    return true;
  }



   const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    );
        };


  function validate(usernameRef, emailRef, numberRef, countryRef) {
    if (!usernameRef.current.value) {
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      
       return false;
    } else {
      usernameRef.current.style.outlineColor = "blue";
     

    }

    if (usernameRef.current.value.trim().length < 4) {
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      return false;
    } else {
      usernameRef.current.style.outlineColor = "blue";
    }

    if (Number(usernameRef.current.value)) {
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
       return false;
    } else {
      usernameRef.current.style.outlineColor = "blue";
    }



    if (!emailRef.current.value) {
      emailRef.current.focus();
      emailRef.current.style.outlineColor = "red";
      // return false;
    } else {
      emailRef.current.style.outlineColor = "blue";
    }


    
    if (!validateEmail(emailRef.current.value)) {
      emailRef.current.focus();
      emailRef.current.style.outlineColor = "red";
      // return false
    } else {
      emailRef.current.style.outlineColor = "blue";
      return false;
    }

    if (!numberRef.current.value) {
      numberRef.current.focus();
      numberRef.current.style.outlineColor = "red";
      return false;
    } else {
      numberRef.current.style.outlineColor = "blue";
    }

    if (numberRef.current.value.length < 6) {
      numberRef.current.focus();
      numberRef.current.style.outlineColor = "red";
      return false;
    } else {
      numberRef.current.style.outlineColor = "blue";
    }


    if (!Number(numberRef.current.value)) {
      numberRef.current.focus();
      numberRef.current.style.outlineColor = "red";
      // return false;
    } else {
      numberRef.current.style.outlineColor = "blue";
    }





    if (!countryRef.current.value) {
      countryRef.current.focus();
      countryRef.current.style.outlineColor = "red";

    //  return false;
    } else {
      countryRef.current.style.outlineColor = "blue";
    }

   
  }

  function handleClick(e) {
    e.preventDefault();
    if (validate(usernameRef, emailRef, numberRef, countryRef)) {
      console.log("validatsadan o'tdi");
     
    }
    if (validateError(form)) {
      console.log("validatsadan o'tdi");
    }
   
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <a href="#">
              <img width="90px" src={logo} alt="" />
            </a>
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="#">Vakansiyalar</a>
              </li>
              <li>
                <a href="#">Kandidatlar</a>
              </li>
              <li>
                <a href="#">Kompaniyalar</a>
              </li>
              <li>
                <a href="#">Xizmatlar</a>
              </li>
              <li>
                <a href="#">Ta’lim</a>
              </li>
            </ul>
          </div>
          <div className="button">
            <select className="form-select" aria-label="Default select example">
              <option selected>O'zb</option>
              <option value="1">Rossiya</option>
              <option value="2">Ingliz</option>
            </select>
            <button>Boshlash</button>
          </div>
        </div>

        <div className="container">
          <div className="hero">
            <h1>Kompaniya ma'lumotlari</h1>
            <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>

            <div className="download-img">
              <img src={img} alt="" />
              <a href="#">yuklash</a>
            </div>
            <form onSubmit={handleClick}>
              <div className="username">
                <label for="username">Kompaniya nomi*</label> <br />
                <input
                  type="text"
                  placeholder="Kompaniya nomi"
                  ref={usernameRef}
                
                />
                {form.usernameError && <p> {form.usernameError}</p>}
              </div>


              <div className="phone">
                <label className="phones" for="phone">
                  Telefon raqami*
                </label>{" "}
                <br />
                <input
                  type="tel"
                  placeholder="telefon raqami"
                  ref={numberRef}
                  

                />
                {form.numberError && <p> {form.numberError}</p>}
              </div>


              <div className="email">
                <label for="email">Email*</label> <br />
                <input
                  type="email"
                  placeholder="email"
                  ref={emailRef}
                

                />
                {form.emailError && <p>{form.emailError} </p>}
              </div>


              <div className="social-icons">
                <h4>Linklar*</h4>
                <a href="#">
                  {" "}
                  <img width="45px" src={icon1} alt="" />
                </a>
                <a href="#">
                  {" "}
                  <img width="45px" src={icon2} alt="" />
                </a>
                <a href="#">
                  {" "}
                  <img width="45px" src={icon3} alt="" />
                </a>
                <a href="#">
                  {" "}
                  <img width="45px" src={icon4} alt="" />
                </a>
                <a href="#">
                  {" "}
                  <img width="45px" src={icon5} alt="" />
                </a>
              </div>
              <div className="Country-select">
                <div className="selections">
                  <label for="country">Davlat*</label> <br /> <br />
                  <select
                    className="selection"
                    aria-label="Default select example"
                    ref={countryRef}
                  
                    
                  >
                    <option selected>Davlat</option>
                    <option value="1">O'zbekiston</option>
                    <option value="2">Rossiya</option>
                    <option value="3">America</option>
                  </select>
                  {form.countryError && <p> {form.usernameError}</p>}
                </div>

                <div className="selection-2">
                  <label for="phone">Shahar*</label> <br /> <br />
                  <select
                    className="selection"
                    aria-label="Default select example"
                  >
                    <option selected>Shahar</option>
                    <option value="1">Toshlent</option>
                    <option value="2">Fargona</option>
                    <option value="3">Qo'qon</option>
                  </select>
                </div>
              </div>


              <div className="live-space">
                <label for="life"> Yashash joyi*</label> <br />
                <input type="text" id="life" placeholder="yashash joyi" />
              </div>
              <div className="works-man">
                <label for="work">Hodimlar soni*</label> <br /> <br />
                <select
                  className="selection-3"
                  aria-label="Default select example"
                >
                  <option selected>Hodimlar soni</option>
                  <option value="1">10 ta</option>
                  <option value="2">20 ta</option>
                  <option value="3">30 ta</option>
                </select>
              </div>{" "}
              <br /> <br />


              <div className="description">
                <label for="desc">Izoh*</label> <br />
                <textarea
                  className="form-control"
                  id="desc"
                  rows="10"
                  placeholder="Kompaniya haqida izoh qoldiring"
                ></textarea>
              </div>
              <div className="buttons">
                <div>
                  <button className="back">ORTGA</button>
                </div>
                <div>
                  <button className="next">KEYINGISI</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
