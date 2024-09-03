import {View} from "react-native";
import {Divider, List} from "react-native-paper";
import {Link} from 'expo-router'

type LinkProps = {
    title: string,
    icon: string,
    href: string,
}

type MenuProps = {
    links: LinkProps[],
}

export default function MainMenu(props: MenuProps) {
    return (
        <View>
            {props.links.map((link: LinkProps, index: number) => (
                <Link href={link.href} key={index}>
                    <List.Item title={link.title} left={() => <List.Icon icon={link.icon} />} />
                    <Divider />
                </Link>
                )
            )}
        </View>
    )
}