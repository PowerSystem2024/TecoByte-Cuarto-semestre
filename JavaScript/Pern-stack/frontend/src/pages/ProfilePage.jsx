import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function ProfilePage() {
  const { user, signout } = useAuth();

  if (!user) return <div className="p-4">No estás logueado.</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.gravatar}
            alt={user.name}
            className="profile-avatar"
          />
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-date">Registrado: {new Date(user.fecha_registro).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button
            onClick={async () => {
              try {
                await signout();
                window.location.href = "/";
              } catch (e) {
                console.error(e);
              }
            }}
            className="btn-logout"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;