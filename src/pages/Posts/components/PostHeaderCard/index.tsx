import {
  CardFooter,
  CardHeader,
  FooterItem,
  PostHeaderCardContainer,
} from "./styles";

export function PostHeaderCard() {
  return (
    <PostHeaderCardContainer>
      <CardHeader>
        <a href="#">
          <i className="fa-solid fa-chevron-left"></i> VOLTAR
        </a>
        <a href="#">
          VER NO GITHUB{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </CardHeader>

      <h1>JavaScript data types and data structures</h1>

      <CardFooter>
        <FooterItem>
          <i className="fa-brands fa-github"></i>
          <span>GabrielFTeles</span>
        </FooterItem>

        <FooterItem>
          <i className="fa-solid fa-calendar-day"></i>
          <span>Há 1 dia</span>
        </FooterItem>

        <FooterItem>
          <i className="fa-solid fa-comment"></i>
          <span>5 comentários</span>
        </FooterItem>
      </CardFooter>
    </PostHeaderCardContainer>
  );
}
