import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList } from "react-native";
import TodoItem from "../components/TodoItem";
import "../global.css";

export default function Todos() {
  const [todos, setTodos] = useState<string[]>(["Finish homework", "Workout", "Read book"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4 text-blue-500">My Todos</Text>

      {/* Input Row */}
      <View className="flex-row mb-4">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Add a new task..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 mr-2"
        />
        <TouchableOpacity
          onPress={addTodo}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold">Add</Text>
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem text={item} onRemove={() => removeTodo(index)} />
        )}
      />
    </View>
  );
}
