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
        <Text style={styles.label}>Dish Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter dish name"
          onChangeText={(text) => setDishName(text)}
          value={dishName}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        <Text style={styles.label}>Course:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter course (e.g., Starters, Mains, Desserts)"
          onChangeText={(text) => setCourse(text)}
          value={course}
        />

        <Text style={styles.label}>Price:</Text>
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
        color="#1E90FF" // You can choose a color that contrasts well with black
        onPress={handleAddItem}
      />

      <View style={styles.menuContainer}>
        <Text style={styles.menuCount}>Total Items: {menuItems.length}</Text>
        {menuItems.map((item, index) => (
          <Text key={index} style={styles.menuItem}>
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
    backgroundColor: '#000', // Set background to black
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
    color: '#fff', // Set title text color to white
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: '#fff', // Set label text color to white
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    color: '#fff', // Set input text color to white
    backgroundColor: '#333', // Optional: darker background for inputs
  },
  menuContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  menuCount: {
    color: '#fff', // Set menu count text color to white
  },
  menuItem: {
    color: '#fff', // Set menu item text color to white
  },
});