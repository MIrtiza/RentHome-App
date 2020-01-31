
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,TouchableHighlight, TouchableWithoutFeedback, Platform, Dimensions } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import { Icon } from 'react-native-vector-icons'
import Leftarrow from '../assets/images/icons/leftarrow.png'
import KeyboardHeight from '../components/KeyboardHeight'

var {height, width} = Dimensions.get('window');
height = height;


export default class Login extends Component {
    state={
        height: height,
        password: ''
    }
    static navigationOptions ={
        header: null
    }

    // constructor(){
    //     this.state = {searchString: ''}
    // }
    render() {
        return (
            <View style={styles.container, {height: this.state.height}}>
                 <KeyboardHeight getHeight={(height) => {this.setState({height: height});}} />

                <View style={{flex:2,width:'100%', justifyContent: 'flex-start', flexDirection: 'row',paddingTop: 40, paddingLeft:25,paddingBottom: 25 , backgroundColor: 'transparent'}}>

                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Register')} style={{backgroundColor: 'transparent'}}>
                    <Image source={Leftarrow} style={{height: 20, width: 20, paddingLeft:25}} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex:4,justifyContent: 'center', flexDirection: 'column', padding: 25, marginBottom: 20}}>
                    <Text style={styles.heading}>Login</Text>

                    <Text>Email</Text>
                    <TextInput placeholder="example@xyz.com" style={styles.inputcss}/>

                    {/* <Text>Password</Text>
                    <TextInput placeholder="••••••••" style={styles.inputcss} /> */}

                    <PasswordInputText
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                    placeholder="••••••••" 
                    />

                    <TouchableHighlight style={styles.btncss} onPress={()=> this.props.navigation.navigate('Home')}>
                        <Text style={{color: '#fff'}}>Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btnforgot} onPress={()=>this.props.navigation.navigate('Forgot')}>
                        <Text style={{color: '#0072ff', fontSize: 12}}>Forgot your password?</Text>
                    </TouchableHighlight>


                    

                    {/* <View style={styles.searchSection}>
                        <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                        <TextInput
                            style={styles.input}
                            placeholder="User Nickname"
                            onChangeText={(searchString) => {this.setState({searchString})}}
                            underlineColorAndroid="transparent"
                        />
                    </View> */}
                </View>
                <View style={styles.bottom}>
                        <View style={styles.signup}>
                            <Text style={{color: '#d3d4ed', fontSize: 12}}>Don't have an account?</Text>
                            <TouchableHighlight onPress={()=> this.props.navigation.navigate('Signup')}>
                                <Text style={{color: '#0072ff', fontSize: 12}}>Register now</Text>
                            </TouchableHighlight>

                        </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 22,
        textAlign: 'left',
        padding: 20,
        
    },
    heading:{
        fontSize: 25,fontWeight:'900', color: '#444',
        paddingBottom: 30,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',

    },
    btncss:{
        width: '100%',
        height: 45,
        backgroundColor: '#0072ff',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#0072ff',
        marginBottom: 10
    },
    btnforgot:{
        width: '100%' ,
        justifyContent:'center',
        alignItems: 'center',
        
    },
    inputcss:{
        paddingBottom: 8,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 10  
    },
    signup:{
       
        justifyContent: 'center',
        flexDirection: 'row',
      

    },
    bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 30
    }
})
