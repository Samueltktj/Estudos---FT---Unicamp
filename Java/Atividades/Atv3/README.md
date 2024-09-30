# Tratamento de Exceções em Java

## Tratamento de Exceções Básico

### Divisão por Zero
Escreva um programa que receba dois números como entrada e calcule sua divisão. Implemente o tratamento de exceção para lidar com o caso em que o denominador é zero.

### Entrada Inválida
Crie um programa que solicite ao usuário uma entrada de número inteiro. Lide com o caso em que o usuário insere uma entrada não numérica, capturando a exceção `NumberFormatException`.

### Acesso a Posição de Vetor
Escreva um programa que inicialize um array e tente acessar um elemento em um índice além dos seus limites. Use o tratamento de exceção para capturar `ArrayIndexOutOfBoundsException`.

## Bloco Try-Catch-Finally

### Leitura de Arquivo
Crie um programa que leia dados de um arquivo. Implemente o tratamento de exceções usando um bloco try-catch para lidar com quaisquer `IOExceptions` que possam ocorrer durante a operação.

### Exceção Personalizada
Defina uma classe de exceção personalizada `MyCustomException`. Escreva um programa que lance intencionalmente essa exceção e a capture usando um bloco try-catch.

### Bloco de Finalização
Escreva um programa que demonstre o uso do  bloco `finally`. Inclua cenários de execução normais e cenários em que as exceções são detectadas.

## Tratamento de Exceções Avançado

### Múltiplos Blocos de Captura
Crie um programa que execute uma divisão e o acesso a um vetor. Use vários blocos catch para capturar diferentes tipos de exceções (por exemplo, `ArithmeticException`, `ArrayIndexOutOfBoundsException`) e fornecer mensagens de erro apropriadas.

### Exceções Encadeadas
Escreva um programa que demonstre exceções encadeadas. Capture um tipo de exceção e lance outro tipo de exceção, usando a exceção capturada como causa.

### Propagação de Exceção
Desenvolva um método que chame outro método que lance uma exceção. Implemente a propagação de exceção para lidar com a exceção no método chamador.

## Boas Práticas de Tratamento de Exceções

### Limpeza de Recursos
Crie um programa que abra um arquivo para gravação e grave algum conteúdo nele. Use um bloco try-with-resources para garantir que o arquivo seja fechado corretamente, mesmo se ocorrer uma exceção.

### Log
Integre o log (usando uma biblioteca como Log4j ou o `java.util.logging` embutido) em seu código de tratamento de exceção. Demonstre como o log pode ajudar a fornecer uma visão melhor sobre o que aconteceu durante uma exceção.

### Hierarquia de Exceção
Produza um texto (.pdf) com até 600 palavras sobre a hierarquia de exceção Java, categorizando diferentes exceções em seus respectivos grupos (exceções verificadas, exceções não verificadas, erros). Discuta por que certas exceções são verificadas enquanto outras não.
