import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  // State to manage form inputs
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState<any[]>([]);

  // Handler to add a menu item
  const handleAddItem = () => {
    const newItem = { name: dishName, description, course, price };
    setMenuItems([...menuItems, newItem]);

    // Clear input fields
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
    Alert.alert('Item added successfully');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chef's Menu</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text>Dish Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter dish name"
          onChangeText={(text) => setDishName(text)}
          value={dishName}
        />

        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        <Text>Course:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter course (e.g., Starters, Mains, Desserts)"
          onChangeText={(text) => setCourse(text)}
          value={course}
        />

        <Text>Price:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          keyboardType="numeric"
          onChangeText={(text) => setPrice(text)}
          value={price}
        />
      </View>

      <Button
        title="Add Menu Item"
        color="blue"
        onPress={handleAddItem}
      />

      <View style={styles.menuContainer}>
        <Text>Total Items: {menuItems.length}</Text>
        {menuItems.map((item, index) => (
          <Text key={index}>
            {item.name} - {item.description} ({item.course}) - ${item.price}
          </Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  menuContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
});