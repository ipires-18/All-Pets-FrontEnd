import React from 'react';
import './styles.css';
import RegisterLogo from '../../assets/logo_branco.svg';
import RegisterPet from '../../assets/register_pets.jpg';

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

                <div className="container-cuid">
                    <h1>Informação do Cuidador</h1>
                </div>

                            
                <div className="info-cuid-container">
                    <h4>Graduação*</h4>
                    <input placeholder="Técnico em veterinário" />
                    
                    <br/>
                    <article className="body-h4-esp">
                    <h4>Especialidade*</h4>
                    <input placeholder="Animais de porte Grande" />
                    </article>

                    <br/>
                    <article className="body-h4-ajus">
                    <h4>Valor da Sua Hora*</h4>
                    <input placeholder="R$200,00" />
                    </article> 

                    <div className="container-checkbox" >
                    <article className="body-cotainer-cuidador">
                    <h3>Quais dias está disponível</h3>
                    </article> 

                    <div className="checkbox-body">
                    <article className="checkbox-cuid">
                    
                    <article className="checkbox-seg">
                    <input type="checkbox" id="scales-s" name="Segunda"  />
                    <label >Segunda</label>

                    <input type="checkbox" id="scales-t" name="Terça" />
                    <label >Terça</label>
                    </article>

                    <article className="checkbox-ter">
                    <input type="checkbox" id="scales-q" name="Quarta" />
                    <label>Quarta</label>

                    <input type="checkbox" id="scales-qq" name="Quinta" />
                    <label>Quinta</label>
                    </article>

                    
                    <article className="checkbox-qt">
                    <input type="checkbox" id="scales-se" name="Sexta" />
                    <label>Sexta</label>

                    <input type="checkbox" id="scales-sa" name="Sábado" />
                    <label>Sábado</label>
                    </article>

                    <article className="checkbox-dom">
                    <input type="checkbox" id="scales-do" name="Domingo" />
                    <label>Domingo</label>
                    </article>

                    </article>
                    </div>

                    <article className="body-end">
                    <h4>Informe o seu horário inicial</h4>
                    <input placeholder="18:00Hrs" />
                    
                    <br/>
                    <article className="body-end-seq">
                    <h4>Informe o seu horário final</h4>
                    <input placeholder="23:00Hrs" />
                    </article>
                    </article>

                    <div className="button-fs-container">
                    <article className="button-first-container">
                        <button>Próximo</button>
                    </article>

                    <article className="button-second-container">
                        <button>Voltar</button>
                    </article>
                    </div>

                    </div>
                    
                    </div>
     
        
</div>
</section>
</div>

    );
}