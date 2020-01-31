import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Image, ImageBackground, Platform } from 'react-native'
import { NavigationActions } from "react-navigation";
import Register from './register'

import Logo from '../assets/images/logo.png'
import Bg from '../assets/images/Background.png'
// import Style from '../assets/css/style'
// import { SplashScreen } from 'expo';

export default class splash extends Component {
  static navigationOptions ={
    header: null
}
    constructor(props){
        super(props);
        this.state = { isLoading: true}
      }
    
      performTimeConsumingTask = async()=>{
        return new Promise((resolve)=>
        setTimeout( ()=>{resolve('result')},6000));
      }
    
      async componentDidMount(){
        const data = await this.performTimeConsumingTask();
    
        if(data !== null){
          this.setState({isLoading: false});
          this.props.navigation.navigate('Register')
        }
      }
      static navigationOptions = {
        header: null
      };
    render() {
        if(this.state.isLoading){
            return <Splashed />;
          }
          return (
            <Register />
          );
    }
}

class Splashed extends Component{
    static navigationOptions =  {
       
           header: null
       
    }
    render(){
        return(
            <ImageBackground source={Bg} style={styles.bgContainer}>
                <StatusBar backgroundColor="white" barStyle="light-content" />
                <View style={styles.container}>
                    <Image source={Logo}  style={styles.logo} />
                    <Text style={styles.logotxt}>HomeRent</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bgContainer:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#38404c',
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '45%'
    },
    logo:{
        width: 100,
        height: 120

    },
    logotxt:{
        fontWeight: '900',
        fontSize: 30
    }
})
// { setTimeout(()=>{ this.props.navigation.navigate("register") }, 3000)}