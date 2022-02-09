import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import IoniIcon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont();
// PencilIcon.loadFont();

const TodoListItem = ({todosItem, updateTodo, deleteTodo, checkTodo}) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  useEffect(() => {
    console.log(updateToggle);
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
            value={todosItem.content}
            style={{borderColor: 'blue', borderWidth: 2}}></TextInput>
        ) : todosItem.checked ? (
          <Text style={{color: 'black', textDecorationLine: 'line-through'}}>
            {todosItem.content}
          </Text>
        ) : (
          <Text style={{color: 'black'}}>{todosItem.content}</Text>
        )}
      </View>

      <View style={styles.updateBtn}>
        <TouchableOpacity
          onPress={() => {
            setUpdateToggle(!updateToggle);
          }}>
          <EntIcon name="pencil" size={20} color={'black'} />
        </TouchableOpacity>
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
