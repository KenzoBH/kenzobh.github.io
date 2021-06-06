# ifood

Olá! Essa página descreve um projeto que desenvolvi.  
Ele envolveu vários conhecimentos relacionados à ciência de dados - como Web Scraping, limpeza de dados e análise exploratória: jajá eu explico direitinho o que são esses termos hehe. Utilizei ferramentas em Python, para coleta e limpeza, e em R, para análise e documentação.

Esta página tem intutito de descrever os passos realizados de forma mais superficial.  
Caso queira se aprofundar e verificar mais a fundo na documentação oficial do projeto, [aqui está]() o link para o repositório no GitHub, em que tudo está bem documentadinho. A análise final dos dados se encontra [neste link]().  
Let's go!

### Motivação

Em conjunto com o time da [IME Jr.](), empresa júnior do Instituto de Matemática e Estatística da USP, realizou-se a coleta de dados relativos a restaurantes nas proximidades de cada um dos integrantes, pelo site do ifood. Em seguida, limpei e juntei dados coletados por outros integrantes para realizar uma análise exploratória.

O projeto, portanto, pode ser dividido em algumas etapas básicas, que serão discutos nos próximos tópicos:

1. [Coleta]()
2. [Limpeza e junção]()
3. [Análise]()

## 1. Coleta

- Ferramentas utilizadas: Python & Selenium  
- Link para o código: [web-scraper.py]()  
- Link para os dados coletados: [scraped-data.csv]()

Uma pergunta: como *você* coletaria dados (nome, nota, tipo, etc.) sobre os restaurantes da sua região? Iria num site de restaurantes e iria ver um por um, não? I guess so.

E se eu quisesse coletar dados de 100 restaurates, por exemplo? Demoraria hein. Até anotar o nome dos 100 restaurantes e as notas, por exemplo, a minha mão ia cair. Por isso, utlizei Python pra acelerar o processo pra gente.

Vejamos como podemos coletar dados do seguinte site do ifood:

![Site do ifood]()

Tem muitos restaurantes aí, né. E cada "box" tem algumas informações interessantes sobre cada restaurante, como a nota dele no site, o tipo de comida que ele vende e etc. Eu estava interessado em fazer uma planilha do Excel mais ou menos assim

| Restaurante | Nota | Tipo de comida | Distancia | Tempo | Taxa de entrega |
| ----------- | ---- | -------------- | --------- | ----- | -------------- |
|Gokei - Carrão|4.6|Japonesa|0.9|59-69 min|0.0|
|Pikurruchas Tatuapé|4.7|Doces & Bolos|2.3|34-44 min|6.99|
|Mussa Esfiha - Anália Franco|4.7|Árabe|2.1|23-33 min|7.99|
|Sassá Sushi - Tatuapé|4.4|Japonesa|3.8|41-51 min|10.49|
|Meats - Anália Franco|4.7|Lanches|2.6|22-32 min|6.99|
|...|...|...|...|...|...|

com muitos restaurantes. Para isso, utilizei programação pra fazer esse trabaçho mais "braçal", de anotar o nome do restaurante, a nota dele, e etc. Um dia eu faço um post mais detalhado sobre esse processo, conhecido como Web Scraping, por aqui.  
Mas, basicamente, devemos dar instruções pra um programa do tipo:

```
nomes dos restaurantes = lista vazia
notas dos restaurantes = lista vazia
tipos dos restaurantes = lista vazia
distancias = lista vazia
tempos = lista vazia
taxas de entrega = lista vazia

rode isso para todo box que você encontrar:
    pegue o nome do restaurante e adicione na lista dos nomes
    pegue a nota do restaurante e adiciona na lista das notas
    ...
```

e no final, fazer uma planilha do Excel, e que cada coluna é uma dessas listas.  
O processo está mais detalhado [neste código](), disponível no meu GitHub.

Enfim, coletei dados de mais de 100 restaurantes com algumas linhas de código, e gerei [esse arquivo .csv](), que é uma planilha do Excel em formato de texto - dá pra abrir pelo Excel, se você quiser :D