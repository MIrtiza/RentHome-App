import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, Platform, TouchableHighlight } from 'react-native'
import Logo from '../assets/images/logo.png'

export default class register extends Component {
    static navigationOptions ={
        header: null
    }
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={styles.Container}>
                <StatusBar backgroundColor="white" barStyle="light-content" />
                <View style={styles.wrapper}> 
                    <View style={styles.logowrapper}>
                        <Image source={Logo}  style={styles.logo} />
                        <Text style={styles.logotxt}>HomeRent</Text>
                    </View>
                    <View style={{textAlign: 'center', justifyContent: 'center',alignItems: 'center', flex: 1}}>
                        <Text style={{fontSize: 20, color: '#33383f', fontWeight: '800', paddingBottom: 6}}>Discover your new home</Text>
                        <Text style={{textAlign: 'center', fontSize:15, color: '#697689', paddingBottom: 30}}>
                        Your new home should be called Dream 
                        Land because it is really the stuff 
                        dreams are made of. 
                        </Text>


                        <TouchableHighlight style={styles.RbtnContainer}  onPress={()=> this.props.navigation.navigate('Signup')} >
                            <Text style={{color: '#fff', fontWeight: '900'}}>Register</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.LbtnContainer} onPress={()=> this.props.navigation.navigate('Login')} >
                            <Text  style={{color: '#333', fontWeight: '900'}}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 20,
        padding: 40
    },
    wrapper:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logowrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 100,
        height: 120

    },
    logotxt:{
        fontWeight: '900',
        fontSize: 30
    },
    RbtnContainer:{
        width: 260,
        height: 45,
        backgroundColor: '#0072ff',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#0072ff',
        marginBottom: 10
    },
    LbtnContainer:{
        width: 260,
        height: 45,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#aaa'
    }
})