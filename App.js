import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const RowView = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            color: "#303030",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: 20,
            color: "#303030",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-regular": Inter_400Regular,
    "Inter-bold": Inter_700Bold,
  });
  const [showMore, setShowMore] = useState(false);
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
                fontFamily: "Inter-bold",
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
          {/* Good morning */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: "Inter-bold",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              Good Morning
            </Text>
          </View>
          {/* Time */}
          <View style={{ marginTop: 8 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 95,
                fontFamily: "Inter-bold",
              }}
            >
              10:37
              <Text style={{ fontSize: 30, fontFamily: "Inter-regular" }}>
                AM
              </Text>
            </Text>
          </View>
          {/* Location */}
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "Inter-bold",
                fontSize: 15,
                color: "white",
                letterSpacing: 3,
              }}
            >
              In Dhaka, Bangladesh
            </Text>
          </View>
          {/* Button */}
          <Pressable
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              flexDirection: "row",
              height: 40,
              width: 115,
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-bold",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              {showMore ? "LESS" : "MORE"}
            </Text>
            <Image
              source={
                showMore
                  ? require("./assets/arrow-up.png")
                  : require("./assets/arrow-down.png")
              }
            />
          </Pressable>
        </View>
      </View>

      {/* EXPANDED VIEW */}
      {showMore && (
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView label={"Current Timezone"} value="Europe/London" />
          <RowView label={"Day of the year"} value="295" />
          <RowView label={"Day of the week"} value="5" />
          <RowView label={"Week number"} value="42" />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
