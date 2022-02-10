import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Keyboard,
  AsyncStorage,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import {sleep, fetchingAsyncStorageAndDoJob} from '../lib/util';
AntIcon.loadFont();
EntIcon.loadFont();
IoniIcon.loadFont();

interface Item {
  id: String;
  content: String;
  checked: Boolean;
}

interface Props {
  todosItem: Item;
  updateTodo: (id: String, text: String) => void;
  deleteTodo: (id: String) => void;
  checkTodo: (id: String) => void;
  setLoading: (loading: Boolean) => void;
}

const TodoListItem: React.FC<Props> = ({
  todosItem,
  updateTodo,
  deleteTodo,
  checkTodo,
  setLoading,
}) => {
  const [updateToggle, setUpdateToggle] = useState<Boolean>(false);
  const updateInputRef = useRef<TextInput>(null);
  const [updateText, setUpdateText] = useState<String>(todosItem.content);

  const onChangeInput = (val: String): void => {
    setUpdateText(val);
  };

  const onUpdateSubmit = async (): Promise<void> => {
    try {
      // await fetchingAsyncStorageAndDoJob(setLoading, )
      setLoading(true);
      const res = await AsyncStorage.getItem('task');
      if (res) {
        const newTodos = JSON.parse(res).map((item, _) =>
          item.id === todosItem.id ? {...item, content: updateText} : item,
        );
        updateTodo(todosItem.id, updateText);
        Keyboard.dismiss();
        setLoading(false);
        await AsyncStorage.setItem('task', JSON.stringify(newTodos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateCheck = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await AsyncStorage.getItem('task');
      if (res) {
        const newTodos = JSON.parse(res).map((item, _) =>
          item.id === todosItem.id ? {...item, checked: !item.checked} : item,
        );
        checkTodo(todosItem.id);

        setLoading(false);
        await AsyncStorage.setItem('task', JSON.stringify(newTodos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateDelete = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await AsyncStorage.getItem('task');
      if (res) {
        const newTodos = JSON.parse(res).filter(
          (item, _) => item.id !== todosItem.id,
        );
        deleteTodo(todosItem.id);

        setLoading(false);
        await AsyncStorage.setItem('task', JSON.stringify(newTodos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (updateInputRef.current && updateToggle) {
      updateInputRef.current.focus();
    }
  }, [updateToggle]);

  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <TouchableOpacity
          onPress={() => {
            onUpdateCheck();
          }}>
          {todosItem.checked ? (
            <IoniIcon name="ios-checkbox" size={20} color={'black'} />
          ) : (
            <IoniIcon name="ios-checkbox-outline" size={20} color={'black'} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.textContent}>
        {updateToggle ? (
          <TextInput
            ref={el => {
              updateInputRef.current = el;
            }}
            value={updateText}
            style={{
              borderColor: '#548CFF',
              borderWidth: 1,
              padding: 2,
              marginRight: 5,
            }}
            onChangeText={onChangeInput}></TextInput>
        ) : todosItem.checked ? (
          <Text style={{color: 'black', textDecorationLine: 'line-through'}}>
            {todosItem.content}
          </Text>
        ) : (
          <Text style={{color: 'black'}}>{todosItem.content}</Text>
        )}
      </View>

      <View style={styles.updateBtn}>
        {updateToggle ? (
          <TouchableOpacity
            onPress={() => {
              onUpdateSubmit();
              setUpdateToggle(!updateToggle);
            }}>
            <EntIcon name="check" size={20} color={'black'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setUpdateToggle(!updateToggle);
            }}>
            <EntIcon name="pencil" size={20} color={'black'} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.deleteBtn}>
        <TouchableOpacity
          onPress={() => {
            onUpdateDelete();
          }}>
          <AntIcon name="delete" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  checkBox: {},
  textContent: {
    flex: 1,
    paddingLeft: 10,
  },
  updateBtn: {},
  deleteBtn: {
    paddingLeft: 10,
  },
});

export default TodoListItem;
