const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

fetch('https://random-data-api.com/api/name/random_name?size=1')
  .then(res => res.json())
  .then(json => {
    const name = json[0].name
    const sql = `INSERT INTO people(name) values('${name}')`
    connection.query(sql)
    connection.end()
  })

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)
  const sql = 'SELECT name FROM people'
  connection.query(sql, function (error, results, fields) {
    const names = results.map(row => row.name)
    res.send(`
<h1>Full Cycle</h1>
<ul>
${names.map(name => {
      return `<li>${name}</li>`
    }).join('')}
</ul>
      `)
  })
  connection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})