import { api } from "../../libs/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { PostHeaderCard } from "./components/PostHeaderCard";

import { PostContent, PostsContainer } from "./styles";
import { InfinityLoader } from "../../components/InfinityLoader";

export interface RepoDataType {
  name: string;
  githubUser: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  created_at: string;
}

export function Posts() {
  const { username, repo_name } = useParams();

  const [repoData, setRepoData] = useState<RepoDataType | null>(null);

  useEffect(() => {
    async function getRepositorieData() {
      const { data } = await api.get(`/repos/${username}/${repo_name}`);

      const {
        name,
        html_url,
        description,
        stargazers_count,
        created_at,
      }: RepoDataType = data;

      const githubUser = data.owner.login;

      setRepoData({
        name,
        githubUser,
        html_url,
        description,
        stargazers_count,
        created_at,
      });
    }

    getRepositorieData();
  }, [username, repo_name]);

  if (!repoData) {
    return <InfinityLoader />;
  }

  return (
    <PostsContainer>
      <article>
        <PostHeaderCard data={repoData} />

        <PostContent>
          <p>{repoData.description}</p>
        </PostContent>
      </article>
    </PostsContainer>
  );
}
