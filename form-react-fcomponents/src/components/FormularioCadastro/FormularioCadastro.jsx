import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    let nome = "";
    return (
        <form onSubmit={(event) => {console.log(nome); event.preventDefault()}}>

            <TextField onChange={(event)=> {nome = event.target.value}}  id="nome" label="Nome" color="secondary" variant="outlined" fullWidth margin="normal" />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel
                control={<Switch name="Promoções" defaultChecked color="primary" />}
                label="Promoções"
            />
            <FormControlLabel
                control={<Switch name="Novidades" defaultChecked color="primary" />}
                label="Novidades"
            />

            <Button
                variant="contained" color="primary" type="submit" >
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;