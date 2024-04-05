import '../styles/main.css';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.js';
import Navigation from '../components/Navigation.js';
import Accounts from '../components/Accounts.js';
import InfoUser from '../components/InfoUser.js';

function User() {

  let navigate = useNavigate()
const { token } = useSelector((state) => state.userLogin)

useEffect(() => {
  if (!token) {
      navigate('/')
    }
}, [token, navigate])

  return (
    <div>
      <main className="main bg-dark bg-padding">
        <InfoUser />
        <h2 className="sr-only">Accounts</h2>
        <Accounts
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>

  );
}

export default User;
