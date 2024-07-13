Aqui está a documentação da API em Markdown, melhorada e estilizada com base no seu HTML:

```markdown
# Artlaser API

Documentação da API para o projeto Artlaser.

Mais informações: [https://helloreverb.com](https://helloreverb.com)  
Informações de contato: [hello@helloreverb.com](mailto:hello@helloreverb.com)  
Versão: 1.0.0

Licença: Todos os direitos reservados  
[Licença](http://apache.org/licenses/LICENSE-2.0.html)

## Índice

- [Métodos](#métodos)
  - [Banner](#banner)
    - [GET /banner](#get-banner)
    - [DELETE /banner/{id}](#delete-bannerid)
    - [POST /banner](#post-banner)
  - [Painel](#painel)
    - [GET /panel/{token}](#get-paneltoken)
  - [Imagens](#imagens)
    - [GET /pictures/category/{category}](#get-picturescategorycategory)
    - [GET /pictures](#get-pictures)
    - [DELETE /pictures/{id}](#delete-picturesid)
    - [GET /pictures/{id}](#get-picturesid)
    - [POST /pictures](#post-pictures)
    - [GET /pictures/search/{title}](#get-picturessearchtitle)
  - [Usuários](#usuários)
    - [POST /users/create](#post-userscreate)
    - [POST /users/login](#post-userslogin)

## Métodos

### Banner

#### GET /banner

Retorna todos os banners.

**Resposta**  
- Tipo: `array[Banner]`

**Exemplo de dados**
```json
[
  {
    "id": "id",
    "url": "url"
  },
  {
    "id": "id",
    "url": "url"
  }
]
```

**Produz**
- `application/json`

**Respostas**
- **200**: Lista de banners

---

#### DELETE /banner/{id}

Remove um banner específico.

**Parâmetros de Caminho**
- `id` (obrigatório): ID do banner a ser removido.

**Respostas**
- **200**: Banner removido com sucesso
- **404**: Banner não encontrado

---

#### POST /banner

Cria um novo banner.

**Consome**
- `multipart/form-data`

**Parâmetros de Formulário**
- `image` (obrigatório): Formato binário

**Respostas**
- **200**: Banner criado com sucesso
- **400**: Erro de validação

---

### Painel

#### GET /panel/{token}

Serve o `painel.html`.

**Parâmetros de Caminho**
- `token` (obrigatório): Token para acessar o painel.

**Respostas**
- **200**: Painel.html servido com sucesso

---

### Imagens

#### GET /pictures/category/{category}

Retorna imagens por categoria.

**Parâmetros de Caminho**
- `category` (obrigatório): Categoria das imagens.

**Resposta**  
- Tipo: `array[Picture]`

**Exemplo de dados**
```json
[
  {
    "id": "id",
    "title": "title",
    "category": "category",
    "url": "url"
  },
  {
    "id": "id",
    "title": "title",
    "category": "category",
    "url": "url"
  }
]
```

**Produz**
- `application/json`

**Respostas**
- **200**: Lista de imagens por categoria

---

#### GET /pictures

Retorna todas as imagens.

**Resposta**  
- Tipo: `array[Picture]`

**Exemplo de dados**
```json
[
  {
    "id": "id",
    "title": "title",
    "category": "category",
    "url": "url"
  },
  {
    "id": "id",
    "title": "title",
    "category": "category",
    "url": "url"
  }
]
```

**Produz**
- `application/json`

**Respostas**
- **200**: Lista de imagens

---

#### DELETE /pictures/{id}

Remove uma imagem específica.

**Parâmetros de Caminho**
- `id` (obrigatório): ID da imagem a ser removida.

**Respostas**
- **200**: Imagem removida com sucesso
- **404**: Imagem não encontrada

---

#### GET /pictures/{id}

Retorna uma imagem específica.

**Parâmetros de Caminho**
- `id` (obrigatório): ID da imagem a ser retornada.

**Resposta**  
- Tipo: `Picture`

**Exemplo de dados**
```json
{
  "id": "id",
  "title": "title",
  "category": "category",
  "url": "url"
}
```

**Produz**
- `application/json`

**Respostas**
- **200**: Imagem encontrada
- **404**: Imagem não encontrada

---

#### POST /pictures

Cria uma nova imagem.

**Consome**
- `multipart/form-data`

**Parâmetros de Formulário**
- `image` (obrigatório): Formato binário

**Respostas**
- **200**: Imagem criada com sucesso
- **400**: Erro de validação

---

#### GET /pictures/search/{title}

Busca imagens por título.

**Parâmetros de Caminho**
- `title` (obrigatório): Título para a busca.

**Resposta**  
- Tipo: `array[Picture]`

**Exemplo de dados**
```json
[
  {
    "id": "id",
    "title": "title",
    "category": "category",
    "url": "url"
  },
  {
    "id": "id",
    "title": "title",
    "category": "category",
    "url": "url"
  }
]
```

**Produz**
- `application/json`

**Respostas**
- **200**: Lista de imagens que correspondem à busca

---

### Usuários

#### POST /users/create

Cria um novo usuário.

**Consome**
- `application/json`

**Parâmetros de Corpo**
- `name` (obrigatório): Nome do usuário.
- `email` (obrigatório): Email do usuário.
- `password` (obrigatório): Senha do usuário.

**Respostas**
- **201**: Usuário criado com sucesso
- **400**: Erro de validação

---

#### POST /users/login

Faz o login de um usuário.

**Consome**
- `application/json`

**Parâmetros de Corpo**
- `email` (obrigatório): Email do usuário.
- `password` (obrigatório): Senha do usuário.

**Respostas**
- **200**: Login realizado com sucesso
- **401**: Credenciais inválidas
```
