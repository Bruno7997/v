import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed"
import CreateStory from "../screens/CreateStory"
const Tab = createMaterialBottomTabNavigator()
const BottomTabNavigator=()=>{
    return (
<Tab.Navigator
labeled={false}
barStyle={styles.bottomTabStyle}
screenOptions={({route}) => ({
tabBarIcon:({focused,color,size})=>{
var iconName;
if(route.name==="Feed"){
iconName=focused? "home":"home-outline"
}
else if(route.name==="CreateStory"){
iconName=focused? "add-circle":"add-circle-outline"
}
return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons}></Ionicons>
},

}
)
}
activeColor={"cyan"}
inactiveColor={"black"}
>
<Tab.Screen name="Feed" component={Feed}></Tab.Screen>
<Tab.Screen name="CreateStory" component={CreateStory}></Tab.Screen>
</Tab.Navigator>
    )}
    const styles = StyleSheet.create({
        bottomTabStyle: {
          backgroundColor: "#2f345d",
          height: "8%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: "hidden",
          position: "absolute"
        },
        icons: {
          width: RFValue(30),
          height: RFValue(30)
        }
    });

    
    export default BottomTabNavigator
    