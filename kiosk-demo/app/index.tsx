import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Page() {
    return <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Link href={'/category'}>
            <View style={{
                width: '100%', height: '100%',
                justifyContent: 'center', alignItems: 'center'
            }}>
                 <Text style={{ fontSize: 20 }}>주문하시려면 화면을 터치하세요</Text>
            </View>
        </Link>
    </SafeAreaView>
}