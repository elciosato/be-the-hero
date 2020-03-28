const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/* 
 *  Routes / Resourses
 */

 /* 
  * Method HTTP
  * GET: Request data
  * POST: Submit data
  * PUT: Update data
  * DELETE: Delete data
  */

  /* 
   * Parameters
   * Query Params: named parameters after "?"
   *    ?name=Elcio
   *    ?page=2
   * Route Params: /:id
   * 
   */

