import {View} from 'react-native';
import MainMenu from "@/components/MainMenu";

export default function HomeScreen() {
    return (
        <View style={{marginTop: 300}}>
            <MainMenu links={[{ title: 'first Item', icon: 'folder', href: "/details" }, { title: '122', icon: 'folder', href: "/profile"}]} />
        </View>
    );
}
