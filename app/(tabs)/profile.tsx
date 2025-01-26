import {View, StyleSheet, RefreshControl, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAuth} from "@/hooks/AuthProvider";
import {router} from "expo-router";
import ProfilePaymentBlock from '@/components/ProfilePaymentBlock'
import React from "react";
import {PaymentsListInterface} from "@/api/profile/types";
import {useQuery} from "@tanstack/react-query";
import {getPaymentsList} from "@/api/profile";

export default function ProfileScreen() {
    const { user } = useAuth()
    const {isPending, error, data, refetch}:
        { isPending: boolean,
          error: boolean,
          data: PaymentsListInterface,
          refetch: () => {},
        } = useQuery({
      queryKey: ['paymentsList'],
      queryFn: () => getPaymentsList(),
    })


    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            refreshControl={
              <RefreshControl
                  refreshing={false}
                  onRefresh={() => {
                    refetch()
                  }}
              />
            }
        >
          <View style={styles.container}>
            <View style={styles.card}>
              <Text variant='titleMedium' style={styles.title}>Личная информация</Text>
              <View style={styles.row}>
                <Text variant='titleMedium'>Эл. почта:</Text>
                <Text variant='titleMedium'>{user?.email}</Text>
              </View>
              <View style={styles.row}>
                <Text variant='titleMedium'>Имя:</Text>
                <Text variant='titleMedium'>{user?.name}</Text>
              </View>
              <Button
                style={styles.changeCityButton}
                onPress={() => router.push('/changePasswordModal')}
              >
                Смена пароля
              </Button>
            </View>
            <ProfilePaymentBlock
              isPending={isPending}
              error={error}
              data={data}
            />
            {/*<View style={styles.card}>*/}
            {/*  <View style={styles.row}>*/}
            {/*    <Text variant='titleMedium'>Выбранный город:</Text>*/}
            {/*    <Text variant='titleMedium'>{user?.city.name}</Text>*/}
            {/*  </View>*/}
            {/*  <Button*/}
            {/*    style={styles.changeCityButton}*/}
            {/*    onPress={() => router.push('/changeCityModal')}*/}
            {/*  >*/}
            {/*    Изменить город*/}
            {/*  </Button>*/}
            {/*</View>*/}
            <Button
                mode="contained"
                style={styles.deleteButton}
                onPress={() => router.push('/removeAccountModal')}
            >
              Удалить учетную запись
            </Button>
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: 15,
  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold',
  },
  changeCityButton: {
    alignSelf: 'flex-start',
  },
  deleteButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
  }
})
