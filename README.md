# Uma apresentação, com respeito

Uma página pessoal com o ritmo de uma carta. Feita apenas com HTML, CSS e JavaScript, sem dependências, fontes externas, instalação ou etapa de build.

## Visualizar

Abra `index.html` diretamente no navegador. O site funciona inclusive sem conexão com a internet.

Para usar o **Live Server** no VS Code:

1. Instale a extensão Live Server, de Ritwick Dey.
2. Abra esta pasta no VS Code.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
4. Salve as alterações para atualizar a prévia automaticamente.

## Editar o conteúdo

Abra **`content.js`**. Dados pessoais, títulos, textos, navegação, projetos, etapas do futuro, compromissos e fotos estão no objeto `siteContent`.

- Busque por `EDITAR` para encontrar dados pendentes.
- Revise os textos sugeridos para que expressem sua história e sua forma de falar.
- `sogro.nome` personaliza a saudação. Se estiver vazio ou com `EDITAR`, aparece “Olá, senhor.”.
- `sobreMim` reúne seus dados, interesses e objetivo de cursar Engenharia de Software em uma única apresentação. A escola aparece no texto de apresentação; as cidades só aparecem se estiverem preenchidas.
- `familia` reúne o título, a apresentação, os nomes e profissões dos seus pais e a foto da seção “Minha família”.
- `sobreMim.idade` pode conter uma idade escrita, como `"17 anos"`. Se ficar vazio, ela é calculada usando `nascimento`, no formato `DD/MM/AAAA`. A data completa não aparece na página.
- O título e a descrição da aba são configurados em `site`.
- Use `\n` para uma quebra de linha nos títulos e `\n\n` para novos parágrafos nos textos longos. Não use HTML nos textos.
- As marcações `[nome]`, `[nomeCompleto]`, `[idade]`, `[curso]`, `[cidadeNascimento]`, `[cidadeAtual]`, `[escola]` e `[pais]` são substituídas pelos dados correspondentes.
- Para adicionar ou remover itens, edite os arrays `projetos`, `futuro` e `compromissos`. A numeração se ajusta automaticamente. Os projetos aparecem como exemplos breves na seção “Sobre mim”; `interesses.rotuloProjetos` define a frase que apresenta essa lista.
- Links de projetos precisam começar com `https://` ou `http://`. Um link vazio, inválido ou com `EDITAR` não aparece como botão.

Mantenha as aspas, vírgulas, chaves e os nomes das propriedades. Para usar aspas dentro de uma frase, escreva `\"`, ou use aspas tipográficas: “assim”.

## Trocar as fotos

1. As fotos atuais estão em `assets/images/retrato.jpeg` e `assets/images/pais.jpeg`. Para incluir uma foto de vocês, coloque-a em `assets/images/casal.jpg`. Também é possível usar PNG, WebP ou outros nomes.
2. Em `content.js`, preencha:

```js
// Dentro de sobreMim.foto:
caminho: "assets/images/retrato.jpeg",
alt: "Descreva brevemente sua foto",
posicao: "center 25%",

// Dentro de relacionamento.foto:
caminho: "assets/images/casal.jpg",
alt: "Descreva brevemente a foto de vocês",
posicao: "center",

// Dentro de familia.foto:
caminho: "assets/images/pais.jpeg",
alt: "Descreva brevemente a foto dos seus pais ou da família",
posicao: "center",
```

Esses trechos são exemplos de campos a editar nos blocos existentes, não um novo bloco para colar no fim do arquivo.

Sem um caminho, a página mostra uma reserva visual, cujos textos também estão em `content.js`. Se uma foto não carregar, a reserva continua disponível. As fotos de perfil e dos seus pais já estão configuradas; a foto do casal pode ser adicionada quando quiser. Prefira um retrato vertical e uma foto do casal horizontal; `posicao` ajusta o recorte sem alterar a imagem original.

Use caminhos relativos, sem `/` no início, e respeite letras maiúsculas e minúsculas dos nomes dos arquivos.

## Alterar o visual

Edite as variáveis em **`:root`, no início de `style.css`**:

- `--color-paper`: fundo principal.
- `--color-surface`: fundo das seções alternadas.
- `--color-ink` e `--color-muted`: textos.
- `--color-accent`: detalhes e destaques.
- `--color-forest`: fundo da seção sobre vocês.
- `--font-editorial` e `--font-body`: fontes de títulos e textos.
- `--space-section`, `--page-gutter` e `--container-width`: espaçamento e largura.

As fontes são do sistema para manter o projeto independente de serviços externos. Se mudar o fundo principal, pode ajustar também `theme-color` em `index.html` e as cores do favicon em `assets/favicon.svg`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie `index.html`, `style.css`, `content.js`, `script.js`, `.nojekyll` e a pasta `assets`, mantendo a estrutura.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
4. Selecione a branch que contém seus arquivos (normalmente `main`) e a pasta **/(root)**. Clique em **Save**.
5. Aguarde a publicação e abra o endereço exibido nessa mesma tela.

Não é necessário compilar ou instalar nada. Os caminhos relativos funcionam tanto em um domínio próprio quanto em `usuario.github.io/nome-do-repositorio/`.

Referência: [documentação oficial de publicação por branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Antes de compartilhar

Todo o conteúdo dos arquivos publicados pode ser acessado, incluindo campos de `content.js` que não são exibidos. Se preferir não publicar sua data de nascimento, apague-a e preencha a idade manualmente. Revise escola, cidades, nomes de familiares e fotos. Não adicione documentos, endereço completo ou telefone.

O HTML solicita que buscadores não indexem a página, mas **isso não impede o acesso e não garante sigilo**. Uma publicação comum no GitHub Pages é pública. Esta carta não usa rastreadores, cookies ou envio de dados.

## Estrutura

```text
index.html          Estrutura semântica e pontos de inserção do conteúdo
style.css           Identidade visual, responsividade e impressão
content.js          Todo o conteúdo pessoal editável
script.js           Preenchimento da página, menu e animações discretas
README.md           Este guia
.nojekyll           Publicação estática sem processamento pelo Jekyll
assets/
  favicon.svg       Ícone de carta para a aba
  images/           Coloque suas fotos aqui
```

O JavaScript é necessário para ler a carta completa. Sem ele, permanecem a estrutura básica, as âncoras e um aviso de como habilitar a apresentação. Com JavaScript, o site inclui menu móvel acessível por teclado, indicador de leitura e entradas suaves com `IntersectionObserver`; a preferência por movimento reduzido é respeitada.
