import {observable} from 'mobx';
import {AsyncStorage} from 'react-native';

interface TodoItem {
  id: string;
  content: string;
  checked: boolean;
}

// store
const TodoStore = observable({
  // state
  todos: [],
  test: 1,

  // actions
  load() {
    const loadAsyncStorage = async () => {
      const res = await AsyncStorage.getItem('task');
      if (res) this.todos = JSON.parse(res);
    };
    loadAsyncStorage();
  },
  save() {
    const saveAsyncStorage = async () => {
      await AsyncStorage.setItem('task', JSON.stringify(this.todos));
    };
    saveAsyncStorage();
  },
  insert(newTodo: TodoItem) {
    console.log('newTodo', newTodo);
    console.log('insert : ', this.todos);
    console.log('insert test : ', test);
    this.todos.push(newTodo);
  },
  delete(id: string) {
    this.todos = this.todos.filter((item: TodoItem, _) => item.id !== id);
  },
  update(id: string, text: string) {
    this.todos = this.todos.map((item: TodoItem, _) =>
      item.id === id ? {...item, content: text} : item,
    );
  },
  check() {
    this.todos = this.todos.map((item: TodoItem, _) =>
      item.id === id ? {...item, checked: !item.checked} : item,
    );
  },
});

export default TodoStore;
