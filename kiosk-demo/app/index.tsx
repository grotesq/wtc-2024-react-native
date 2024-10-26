import { Link, router } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";

export default function Page() {
    return <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <TouchableOpacity onPress={() => {
            // dynamic navigate, programable navigate
            router.push('/category');
        }} style={{ width: '100%' }}>
            <View style={{
                width: '100%', height: '100%',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 20 }}>주문하시려면 화면을 터치하세요</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
}
