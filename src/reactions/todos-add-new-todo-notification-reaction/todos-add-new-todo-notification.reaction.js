// action listened to
import TODOS_ADD_TODO from '../../actions/todos-add-todo-action/todos-add-todo.action.js';

const todosAddNewTodoNotification = (action_s, store) => {
    if (!store) {
        throw new Error('ERROR - NO STORE');
    }

    const add_todo_action_s = action_s.filter(action => action.type === TODOS_ADD_TODO);

    const reaction_s = add_todo_action_s.map(() => console.log('new to-do added'));

    return reaction_s;
};