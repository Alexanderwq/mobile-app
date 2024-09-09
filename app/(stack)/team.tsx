import TeamList from "@/components/TeamList";
import {StyleSheet, View} from "react-native";

export default function TeamScreen() {
    return (
        <View style={styles.container}>
            <TeamList />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  }
})