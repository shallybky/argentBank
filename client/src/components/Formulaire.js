import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/actions';

function Formulaire() {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const { error } = useSelector((state) => state.userLogin)
  const { token } = useSelector((state) => state.userLogin)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (token) {
      navigate('/user')
    }
  }, [token, navigate])


  return (
  
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label for="username">Username</label>
              <input type="text" id="username" value={email}
              onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
              <input type="password" id="password" value={password}
              onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me" >Remember me</label>
          </div>

          <button className="sign-in-button">
          Sign In
          </button>
          {error && ( <div><br />
            <p>{error}</p>
          </div>)}
        </form>
      </section>

   );
}

export default Formulaire;