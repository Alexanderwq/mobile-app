import {useQuery} from "@tanstack/react-query";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import ScheduleCard from "@/components/ScheduleCard";
import {ActivityIndicator} from "react-native-paper";
import ScheduleListItemInterface from "@/api/types/ScheduleListItemInterface";
import {getScheduleList} from "@/api/schedule";

type ScheduleCardListProps = {
    date: Date,
}

export default function ScheduleCardList(props: ScheduleCardListProps) {
    const { isPending, error, data }: { isPending: boolean, error: boolean, data: ScheduleListItemInterface[] } = useQuery({
        queryKey: ['scheduleList', props.date.toString()],
        queryFn: () => getScheduleList(props.date),
    })

    if (isPending) return (
        <ActivityIndicator style={styles.loader} animating={true} color="#01a5dd" size="large" />
    )

    if (error) return 'Error!'

    return (
        <SafeAreaView style={styles.container}>
          {!isPending && data.length === 0 && (
            <View>
              <Text variant='titleLarge' style={styles.notFoundText}>
                Занятий нет.
              </Text>
            </View>
          )}
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <ScheduleCard {...item} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} ></View>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
    },
    loader: {
        marginTop: 100,
    },
    notFoundText: {
      marginTop: 40,
      textAlign: 'center',
    },
})