import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddToDo from './components/AddToDo';
import uuid from "uuid";

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Take out bins' },
    {id: uuid.v4(), text: 'Back up laptop' },
    {id: uuid.v4(), text: 'Cook dinner' },
  ]);

  const deleteItem = (id) => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id != id);
    });
  }

  const addToDo = text => {

    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(previousItems => {
        return [{id: uuid.v4(), text:text},...previousItems]
      });
    }
  }

  return (
    <View style={ styles.container }>
      <Header/>
      <AddToDo addToDo={addToDo}/>
      <FlatList
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  }
});

export default App;