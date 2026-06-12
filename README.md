# Trabalho_IHC

Interface web estática desenvolvida para a disciplina de IHC, baseada em um layout criado no Figma.

## Sobre o projeto

Este projeto reproduz a tela de um painel de oficina mecânica com:

- Cabeçalho com título da aplicação
- Cards de avisos e resumo de veículos
- Grade de ações rápidas
- Navegação inferior com ícones em SVG

O foco foi manter a estrutura visual fiel ao design da seleção do Figma.

## Tecnologias utilizadas

- HTML5
- CSS3
- SVG (ícones da navegação inferior)

## Estrutura de pastas

```text
.
├── figma-assets/
│   ├── nav-avisos.svg
│   ├── nav-home.svg
│   ├── nav-perfil.svg
│   └── nav-resumo.svg
├── index.html
├── style.css
└── README.md
```

## Como executar localmente

Como é um projeto estático, basta abrir o arquivo HTML no navegador.

1. Clone o repositório:

```bash
git clone https://github.com/gllugli/Trabalho_IHC.git
```

2. Entre na pasta do projeto:

```bash
cd Trabalho_IHC
```

3. Abra o arquivo `index.html` no navegador.

Opcional (VS Code): você pode usar a extensão Live Server para desenvolvimento com recarregamento automático.

## Observações

- O projeto não possui dependências de build (Node, bundler, framework).
- Alguns arquivos locais de desenvolvimento (ex.: logs e configurações de editor) não devem ser versionados.