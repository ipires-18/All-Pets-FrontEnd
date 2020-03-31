import React from 'react';
import './styles.css';
import LoginPets from '../../assets/login_pets4.jpeg'
import LogoRoxo from '../../assets/logo_roxo.svg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import {FiKey} from 'react-icons/fi' //Usaremos para icone feathericons ---> Link do site com os nomes https://feathericons.com/

export default function Login(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className="login-container">
            <article className="img-container">
                <img src={LoginPets} alt="All Pets"/>
            </article>
            <article className="body-container">
              <img src={LogoRoxo} alt="All Pets"/>
              <h1>Login</h1>
                <form>
                    <p>
                        <p><label htmlFor="email">E-mail</label></p>
                        <input type="email" placeholder="Digite seu email"/>
                    </p>
                    <p>
                        <p><label htmlFor="senha">Senha</label></p>
                        <input type="senha" placeholder="Digite sua senha"/>
                    </p>
                    <button className="button-login">Entrar</button>
                    <button className="button-login">Cadastrar-se</button>  
                </form>
                <form>
                    <p>
                        <Button style={{marginLeft:10, color:'#B42DCC'}} variant="outlined" color="primary" onClick={handleClickOpen}>
                        Esqueceu a senha?
                        </Button>
                    </p>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Recuperação de Senha</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Informe seu email realizado no cadastro, para que possamos enviar o link  
                                    para a configuração do nova senha.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                />
                            </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Enviar
                        </Button>
                        </DialogActions>
                    </Dialog>
                </form>
                <div>
                </div>
            </article>
        </div>
    );
}