
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/navbar.css"

function Navbar() {
    const nav = useNavigate()
    function navigateTologin() {
        nav("/login")

    }
    function navigateToRegistration() {
        nav("/signup")

    }

    const logged = localStorage.getItem('access_token')

    function logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setTimeout(() => {
            window.location.reload()
        }, 1000);
        nav('/', true);
    }

    function homeLoad() {
        nav("/", true)
        window.location.reload();
    }
    function myBookings() {
        if(logged){
            nav("/user/bookings")
        }
        else{
            alert("You Need To Login First!")
            nav('/login',true)
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
            <div className="container-fluid">
                {/* <img src="https://t4.ftcdn.net/jpg/05/00/61/19/360_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg" height={"30px"} width={"50px"} className="movie-image"></img> */}
                <p className="boletonav" onClick={homeLoad}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg>Movie <a className="tob">Mania</a></p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <p className="nav-link active" aria-current="page" style={{ cursor: "pointer" }} onClick={homeLoad}>Home</p>
                        </li>

                    </ul>

                    <span className="d-flex">
                        {!logged &&
                            (<>
                                <button className="btn  btn-outline-success " type="submit" onClick={navigateTologin}>Login</button>
                                <button className="btn  btn-outline-success " type="submit" onClick={navigateToRegistration}>SignUp</button>
                            </>)
                        }
                        {
                            logged &&
                            (<>
                                <button className="btn  btn-outline-success " type="submit" onClick={myBookings}>My Bookings</button>
                                <button className="btn  btn-outline-success " type="submit" onClick={logout}>Logout</button>
                            </>)
                        }
                    </span>
                </div>
            </div>
        </nav>
    )

}


export default Navbar;