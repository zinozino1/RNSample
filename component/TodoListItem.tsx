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
  Alert,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import useInput from '../hooks/useInput';

AntIcon.loadFont();
EntIcon.loadFont();
IoniIcon.loadFont();

interface TodoItem {
  id: string;
  content: string;
  checked: boolean;
}

interface Props {
  todosItem: TodoItem;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  checkTodo: (id: string) => void;
  setLoading: (loading: boolean) => void;
}

const TodoListItem: React.FC<Props> = ({
  todosItem,
  updateTodo,
  deleteTodo,
  checkTodo,
}) => {
  const [updateToggle, setUpdateToggle] = useState<boolean>(false);
  const updateInputRef = useRef<TextInput>(null);
  const [updateText, setUpdateText, onChangeInput] = useInput<string>(
    todosItem.content || '',
  );

  const onUpdateText = () => {
    updateTodo(todosItem.id, updateText);
    Keyboard.dismiss();
    setUpdateToggle(!updateToggle);
  };

  const onDeleteText = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            deleteTodo(todosItem.id);
          },
          style: 'destructive',
        },
      ],
      {cancelable: true, onDismiss: () => {}},
    );
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
            <IoniIcon name="ios-checkbox" size={20} color="black" />
          ) : (
            <IoniIcon name="ios-checkbox-outline" size={20} color="black" />
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
            onChangeText={onChangeInput}
            onSubmitEditing={onUpdateText}
            returnKeyType="done"></TextInput>
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
          <TouchableOpacity onPress={onUpdateText}>
            <EntIcon name="check" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setUpdateToggle(!updateToggle);
            }}>
            <EntIcon name="pencil" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.deleteBtn}>
        <TouchableOpacity onPress={onDeleteText}>
          <AntIcon name="delete" size={20} color="black" />
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

export default React.memo(TodoListItem);
