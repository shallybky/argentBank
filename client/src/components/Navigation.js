import argentBank from '../assets/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/actions'

function Navigation() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)
  const { userName } = useSelector((state) => state.userProfile)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
   <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link onClick={handleLogout} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}

      </div>
    </nav>
  );
}

export default Navigation;
