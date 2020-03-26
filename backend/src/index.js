const express = require('express');
const express = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

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

app.listen(3333);