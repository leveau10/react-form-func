import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true,texto:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        color="secondary"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={() =>{
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}

        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => setPromocoes(e.target.checked)}
            name="Promoções"
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(e) => setNovidades(e.target.checked)}
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
