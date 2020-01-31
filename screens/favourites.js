import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Platform, Image, FlatList } from 'react-native'





const HouseList  = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Wooden house',
      img: require('../assets/images/fav1.png'),
      address: '49 Washington, New york',
      rent: '25000'

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Paul Ryan',
      img: require('../assets/images/fav2.png'),
      address: '55 Washington, New york',
      rent: '25000'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Orrin Hatch',
      img: require('../assets/images/fav3.png'),
      address: '56 Washington, New york',
      rent: '15000'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72zx',
        title: 'White Stone',
        img: require('../assets/images/fav4.png'),
        address: '40/1 Washington, New york',
        rent: '25000'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba-3-000',
        title: 'Wooden house',
        img: require('../assets/images/fav1.png'),
        address: '49 Washington, New york',
        rent: '25000'
  
      },
  ];
  function Item({ title, img, address, rent }) {
    return (
      <View style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingBottom: 20}}>
             <Image source={img} style={{width: 150, height: 150, borderRadius: 25}} />  
        </View>
        <View style={{padding: 20}}>
            <Text >{title}</Text>
            <Text>{address} </Text>
            <Text>{rent} </Text>
        </View>
      </View>
    );
  }

export default class Favourite extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content"  />
                
                <View style={styles.favheader}>
                    <Text style={{fontSize: 25, fontWeight: '900', color: '#000'}}>Favourites</Text>
                    <Text style={{fontSize: 15, fontWeight: '100', color: '#bbb'}}>30 result in your Favourite</Text>
                </View>
        

                <View style={styles.favouritebody}>
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
    favheader:{
        paddingTop: 35,
        padding: 15,
      
       flexDirection: 'column',
       alignItems: 'flex-start',
      
    },
    favouritebody:{
        padding:15,
        flex: 3,
     
      
    }
})