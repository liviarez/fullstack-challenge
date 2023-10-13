import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)
//sets path for database to be created regardless of where file is being run in node

export class Database {
//method
  #database = {}

  //constructor used to recover data when aplication is started
  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
    //writefile only allows strings to be sent 
  }
  
  select(table) {
    const data = this.#database[table] ?? []
    
    return data
  }
  
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }
    
    //method call everytime datatbase is called
    this.#persist()

    return data
  }
}