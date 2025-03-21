# 🚀 Curso React Felipe Rocha • Full Stack Club

Este projeto foi desenvolvido como parte do estudo sobre **React**, através do curso do **Youtube Canal Felipe Rocha • Full Stack Club**. O objetivo é construir uma **Interface** utilizando React.js, explorando conceitos como **hooks, componetização** e integração com **API**.

📚 **[Acesse o Curso](https://www.youtube.com/watch?v=2RWsLmu8yVc&ab_channel=FelipeRocha%E2%80%A2FullStackClub)**  

---

## 📌 **Tecnologias Utilizadas**
- **React.js** - Framework JavaScript para frontend  
- **Docker** - Containerização da aplicação  

---

## **Pré-requisitos**  

Antes de começar, certifique-se de ter os seguintes requisitos:  

- **Node.js** 16

Ou, alternativamente, utilize **Docker** (recomendado):  

- **Docker** instalado em seu sistema  

---

## **Instalação e Configuração**  

Siga os passos abaixo para configurar e executar o projeto:

1. Clone o repositório:
```sh
git clone https://github.com/rafajefer/course-reactjs-ytb-fullstackclub.git
```

2. Navegue até o diretório do projeto:
```sh
cd course-reactjs-ytb-fullstackclub
```

3. Iniciar os containers (Docker):
```sh
docker compose up -d
```

4. Instale as dependências
```sh
docker exec -it reactjs-container npm install
```

5. Inicie o backend da aplicação:
```sh
docker exec -it reactjs-container npm run dev -- --host 0.0.0.0 --port 3000
```

---

## **Acessando a Aplicação**  

Após a inicialização, a aplicação estará disponível em:  

- **Client React.JS:** [http://localhost:3000](http://localhost:3000)  

---

## **Comandos Úteis**

### 📂 Permissões de Arquivos

Caso crie ou edite arquivos dentro do container Docker, você pode precisar ajustar as permissões:
```sh
sudo chown -R $USER:$USER .
```

### 🐳 Comandos docker

Iniciar o container:
```sh
docker compose up -d
```

Acessar o container:
```sh
docker exec -it reactjs-container bash
```

Parar o container:
```sh
docker compose down
```

Instalar nova dependencia:
```sh
docker exec -it reactjs-container npm install dotenv --save
```
---

## **📖 Referências**
**🔗 [Documentação do React](https://react.dev/learn)**  
**🔗 [Documentação do Docker](https://docs.docker.com/)**  


## **🤝 Contribuição**
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas na seção de issues.  

## **📝 Licença**
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais informações.