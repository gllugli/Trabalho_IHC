# Trabalho IHC - Hunter

Interface web estatica desenvolvida para a disciplina de Interacao Humano-Computador (IHC). O projeto simula um aplicativo mobile de gestao de oficina mecanica, com telas baseadas em um layout criado no Figma.

## Sobre o projeto

O Hunter centraliza informacoes operacionais de uma oficina, como avisos, veiculos no patio, ordens de servico e orcamentos. O foco do trabalho e apresentar um prototipo navegavel, com estrutura visual fiel ao design de referencia e fluxos principais conectados entre si.

## Funcionalidades representadas

- Painel inicial com avisos da oficina, resumo de veiculos e atalhos de acao.
- Tela de avisos com alertas operacionais.
- Resumo geral de orcamentos e ordens de servico.
- Fluxo de ordens de servico:
  - painel de OS;
  - detalhe de uma OS em andamento;
  - tela de confirmacao de servico finalizado.
- Fluxo de orcamentos:
  - painel de orcamentos pendentes;
  - criacao de novo orcamento;
  - tela de confirmacao de orcamento finalizado.
- Navegacao compartilhada por atributos `data-nav-target`, controlada pelo arquivo `nav.js`.

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

O projeto nao possui dependencias de build, framework ou servidor obrigatorio. Para executar:

1. Clone o repositorio:

```bash
git clone https://github.com/gllugli/Trabalho_IHC.git
```

2. Entre na pasta do projeto:

```bash
cd Trabalho_IHC
```

3. Abra o arquivo `index.html` no navegador.

Opcionalmente, use a extensao Live Server do VS Code para testar a navegacao com recarregamento automatico.

## Paginas principais

| Tela | Arquivo |
| --- | --- |
| Inicio | `index.html` |
| Avisos | `avisos/avisos.html` |
| Resumo geral | `resumo/resumo.html` |
| Painel de ordens de servico | `os/painel-os.html` |
| Ordem de servico em andamento | `os/nova-os.html` |
| Servico finalizado | `os/os-finalizada.html` |
| Painel de orcamentos | `orcamento/painel-orcamentos.html` |
| Novo orcamento | `orcamento/novo-orcamento.html` |
| Orcamento finalizado | `orcamento/orcamento-finalizado.html` |

## Observacoes

- A navegacao entre telas usa `data-nav-target`; ao criar novos atalhos, basta informar o caminho da pagina no atributo.
- A pasta `figma-assets/` reune imagens e icones usados pelo prototipo.
- O arquivo `.gitignore` atual ignora `figma-assets/*`, entao esses assets precisam estar disponiveis localmente para que todos os icones e imagens aparecam corretamente.
- Como o projeto e estatico, nao ha etapa de instalacao, compilacao ou deploy configurada neste repositorio.
