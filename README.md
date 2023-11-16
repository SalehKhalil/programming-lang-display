# Expositor de linguagens de programação
Um aplicação Web simples em NodeJS que exibe linguagens de programação armazenadas de um banco através de uma rota.

## Motivação
Esse projeto existe apenas para exercitar a dockerização, para fazer com que duas imagens se conversem atravé de uma rede no docker.

## Como rodar

### Pré-requisitos
- Docker
- Docker Compose (Opcional)

### Via Docker
Utilizando apenas o Docker, será necessário uma instância MongoDB sendo executada. Ao executar o passo 2, informar a URL onde o MongoDB está sendo executado. (Ex.: mongodb://127.0.0.1:27017)

1. Execute `docker build . -t programming-lang-display` para criar a imagem local
2. Execute `docker run -d -e MONGODB_URL=<sua_url_do_mongodb> -p 8080:8080 --name programming-lang-display programming-lang-display` para criar o container usando a imagem local criada

Obs: Se estiver utilizando um MongoDB via container, garanta que os dois estejam na mesma rede via Docker.

### Via Docker Compose
Execute o comando `docker-compose up` para criar e executar os container necessários