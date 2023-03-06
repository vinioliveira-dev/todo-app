const path = require('path');

module.exports = {
    entry: './src/store.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'store.js',
        library: 'todo_store'
    }
};