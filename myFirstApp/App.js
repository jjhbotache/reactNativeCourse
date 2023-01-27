import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  const [user,setUser] = useState("JuanitoJose")
  const [action,setAction] = useState("aprendiendo")
  const pressHandler = ()=>{
    setUser("JuanitoJose")
    setAction("aprendiendo")
  }
  // our objetcs list
  const [objects,setObjects] = useState(
    [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      },
      {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
      },
      {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
      },
      {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
      },
      {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
      },
      {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
      },
      {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
      },
      {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
      },
      {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
      },
      {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
      },
      {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
      },
      {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
      }
    ]
  )

  const list = [...Array(5).keys()];
  const touchable = (id)=>{
    let items = [...objects]
    const selectedItem = (items.find(object => object.id == id))
    console.log("Completed: "+selectedItem.completed);
    selectedItem.completed=true;  
    console.log(selectedItem.title);
    console.log("Completed: "+selectedItem.completed);
    setObjects(items)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.myStyle}>{user} esta {action}</Text>
      <Text>de a pocos :D</Text>
      <TextInput style={styles.myInput}
    placeholder="Your name"
        onChangeText={e=>setUser(e)}
      />
      <TextInput style={styles.myInput}
        placeholder="Your action"
        onChangeText={e=>setAction(e)}
      />
      <View style={styles.myButton}>
        <Button title='reset'
          onPress={pressHandler}
        />
      </View>

      <View style={styles.container}>
        <ScrollView>
          {objects.map(
            object => {
              return (<View key={object.id} style={styles.listViews}>
                <Text>{object.title}</Text>
              </View>)
            }
          )}
        </ScrollView>
      </View>

      <View>
        <ScrollView>
          {list.map(
            Number=>{
              return (
                <View key={Number}>
                  <Text>Hola soy el numero {Number+1}</Text>
                </View>
              )
            }
          )
          }
          
        </ScrollView>
      </View>

      <FlatList 
        numColumns={3}
        key={(item)=>{item.id.toString()}}
        data={objects}
        renderItem={({item})=>(
            <TouchableOpacity
              // onPress={touchable(item.id )}  why it doesn't work like this? / why does it works without the paremeter item??
              onPress={()=>{
                touchable(item.id)
              }}
            > 
              <Text
                style={{
                  ...styles.flatItems,
                  backgroundColor:item.completed?"green":"pink"
                  }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myStyle:{
    color:"grey",
    fontWeight:'bold',
    fontSize:50,
    textAlign:'center'
    
  },
  myButton:{
    color:"black",
    textAlign:'right',
    marginTop:50
  },
  myInput:{
    borderWidth:1,
    borderColor:"black",
    width:300,
    height:50,
    padding:10,
    margin:10
  },
  listViews:{
    marginTop:5,
    marginBottom:5,
    marginStart:2,
    marginEnd:2
  },
  flatItems:{
    margin:3
  }
})