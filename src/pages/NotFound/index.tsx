import { HomeButton, NotFoundContainer, NotFoundContent } from "./styles";

export function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <div>
          <h1>404</h1>
          <p>
            Não conseguimos encontrar o conteúdo que você está querendo acessar.
          </p>
        </div>

        <HomeButton to="/">
          <i className="fa-solid fa-arrow-left"></i> Voltar para home
        </HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
}
