import React,{Component} from "react";
import {Text, View, StyleSheet, Image, SafeAreaView, Platform, StatusBar, ScrollView, TextInput} from "react-native";
import * as Font from "expo-font"
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import DropDownPicker from "react-native-dropdown-picker";


var customFonts ={"Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")}
export default class Feed extends Component
{
    constructor(props){
        super(props);
        this.state={
fontsLoaded:false,
previewImage:"image_1",
dropdownHeight: 40,

        }
    }
    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true})
    }
    componentDidMount(){
        this._loadFontsAsync()
    }
   
render(){if(!this.state.fontsLoaded){
    return <AppLoading/>
}
else {
    var Preview_images={
        image_1: require("../assets/story_image_1.png"),
        image_2: require("../assets/story_image_2.png"),
        image_3: require("../assets/story_image_3.png"),
        image_4: require("../assets/story_image_4.png"),
        image_5: require("../assets/story_image_5.png"),
    }
    return (
        <View style={styles.container}>
<SafeAreaView style={styles.droidSafeArea}/>
<View style={styles.appTitle}>
<View style={styles.appIcon}>
<Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
</View>
<View style={styles.appTitleTextContainer}>
<Text style={styles.appTitleText}>New story</Text>
</View>
</View>
<View style={styles.fieldsContainer}>
    <ScrollView>
        <Image style={styles.previewImage} source={Preview_images[this.state.previewImage]}></Image>
        <View style={{height:RFValue(this.state.dropdownHeight),}}>
            <DropDownPicker 
            items={[
                {label:"image 1",value:"image_1"},
                {label:"image 2",value:"image_2"},
                {label:"image 3",value:"image_3"},
                {label:"image 4",value:"image_4"},
                {label:"image 5",value:"image_5"},
                
            ]}
            defaultValue={this.state.previewImage}
            containerStyle={{height:40,borderRadius:20, marginBottom:10}}
            open={this.state.dropdownHeight==170?true:false}
            onOpen={()=>{this.setState({dropdownHeight:170})}}
            onClose={()=>{this.setState({dropdownHeight:40})}}
            style={{backgroundColor:"transparent",borderWidth:1, borderColor:"white"}}
            textStyle={{color:this.state.dropdownHeight==170?"black":"white",fontFamily:"Bubblegum-Sans"}}
            arrowStyle={{color:"white", fontFamily:"Bubblegum-Sans"}}
            onSelectItem={(item)=>{
                this.setState({previewImage:item.value})
            }}></DropDownPicker>
        </View>
        <TextInput style={styles.inputFont} onChangeText={(title)=>this.setState({title})} placeholder={"title"} placeholderTextColor="white"></TextInput>
        <TextInput style={[styles.inputFont,styles.inputFontExtra, styles.inputTextBig, {height: 100}]} onChangeText={(description)=>this.setState({description})} placeholder={"description"} multiline={true} numberOfLines={4} placeholderTextColor="white"></TextInput>
        <TextInput style={[styles.inputFont,styles.inputFontExtra, styles.inputTextBig, {height: 200}]} onChangeText={(story)=>this.setState({story})} placeholder={"story"} multiline={true} numberOfLines={20} placeholderTextColor="white"></TextInput>
        <TextInput style={[styles.inputFont,styles.inputFontExtra, styles.inputTextBig, {height: 100}]} onChangeText={(moral)=>this.setState({moral})} placeholder={"moral"} multiline={true} numberOfLines={4} placeholderTextColor="white"></TextInput>
    </ScrollView>
</View>
<View style={{flex:0.08}}/>
        </View>
    )
}
}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Bubblegum-Sans"
    },
    inputFontExtra: {
      marginTop: RFValue(15)
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5)
    }
  });
