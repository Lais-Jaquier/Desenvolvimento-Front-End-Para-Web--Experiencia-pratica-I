console.log("Templates.js carregado");

const templates = {
  inicio: `
    <section>
      <h2>Bem-vindo à Caminhos da Esperança</h2>
    <section>
      <h2>Sobre nós</h2>
      <img src="ImagesProjeto/foto1.png.jpeg" alt="Foto exemplo" width="400" class="img-center">
      <p>
       A Caminhos da Esperança nasceu em 2012, a partir da iniciativa de um grupo de voluntários que acreditava no poder da educação e do acolhimento para transformar vidas. A ideia surgiu quando uma professora, ao perceber a quantidade de crianças e adolescentes em situação de vulnerabilidade em sua comunidade, decidiu unir amigos e profissionais de diferentes áreas para oferecer apoio social, educacional e emocional.
       </p>
       <p>

Desde então, a ONG tem atuado com o objetivo de proporcionar oportunidades de desenvolvimento pessoal e profissional, por meio de projetos de reforço escolar, oficinas de arte e cultura, esportes e acompanhamento psicológico. Além disso, promove campanhas de arrecadação de alimentos, roupas e materiais escolares, fortalecendo o vínculo comunitário e o sentimento de solidariedade.
</p>
       <p>
Ao longo dos anos, a Caminhos da Esperança se tornou referência local, ajudando centenas de jovens a sonhar com um futuro melhor — e, principalmente, a trilhar seus próprios caminhos com dignidade, esperança e confiança no amanhã.
</p>  

</section>
  `,

  projetos: `
    <section>
      <h2>Nossos Projetos</h2>
      <div class="projetos-container">
        <div class="projeto">
          <img src="ImagesProjeto/ReforcoEscolar.png" alt="Reforço Escolar" width="300">
          <h3>Reforço Escolar</h3>
          <p>Auxílio educacional para crianças e adolescentes com dificuldades escolares.</p>
        </div>
        <div class="projeto">
          <img src="ImagesProjeto/voluntario.png" alt="Voluntariado" width="300">
          <h3>Voluntariado</h3>
          <p>Engajamento de voluntários para atividades de apoio pedagógico e recreação.</p>
        </div>
        <div class="projeto">
          <img src="ImagesProjeto/doacao.png" alt="Doações" width="300">
          <h3>Campanhas de Doação</h3>
          <p>Arrecadação de alimentos, roupas e materiais escolares.</p>
        </div>
      </div>
    </section>
  `,

  cadastro: `
    <section>
      <h2>Venha para Caminhos da Esperança</h2>
      <form id="formCadastro">
        <label>Nome completo:</label>
        <input type="text" id="nome" required>

        <label>Email:</label>
        <input type="email" id="email" required>

        <label>CPF:</label>
        <input type="text" id="cpf" required>

        <label>Telefone:</label>
        <input type="text" id="telefone" required>

        <label>Data de Nascimento:</label>
        <input type="date" id="nascimento" required>

        <label>Endereço:</label>
        <input type="text" id="endereco" required>

        <label>CEP:</label>
        <input type="text" id="cep" required>

        <label>Cidade:</label>
        <input type="text" id="cidade" required>

        <label>Estado:</label>
        <input type="text" id="estado" required>

        <label>Nos conte sobre voce:</label>
        <input type="text" id="sobre" required>
        <label for="tipo">Tipo de Participação:</label>

<select id="tipo" required>
  <option value="">Selecione...</option>
  <option value="voluntario">Voluntário</option>
  <option value="beneficiario">Beneficiário</option>
  <option value="doador">Doador</option>
  <option value="outro">Outro</option>
</select>


        <button type="submit">Enviar Cadastro</button>
      </form>
      
    </section>
  `
};