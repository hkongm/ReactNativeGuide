/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*

将原有两行的文件，改为了列表单行显示

*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, // singlerow:引入Image
} = React;

// singlerow:画了一行，里面包括居左的图片，居右的标题和描述
var reactdemo = React.createClass({
  render: function() {
    return (
      <View style={styles.row}>
        <Image 
          style={styles.img}
          source={{uri:'http://x.autoimg.cn/www/common/images/logo.png'}} />
        <View style={styles.intro}>
          <Text style={styles.title}>标题</Text>
          <Text style={styles.desc}>说明</Text>
        </View>
      </View>
    );
  }
});

// singlerow:更新了RowView的样式
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
