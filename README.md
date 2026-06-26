# Trabalho IHC - Hunter

Interface web estática desenvolvida para a disciplina de Interação Humano-Computador (IHC). O projeto simula um aplicativo mobile de gestão de oficina mecânica, com telas baseadas em um layout criado no Figma.

## Sobre o projeto

O Hunter centraliza informações operacionais de uma oficina, como avisos, veículos no pátio, ordens de serviço e orçamentos. O foco do trabalho é apresentar um protótipo navegável, com estrutura visual fiel ao design de referência e fluxos principais conectados entre si.

## Funcionalidades representadas

- Painel inicial com avisos da oficina, resumo de veículos e atalhos de ação.
- Tela de avisos com alertas operacionais.
- Resumo geral de orçamentos e ordens de serviço.
- Fluxo de ordens de serviço:
  - painel de OS;
  - detalhe de uma OS em andamento;
  - tela de confirmação de serviço finalizado.
- Fluxo de orçamentos:
  - painel de orçamentos pendentes;
  - criação de novo orçamento;
  - tela de confirmação de orçamento finalizado.
- Navegação compartilhada por atributos `data-nav-target`, controlada pelo arquivo `nav.js`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Assets SVG/PNG exportados do Figma

## Estrutura de pastas

```text
.
|-- index.html
|-- style.css
|-- nav.js
|-- avisos/
|   |-- avisos.html
|   `-- avisos.css
|-- resumo/
|   |-- resumo.html
|   `-- resumo.css
|-- os/
|   |-- painel-os.html
|   |-- painel-os.css
|   |-- nova-os.html
|   |-- nova-os.css
|   |-- os-finalizada.html
|   `-- os-finalizada.css
|-- orcamento/
|   |-- painel-orcamentos.html
|   |-- painel-orcamentos.css
|   |-- novo-orcamento.html
|   |-- novo-orcamento.css
|   |-- orcamento-finalizado.html
|   `-- orcamento-finalizado.css
|-- figma-assets/
|   |-- *.svg
|   |-- *.png
|   `-- resumo/
`-- README.md
```

## Como executar localmente

O projeto não possui dependências de build, framework ou servidor obrigatório. Para executar:

1. Clone o repositório:

```bash
git clone https://github.com/gllugli/Trabalho_IHC.git
```

2. Entre na pasta do projeto:

```bash
cd Trabalho_IHC
```

3. Abra o arquivo `index.html` no navegador.

Opcionalmente, use a extensão Live Server do VS Code para testar a navegação com recarregamento automático.

## Páginas principais

| Tela | Arquivo |
| --- | --- |
| Início | `index.html` |
| Avisos | `avisos/avisos.html` |
| Resumo geral | `resumo/resumo.html` |
| Painel de ordens de serviço | `os/painel-os.html` |
| Ordem de serviço em andamento | `os/nova-os.html` |
| Serviço finalizado | `os/os-finalizada.html` |
| Painel de orçamentos | `orcamento/painel-orcamentos.html` |
| Novo orçamento | `orcamento/novo-orcamento.html` |
| Orçamento finalizado | `orcamento/orcamento-finalizado.html` |

## Observações

- A navegação entre telas usa `data-nav-target`; ao criar novos atalhos, basta informar o caminho da página no atributo.
- A pasta `figma-assets/` reúne imagens e ícones usados pelo protótipo.
- O arquivo `.gitignore` atual ignora `figma-assets/*`, então esses assets precisam estar disponíveis localmente para que todos os ícones e imagens apareçam corretamente.
- Como o projeto é estático, não há etapa de instalação, compilação ou deploy configurada neste repositório.
