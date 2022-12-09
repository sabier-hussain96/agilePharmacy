import { HomeIcon } from "../../assets/Icons/HomeIcon";
import { TouchableNativeFeedback,View,Text} from 'react-native'
import { ProfileIcon } from "../../assets/Icons/ProfileIcon";
import{WishListIcon}  from "../../assets/Icons/WishListIcon";
import NotificationIcon from "../../assets/Icons/NotificationIcon";

export const screenNames = {
    DashBoard_Screen: `DashBoard`,
    Order_Screen:`Orders`,
    Splash_Screen:`SplashScreen`,
    Profile_Screen:`Profile`,
    Registration_Screen:`Registration`,
    Categories_Screen:`Categories`,
    Home_Screen:`Home`,
    Search_Screen:`Search`,
    Location_Screen:`location`,
    Health_SubCat:`Health`,
    Sub_Category:`Sub Category`,
    WISHLIST:`Wish`,
    CART_Screen:`Cart`,
    CART_Empty:`EmptyCart`,
    CART_Items:`CartItem`,
    Payment_gateways:`Payment`,
    Card_payment:`Card`,
    UPI_payment:`UPI payment`,
    NetBanking_payment:`NetBanking`,
    Wallet_payment:`Wallet`,
    Booked_Appointment :`Booked_Appointments`,
    Notification :`Notfication`
    

    
}


export const header_Shown = {
    headerShown: false,
    unmountOnBlur: true

}

export const colors ={
    main:'#ADE4F7',
    primaryBtn:"#008000",
    redBtn:"#FF0000",
    blueBtn:"#0000FF",
    subCatBgColor:"DFEAFF"
}

const buttonNativeFeedback = ({ children, style, ...props }) => (
    <TouchableNativeFeedback
        {...props}
        background={TouchableNativeFeedback.Ripple('#26A69A', true)}>
        <View style={style}>{children}</View>
    </TouchableNativeFeedback>
);


export const HomeOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <HomeIcon color={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>HOME</Text>
        </View>
    ),
}

export const OrderOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <NotificationIcon stroke={focused ? "#26A69A" : "#FFFFFF"} />
            <Text style={{ color: focused ? "#26A69A" : "#FFFFFF", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>Notification</Text>
        </View>
    ),
}

export const ProfileOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <ProfileIcon stroke={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>PROFILE</Text>
        </View>
    ),
}

export const listOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <WishListIcon stroke={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>MyList</Text>
        </View>
    ),
}