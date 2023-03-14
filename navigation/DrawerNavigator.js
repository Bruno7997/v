import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"
const Drawer = createDrawerNavigator()
const DrawerNavigator=()=>{
    return (
<Drawer.Navigator>
<Drawer.Screen name="Home" component={TabNavigator}></Drawer.Screen>
<Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
</Drawer.Navigator>
    )}
    export default DrawerNavigator