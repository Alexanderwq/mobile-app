import {StyleSheet, View} from "react-native";
import {List, Text} from "react-native-paper";
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
        <View style={styles.container}>
            {props.links.map((link: LinkProps, index: number) => (
                <Link href={link.href} key={index}>
                    <List.Item
                      title={() => <Text variant="titleMedium" >{link.title}</Text>}
                      left={() => <List.Icon color="rgba(1,165,221,1.00)" icon={link.icon} />}
                    />
                    <View style={styles.divider}></View>
                </Link>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(1,165,221,1.00)',
    width: '100%',
  }
})