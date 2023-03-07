const path = require('path');

module.exports = {
    entry: './src/todo-store-index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo-store.js',
        library: 'todo_store'
    }
};