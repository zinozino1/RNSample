import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import {sleep} from '../lib/util';
AntIcon.loadFont();
EntIcon.loadFont();
IoniIcon.loadFont();

const TodoListItem = ({
  todosItem,
  updateTodo,
  deleteTodo,
  checkTodo,
  setLoading,
}) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const updateInputRef = useRef(null);
  const [updateText, setUpdateText] = useState(todosItem.content);
  const onChangeInput = val => {
    setUpdateText(val);
  };
  const onUpdateSubmit = () => {
    setLoading(true);
    sleep(1000).then(() => {
      updateTodo(todosItem.id, updateText);
      Keyboard.dismiss();
      setLoading(false);
    });
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
            checkTodo(todosItem.id);
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
              borderColor: 'blue',
              borderWidth: 1,
              padding: 2,
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
            deleteTodo(todosItem.id);
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
