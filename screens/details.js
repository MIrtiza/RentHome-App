import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Platform, Image, ScrollView,TouchableHighlight } from 'react-native'


import img1 from '../assets/images/detailsbig.png'
import img2 from '../assets/images/thumb2.png'
import img3 from '../assets/images/thumb3.png'

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//       Imgs: require('./assets/thumb-1.jpg')
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//       Imgs: require('./assets/thumb-2.jpg')
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//       Imgs: require('./assets/thumb-3.jpg')
//     },
//   ];

export default class details extends Component {
    constructor() { 
        super(); 
        this.state = { 
            images :require('../assets/images/detailsbig.png')
        }; 
        // this.state = { uri: require('./icons/logo_white.png') }
    } 
    render() {
        return (
            <View style={styles.container}>
                 <StatusBar backgroundColor="white" barStyle="light-content"  />
                

                 <View>
                  
                         <Image source={this.state.images} style={{width: '100%', height: 350}}/>
                  
                </View>

                <View>
              
                    <ScrollView horizontal style={{paddingTop: 30}}>
                    <TouchableHighlight onPress={()=> this.setState({images: img1})}>
                        <Image source={img1} style={{width: 50, height: 50}}/>
                    </TouchableHighlight>


                    <TouchableHighlight onPress={()=> this.setState({images: img2})}>
                        <Image source={img2} style={{width: 50, height: 50}}/>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=> this.setState({images: img3})}>
                        <Image source={img3} style={{width: 50, height: 50}} />
                    </TouchableHighlight>

                        </ScrollView>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 22,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})