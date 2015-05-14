/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*

单个obj变量改为，变量数组
添加ListView控件，来实现列表
为ListView控件添加列表的样式；配置dataSource

1. item变量改为dataSource数组
2. 添加ListView控件，来实现ios原生的滚动列表，支持infinite scroll
3. 添加getInitialState生命周期函数，初始化列表数据到组件的State中
4. render方法修改为渲染一个ListView，同时将原有render方法独立出 renderQing 方法
5. 样式定义中给ListView控件定义了基础样式，将屏幕上方状态栏空出来

*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView, // multiRowWithArray:加入ListView原生控件
} = React;

// multiRowWithArray:加入轻互动多行变量
var dataSource = [
{
  imgsrc: 'http://10.168.0.151:2000/uploads/img4817d3a20560a63b4310bbb3ca567c371.jpg',
  title:'这里是title',
  desc:'这里是desc'
},
{
  imgsrc: 'http://10.168.0.151:2000/uploads/img4817d3a20560a63b4310bbb3ca567c371.jpg',
  title:'这里是title',
  desc:'这里是desc'
},
{
  imgsrc: 'http://10.168.0.151:2000/uploads/img4817d3a20560a63b4310bbb3ca567c371.jpg',
  title:'这里是title',
  desc:'这里是desc'
}];

// multiRowWithArray:添加了getInitialState方法；修改了默认render方法
var reactdemo = React.createClass({
  // multiRowWithArray:getInitialState方法初始化了ListView的DataSource对象
  // 数据源是上面定义的dataSource对象数组
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(dataSource)
    };
  },

  // multiRowWithArray:单行渲染方法改了个名字，接受一个叫item的obj，显示
  // 为ListView加入新追加的ListView样式styles.listView
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderQing}
        style={styles.listView}
      />
    );
  },

  // multiRowWithArray:单行渲染方法改了个名字，接受一个叫item的obj，显示
  renderQing: function(item) {
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
    )
  }
});

// multiRowWithArray:为ListView加入新追加的ListView样式styles.listView
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
  listView: {
    paddingTop: 20, // 给系统上面信息条留出空间
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('reactdemo', () => reactdemo);
