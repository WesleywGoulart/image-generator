# Galeria de Imagens

Este é um site web que utiliza a API da Pixabay para gerar imagens. Desfrute de uma experiência única ao acessar o site e ser surpreendido com temas aleatórios cuidadosamente selecionados. No entanto, não se restrinja apenas a isso! Aproveite ao máximo a plataforma usando o campo de pesquisa para encontrar imagens específicas e personalizar sua jornada visual.

## Demo

Você pode acessar a demonstração ao vivo do projeto [aqui](https://www.wesleygoulart.tech/img-generator).

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver ideias para melhorias, sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull.

Para executar este projeto localmente, você precisará ter o Node.js e o Angular CLI instalados em sua máquina. Se você ainda não os possui, siga estas etapas para instalá-los:

## Instalação

1. **Node.js:** Visite o site oficial do Node.js (https://nodejs.org/) e faça o download da versão LTS mais recente para o seu sistema operacional. Depois de baixar, execute o instalador e siga as instruções de instalação.

2. **Angular CLI:** Abra o terminal ou prompt de comando e execute o seguinte comando para instalar o Angular CLI globalmente em sua máquina:

``` npm install -g @angular/cli ```

Depois de ter o Node.js e o Angular CLI instalados, siga estas etapas para configurar o projeto:

1. **Clonar o repositório:** Clone este repositório do GitHub em sua máquina local usando o seguinte comando:

``` git clone https://github.com/WesleywGoulart/image-generator.git ```

2. **Acessar o diretório do projeto:** Navegue até o diretório do projeto usando o comando `cd`:

``` cd image-generator ```

3. **Instalar as dependências:** Execute o seguinte comando para instalar as dependências do projeto:

``` npm install ```

4. **Configurar a API Key:** No arquivo pixabay.service.ts, substitua SUA_API_KEY pela sua chave de API da Pixabay:

``` private apiKey = 'SUA_API_KEY'; ```

5. **Iniciar o servidor de desenvolvimento:** Após a instalação ser concluída, inicie o servidor de desenvolvimento usando o Angular CLI:

``` ng serve ```

6. **Abrir o aplicativo no navegador:** Uma vez que o servidor esteja em execução, abra o navegador e acesse `http://localhost:4200/` para acessar o aplicativo.

## Uso

1. Ao acessar a página inicial do aplicativo, você verá uma galeria com imagens aleatórias fornecidas pela API da Pixabay.
2. Use o campo de pesquisa para buscar imagens de acordo com seus termos de interesse. Pressione "Enter" ou clique no botão "Pesquisar" para realizar a busca.
3. A galeria será atualizada com as imagens relacionadas à sua pesquisa.
4. Clique em qualquer imagem para visualizá-la em tamanho maior, juntamente com informações adicionais, como tags e o autor da imagem.
5. Para retornar à visualização da galeria, clique no botão "Voltar à Galeria" na parte superior da página.

Isso é tudo! Agora você tem um simples gerador de senhas em funcionamento em sua máquina local.

Sinta-se à vontade para explorar o código, fazer alterações e experimentar o aplicativo. Boa codificação!
