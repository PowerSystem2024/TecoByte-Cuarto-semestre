import { Link, useLocation } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./navigation.jsx";
import Container from "../ui/Container";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const location = useLocation();
  const { signout, user } = useAuth();

  // Detectar si estamos en una ruta privada
  const privatePathPatterns = ['/tareas', '/perfil'];
  const isPrivateRoute = privatePathPatterns.some(pattern =>
    location.pathname.startsWith(pattern)
  );

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between items-center py-3">
        <div className="flex items-center gap-4">
          <span className="navbar-brand">PERN-STACK</span>
          <Link to="/">
            <h1 className="text-2xl font-bold text-white">Proyecto PERN</h1>
          </Link>
        </div>
        <ul className="flex items-center gap-x-2">
          {isPrivateRoute ? (
            <>
              {PrivateRoutes.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path} className="nav-link">{name}</Link>
                </li>
              ))}

              <li>
                <button
                  onClick={() => signout()}
                  className="nav-link"
                  style={{border: 'none', cursor: 'pointer'}}
                >
                  Salir
                </button>
              </li>

              {user && (
                <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <img src={user.gravatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" style={{border: '2px solid #38bdf8'}} />
                  <span className="font-medium" style={{color: '#38bdf8'}}>{user.name}</span>
                </li>
              )}
            </>
          ) : (
            PublicRoutes.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="nav-link">{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
