import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

// Mock initial messages per directory
const initialMessages = {
  You: ["Hi there!"],
  Home: ["Welcome home!"],
  Love: ["❤️ I love you!"],
  Family: ["Family first!"],
  Friends: ["Hey, bestie!"],
  School: ["Don't forget homework!"],
};

export default function MessageList({ route }) {
  const { directory } = route.params;
  const [messages, setMessages] = useState(initialMessages[directory] || []);
  const [text, setText] = useState('');

  const addMessage = () => {
    if (text.trim()) {
      setMessages([...messages, text]);
      setText('');
    }
  };

  const deleteMessage = (index) => {
    const msgs = messages.slice();
    msgs.splice(index, 1);
    setMessages(msgs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{directory} Messages</Text>
      <FlatList
        data={messages}
        renderItem={({ item, index }) => (
          <View style={styles.messageRow}>
            <Text style={styles.msg}>{item}</Text>
            <TouchableOpacity onPress={() => deleteMessage(index)}>
              <Text style={styles.deleteBtn}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, idx) => idx.toString()}
        style={{ flex: 1, width: '100%' }}
      />
      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type your message..."
          style={styles.input}
        />
        <Button title="Add" onPress={addMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#555' },
  messageRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f7f7f7', padding: 12, borderRadius: 10, marginBottom: 6 },
  msg: { fontSize: 16 },
  deleteBtn: { color: 'red', marginLeft: 18 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginRight: 8 },
});

