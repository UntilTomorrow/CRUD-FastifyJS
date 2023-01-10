const fastify = require('fastify');
const mysql = require('mysql');
({ logger: true})

//connection to DB mysql

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'dbfastify'
});

//Fastify instance
const app = fastify()

//Create

app.post('/users', async (request, reply) => {
    console.log('1');
    const {name, email} = request.body;
    const result = await connection.query(
        'INSERT INTO users(name, email) VALUES (?, ?)',[name, email]);
    console.log('2');
    return { id: result.insertId, name, email };        
});

//Read All


//Read By ID 


//Update By ID 


// Delete




app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
