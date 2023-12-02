import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SearchForm } from "./components/SearchForm";
import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";

import {
  HomeContainer,
  PublicationsCardsList,
  PublicationsSection,
  SectionHeader,
} from "./styles";

export interface userRepoType {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  login: string;
}

export function Home() {
  const { username } = useParams();

  const [userRepos, setUserRepos] = useState<userRepoType[]>([]);

  useEffect(() => {
    async function getUserRepos() {
      const { data } = await api.get(`/users/${username}/repos`);

      const reposWithDescription = data.filter((repo) => repo.description);

      const repos = reposWithDescription.map((repo) => {
        const {
          id,
          name,
          description,
          html_url,
          created_at,
          owner: { login },
        } = repo;

        return {
          id,
          login,
          name,
          description,
          html_url,
          created_at,
        };
      });

      setUserRepos(repos);
    }

    getUserRepos();
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
          {userRepos.map((repo) => (
            <PublicationCard key={repo.name} data={repo} />
          ))}
        </PublicationsCardsList>
      </PublicationsSection>
    </HomeContainer>
  );
}
