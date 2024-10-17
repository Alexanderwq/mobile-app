import {Platform, StyleSheet, View} from "react-native";
import {List, Text} from "react-native-paper";
import {Link} from 'expo-router'
import {platform} from "node:os";

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
          <Link href={link.href} key={index} style={styles.href}>
              <List.Item
                title={() => <Text variant="titleMedium">{link.title}</Text>}
                left={() => <List.Icon color="rgba(1,165,221,1.00)" icon={link.icon}/>}
                style={styles.item}
              />
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
  item: {
    paddingTop: 0,
    paddingBottom: 7,
    marginTop: 15,
    width: '100%',
    ...Platform.select({
      ios: {
        borderBottomColor: 'rgba(1,165,223,1.00)',
        borderBottomWidth: 1,
      },
    })
  },
  href: {
    ...Platform.select({
      android: {
        borderBottomColor: 'rgba(1,165,223,1.00)',
        borderBottomWidth: 1,
      },
    })
  },
})