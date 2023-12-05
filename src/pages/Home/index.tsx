import { api } from "../../libs/axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import debounce from "lodash.debounce";

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
  created_at: string;
  login: string;
}

export function Home() {
  const { username } = useParams();

  const [userRepos, setUserRepos] = useState<UserRepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const debounceSearch = debounce(
      () => setSearchText(event.target.value),
      1000
    );

    debounceSearch();
  }

  useEffect(() => {
    async function getUserRepos() {
      try {
        const { data } = await api.get(
          `/search/repositories?q=${searchText}+user:${username}&sort=created&order=asc`
        );

        const reposWithDescription = data.items.filter(
          (repo: any) => repo.description
        );

        const repos = reposWithDescription.map((repo: any) => {
          const {
            name,
            description,
            html_url,
            created_at,
            owner: { login },
          } = repo;

          return {
            login,
            name,
            description,
            html_url,
            created_at,
          };
        });

        setUserRepos(repos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUserRepos();
  }, [username, searchText]);

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
          {userRepos.map((repo) => (
            <PublicationCard key={repo.name} data={repo} />
          ))}
        </PublicationsCardsList>
      </PublicationsSection>
    </HomeContainer>
  );
}
