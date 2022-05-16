import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components';
import { COLORS, NFTData } from '../constants';

export type NFTItemProps = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: {
    id: string;
    name: string;
    price: number;
    image: any;
    date: string;
  }[];
};

const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
