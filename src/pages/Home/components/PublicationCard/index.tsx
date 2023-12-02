import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

import { PublicationCardContainer } from "./styles";

import { userRepoType } from "../..";

interface PublicationCardProps {
  data: userRepoType;
}

export function PublicationCard({ data }: PublicationCardProps) {
  const repositorieName = data.name.replaceAll("-", " ");
  const distanceFromNow = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PublicationCardContainer to={`/users/${data.login}/posts/${data.id}`}>
      <div>
        <h3>{repositorieName}</h3>
        <span>{distanceFromNow}</span>
      </div>

      <p>{data.description}</p>
    </PublicationCardContainer>
  );
}
