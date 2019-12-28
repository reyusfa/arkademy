const DB_NAME = 'coffe_shop';
const DB_VERSION = 3;

alasql('CREATE INDEXEDDB DATABASE IF NOT EXISTS ' + DB_NAME + ';', [], function() {
  console.log('Database "' + DB_NAME + '" created!');
});

alasql('ATTACH INDEXEDDB DATABASE ' + DB_NAME + '; \
USE ' + DB_NAME + ';', [], function() {
  console.log('Database "' + DB_NAME + '" connected!');
});

alasql('ATTACH INDEXEDDB DATABASE ' + DB_NAME + '; \
CREATE TABLE IF NOT EXISTS product (id INT, name STRING, price INT, id_category INT, id_cashier INT);', [], function() {
  console.log('Table product created!');
});

// create new database
//var db = new Dexie(DB_NAME);

// create tables
//db.version(DB_VERSION)
//.stores({
//  product: '++id, name, price, id_category, id_cashier',
//  cashier: '++id, name',
//  category: '++id, name',
//});
//
//function listProduct() {
//  let table = document.getElementById('data');
//  db.transaction('r', db.product, db.cashier, db.category, function() {
//    db.product.toArray(data => {
//      console.log(data);
//    });
//    db.product.each(data => {
//      db.cashier.get(data.id_cashier).then(cashier => {
//        return data.cashier = cashier.name;
//      });
//      db.category.get(data.id_category).then(category => {
//        return data.category = category.name;
//      });
//      //return data;
//      console.log(data);
//      //table.innerHTML += '<tr><td></td><td>' + data.cashier + '</td><td>' + data.name + '</td><td>' + data.category + '</td><td>' + data.price + '</td><td><a href="" class="edit">Edit</a><span> | </span><a href="" class="delete">Delete</a></td></tr>';
//    });
//  });
//}
//
//listProduct();


//function createCategory(name) {
//  db.transaction('rw', db.category, function() {
//    db.category.add({
//      name: name,
//    });
//  });
//}
//
//function createCategory(name) {
//  db.transaction('rw', db.category, function() {
//    db.category.add({
//      name: name,
//    });
//  });
//}




// input test data
//db.category.get(1).then(data => {
//  if(data === undefined) {
//    db.category.bulkAdd([
//      {name: 'Food', id: 1},
//      {name: 'Drink', id: 2},
//    ]).then(function() {
//      console.log('categories added!');
//    });
//  }
//});
//db.cashier.get(1).then(data => {
//  if(data === undefined) {
//    db.cashier.bulkAdd([
//      {name: 'Pevita Pearce', id: 1},
//      {name: 'Raisa Andriana', id: 2},
//      {name: 'Yusuf Aryanto', id: 3},
//    ]).then(function() {
//      console.log('cashiers added!');
//    });
//  }
//});
//db.product.get(1).then(data => {
//  if(data === undefined) {
//    db.product.bulkAdd([
//      {
//        name: 'Latte',
//        price: 15000,
//        id_category: 2,
//        id_cashier: 1,
//        id: 1,
//      },
//      {
//        name: 'Cake',
//        price: 20000,
//        id_category: 1,
//        id_cashier: 2,
//        id: 2,
//      },
//      {
//        name: 'Mie Ayam',
//        price: 10000,
//        id_category: 1,
//        id_cashier: 3,
//        id: 3,
//      },
//    ]).then(function() {
//      console.log('products added!');
//    });
//  }
//});

