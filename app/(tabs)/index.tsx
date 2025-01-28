import {Platform, View} from 'react-native';
import MainMenu from "@/components/MainMenu";

export default function HomeScreen() {

  const mapLink = Platform.select({
    ios: 'maps:0,0?q=57,58336,39,90045',
    android: "https://yandex.ru/maps/16/yaroslavl/house/dyadkovskaya_ulitsa_7/Z0AYfwdgTUcCQFttfXl5cnhiYg==/?ll=39.900414%2C57.583421&z=17"
  })
  const links = [
    {
      title: 'Расписание тренировок',
      icon: 'calendar',
      href: "/schedule"
    },
    {
      title: 'Приобрести абонемент',
      icon: 'wallet',
      href: "/purchases"
    },
    {
      title: 'Мы на карте',
      icon: 'map',
      href: mapLink,
    },
    {
      title: 'Наша команда',
      icon: 'nature-people',
      href: "/team"
    }]

  return (
        <View style={{marginTop: 50}}>
            <MainMenu links={links} />
        </View>
    );
}
