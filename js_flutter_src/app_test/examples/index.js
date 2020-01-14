//VSCode Run support=====================================================================================
//为便于在JS IDE如VSCode，webStorm里脱离APP环境执行JS，以快速验证JS代码正确性
//用g_isNativeEnvironment检查是否在App环境，
//如果不在App环境，Native接口重定向到JS同名函数打印调用
//jsFlutterRequire 转调Node运行环境中的require
//如果不能运行，核对下js_ide_node_run_support.js文件中jsFlutterLibDir 相对路径
//新建文件拷贝这个头
let g_isNativeEnvironment = typeof JSAPI_require != "undefined" ? true : false;
function jsFlutterRequire(file) {
  if (!g_isNativeEnvironment) {
    console.log("[JS]-MXJSFlutter:: jsFlutterRequire", ...arguments);
    let { calcJSFrameworkFilePath } = require("./js_ide_node_run_support.js");
    return require(calcJSFrameworkFilePath(file));
  }
  return mxRequire(file);
}
//VSCode Run support end ================================================================================

//zhihu.js 正式开始，😝


let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
  Theme,
  Padding,
  Scrollbar,
} = jsFlutterRequire("js_flutter_ui.js");

let { PageExampleButton }  = jsFlutterRequire("examples/example_button.js");
let { PageExampleAppBar } = jsFlutterRequire("examples/example_app_bar.js");
let { PageExampleSnakeBar } = jsFlutterRequire("examples/example_snake_bar.js");
let { PageExampleColumn } = jsFlutterRequire("examples/example_column.js");
let { PageExampleRow } = jsFlutterRequire("examples/example_row.js");
let { PageExampleContainer } = jsFlutterRequire("examples/example_container.js");
let { PageExampleFlutterLogo } = jsFlutterRequire("examples/example_flutter_logo.js");
let { PageExampleColor } = jsFlutterRequire("examples/example_flutter_color.js");
let { PageExampleIcon } = jsFlutterRequire("examples/example_flutter_icon.js");
let { PageExampleImage } = jsFlutterRequire("examples/example_image.js");
let { PageExamplePlaceholder } = jsFlutterRequire("examples/example_placeholder.js");
let { PageExampleScaffold } = jsFlutterRequire("examples/example_scaffold.js");
let { PageExampleText } = jsFlutterRequire("examples/example_text.js");
const { SectionTitle } = jsFlutterRequire("./component/section_title.js");



class ExamplesPage extends MXJSWidget {
  constructor(){
    super("ExamplesPage");
  }

  genSectionTitle(context,title){
    return new Container({
      padding: EdgeInsets.all(10.0),
      color: Theme.of(context).primaryColor,
      child: new Row({
        children: [
          new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xFFFFFFFF) }),
          new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
          new Text(title, {
            textAlign: TextAlign.start,
            style:new TextStyle({
              fontSize: 16,
              fontWeight: Theme.of(context).textTheme.title.fontWeight,
              color:Colors.white()
            })
          })
        ]
      })
    });
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Flutter Examples',),
      }),
      body: new Scrollbar({
        child:new ListView({
          children:[
            this.genSectionTitle(context,"基础组件"),
            new ListTile({
              title:new Text("AppBar"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleAppBar());
              }),
            }),
            new ListTile({
              title:new Text("Text"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleText());
              }),
            }),
            new ListTile({
              title:new Text("Button"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleButton());
              }),
            }),
            new ListTile({
              title:new Text("Image"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleImage());
              }),
            }),
            new ListTile({
              title:new Text("Placeholder"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExamplePlaceholder());
              }),
            }),
            new ListTile({
              title:new Text("Icon"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleIcon());
              }),
            }),
            new ListTile({
              title:new Text("Color"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleColor());
              }),
            }),
            this.genSectionTitle(context,"布局组件"),
            new ListTile({
              title:new Text("Column"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleColumn());
              }),
            }),
            new ListTile({
              title:new Text("Row"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleRow());
              }),
            }),
            new ListTile({
              title:new Text("Container"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleContainer());
              }),
            }),

            this.genSectionTitle(context,"其他组件"),
            new ListTile({
              title:new Text("FlutterLogo"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleFlutterLogo());
              }),
            }),
            new ListTile({
              title:new Text("Scaffold"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleScaffold());
              }),
            }),
            new ListTile({
              title:new Text("SnackBar"),
              onTap: this.createCallbackID(function () {
                this.navigatorPush(new PageExampleSnakeBar());
              }),
            }),
          ],
        })
      })
    });
    return widget;
  }
}

module.exports = {
  ExamplesPage,
};
