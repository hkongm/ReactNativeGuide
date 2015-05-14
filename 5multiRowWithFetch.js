/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*

1. 数据数组删掉，加入http的数据接口url（REQUEST_URL）
2. 创建fetchData方法，进行http请求拉数据的操作
3. 添加了componentDidMount生命周期函数，在控件渲染完毕后，去调用fetchData方法

*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

// multiRowWithFetch:这里是线上数据接口模拟
var REQUEST_URL = 'http://10.168.0.151/caichao/qinglist.js';

// multiRowWithFetch:添加了fetchData方法；
var reactdemo = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  },

  // multiRowWithFetchUE:控件加载完成，再获取数据
  componentDidMount: function() {
    this.fetchData();
  },

  // multiRowWithFetch:添加了fetchData方法；
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
      .done();
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderQing}
        style={styles.listView}
      />
    );
  },

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
