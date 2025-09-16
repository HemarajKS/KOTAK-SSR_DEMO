import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";

interface LocationData {
  ip: string;
  city: string;
  country: string;
  timezone: string;
}

export default function HomePage() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [isServer, setIsServer] = useState(typeof window === "undefined");

  useEffect(() => {
    setIsServer(false);

    // Fetch from server API route
    fetch("/api/location")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched location data:", data);
        setLocationData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!locationData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading location data...</Text>
        <Text style={styles.info}>
          Rendered on: {isServer ? "Server" : "Client"}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Data (SSR Ready)</Text>
      <Text style={styles.info}>IP: {locationData.ip}</Text>
      <Text style={styles.info}>City: {locationData.city}</Text>
      <Text style={styles.info}>Country: {locationData.country}</Text>
      <Text style={styles.info}>Timezone: {locationData.timezone}</Text>
      <Text style={styles.rendered}>
        Rendered on: {isServer ? "Server" : "Client"}
      </Text>
      
      <Link href="/about" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to About</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 14,
    color: "#999",
  },
  rendered: {
    fontSize: 12,
    color: "#666",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
