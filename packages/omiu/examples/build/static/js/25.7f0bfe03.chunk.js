webpackJsonp([25],{74:function(n,r){n.exports="## Table  \r\n\r\nData is presented and processed in the form of tables.\r\n\r\n## Usage\r\n\r\n```js\r\ndefine('my-app', class extends WeElement {\r\n  dataSource = [{\r\n    id: 1,\r\n    name: 'xwang',\r\n    age: 18,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 2,\r\n    name: 'dntzhang',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 3,\r\n    name: 'lucy',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 4,\r\n    name: 'john',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 5,\r\n    name: 'tim',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }]\r\n\r\n  columns = [{\r\n    title: 'Name',\r\n    key: 'name',\r\n  }, {\r\n    title: 'Age',\r\n    key: 'age',\r\n  }, {\r\n    title: 'Address',\r\n    key: 'address',\r\n  }, {\r\n    title: '\u64cd\u4f5c',\r\n    render: (item) => (\r\n      <span>\r\n        <a href=\"javascript:;\" onClick={e => { this.removeItem(item) }}>Delete</a>\r\n      </span>\r\n    )\r\n  }]\r\n\r\n  removeItem = (item) => {\r\n    this.table.removeItem(item)\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <o-table \r\n        ref={e => { this.table = e }} \r\n        dataSource={this.dataSource} \r\n        columns={this.columns}>\r\n      </o-table>\r\n    )\r\n  }\r\n})\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| dataSource  | json array |   --    |           |\r\n| columns  | json array |   --    |           |"}});
//# sourceMappingURL=25.7f0bfe03.chunk.js.map