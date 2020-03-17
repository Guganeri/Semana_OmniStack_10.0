import React from 'react';  //useState: Funcao do react para criação de um estado

import './global.css';
import './App.css';
import './Sidebar.css'


// Componente: Bloco isolado de html, css e js, o qual não interefere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informaões mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required></input>
          </div>

          <div class="input-block">          
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>


          <div className="input-group">
            <div class="input-block">          
              <label htmlFor="Latitude">Latitude</label>
              <input name="Latitude" id="Latitude" required></input>
            </div>

            <div class="input-block">          
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude" id="Longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
