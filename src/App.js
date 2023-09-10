import FormSignUp from "./components/FormSignUp";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import './App.css';

function App() {
  const handleSubmit = ( valores ) => {
    console.log(`APPJS: `,valores)
  }

  return (
    <Container component="section" maxWidth="sm">
    <Typography variant="h3" align="center" component="h1">Formulario registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
};

export default App;
