//import firebaseApp from ".services/firebaseConfig";

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => 
    {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        );
    };


const DetailsScreen = () => 
    {
        return(
            <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Details Screen</Text>
            </View>
        );
    };

const Stack = createStackNavigator();


export default function App()
{
    const onPressLearnMore = () => 
        {
            Alert.alert('You pressed the button!');
        };


    return (
        <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen}/>

            </Stack.Navigator>
        </NavigationContainer>

        <View style={styles.container}>
            <Text style={styles.title}>Hidden Guide</Text>
            <Button
                title="Press Me"
                onPress={onPressLearnMore}
                color='#F39F5A'
            />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AE445A'
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
