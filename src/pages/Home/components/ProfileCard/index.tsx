import { FooterItem, ProfileCardContainer, UserInfo } from "./styles";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <aside>
        <img src="https://github.com/GabrielFTeles.png" />
      </aside>

      <UserInfo>
        <header>
          <h1>Gabriel FTeles</h1>
          <a href="#">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>

        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            reiciendis doloribus accusamus laborum et! Qui animi, magnam quasi
            perferendis voluptatibus ipsum ducimus error excepturi repellat
            eligendi illo, veniam harum minima.
          </p>
        </section>

        <footer>
          <FooterItem>
            <i className="fa-brands fa-github"></i>
            <span>GabrielFTeles</span>
          </FooterItem>

          <FooterItem>
            <i className="fa-solid fa-building"></i>
            <span>Rocketseat</span>
          </FooterItem>

          <FooterItem>
            <i className="fa-solid fa-user-group"></i>
            <span>111 seguidores</span>
          </FooterItem>
        </footer>
      </UserInfo>
    </ProfileCardContainer>
  );
}
