import React, { useState, useEffect } from 'react';  //useState: Funcao do react para criação de um estado

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de html, css e js, o qual não interefere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informaões mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 3000,
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault();
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="username_github"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              />
          </div>

          <div className="input-block">          
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>


          <div className="input-group">
            <div className="input-block">          
              <label htmlFor="Latitude">Latitude</label>
              <input
                type="number"
                name="Latitude"
                id="Latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />               
            </div>

            <div className="input-block">          
              <label htmlFor="Longitude">Longitude</label>
              <input
                type="number"
                name="Longitude"
                id="Longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
    <ul>
      <li className="dev-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/35239146?s=460&u=ba1410cc1fa11410bbc6954d37d4d3d03a3b18d1&v=4" alt="Gustavo Neri"/>
          <div className="user-info">
            <strong>Gustavo Neri</strong>
            <span>Python, Devops, Terraform</span>
          </div>
        </header>
        <p> Devops Engineer at Conductor Tecnologias </p>
        <a href="https://github.com/guganeri">Acessar Perfil no Github</a>
      </li>
      <li className="dev-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/35239146?s=460&u=ba1410cc1fa11410bbc6954d37d4d3d03a3b18d1&v=4" alt="Gustavo Neri"/>
          <div className="user-info">
            <strong>Gustavo Neri</strong>
            <span>Python, Devops, Terraform</span>
          </div>
        </header>
        <p> Devops Engineer at Conductor Tecnologias </p>
        <a href="https://github.com/guganeri">Acessar Perfil no Github</a>
      </li>
      <li className="dev-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/35239146?s=460&u=ba1410cc1fa11410bbc6954d37d4d3d03a3b18d1&v=4" alt="Gustavo Neri"/>
          <div className="user-info">
            <strong>Gustavo Neri</strong>
            <span>Python, Devops, Terraform</span>
          </div>
        </header>
        <p> Devops Engineer at Conductor Tecnologias </p>
        <a href="https://github.com/guganeri">Acessar Perfil no Github</a>
      </li>
      <li className="dev-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/35239146?s=460&u=ba1410cc1fa11410bbc6954d37d4d3d03a3b18d1&v=4" alt="Gustavo Neri"/>
          <div className="user-info">
            <strong>Gustavo Neri</strong>
            <span>Python, Devops, Terraform</span>
          </div>
        </header>
        <p> Devops Engineer at Conductor Tecnologias </p>
        <a href="https://github.com/guganeri">Acessar Perfil no Github</a>
      </li>
    </ul>
      </main>
    </div>
  );
}

export default App;
