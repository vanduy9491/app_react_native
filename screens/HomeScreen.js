import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsIcon, ChevronDownIcon, UserIcon,SearchIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
            <Text className="mt-9" >
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                        source={{
                            uri: 'https://www.planwallpaper.com/static/images/9-credit-1.jpg'
                        }} />
                    <View style={styles.hear_child}>
                        <View >
                            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                            <Text className="font-bold text-xl">
                                Current Location
                                <ChevronDownIcon color="#00CCBB" size={20} />
                            </Text>
                        </View>

                        <UserIcon size={35} color="#00CCBB" className="flex-1"/>
                    </View>
                </View>
                {/* Search */}
                <View  style={styles.search}>
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 m-2">
                        <SearchIcon color="gray" size={20}/>
                        <TextInput placeholder="please in put"
                        keyboardType="default"
                        ></TextInput>
                    </View>
                    <AdjustmentsIcon color="#00CCBB" />
                </View>

                {/* Body */}
                <ScrollView className="bg-gray-100">
                    {/* Categories */}
                        <Categories />
                </ScrollView>
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '10px',
        margin:'10px'
    },
    hear_child: {
       flex: 1,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

})

export default HomeScreen


