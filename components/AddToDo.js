import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddToDo = ({title, addToDo}) => {
    const [text, setText] = useState ('');

    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput 
                placeholder="Add To Do..." 
                style={styles.input} 
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addToDo(text.text)}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} />
                    Add To Do
                </Text>
            </TouchableOpacity>
        </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
      backgroundColor: '#C2BAD8',
      padding: 9,
      margin: 5,
  },
  btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: 'center',
  }
});

export default AddToDo;