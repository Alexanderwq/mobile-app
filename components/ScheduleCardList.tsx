import {useQuery} from "@tanstack/react-query";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import ScheduleCard from "@/components/ScheduleCard";
import {ActivityIndicator} from "react-native-paper";
import api from '@/api/index'
import ScheduleListItemInterface from "@/api/types/ScheduleListItemInterface";

type ScheduleCardListProps = {
    date: Date,
}

export default function ScheduleCardList(props: ScheduleCardListProps) {
    const { isPending, error, data }: { isPending: boolean, error: boolean, data: ScheduleListItemInterface[] } = useQuery({
        queryKey: ['scheduleList', props.date.getTime().toString()],
        queryFn: () => api.getScheduleList(props.date.getTime().toString()),
    })

    if (isPending) return (
        <ActivityIndicator style={styles.loader} animating={true} color="#01a5dd" size="large" />
    )

    if (error) return 'Error!'

    return (
        <SafeAreaView style={styles.container}>
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
    }
})