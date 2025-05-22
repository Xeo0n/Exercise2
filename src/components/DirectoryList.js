import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const directories = [
  { key: 'You', color: '#FF3300', icon: require('../assets/you.png') },
  { key: 'Home', color: '#63C3F7', icon: require('../assets/home.png') },
  { key: 'Love', color: '#347DCC', icon: require('../assets/love.png') },
  { key: 'Family', color: '#7A4FC9', icon: require('../assets/family.png') },
  { key: 'Friends', color: '#F063A4', icon: require('../assets/friends.png') },
  { key: 'School', color: '#1DC7F7', icon: require('../assets/school.png') },
];

export default function DirectoryList({ navigation }) {
  return (
    <View style={styles.container}>
      {directories.map((dir) => (
        <TouchableOpacity
          key={dir.key}
          style={[styles.circle, { backgroundColor: dir.color }]}
          onPress={() => navigation.navigate('Messages', { directory: dir.key })}
        >
          <Image source={dir.icon} style={styles.icon} />
          <Text style={[styles.label, { color: dir.color === '#FF3300' ? '#FF3300' : '#333' }]}>
            {dir.key}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#fff' },
  circle: { width: 110, height: 110, borderRadius: 55, margin: 15, alignItems: 'center', justifyContent: 'center', elevation: 2 },
  icon: { width: 44, height: 44, marginBottom: 7, resizeMode: 'contain' },
  label: { fontWeight: 'bold', fontSize: 16, marginTop: 8 },
});

