const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const { v4: uuid } = require('uuid');


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
        this._data.push({
            id: uuid(),
            ...obj
        });
        writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8');
    }

    getAll() {
    return this._data;
    };

    update(id, newObj) {
        this._data = this._data.map(oneObj => {
            oneObj.id === id ? {
                ...oneObj,
                ...newObj,
            } : oneObj
        });
        writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8');

    }
};

const db = new Db('client.json');

module.exports = {
  db,
}
