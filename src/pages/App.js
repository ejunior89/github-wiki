import gitlogo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import { api } from '../components/services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        setRepos((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Erro na solicitação Axios:", error);
    }
  }

  const handleRemoveRepo = (repoId) => {
    // Filtra a lista de repositórios para remover o repositório com o ID correspondente
    const updatedRepos = repos.filter((repo) => repo.id !== repoId);
    setRepos(updatedRepos);
  };

  return (
    <Container>
      <img src={gitlogo} width="72" height="72" alt="logo" />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
      <Button
        onClick={(e) => {
          e.preventDefault(); 
          handleSearchRepo();
        }}
      />
      {repos.map(repo => (
        <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
