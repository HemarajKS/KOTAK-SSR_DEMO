import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

declare global {
  interface Window {
    __ABOUT_DATA__: any;
  }
}

export default function AboutPage() {
  const aboutData = typeof window !== 'undefined' ? window.__ABOUT_DATA__ : null;
  
  if (!aboutData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading server data...</Text>
      </View>
    );
  }
  
  return (
    <View style={[styles.container, styles.serverBg]}>
      <Text style={styles.title}>Server Rendered Page</Text>
      <Text style={[styles.env, styles.serverText]}>
        {aboutData.environment}
      </Text>
      <Text style={styles.info}>Server Time: {aboutData.serverTime}</Text>
      <Text style={styles.info}>Data: {JSON.stringify(aboutData.serverData?.slideshow?.title || 'N/A')}</Text>
      <Text style={styles.build}>Build ID: {aboutData.buildId}</Text>
      
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  serverBg: {
    backgroundColor: '#e8f5e8',
  },
  clientBg: {
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  env: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  serverText: {
    color: '#2d5a2d',
  },
  clientText: {
    color: '#1e3a8a',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  build: {
    fontSize: 12,
    color: '#999',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});