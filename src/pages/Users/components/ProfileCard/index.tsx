import { api } from "../../../../libs/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { FooterItem, ProfileCardContainer, UserInfo } from "./styles";

interface UserApiResponse {
  data: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string;
    location: string;
    email: string | null;
    hireable: string | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  };
}

interface UserDataType {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  company: string | null;
}

export function ProfileCard() {
  const { username } = useParams();

  const [userData, setUserData] = useState<UserDataType>({} as UserDataType);

  useEffect(() => {
    async function getUserData() {
      const { data }: UserApiResponse = await api.get(`/users/${username}`);

      const { login, avatar_url, name, bio, followers, company } = data;

      setUserData({ login, avatar_url, name, bio, followers, company });
    }

    getUserData();
  }, [username]);

  return (
    <ProfileCardContainer>
      <aside>
        <img src={userData.avatar_url} />
      </aside>

      <UserInfo>
        <header>
          <h1>{userData.name}</h1>
          <a href={`https://github.com/${userData.login}`} target="_blank">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>

        <section>
          <p>{userData.bio}</p>
        </section>

        <footer>
          <FooterItem>
            <i className="fa-brands fa-github"></i>
            <span>{userData.login}</span>
          </FooterItem>

          <FooterItem>
            <i className="fa-solid fa-building"></i>
            <span>{userData.company ? userData.company : "Github Blog"}</span>
          </FooterItem>

          <FooterItem>
            <i className="fa-solid fa-user-group"></i>
            <span>{userData.followers} seguidores</span>
          </FooterItem>
        </footer>
      </UserInfo>
    </ProfileCardContainer>
  );
}
