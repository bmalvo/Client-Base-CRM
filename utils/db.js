const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');

class Db {
    constructor(dbFilename) {
        this.dbFilename = join(__dirname, '../data', dbFilename);
        this._load();
    }
    
    async _load() {
        this._data = JSON.parse(await readFile(this.dbFilename, 'utf8'));
        console.log(this._data)
    }

    create(obj) {
        this._data.push(obj);
        writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8');
    }
};

const db = new Db('client.json');

module.exports = {
  db,
}
