import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
// Icon.loadFont();
// PencilIcon.loadFont();

const TodoListItem = ({text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>v</Text>
      </TouchableOpacity>
      <Text>Text</Text>
      <AntIcon name="delete" size={20} />
      <EntIcon name="pencil" size={20} />
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
    marginBottom: 20,
  },
});

export default TodoListItem;
