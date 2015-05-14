/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*

用户体验优化，数据加载完全前显示loading，加载完全后展示出来

1. 添加renderLoadingView方法，用于数据loading时，控件的外观
2. 给Status中添加loaded布尔型变量用来表示是否加载完成
3. 在render方法中首先判断loaded是否完成，已完成：填充ListView数据并渲染输出；未完成：执行renderLoadingView方法，提示用户loading中状态

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

var REQUEST_URL = 'http://10.168.0.151/caichao/qinglist.js';

// multiRowWithFetchUE:添加loadingreadner方法
// 初始化一个loaded变量
var reactdemo = React.createClass({

  // multiRowWithFetchUE:初始化一个loaded变量为false，标明loading中状态
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  // multiRowWithFetchUE:控件加载完成，再获取数据
  componentDidMount: function() {
    this.fetchData();
  },


  // multiRowWithFetchUE:再获取数据设置完成，loaded变量为true
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  },

  // multiRowWithFetchUE:主render方法，判断loaded变量
  // false调用loading render，true调用listview方法
  render: function() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderQing}
        style={styles.listView}
      />
    );
  },

  // multiRowWithFetchUE: loaded为false时调用的方法
  renderLoadingView: function() {
    return (
      <View style={styles.row}>
        <Text>
          加载轻互动列表中...
        </Text>
      </View>
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
