import { Link } from "expo-router"
import { Pressable, StyleSheet } from "react-native"

import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"

export default function FormSheet() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Form sheet content</ThemedText>

      <Link href="/" dismissTo style={styles.link} asChild>
        <Pressable>
          <ThemedText type="link">Go to home screen</ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
