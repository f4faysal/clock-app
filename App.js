import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-regular": Inter_400Regular,
    "Inter-bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/light-bg.png")}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 26,
          marginTop: 32,
        }}
      >
        {/* Upper Portion */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter-regular",
                fontSize: 12,
                color: "#fff",
              }}
            >
              The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                color: "#fff",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              - Ada Lovelace
            </Text>
          </View>
          <Image style={{}} source={require("./assets/refresh.png")} />
        </View>

        {/* Lower Portion edit */}

        <View
          style={{
            marginBottom: 32,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: "Inter-Bold",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              Good Morning
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 100,
                fontFamily: "Inter-bold",
              }}
            >
              10:37
              <Text style={{ fontSize: 30, fontFamily: "Inter-regular" }}>
                AM
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: "Inter-bold",
                letterSpacing: 3,
              }}
            >
              In Dhaka, Bangladesh
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
