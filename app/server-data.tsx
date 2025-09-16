"user server";
import { View, Text, StyleSheet } from "react-native";

declare global {
  interface Window {
    __SERVER_DATA__: any;
  }
}

export default function ServerDataComponent() {
  const apiData =
    typeof window !== "undefined"
      ? window.__SERVER_DATA__
      : {
          users: [
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Smith", email: "jane@example.com" },
          ],
          timestamp: new Date().toISOString(),
        };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Server-Side Data (SSR)</Text>
      <Text style={styles.timestamp}>Fetched: {apiData.timestamp}</Text>
      {apiData.users.map((user: any) => (
        <View key={user.id} style={styles.user}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginTop: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
    marginBottom: 15,
  },
  user: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 8,
    borderRadius: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
});
