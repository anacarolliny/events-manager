# Gerenciador de Eventos de Tecnologia

Este projeto é uma API para gerenciar eventos de tecnologia, permitindo o cadastro, listagem, filtragem e detalhamento de eventos, bem como a associação de cupons de desconto a esses eventos.

## Funcionalidades

- **Cadastro de Eventos**: Permite o cadastro de eventos com informações como título, descrição, data, local, imagem e URL do evento.
- **Listagem e Filtragem de Eventos**: Permite a listagem de eventos com paginação e filtros por título, data e local.
- **Detalhamento de Eventos**: Permite a consulta detalhada de um evento específico, incluindo informações sobre cupons de desconto associados.
- **Associação de Cupons**: Permite a associação de um ou mais cupons de desconto a um evento.

## Estrutura do Projeto

A estrutura do projeto segue as boas práticas de Clean Code, SOLID e Clean Architecture, organizando o código de maneira modular e fácil de manter. Abaixo está a estrutura de pastas do projeto:

```
📂 src/
├── 📂 configs/         # Arquivos de configuração do projeto
├── 📂 database/        # Configuração e manipulação do banco de dados
│   ├── 📂 repositories/  # Repositórios que encapsulam a lógica de acesso a dados
│   │   ├── event.repository.ts
│   │   ├── event.repository.interface.ts
│   │   └── coupon.repository.ts
│   └── 📂 entities/      # Definições das entidades do TypeORM
├── 📂 modules/         # Módulos principais do projeto
│   ├── 📂 events/      # Módulo de eventos
│   │   ├── 📂 controllers/  # Controladores que lidam com as rotas HTTP
│   │   ├── 📂 services/     # Serviços que contêm a lógica de negócios
│   │   ├── 📂 interfaces/   # Interfaces compartilhadas e DTOs
│   │   └── 📂 dtos/         # Objetos de Transferência de Dados usados para validação
├── 📂 providers/       # Provedores para serviços externos ou bibliotecas
└── 📂 shared/          # Componentes e utilitários compartilhados
    ├── 📂 database/    # Componentes e utilitários compartilhados para banco de dados
    ├── 📂 decorators/  # Decoradores personalizados usados em todo o projeto
    ├── 📂 interfaces/  # Interfaces e tipos compartilhados
    ├── 📂 interceptors/  # Interceptores personalizados usados para validação de requisições
    └── 📂 utils/       # Funções utilitárias e módulos auxiliares compartilhados
```

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (versão 20.16.0)
- Docker (para configuração do banco de dados PostgreSQL)
- NPM (para gerenciamento de pacotes)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/events-manager.git
   cd events-manager
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o ambiente:

   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```
     POSTGRES_USER=seu_usuario
     POSTGRES_PASSWORD=sua_senha
     POSTGRES_DB=events_manager
     ```

4. Configure o banco de dados com Docker:
   - Execute o comando para iniciar o container do PostgreSQL:
     ```bash
     docker-compose up -d
     ```

### Scripts Disponíveis

- **Iniciar o servidor de desenvolvimento:**

  ```bash
  npm run start:dev
  ```

- **Rodar testes:**

  ```bash
  npm test
  ```

- **Rodar migrações do banco de dados:**

  ```bash
  npm run migration:run
  ```

- **Gerar uma nova versão com changelog:**
  ```bash
  npm run release
  ```

### Git Hooks e CI/CD

O projeto utiliza Husky para configurar hooks Git e GitHub Actions para CI/CD:

- **Pre-commit:** Validação de código com ESLint e Prettier.
- **Pre-push:** Execução de testes automatizados.
- **CI/CD:** O GitHub Actions está configurado para rodar testes e linting em cada push para o branch principal.

### Versionamento Semântico

O projeto utiliza versionamento semântico. A cada release, uma nova tag é criada e o changelog é atualizado automaticamente.

### Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'feat: adicionar nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
