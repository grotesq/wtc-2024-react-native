import { ListItemType } from "@/types";
import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native";

const LIST: ListItemType[] = [
    {
        key: '1955',
        name: '1955 버거 세트',
        vid: 'burger-1955',
    },
    {
        key: 'big-mc',
        name: '빅맥 세트',
        vid: 'big-mc',
    },
    {
        key: 'btd',
        name: '베이컨 토마토 디럭스 세트',
        vid: '',
    },
]

export default function Page() {
    return <SafeAreaView>
        <FlatList
            data={LIST}
            renderItem={Item}
            numColumns={2}
            style={{ padding: 16 }}
        />
    </SafeAreaView>
}

function Item({ item }: { item: ListItemType }) {
    const itemWidth = Dimensions.get('window').width / 2 - 16 - 8;
    return <View style={{ aspectRatio: 1, width: itemWidth, backgroundColor: '#ddd', marginRight: 16, marginBottom: 16,
        justifyContent: 'center', alignItems: 'center',
     }}>
        <Text>{item.name}</Text>
    </View>
}