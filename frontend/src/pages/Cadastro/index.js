import React from 'react';
import './styles.css';
import RegisterLogo from '../../assets/logo_branco.svg';
import RegisterPet from '../../assets/register_pets.jpg';
import DonoPet from '../../assets/dono.jpg';
import CuidadorPet from '../../assets/cuidador.jpg';

export default function Cadastro(){
    return(
        <div className="register-container">
            <section className="content"> 
            <div className="fist-body">
                <article className="body-container">
                <img src={RegisterLogo} alt="Logo"/>
                </article>

                <form>
                    <article className="circus-p"/>
                    <b>Informações Pessoais</b> 
                    
                    <article className="circus-s"/>
                    <b>Seleciona seu perfil</b> 

                    <article className="circus-t"/>
                    <b>Informações de Serviços</b> 

                    <article className="circus-q"/>
                    <b>Confirmação</b> 
                </form>

                <article className="imgs-container">
                <img src={RegisterPet} alt="All Pets"/>
                </article>

                <div className="container-per">
                    <h1>Selecione o seu Perfil</h1>
                </div>

                <div className="container-body-fot">
                    <article className="body-dono"> 
                    <img src={DonoPet} alt="Dono" />
                    </article>

                    <h3>Dono de Pet</h3>
                    <article className="container-p">
                    <p>Para você que passa muito tempo fora de casa e fica preocupado com seu pet, para dar comida ou remédio, All Pets oferece a você um serviço de buca de cuidadores especializados no cuidado de pets.</p>
                    </article>
                </div>

                <div className="container-body-cuida">
                    <article className="body-cuidador">
                    <img src={CuidadorPet} alt="Cuidado"/>
                    </article>

                    <h3>Cuidador</h3>
                    <article className="container-p">
                    <p>Você que ama os animais, trabalha com isso, esta é uma oportunidade de cuidar bem desse bichinhos e ainda conseguir uma renda extra pelo seus cuidados.</p>
                    </article>
                </div>

                <div className="body-button-container">
                    <article className="button-first">
                        <button>Próximo</button>
                    </article>
                    
                    <article className="button-second">
                        <button>Voltar</button>
                    </article>
                </div>

        </div>
        </section>
        </div>

    );
}