import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/config";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export const CommentScreen = ({ route }) => {
  const { postId } = route.params;
  const { userId, login } = useSelector((state) => state.auth);

  const [comment, setComment] = useState("");

  const [allComment, setAllComment] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);

  const createComments = async () => {
    try {
      const date = new Date().toLocaleString();
      await addDoc(collection(db, "posts", postId, "comments"), {
        comment: comment,
        login: login,
        date: date,
        userId: userId,
      });
      uploadContactsToServer();
      setComment("");
    } catch (error) {
      console.log("err", error.message);
    }
  };

  const uploadContactsToServer = async () => {
    const cityRef = doc(db, "posts", postId);
    await setDoc(cityRef, { comments: allComment.length + 1 }, { merge: true });
  };

  const getAllComments = async () => {
    const date = new Date().toLocaleString();

    await onSnapshot(
      collection(db, "posts", postId, "comments"),
      (querySnapshot) => {
        const commentsArr = [];
        querySnapshot.forEach((doc) => {
          commentsArr.push({
            ...doc.data(),
          });
        });
        setAllComment(commentsArr);
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerComments}>
        <FlatList
          data={allComment}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerComment}>
              <Text>{item.comment}</Text>
              <Text>{item.login}</Text>
            </View>
          )}
        />
      </View>

      {/* ************************** */}
      <TextInput
        style={styles.input}
        // onChangeText={(value) =>
        //   setState((prevState) => ({ ...prevState, login: value }))
        // }
        value={comment}
        placeholder="comment"
        // onFocus={() => setisShowKeyboard(true)}
        onChangeText={setComment}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnForm}
        onPress={createComments}
      >
        <Text style={styles.btnTitle}>createPost</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 50,
    // alignItems: "center",
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: " #E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    minWidth: 200,
  },
  inputLast: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: " #E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginBottom: 43,
  },
  btnForm: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#FFFFFF",
    backgroundColor: "#FF6C00",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  btnTitle: {
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
  containerComments: {
    flex: 1,
  },
  containerComment: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.03)",
    marginBottom: 24,
  },
});
