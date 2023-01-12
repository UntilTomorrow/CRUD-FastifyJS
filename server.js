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

app.put('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const {name, email} = request.body;
    await connection.query(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id]
    );
        return {id, name, email};
});

// Delete

app.delete('/users/:id', async(request, reply) => {
    const {id} = request.params;
    await connection.query('DELETE FROM users WHERE id = ?', [id]);
    return {message: ' Sukses lur'};
});



app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
