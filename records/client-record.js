class ClientRecord {
    constructor(obj) {
        const { id, name, mail, nextContactAt, notes } = obj;

        if (!id || typeof name !== 'string') {
            throw new Error('ID must be not empty!')
        }


        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new Error('name must be a string 3 signs length'); 
        }

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
            throw new Error('Invalid mail adress')
        }

        if (typeof nextContactAt !== 'string') {
            throw new Error('notes must be a string ')
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
