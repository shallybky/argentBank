import '../styles/main.css';
import Footer from '../components/Footer.js';
import Navigation from '../components/Navigation.js';
import Accounts from '../components/Accounts.js';
import InfoUser from '../components/InfoUser.js';

function User() {
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
