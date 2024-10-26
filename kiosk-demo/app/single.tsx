import { ListItemType } from "@/types";
import { Link } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LIST: ListItemType[] = [
    {
        key: '1955',
        name: '1955 버거',
        vid: 'gzFEg2z5Sso'
    },
    {
        key: 'big-mc',
        name: '빅맥',
        vid: 'm7G6fDMvUY8',
    },
]

export default function Page() {
    return <SafeAreaView style={{ flex: 1 }}>
        <FlatList
            data={LIST}
            renderItem={Item}
            style={{flex: 1}}
        />
        <View style={{ padding: 12, flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity style={[styles.button, { marginBottom: 0, flex: 1 }]}>
                <Text style={styles.label}>🔙 이전 메뉴</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginBottom: 0, flex: 1 }]}>
                <Text style={styles.label}>🏠 처음으로</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}

function Item({ item }: { item: ListItemType } ) {
    return <View>
        <Link href={`/details/${item.vid}`}>
            <Text>{item.name}</Text>
        </Link>
    </View>
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        padding: 20,
        marginBottom: 12,
    },
    label: {
        fontSize: 24,
    }
});