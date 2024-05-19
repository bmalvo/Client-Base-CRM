const { ValidationError } = require("../utils/error");

class ClientRecord {
    constructor(obj) {
        const { id, name, mail, nextContactAt, notes } = obj;

        if (!id || typeof name !== 'string') {
            throw new ValidationError('ID must be not empty!')
        }


        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new ValidationError('name must be a string 3 signs length'); 
        }

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
            throw new ValidationError('Invalid mail adress')
        }

        if (typeof nextContactAt !== 'string') {
            throw new ValidationError('notes must be a string ')
        }

        this.id = id;
        this.name = name;
        this.mail = mail;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
};

module.exports = {
    ClientRecord,
};
