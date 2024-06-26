import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { ListItem, ListItemSeparator } from '../components/lists';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../components/Icon';


const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                title="Mosh Hamedani"
                subTitle="programmingwithmosh@gmail.com"
                image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.lightgrey,
    },
    container: {
      marginVertical: 20,
    },
  });

export default AccountScreen;