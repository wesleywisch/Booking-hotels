import { MailListContainer } from './styles'

export function MailList() {
  return (
    <MailListContainer>
      <h3 className="title">Inscreva-se para receber ofertas!</h3>
      <span className="desc">
        Cadastre-se e enviaremos as melhores ofertas para você
      </span>

      <div className="mailInputContainer">
        <input type="text" placeholder="Seu e-mail" />
        <button>Inscrever-se</button>
      </div>
    </MailListContainer>
  )
}
