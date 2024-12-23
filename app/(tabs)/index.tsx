import {View} from 'react-native';
import MainMenu from "@/components/MainMenu";

export default function HomeScreen() {
  const links = [
    {
      title: 'Расписание тренировок',
      icon: 'calendar',
      href: "/schedule"
    },
    // {
    //   title: 'Приобрести абонемент',
    //   icon: 'wallet',
    //   href: "/purchases"
    // },
    {
      title: 'Мы на карте',
      icon: 'map',
      href: "https://yandex.ru/maps/"
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
