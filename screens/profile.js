import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Platform, Image, FlatList, TouchableHighlight, AsyncStorage } from 'react-native'

import Profileimage from '../assets/images/profile.png'



const HouseList  = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Mike Pence',
      img: require('../assets/images/house1.png'),
      address: '49 Washington, New york',
      rent: '25000'

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Paul Ryan',
      img: require('../assets/images/house2.png'),
      address: '55 Washington, New york',
      rent: '25000'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Orrin Hatch',
      img: require('../assets/images/house3.png'),
      address: '56 Washington, New york',
      rent: '15000'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72zx',
        title: 'White Stone',
        img: require('../assets/images/house4.png'),
        address: '40/1 Washington, New york',
        rent: '25000'
      },
  ];
  function Item({ title, img, address, rent }) {
    return (
      <View style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingBottom: 20}}>
            <TouchableHighlight onPress={()=> this.props.navigation.navigate('Search')}>
             <Image source={img} style={{width: 150, height: 150, borderRadius: 25}} />  
            </TouchableHighlight>
        </View>
        <View style={{padding: 20}}>
            <Text >{title}</Text>
            <Text>{address} </Text>
            <Text>{rent} </Text>
        </View>
      </View>
    );
  }

export default class profile extends Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content"  />
                
                <View style={styles.profileheader}>
                    <View style={styles.profileimageContainer}>
                        <Image source={Profileimage} style={{width: 100, height: 100, borderRadius: 100}} />
                    </View>
                    <View>
                          <Text> Ghani Pradita </Text>
                          <Text> Washington, New york </Text>
                          <Text> 25 Short list </Text>
                     </View>
                </View>

                <View style={styles.profilebody}>
                    <FlatList

                        data={HouseList}
                        renderItem={({ item }) => <Item img={item.img} title={item.title} address={item.address} rent={item.rent} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        
                    />
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
    profileheader:{
        padding: 15,
       flex: 1,
       justifyContent: 'flex-start',
       flexDirection: 'row',
       alignItems: 'center',
      
    },
    profilebody:{
        padding:15,
        flex: 3,
        borderTopColor: '#aaa',
        borderTopWidth: 1
      
    }
})