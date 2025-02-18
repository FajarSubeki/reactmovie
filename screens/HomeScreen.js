import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <View className="flex-1 bg-neutral-800">
            <Text className="text-red-500">Home Screen</Text>
        </View>
    )
}