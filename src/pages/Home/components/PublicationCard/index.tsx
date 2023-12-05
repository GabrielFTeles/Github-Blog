import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

import { LanguageTag, PublicationCardContainer } from "./styles";

import { UserRepoType } from "../..";

interface PublicationCardProps {
  data: UserRepoType;
}

export function PublicationCard({ data }: PublicationCardProps) {
  const repositorieName = data.name.replaceAll("-", " ");
  const distanceFromNow = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PublicationCardContainer to={`/users/${data.login}/posts/${data.name}`}>
      <div>
        <h3>{repositorieName}</h3>
        <span>{distanceFromNow}</span>
      </div>

      <p>{data.description}</p>

      {data.language && (
        <LanguageTag>
          <span />
          <p>{data.language}</p>
        </LanguageTag>
      )}
    </PublicationCardContainer>
  );
}
