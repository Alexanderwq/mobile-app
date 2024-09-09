import {FlatList, Image, StyleSheet, View} from "react-native";
import {Text} from 'react-native-paper'
import TrainerCardInterface from "@/types/TrainerCardInterface";

export default function TeamList() {
    const teamList: TrainerCardInterface[] = [
        {
            jobTitle: 'Тренер по йоге',
            name: 'Ольга',
            avatar: 'image.png',
        }
    ]
    const renderItem = ({ item }: {item: TrainerCardInterface}) => (
        <View style={styles.card}>
            <Image
                source={require('./../assets/images/react-logo.png')}
            />
            <View style={styles.cardInfo}>
                <Text variant="titleMedium">{item.name}</Text>
                <Text>{item.jobTitle}</Text>
            </View>
        </View>
    )
    return (
        <FlatList
            data={teamList}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
                <View style={{ height: 15 }}></View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
    },
    cardInfo: {
        gap: 7,
    },
})