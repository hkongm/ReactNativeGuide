/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*

列表单行显示的基础上使用数据变量，来显示动态信息
1. 添加了item变量
2. render方法中，模板里面的字符替换为了变量

*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

// singleRowWithData:加入轻互动单行变量item
var item = {
  imgsrc: 'http://10.168.0.151:2000/uploads/img4817d3a20560a63b4310bbb3ca567c371.jpg',
  title:'这里是title',
  desc:'这里是desc'
}

// singleRowWithData:换为变量
var reactdemo = React.createClass({
  render: function() {
    return (
      <View style={styles.row}>
        <Image 
          style={styles.img}
          source={{uri:item.imgsrc}} />
        <View style={styles.intro}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  intro: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
});

AppRegistry.registerComponent('reactdemo', () => reactdemo);
