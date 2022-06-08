# Projeto Final - “Turtuga Eco”

### Elementos do Grupo

Eva Miriam e Adriana Barbosa.

### Introdução

No âmbito da unidade curricular, Design Multimédia, lecionada pelos professores André Rocha e José Manuel Soares, foi solicitada a criação de um jogo estilo “One Click Game”, semelhante ao Flappy Bird, tendo em conta, todo o conhecimento adquirido sobre programação multimédia com P5js, ao longo das aulas. Sendo valorizada a temática educativa, decidimos abordar a temática das alterações climáticas e poluição dos oceanos, visto que, trata-se de um assunto bastante importante, e que, ao fazer parte de um jogo, pode assim, sensibilizar mais pessoas, principalmente os jovens. Para tal, escolhemos a Tartaruga para representar os animais marinhos no nosso jogo, visto que em termos de marketing pela mesma causa, a tartaruga é quase sempre a face desta causa. Pretendemos então, que o público-alvo do nosso jogo sejam os alunos dos 2.º e 3.º ciclos, sendo este apenas possível ser jogado por um jogador.

### Pesquisa e Referências

A poluição marinha ocorre como resultado do derramamento de partículas, produtos químicos, resíduos de atividades agrícolas, comerciais, industriais ou residenciais e a disseminação de organismos invasores que têm impactos negativos ou potencialmente negativos nos ecossistemas marinhos. Esses produtos químicos potencialmente tóxicos podem ligar-se a pequenas partículas que são facilmente ingeridas pelo plâncton e pequenos animais alimentados por filtração. Como resultado, as toxinas entram na cadeia alimentar do oceano, atingindo altos níveis de poluição. Essas partículas também podem sofrer alterações químicas e matemáticas que alteram os níveis de oxigênio e causam severa hipoxia no ambiente, principalmente em estuários.

### Maquete

Para percebermos como queríamos o funcionamento do jogo, criámos na plataforma Scratch, um protótipo de jogabilidade. Não incluímos nenhum tipo de ecrã inicial nem final neste protótipo, pois queríamos estudar, antes de mais, o movimento da tartaruga enquanto figura central deste projeto e o seu envolvimento com as figuras de lixo e com as algas. E foi nessa altura que percebemos que a ideia não resultava, visto que a velocidade era muita para o jogador poder fazer a tartaruga mexer, tornando-se impossível ganhar. O link da nossa maquete encontra-se presente em: https://scratch.mit.edu/projects/685489547.

### Objetivo do Jogo

O objetivo do jogo é proteger a tartaruga de todos os obstáculos, sendo estes, na nossa versão final do jogo, as rochas cobertas de lixo, que são geradas em conjuntos de duas, em posições aleatórias no eixo do y. Para isso acontecer, é necessário controlar o movimento da tartaruga com o botão esquerdo do rato, desviando-a e mantendo-a assim, o mais longe possível longe das rochas. A cada conjunto de rochas que a tartaruga ultrapassa, o jogador ganha 1 ponto. Com esta premissa, pretendemos que o nosso público-alvo se consciencialize mais acerca da poluição dos oceanos, pois consiste num dos tipos de poluição mais graves do planeta, e consequentemente se consciencialize para a reciclagem.

### Código do Jogo

Em termos de código do jogo, a base do código P5js foi inspirado no código do jogo Flappy Bird, e foi retirado em https://openprocessing.org/sketch/1322233. Começámos por substituir os elementos gráficos já presentes pelos nossos, assim como a tartaruga, as rochas, o ambiente do jogo, o menu inicial e a notificação de quando o jogador perde, fazendo as devidas alterações de tamanho e resolução onde foi necessário. Aqui encontra-se o link para o nosso Jogo: https://ar-eses.github.io/oneClickGame-adriana-e-eva/.

**Regras**

1. Controlar o movimento da tartaruga com o botão esquerdo do rato, desviando a tartaruga o mais longe possível longe das rochas.
2. A cada conjunto de rochas que a tartaruga ultrapassa, o jogador ganha 1 ponto.

### Identidade gráfica (Logótipo)

Para o desenvolvimento deste jogo, tivemos ainda que conceber uma identidade gráfica, sendo este um elemento agregador entre a concordância e espírito da temática, e coerente com as diversas opções gráficas do jogo. A identidade gráfica que desenvolvemos consiste num logótipo, sendo que este, encontra-se intitulado como “Turtuga Eco”. Podemos referir ainda, que este logótipo apresenta um estilo geométrico, mesmo propositado, pois, torna-se um estilo diferente, moderno e apelativo, chamando assim a atenção dos jogadores. O tipo de letra utilizado foi GROBOLD, um tipo de letra sem serifa e um pouco “desorganizado”, contudo, visto de uma forma geral, complementa-se com a imagem geométrica da tartaruga. Adicionámos ainda, uma sombra ao nome “Turtuga Eco”, com um tom de verde mais escuro, dando assim mais destaque ao mesmo. Decidimos chamar o nosso jogo de "Turtuga Eco", Visto que o elemento principal é uma tartaruga e o problema principal é a poluição, no entanto para ficar com um nome mais curto e amigável, decidimos encurtar o nome “tartaruga” para “Turtuga”.

### Elementos Gráficos Criados
1. Tartaruga - Para este projeto foi necessária a criação de diversos elementos gráficos de forma a complementar o nosso jogo, como por exemplo, um ambiente de jogo, personagens e artefactos. Importante ainda referir, que todos esses mesmos elementos foram criados no software Adobe Illustrator. Começámos por criar o design da tartaruga, em quatro posições diferentes, para dar a ideia de movimento, e dessas quatro, selecionámos duas como posições finais, visto que, eram apenas necessárias duas. Utilizámos a ferramenta caneta para o contorno da tartaruga, sombras e contrastes, para que a mesma pudesse tornar-se um pouco mais realista. Para além do tema não ser propriamente um conteúdo alegre, achámos por bem colocar a tartaruga contente, porém, esta contém ainda, dois brilhos nos olhos o que ajuda na sensibilização da mensagem.
2. Ambiente do Jogo - Em termos de ambiente de jogo, realizámos um cenário referente ao fundo do oceano, onde, primeiramente, desenhámos a areia do solo, dividindo a mesma em duas camadas distintas. Para complementar, colocámos ainda vários círculos pequenos, para dar a ideia de textura da areia do solo. Para a primeira versão, podemos mencionar que adicionámos no canto esquerdo, uma rocha, e várias algas, assim como, corais. No canto direito, colocámos uma outra rocha, e novamente várias algas e corais. Juntámos ainda, uma estrela-do-mar, e por último, alguns peixinhos juntamente com as suas respetivas bolhas de oxigénio. Em termos de segunda versão, visto que, a primeira não resultou, podemos ver que quase todos os elementos ficaram exatamente iguais, visto que, apenas o que alterámos foram as rochas, pois colocámo-las ao centro, uma vez que, no código ficaria melhor para o loop ficar mais certo e ter de certa forma uma melhor ligação. Para a terceira e última versão, podemos concluir que, após muitas tentativas no código achámos por bem, retirar as rochas do fundo, visto que conseguiríamos substituir os “tubos” do Flappy Bird, por rochas, já que se em ambos os locais estivessem rochas, poderia tornar-se um pouco confuso e repetitivo. 
3. Página Inicial - Na página inicial, posicionámos ao centro o logótipo criado por nós, juntamente com duas tartarugas, pedaços de lixo no fundo, e ainda, várias algas. Temos também presentes três botões, o das regras, visto que é essencial saber como o jogo funciona, o de jogar, e dos créditos, com as devidas referências. Para além destes aspetos, achámos por bem também, atribuir os Creative Commons, colocando a devida sinalização.
4. Rocha com Lixo - Em relação aos obstáculos, inicialmente o nosso conceito eram pedaços de lixo a flutuar na água, porém, como já referimos anteriormente, a diferença entre a velocidade desses objetos e da tartaruga não eram compatíveis, então criámos rochas, cobertas de lixo, contendo na mesma a representação do tema da poluição, para que a tartaruga pudesse passar entre elas.
5. GameOver - No que toca ao ecrã final, decidimos colocar a mesma garrafa que utilizámos como lixo, alguns peixes e algas, e as palavras Pontos e Recorde, onde as pontuações (atual e melhor) aparecem por baixo.

### Vídeo Promocional

No nosso vídeo promocional, recorremos a um excerto de um documentário do National Geographic, sobre o tema escolhido, que fala sobre a ingestão de microplásticos  nos seres marinhos e da poluição marítima. As legendas foram feitas por nós, pois o vídeo é em inglês. De seguida, é feito um fade-out seguido de um efeito glitch, e o logótipo do nosso jogo aparece, juntamente com uma animação feita por nós, através do software Adobe Animate, a simular o nosso jogo. Adicionámos ainda, vários sons de salpicos, e o som ambiente do mar para criar um certo realismo ao jogo. Por fim, a tartaruga perde, e existe um novo efeito de glitch que nos leva ao menu inicial do jogo. Relativamente à duração do vídeo promocional, este contém 45 segundos. Aqui encontra-se a ligação para o nosso vídeo. Link do nosso vídeo promocional: https://www.youtube.com/watch?v=iuEfEELnOh4.

### Relatório Final

Encontra-se aqui disponível o nosso relatório final para uma melhor análise: https://www.flipsnack.com/65EBA799E8C/relat-rio-turtuga-eco.html.

### Referências

1. GitHub. (2022). AR-ESES/oneClickGame-adriana-e-eva. https://github.com/AR-ESES/oneClickGame-adriana-e-eva 

2. National Geographic. (2016). How We Can Keep Plastics Out of Our Ocean | National Geographic. Youtube. https://www.youtube.com/watch?v=HQTUWK7CM-Y&ab_channel=NationalGeographic

3. Ricolo. (n.d.). Flappy Bird p5.js. Open Processing. https://openprocessing.org/sketch/1322233

4. Wikipédia. (2020). Poluição marinha. https://pt.wikipedia.org/wiki/Polui%C3%A7%C3%A3o_marinha