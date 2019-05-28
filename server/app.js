const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send('Hehe My server');
});

app.listen(4000, () => {
  console.log('Server listening for requests on port 4000');
});