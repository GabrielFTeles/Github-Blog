import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";
import { SearchForm } from "./components/SearchForm";

import {
  HomeContainer,
  PublicationsCardsList,
  PublicationsSection,
  SectionHeader,
} from "./styles";

export function Home() {
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
