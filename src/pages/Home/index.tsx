import { api } from "../../libs/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { SearchForm } from "./components/SearchForm";
import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";

import {
  HomeContainer,
  PublicationsCardsList,
  PublicationsSection,
  SectionHeader,
} from "./styles";

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
}

export function Home() {
  const { username } = useParams();

  const [userData, setUserData] = useState<UserData>({} as UserData);

  useEffect(() => {
    async function getUserData() {
      const { login, avatar_url, name, bio, followers }: UserData =
        await api.get(`/users/${username}`);

      setUserData({ login, avatar_url, name, bio, followers });
    }

    getUserData();
  }, [username]);

  return (
    <HomeContainer>
      <ProfileCard />

      <PublicationsSection>
        <SectionHeader>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </SectionHeader>

        <SearchForm />

        <PublicationsCardsList>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </PublicationsCardsList>
      </PublicationsSection>
    </HomeContainer>
  );
}
