import {View} from 'react-native';
import MainMenu from "@/components/MainMenu";

export default function HomeScreen() {
  const links = [
    {
      title: 'Расписание тренировок',
      icon: 'calendar',
      href: "/schedule"
    },
    {
      title: 'Приобрести абонемент',
      icon: 'folder',
      href: "/"
    },
    {
      title: 'Мы на карте',
      icon: 'folder',
      href: "/"
    },
    {
      title: 'Наша команда',
      icon: 'folder',
      href: "/"
    }]

    return (
        <View style={{marginTop: 50}}>
            <MainMenu links={links} />
        </View>
    );
}
