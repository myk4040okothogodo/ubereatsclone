import React from 'react';
import {View, Text} from 'react-native';
import About from '../components/restaurantDetail/About';
import {Divider} from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MeniItems";


export default function RestaurantDetail() {
  return(
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20}} />
      <MenuItems />
    </View>
  )

}
