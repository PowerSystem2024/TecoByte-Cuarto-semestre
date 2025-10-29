import { Link, useNavigate } from "react-router-dom";
import { Card, Input, Button, Label, Container } from "../components/ui";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPege() {
  const { register, handleSubmit, formState: {
    errors
  } } = useForm();
  const { signin, errors: loginErrros } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/tareas");
    }
  });

  return (
    <div className="login-container">
      <div className="login-card">
        {loginErrros &&
          loginErrros.map((error) => (
            <p className="bg-red-500 text-white p-2">{error}</p>
          ))}
        <h1 className="login-title">Iniciar sesión</h1>

        <form onSubmit={onSubmit} className="login-form">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingrese su email"
            {...register("email", {
              required: true,
            })}
          ></Input>
          {
            errors.email && <p className="text-red-500">Este campo es requerido</p>
          }
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingrese su Contraseña"
            {...register("password", {
              required: true,
            })}
          ></Input>
          {
            errors.password && <p className="text-red-500">Este campo es requerido</p>
          }
          <Button>Ingresar</Button>
        </form>
        <div className="login-footer flex flex-col items-center gap-2 mt-6">
          <p className="text-slate-600">¿No tienes cuenta?</p>
          <Link to="/register" className="text-lg font-semibold" style={{color: 'var(--accent)'}}>Registrate</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPege;