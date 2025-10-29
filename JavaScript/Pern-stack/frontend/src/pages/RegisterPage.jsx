import { Button, Card, Container, Input, Label } from "../components/ui";
import  { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function RegisterPage() {
  
  const { register, handleSubmit, formState: {errors} } = useForm();

  const { signup, errors: setUserErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => { 
    const user = await signup(data);
    if(user){
      navigate("/tareas");
    }
  });


  return (
    <div className="register-container">
      <div className="register-card">
        {setUserErrors &&
          setUserErrors.map((error) => (
            <p className="bg-red-500 text-white p-2">{error}</p>
          ))}
        <h3 className="register-title">Registro</h3>
        <form onSubmit={onSubmit} className="register-form">
          <Label htmlFor="name">Nombre</Label>
          <Input placeholder="Ingrese su nombre"
          {...register("name", {required:true})}></Input>

        {
          errors.name && <p className="text-red-500">Este campo es requerido</p>
        }
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su email"
          {...register("email", {required:true})}></Input>

        {
          errors.email && <p className="text-red-500">Este campo es requerido</p>
        }
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"
          {...register("password", {required:true})}></Input>

        {
          errors.password && <p className="text-red-500">Este campo es requerido</p>
        }
          <Button>Registrarse</Button>
        </form>
        <div className="flex flex-col items-center gap-2 mt-6">
          <p className="text-slate-600">¿Ya tienes cuenta?</p>
          <Link to="/login" className="text-lg font-semibold" style={{color: 'var(--accent)'}}>Iniciar Sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;