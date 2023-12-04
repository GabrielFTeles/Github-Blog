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

  useEffect(() => {
    async function getUserRepos() {
      const { data } = await api.get(
        `/users/${username}/repos?sort=created&order=asc`
      );

      const reposWithDescription = data.filter((repo) => repo.description);

      const repos = reposWithDescription.map((repo) => {
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
    }

    getUserRepos();
  }, [username]);

  const hasUserData = userRepos.length > 0;

  if (!hasUserData) {
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
