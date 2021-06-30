import * as React from 'react';
import styles from './styles';
import { Image, FlatList } from "react-native";
import categories from '../../assets/data/categories';
import { Text, View } from '../../components/Themed';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[0];
const  HomeScreen = () => {
  return (
    <View style={styles.container}>
     {/** List of categories */}
      <FlatList
        data={categories.items}
       renderItem={({item})=> <HomeCategory category={item} />} />
    </View>
  );
}
export default HomeScreen;
