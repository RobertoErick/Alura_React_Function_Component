import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);

  const [errors, setErrors] = useState({
    name: { error: false, message: "" },
    lastName: { error: false, message: "" },
    email: { error: false, message: "" },
  });

  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: { error: false, message: "" },
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: { error: true, message: "Deben ser al menos 3 caracteres" },
      }));
    }
  }

  function validarApellidos(apellidos) {
    if (apellidos.length >= 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: { error: false, message: "" },
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: { error: true, message: "Deben ser al menos 3 caracteres" },
      }));
    }
  }

  function validarCorreo(correo) {
    if (correo.includes('@')) {
      return { email: { error: false, message: "" } };
    } else {
      return { email: { error: true, message: "El correo debe contener @" } };
    }
  }
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, prom, nov });
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setName(e.target.value);
          validarNombre(e.target.value);
        }}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={() => validarNombre(name)}
      />
      <TextField
        id="lastName"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setLastName(e.target.value);
          validarApellidos(e.target.value);
        }}
        value={lastName}
        error={errors.lastName.error}
        helperText={errors.lastName.error ? errors.lastName.message : ""}
        onBlur={() => validarApellidos(lastName)}
      />
    <TextField
        id="correo"
        label="Correo"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email.error}
        helperText={errors.email.error ? errors.email.message : ""}
        onBlur={() => {
            const correoErrors = validarCorreo(email);
            setErrors((prevErrors) => ({
            ...prevErrors,
            email: correoErrors.email,
            }));
        }}
    />

      <FormGroup>
        <FormControlLabel
          control={<Switch checked={prom} onChange={(e) => setProm(e.target.checked)} />}
          label="Promociones"
        />
        <FormControlLabel
          control={<Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />}
          label="Novedades"
        />
      </FormGroup>
      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSignUp;
