const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/expenses', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var db = mongoose.connection;
var expenseSchema = new mongoose.Schema({
  card: String,
  date: Date,
  description: String,
  value: Number,
});
var Expense = new mongoose.model('Expense', expenseSchema);

db.once('open', function() {
  console.log('Welcome!');
});

var query = Expense.find({},'', (err, doc) => {
  console.log(doc);
});
