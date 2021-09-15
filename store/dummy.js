const db = {
  "user": [
    {
      id:"1", 
      name: "Emme",
    },
    {
      id:"2", 
      name: "Diana",
    },
    {
      id:"3", 
      name: "Simon",
    },
    {
      id:"4", 
      name: "Alan",
    },
    {
      id:"5", 
      name: "Rodo",
    }
  ],
};

async function list(tabla) {
  return db[tabla] || [];
}

async function get(tabla, id) {
  let col = await list(tabla);
  return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
  if(!db[tabla]) {
    db[tabla] = [];
  }
  db[tabla].push(data);
  console.log(db);
}

async function remove(tabla, id) {
  return true;
}

async function query(tabla, quer) {
  let col = await list(tabla);
  let keys = Object.keys(quer);
  let key = keys[0]
  // Filtra todos los items existentes y para cada item revisa si el "key" es igual a quer[key]
  return col.filter(item => item[keys[0]] === quer[key])[0] || null;
}
module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};


// async function list(tabla) {
//   return db[tabla];
// }
 
// async function get(tabla, id) {
//   let col = list(tabla);
//   return col.filter(item => item.id === id)[0] || null;
// }

// function upsert(tabla, data) {
//   db[collection].push(data);
// }

// function remove(tabla, id) {
//   return true;
// }

// module.exports = {
//   list,
//   get,
//   upsert,
//   remove
// };