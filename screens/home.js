// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';



import React, { Component } from 'react'
import { Text, View,Image, TouchableWithoutFeedback, ScrollView,TouchableHighlight, Platform, StyleSheet, StatusBar, FlatList } from 'react-native'
import Searchicon from '../assets/images/icons/searchicon.png'
import Filtericon from '../assets/images/icons/filtericon.png'
import Homeimg from '../assets/images/home1.png'
import Popular1 from '../assets/images/popularhome1.jpg'
import Popular2 from '../assets/images/popularhome2.jpg'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'



export default class home extends Component {
    static navigationOptions={
        header: null
    }



    render() {
        return (
            <ScrollView>
               
            <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="light-content" />
                <View style={{flex: 2,justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
                    <Text style={{fontSize: 25, fontWeight: '800'}}>Find your house</Text>
                    <View style={{ justifyContent:'flex-start', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback>
                        <Image source={Searchicon} style={{width: 20,resizeMode: 'cover',height: 20}} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <Image source={Filtericon}  style={{width: 20,resizeMode: 'cover',height: 20}}/>
                        </TouchableWithoutFeedback>
                       
                    </View>
                </View>
                <Text style={{fontSize: 12, color: '#bbb'}}>30 result in your area</Text>

                <View style={{flex: 3}}>
                    <Image style={{width: null,resizeMode: 'cover',height: 320}} source={Homeimg} />

                </View>

                <View style={{flex: 2, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
                    <View>
                        <Text style={{fontSize: 25}}>Wooden house</Text>
                        <Text style={{fontSize: 15, color: '#aaa'}}>29 london street new york</Text>
                    </View>
                    <TouchableHighlight style={{backgroundColor: '#0072ff', width: 100, height: 30,borderRadius: 20, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                        <Text style={{color: '#fff'}}>350000$</Text>
                    </TouchableHighlight>
                </View>


                <View style={{flex: 2 }}>
                    <Text style={{fontSize: 25, fontWeight: '800'}}>Popular</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{width: 150, height: 150, marginRight: 10}}>
                            <Image source={Popular1} style={{width: 150,resizeMode: 'cover',height: 150, borderRadius: 20}} />
                        </View>

                        <View style={{width: 150, height: 150, marginRight: 10}}>
                            <Image source={Popular2} style={{width: 150,resizeMode: 'cover',height: 150,borderRadius: 20}} />
                        </View>
                        <View style={{width: 150, height: 150, marginRight: 10}}>
                            <Image source={Popular2} style={{width: 150,resizeMode: 'cover',height: 150,borderRadius: 20}} />
                        </View>
                        <View style={{width: 150, height: 150, marginRight: 10}}>
                            <Image source={Popular2} style={{width: 150,resizeMode: 'cover',height: 150,borderRadius: 20}} />
                        </View>
                    </ScrollView>

                </View>
            </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 20,
    }
})