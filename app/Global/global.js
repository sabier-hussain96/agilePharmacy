import { StyleSheet } from "react-native"

export const AppStyleSheet = StyleSheet.create({
    tabText:{
        fontFamily: "NotoSans-BoldItalic",
        fontSize: 20,
        textAlign: "center"
    

    },
    Container:{
   
        flex:1
    },
    Homeheader:{
        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cart:{
        flexDirection: "row",
        marginRight:20,
        marginTop:10
    },
    searchIcon:{ 
        flexDirection:'row',
        borderWidth:1,
        borderColor:"gray",
        borderRadius:10,
        height:50,

    },
    cancelText:{
        height:150,
        width:250,
        
    },
    cancelIcon:{
        
        
    },
    locSearchTextInp:{
        height:50,
        width:250,
        borderWidth:1,
        borderColor:"#10847E",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        fontFamily:"NotoSans-Regular",
        paddingStart:20,
        color:"#93A1AA"
    },
    savedAddress:{
       justifyContent:"flex-end",
       flex:1
       
    },
    saveAddText:{
        fontFamily:"NotoSans-ExtraBold",
        marginBottom:10
    },
    addressContainer:{
        borderWidth:1,
        height:130,
        width:130,
        borderStyle:"dashed",
        borderColor:"#8E9DA7",
        justifyContent:"center"
    },
    adrsContText:{
        width:100,
        fontSize:15,
        paddingStart:20,
        marginTop:5,
        fontFamily:"NotoSans-Bold",
        color:"#10847E"
    },
    addrsIcon:{
        alignItems:"center"
    },
    flatList:{
        height:150,
        width:150,
        borderRadius:8

    },
    paginator:{
        flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8 
    },
    labTest:{
       
    },
    //common header which can be added to all the headers to make it bold
    specialHeading:{
        fontFamily:"NotoSans-ExtraBold",
        fontSize:15,
        textAlign:"center"
    },
    Viewflaskicon:{
        marginTop:20,
        paddingStart:20,
        flexDirection:"row"

    },
    subCatHead:{
        height:70,
        width:"auto",
        flexDirection:"row",
        backgroundColor:"#F3F6FA",
        
    },
    subCatfirstBtn:{
        borderWidth:1,
        borderRadius:20,
        height:40,
        width:55,
        marginTop:15,
        marginStart:10,
        padding:5
        
    },
    subCatHeadBtn:{
        borderWidth:1,
        borderRadius:20,
        height:40,
        width:100,
        marginTop:15,
        marginStart:10
        
    },
    subCatfirstText:{
        fontFamily:"NotoSans-Bold",
        fontSize:13,
        textAlign:"center"
    },
    subCatBtnText:{
        fontFamily:"NotoSans-Bold",
        fontSize:12
    },
    subCatPagesHeading:{
        fontFamily:"NotoSans-ExtraBold",
        fontSize:16,
        paddingStart:10,
        paddingBottom:10
    },
    subcatText:{
        fontFamily:"NotoSans-Bold",
        fontSize:14
    },
    subcatPrice:{
        fontFamily:"NotoSans-Bold",
        fontSize:14
    },
    tagView:{
        backgroundColor:"#F76B6D",
        height:25,
        width:75
    },
    header:{
        height:55,
        width:"auto",
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    headerText:{
        fontFamily:"NotoSans-Bold",
        fontSize:20,
        textAlign:"center",
        paddingTop:5,
        
    }



    

})