import React, { useState } from 'react';
import { FlatList,StyleSheet,Platform, StatusBar, View } from 'react-native';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const initialMessage=[
    {
        id:1,
        title:"T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id:2,
        title:"T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
]

function MessagesScreen(props) {
    const [messages, setMessages]= useState(initialMessage)
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete= (message)=>{
        // Delete messages and re-render the states
        const newMessages =messages.filter(m=>m.id !== message.id)
        setMessages(newMessages);
    }
    return (
        <Screen>
        <FlatList data={messages}
         keyExtractor={message => message.id.toString()}
         renderItem={({item})=>
            <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={()=>console.log("pressed")}
                renderRightActions={ ()=>(
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
                />}
         ItemSeparatorComponent={ListItemSeparator}
         refreshing={refreshing}
         onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
        />
        </Screen>
    );
}

export default MessagesScreen;