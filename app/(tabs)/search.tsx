import { SafeAreaView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { SearchBar } from "react-native-elements";

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const updateSearch = (text: string) => {
    setSearch(text);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', backgroundColor: '#fff'}}>
        <SearchBar placeholder="Search" onChangeText={updateSearch} value={search} containerStyle={{backgroundColor: 'transparent'}} inputContainerStyle={{backgroundColor: 'transparent',}} inputStyle={{color: '#1B3C73'}} round={true} lightTheme={true}/>
      </View>
      <Text style={styles.title}>{search}</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
