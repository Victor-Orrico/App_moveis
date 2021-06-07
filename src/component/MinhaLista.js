import React from 'react';
import {Text, View, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../style/style';
import Aladim from './Aladim';
import Avatar from './Avatar';

const Stack = createDrawerNavigator();

function Inicial ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Aladim.png')} style={styles.imagem}/>
            <Text style={styles.titulo} onPress={()=>{navigation.navigate('Aladim')}}>Aladim</Text>
            <Image source={require('../image/Avatar.png')} style={styles.imagem}/>
            <Text style={styles.titulo} onPress={()=>{navigation.navigate('Avatar')}}>Avatar</Text>
        </View>
    );
}

export default function Lista(){
    return (
        <Stack.Navigator initialRouteName='Inicial'>
            <Stack.Screen name='Inicial' component={Inicial} />
            <Stack.Screen name='Aladim' component={Aladim} />
            <Stack.Screen name='Avatar' component={Avatar} />
        </Stack.Navigator>
    );
}