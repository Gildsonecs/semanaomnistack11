const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 */

 /**
  * Métodos Http
  * 
  * GET: Buscar uma informação do back-end
  * POST: Cria uma informação no back-end
  * PUT: Alterar informação do back-end
  * DELETE: Deletar informação do back-end
  */

  /**
   *  Tipo de parametros
   * Query: Params Paramêtros nomeados enviados na rota após '?' (Filtros, paginação)
   * Route Params: Paramêtros utilizados para identificar recursos.
   * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

app.listen(3333);
