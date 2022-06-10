import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalContainer } from "../components/Layout";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "../api/posts";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--grid-gutters) / 2);
  padding-right: calc(var(--grid-gutters) / 2);
  padding-bottom: calc(var(--grid-gutters) / 2);
  padding-top: calc(var(--grid-gutters) / 2);
  background-color: var(--clr-blue);
  color: var(--clr-primary);
  margin-top: calc(var(--grid-gutters) * 2);
  margin-bottom: calc(var(--grid-gutters) * 2);
  margin-right: auto;
  margin-left: auto;
  max-width: 30rem;

  h1 {
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    margin-bottom: calc(var(--grid-gutters) / 2);
    color: var(--clr-primary);
  }

  p {
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    color: var(--clr-primary);

    a {
      margin-top: calc(var(--grid-gutters) / 4);
      font-family: var(--type-font-primary);
      font-weight: var(--type-font-weight-primary);
      color: var(--clr-primary);
      font-size: 22px;
    }
  }

  form {
    display: block;
    label {
      display: block;
      padding-top: calc(var(--grid-gutters) / 4);
      padding-bottom: calc(var(--grid-gutters) / 4);
      font-weight: var(--type-font-weight-secondary);
      font-family: var(--type-font-secondary);
      font-size: 22px;
    }
    input {
      display: block;
      width: 100%;
      font-size: 22px;
    }
    button {
      display: block;
      margin-bottom: var(--grid-gutters);
      margin-top: calc(var(--grid-gutters) / 2);
      padding-top: calc(var(--grid-gutters) / 8);
      padding-bottom: calc(var(--grid-gutters) / 8);
      padding-left: var(--grid-gutters);
      padding-right: var(--grid-gutters);
    }
  }
`;

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register"

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button is enabled with JS Hack (Security Feature)
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(REGISTER_URL, 
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type" : "application/json" },
          withCredentials: true
        }
      )
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUser("")
      setPwd("")
      setMatchPwd("")
      setErrMsg("")
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg("Username Taken")
      } else {
        setErrMsg("Registration Failed")
      }
      errRef.current.focus();
    }
  };



  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            {/* INSERT ROUTER LINK */}
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <StyledContainer>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                  <FaTimes />
                </span>
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FaInfoCircle />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens, allowed.
              </p>
              <label htmlFor="password">
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                  <FaTimes />
                </span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FaInfoCircle />
                8 to 24 characters.
                <br />
                Must Include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>

              <label htmlFor="confirm_pwd">
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <FaTimes />
                </span>
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FaInfoCircle />
                Must match the first password input field.
              </p>
              <button
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </button>
            </form>
            <p>
              Already Have an Account?
              <br />
              <span className="line">
                {/* <Link>Sign In</Link> */}
                <a href="#">Sign In</a>
              </span>
            </p>
          </StyledContainer>
        </section>
      )}
    </>
  );
};

export default Register;