import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

import { Input } from "../../components/Input";

import { HomeContainer, SearchUserForm } from "./styles";

export function Home() {
  const navigation = useNavigate();

  const [githubUsername, setGithubUsername] = useState("");

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setGithubUsername(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigation(`/users/${githubUsername}`);
  }

  return (
    <HomeContainer>
      <SearchUserForm onSubmit={handleSubmit}>
        <h1>
          Pesquise o <span>Github</span>
        </h1>

        <p>
          Descubra, Explore, Crie - Transforme perfis do GitHub em blogs
          incríveis!
        </p>

        <Input
          type="text"
          placeholder="Busque o usuário do Github"
          onChange={handleSearchInputChange}
        />
      </SearchUserForm>
    </HomeContainer>
  );
}
