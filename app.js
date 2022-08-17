const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// create a new schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "solid"
// });
// fruit.save().then(() => console.log('Apple is OKAY!'));

// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "very nice"
// });
//
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 8,
//   review: "nutritious"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 8,
//   review: "underrated"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully saved.");
//   }
// });
//
// Fruit.find(function(err, fruits){
//     if (err) {
//       console.log(err);
//     } else {
//       mongoose.connection.close();
//       fruits.forEach(function(fruit){
//         console.log(fruit.name);
//       });
//     }
// });
//
// Fruit.updateOne({_id: "62fd1e372f41988a2b28277f"}, {name: "Banana"}, function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("successfully updated!");
//     }
// });

// Fruit.deleteOne({_id: "62fd1e372f41988a2b28277d"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });

// Fruit.deleteMany({name: "Orange"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });

// Person Schenma
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit!"
});

const person = new Person({
  name: "John",
  age: 37
});
//
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });

const mango = new Fruit({
  name: "Mango",
  score: 8,
  review: "sweet"
});

// Person.deleteMany({name: "John"}, function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });
//
Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("successfully updated");
  }
});

// person.save().then(() => console.log("New person is added."));
