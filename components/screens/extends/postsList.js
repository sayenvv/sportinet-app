import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PostList = () => {
  // Placeholder data for posts
  const posts = [
    {
      id: 1,
      userName: 'John Doe',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61VT0j-pEMjiQJvW2v46ahD81OIQ-RDBB_w&usqp=CAU',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      imageUrl: 'data:image/jpeg;base64,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',
      caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      userName: 'Jane Smith',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61VT0j-pEMjiQJvW2v46ahD81OIQ-RDBB_w&usqp=CAU',
      caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      userName: 'Jane Smith',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61VT0j-pEMjiQJvW2v46ahD81OIQ-RDBB_w&usqp=CAU',
      caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more posts as needed
  ];

  const handleComment = (postId) => {
    // Handle comment action
    console.log(`Comment clicked for post ${postId}`);
  };

  const handleShare = (postId) => {
    // Handle share action
    console.log(`Share clicked for post ${postId}`);
  };

  const handleSave = (postId) => {
    // Handle save action
    console.log(`Save clicked for post ${postId}`);
  };

  return (
    <View style={styles.container}>
      {posts.map(post => (
        <View key={post.id} style={styles.post}>
          {/* Post Header */}
          <View style={styles.postHeader}>
                <View style={styles.outerContainer}>
                    <View style={styles.imageContainer}>
                    {/* <View style={styles.innerRing}></View> */}
                    <Image source={{ uri: post.imageUrl }} style={styles.userImage} />
                    </View>
                </View>
            {/* <Image
              source={{ uri: post.imageUrl }}
              style={styles.userImage}
            /> */}
            <Text style={styles.userName}>{post.userName}</Text>
            <View style={styles.follow_button}>
            <TouchableOpacity onPress={() => handleComment(post.id)} >
                <Text style={styles.follow_button}>Follow</Text>
              </TouchableOpacity>
              </View>
            <View>
            <TouchableOpacity onPress={() => handleComment(post.id)} >
                <Text style={styles.more}>More</Text>
              </TouchableOpacity>
              </View>
            {/* Profile Options */}
          </View>
          {/* Post Image */}
          <Image
            source={{ uri: post.imageUrl }}
            style={styles.postImage}
          />
          <Text style={styles.likes}>100 likes</Text>
          {/* Caption */}
            <View style={styles.profileOptions}>
              <TouchableOpacity onPress={() => handleComment(post.id)}>
                <Text style={styles.optionText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleComment(post.id)}>
                <Text style={styles.optionText}>Comment</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => handleShare(post.id)}>
                <Text style={styles.optionText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSave(post.id)}>
                <Text style={styles.optionText}>Save</Text>
            </TouchableOpacity> */}
            </View>
            
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 50,
    paddingHorizontal: 7,
    borderColor:'#fff',
  },
  likes:{
    marginLeft:10,
    marginBottom:5,
    fontSize:12,
    color:'#fff'
  },
  innerRing: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  post: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor:'#0b160a',
    borderRadius:10
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:15,
    paddingTop:10,
    height:40
  },
  follow_button:{
    marginRight:20,
    borderColor:'#fff',
    color:'#108c00'
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginRight: 'auto',
    marginLeft:10
  },
  profileOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    marginLeft: 10,
    marginBottom:15
  },
//   outerContainer: {
//     width: 39,
//     height: 39,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 3,
//     borderColor: '#108c00',
//     borderRadius: 38,
//   },
  postImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  imageContainer: {
    width: 35,
    height: 35,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#108c00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    color: '#555',
    fontSize: 14,
    marginLeft:10,
    paddingBottom:15
  },
  more:{
    marginRight:10
  }
});

export default PostList;
