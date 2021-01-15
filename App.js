import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    //setTodos(todos.concat([newTodo]))
    // setTodos((prevTodos)=>{
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    //...prev оператор спрэд
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = id =>{
    setTodos(prev => prev.filter(todo=> todo.id !== id))
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={item=>item.id}
          data={todos}
          renderItem={({item})=><Todo todo={item} onRemove={removeTodo}/>} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
