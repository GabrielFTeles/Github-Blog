import { api } from "../../libs/axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";

import {
  PublicationsCardsList,
  PublicationsSection,
  SectionHeader,
  UsersContainer,
} from "./styles";
import { InfinityLoader } from "../../components/InfinityLoader";
import { Input } from "../../components/Input";

export interface UserRepoType {
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  login: string;
}

export function Users() {
  const { username } = useParams();
  const navigation = useNavigate();

  const [userRepos, setUserRepos] = useState<UserRepoType[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<UserRepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const newFilteredRepos = userRepos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        repo.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
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
        navigation("/404");
      } finally {
        setIsLoading(false);
      }
    }

    getUserRepos();
  }, [navigation, username]);

  if (isLoading) {
    return <InfinityLoader />;
  }

  return (
    <UsersContainer>
      <ProfileCard />

      <PublicationsSection>
        <SectionHeader>
          <h2>Publicações</h2>
          <span>{userRepos.length} publicações</span>
        </SectionHeader>

        <Input
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
    </UsersContainer>
  );
}
