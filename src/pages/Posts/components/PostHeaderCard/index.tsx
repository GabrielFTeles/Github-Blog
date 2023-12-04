import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

import { RepoDataType } from "../..";

import {
  CardFooter,
  CardHeader,
  FooterItem,
  PostHeaderCardContainer,
} from "./styles";

interface PostHeaderCardProps {
  data: RepoDataType;
}

export function PostHeaderCard({ data }: PostHeaderCardProps) {
  const repoName = data.name.replaceAll("-", " ");

  const distanceFromNow = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostHeaderCardContainer>
      <CardHeader>
        <a href="javascript:history.back()">
          <i className="fa-solid fa-chevron-left"></i> VOLTAR
        </a>

        <a href={data.html_url} target="_blank">
          VER NO GITHUB{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </CardHeader>

      <h1>{repoName}</h1>

      <CardFooter>
        <FooterItem>
          <i className="fa-brands fa-github"></i>
          <span>{data.githubUser}</span>
        </FooterItem>

        <FooterItem>
          <i className="fa-solid fa-calendar-day"></i>
          <span>{distanceFromNow}</span>
        </FooterItem>

        <FooterItem>
          <i className="fa-solid fa-star"></i>
          <span>{data.stargazers_count} estrelas</span>
        </FooterItem>
      </CardFooter>
    </PostHeaderCardContainer>
  );
}
