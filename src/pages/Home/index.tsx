import { api } from "../../libs/axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";

import {
  HomeContainer,
  PublicationsCardsList,
  PublicationsSection,
  SectionHeader,
} from "./styles";
import { InfinityLoader } from "../../components/InfinityLoader";

export interface UserRepoType {
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  login: string;
}

export function Home() {
  const { username } = useParams();

  const [userRepos, setUserRepos] = useState<UserRepoType[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<UserRepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const newFilteredRepos = userRepos.filter(
      (repo) =>
        repo.name.includes(event.target.value) ||
        repo.description.includes(event.target.value)
    );

    setFilteredRepos(newFilteredRepos);
  }

  useEffect(() => {
    async function getUserRepos() {
      try {
        const { data } = await api.get(`/users/${username}/repos?sort=created`);

        const reposWithDescription = data.filter(
          (repo: any) => repo.description
        );

        const repos = reposWithDescription.map((repo: any) => {
          const {
            name,
            description,
            html_url,
            language,
            created_at,
            owner: { login },
          } = repo;

          return {
            login,
            name,
            language,
            description,
            html_url,
            created_at,
          };
        });

        setUserRepos(repos);
        setFilteredRepos(repos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUserRepos();
  }, [username]);

  if (isLoading) {
    return <InfinityLoader />;
  }

  return (
    <HomeContainer>
      <ProfileCard />

      <PublicationsSection>
        <SectionHeader>
          <h2>Publicações</h2>
          <span>{userRepos.length} publicações</span>
        </SectionHeader>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearch}
        />

        <PublicationsCardsList>
          {filteredRepos.map((repo) => (
            <PublicationCard key={repo.name} data={repo} />
          ))}
        </PublicationsCardsList>
      </PublicationsSection>
    </HomeContainer>
  );
}
