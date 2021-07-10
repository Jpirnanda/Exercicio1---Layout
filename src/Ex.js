import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const Ex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.RS} />
            <View style={styles.QDS} />
            <View style={styles.RBQ} />
            <View style={styles.RD1} />
            <View style={styles.RD2} />
            <View style={styles.RDB} />

            <View style={styles.container2}>
                <View style={styles.QD} />
                <View style={styles.QD} />
                <View style={styles.QD} />
                <View style={styles.QD} />
                <View style={styles.QD} />
                <View style={styles.QD} />
            </View>

            <View style={styles.container3}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: "100%",
        maxWidth: "100%",
    },
    container2: {
        flex: 7,
        flexWrap: "wrap",
        backgroundColor: "white",
        justifyContent: "center",
    },
    container3: {
        flex: 1,
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundColor: "#5485E1",
        alignItems: "center",
    },
    RS: {
        backgroundColor: "#50E3C2",
        height: 25,
        width: 720,
        marginTop: 30,
        alignSelf: "center",
    },
    QD: {
        backgroundColor: "#F8A82B",
        height: 100,
        width: 100,
        margin: "4.8%"
    },
    QDS: {
        backgroundColor: "#F8A82B",
        height: 100,
        width: 100,
        marginTop: 30,
        marginBottom: 15,
        alignSelf: "center",
    },
    RBQ: {
        backgroundColor: "#F8A82B",
        height: 30,
        width: 150,
        marginBottom: 50,
        alignSelf: "center",
    },
    RD1: {
        backgroundColor: "#A900FD",
        height: 78,
        width: 360,
        marginLeft: -360,
        alignSelf: "center",
    },
    RD2: {
        backgroundColor: "#5485E1",
        height: 78,
        width: 360,
        marginRight: -360,
        marginTop: -78,
        alignSelf: "center",
    },
    RDB: {
        backgroundColor: "#15E6C9",
        height: 13,
        width: 410,
        alignSelf: "center",
    },

});

export default Ex;