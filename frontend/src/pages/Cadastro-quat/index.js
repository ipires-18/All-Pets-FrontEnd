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
                    <article className="circus-pt"/>
                    <b>Informações Pessoais</b> 
                    
                    <article className="circus-st"/>
                    <b>Seleciona seu perfil</b> 

                    <article className="circus-tt"/>
                    <b>Informações de Serviços</b> 

                    <article className="circus-qt"/>
                    <b>Confirmação</b> 
                </form>

                <article className="imgs-container">
                <img src={RegisterPet} alt="All Pets"/>
                </article>

                <div className="container-termo">
                    <h1>Finalizando o Cadastro</h1>
                </div>

                <article className="body-container-h3">
                    <h3>Termos de Uso e Política de Privacidade</h3>
                </article>
                <div className="body-container-termo">
                    <p>Termos e Condições de Compra e Venda de All Pets, com sede na Rua Haddock Lobo, 545 - Cerqueira CésarSão Paulo - SP, doravante denominada simplesmente All Pets, e, de outro lado, o cliente All Pets, qualificado no momento da compra dos produtos All Pets, doravante denominado simplesmente Cliente.

Considerando que a All Pets realiza venda de produtos e serviços pela internet; Considerando o interesse do Cliente na compra dos produtos oferecidos pela All Pets ("Produtos") em seus canais de venda; O presente contrato tem por finalidade estabelecer as condições gerais de uso e compra de produtos e serviços do cliente do site All Pets.

I. Confidencialidade: é de responsabilidade da All Pets a preservação da confidencialidade de todos os dados e informações fornecidos pelo Cliente no processo de compra. A segurança do site é auditada diariamente e garantida contra a ação de hackers, através do selo "Site Blindado".

II. Serviço de Atendimento ao Cliente (SAC): O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser acionado por meio de telefone ou de formulário do site.

III. Política de entrega: o prazo para entrega dos Produtos é informado durante o procedimento de compra, contabilizado em dias úteis. As entregas dos Produtos são realizadas de segunda a sexta-feira, das 8h às 22h. Excepcionalmente, algumas entregas de Produtos podem ocorrer aos sábados, domingos e feriados.

III.I - A conferência da adequação das dimensões do produto é de responsabilidade do Cliente, que deverá se assegurar de que estas estão de acordo com os limites espaciais dos elevadores, portas e corredores do local da entrega. Não será realizada a montagem ou desmontagem do produto, transporte pela escada e/ou portas e janelas, ou içamento das entregas.

III.II - Serão realizadas até três tentativas de entrega no local informado, em dias alternados, com intervalo de até 48h entre uma entrega e outra. É indispensável que, no endereço solicitado, haja uma pessoa autorizada pelo comprador, maior de 18 anos, e portando documento de identificação para receber a mercadoria e assinar o protocolo de entrega. Se houver três tentativas de entrega sem sucesso, o pedido retornará para o Centro de Distribuição da All Pets.

III.III - Após a finalização do pedido não é possível alterar a forma de pagamento e/ou endereço de entrega, solicitar adiantamento ou, ainda, prioridade da entrega.

III.IV - O prazo de entrega informado durante o procedimento de compra do Produto leva em consideração o estoque, a região, o processo de emissão da nota fiscal e o tempo de preparo do produto. A cada atualização no status de entrega do pedido, o sistema da All Pets envia, automaticamente, e-mails de alerta para o Cliente.

III.V - O valor do frete da entrega é calculado com base no local de entrega, peso e dimensões do Produto.

III.VI - A All Pets não autoriza a transportadora a: entrar no domicílio; entregar por meios alternativos (exemplo: içar produto por janela); realizar instalação ou manutenção de produtos; abrir a embalagem do produto; realizar entrega em endereço diferente do que consta no DANFE; realizar entrega a menor de idade ou sem documento de identificação.

III.VII - A All Pets não se responsabiliza pela retenção de mercadorias na SEFAZ quando esta se dever exclusivamente a pendências do cliente, sendo, portanto, necessário seu comparecimento no posto fiscal para que a mercadoria seja liberada, tendo em vista que nestes casos as informações referentes a liberações e pagamentos só são passadas aos interessados.

IV. Direito de arrependimento: ao Cliente será facultado o exercício do direito de arrependimento da compra, com a finalidade de devolução do Produto, hipótese na qual deverão ser observadas as seguintes condições: o prazo de desistência da compra do produto é de até 7 (sete) dias corridos, a contar da data do recebimento; em caso de devolução, o produto deverá ser devolvido à All Pets na embalagem original, acompanhado do DANFE (Documento Auxiliar da Nota Fiscal Eletrônica), do manual e de todos os seus acessórios.

IV.I - O Cliente deverá solicitar a devolução através do Serviço de Atendimento ao Cliente (SAC) ou diretamente no Painel de Controle, no tópico "cancelar pedido". As despesas decorrentes de coleta ou postagem do Produto serão custeadas pela All Pets.

IV.II - Após a chegada do produto ao Centro de Distribuição, a All Pets verificará se as condições supra citadas foram atendidas. Em caso afirmativo, providenciará a restituição no valor total da compra.

IV.III - Em compras com cartão de crédito a administradora do cartão será notificada e o estorno ocorrerá na fatura seguinte ou na posterior, de uma só vez, seja qual for o número de parcelas utilizado na compra. O prazo de ressarcimento e, ainda, a cobrança das parcelas remanescentes após o estorno integral do valor do Produto no cartão de crédito do Cliente realizado pela All Pets, é de responsabilidade da administradora do cartão. Na hipótese de cobrança de parcelas futuras pela administradora do cartão, o Cliente não será onerado, vez que a All Pets, conforme mencionado acima, realiza o estorno do valor integral do Produto em uma única vez, sendo o crédito referente ao estorno concedido integralmente pela administradora do cartão na fatura de cobrança subsequente ao mês do cancelamento.

IV.IV - Em compras pagas com boleto bancário ou débito em conta, a restituição será efetuada por meio de depósito bancário, em até 10 (dez) dias úteis, somente na conta corrente do(a) comprador(a), que deve ser individual. É necessário que o CPF do titular da conta corrente.</p>
                </div>

                <article className="checkbox-termo">
                    <input type="checkbox" name="termo" />
                    <label>Estou de acordo com o termos de uso e política de privacidade.</label>
                </article>

                <div className="button-ft-container">
                    <article className="button-f-container">
                        <button>Próximo</button>
                    </article>

                    <article className="button-s-container">
                        <button>Voltar</button>
                    </article>
                    </div>

</div>
</section>
</div>
        );
}