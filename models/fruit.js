const fruits = require('./data/fruits.json');

const fruitModel = {
    getById: (id) => {
        return fruits.rows.find(row => row.id === id);
    },

    getAll: () => {
        return fruits.rows;
    },

    create: (data) => {
        const newId = ++fruits.lastId;
        const fruit = {
            id: newId,
            name: data.name
        };

        fruits.rows.push(fruit);
        return fruit;
    },

    update: (id, data) => {
        throw new Error('Not implemented :o');
    },

    delete: (id) => {
        const targetIndex = fruits.rows.findIndex(row => row.id === id);

        if (targetIndex > 0) {
            fruits.rows.splice(targetIndex, 1);
            return true;
        }
        return false;
    }
};

module.exports = fruitModel;