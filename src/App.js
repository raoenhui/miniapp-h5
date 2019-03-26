import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

//格式化
//正则选项
class App extends Component {
  state = {
    miniCssVal: '.userLimited-modal-con {\n' +
    '  position: fixed;\n' +
    '  1rpxB: 0;\n' +
    '  left: 0;\n' +
    '  right: 0;\n' +
    '  ottom: 0;\n' +
    '  z-index: 9999;\n' +
    '  text-align: center;\n' +
    '  height: 100%;\n' +
    '  background-color: rgba(0, 0, 0, 0.80);\n' +
    '  animation: mask-change 400ms forwards;\n' +
    '}\n' +
    'page aimage {\n' +
    '  width: 616rpx;\n' +
    '}\n' +
    '1page1 image{\n' +
    '  width: 616rpx;\n' +
    '}\n' +
    ' image {\n' +
    '  width: 616rpx;\n' +
    '}\n' +
    '\n' +
    'text{\n' +
    '  width: 616rpx;\n' +
    '}\n' +
    '\n' +
    '.aa div{\n' +
    '  width: 616rpx;\n' +
    '}',
    h5CssVal: '',
    miniHtmlVal: '<view class="userLimited-modal userLimited-modal-con" catchtouchmove="catchtouchmove">\n' +
    '  <view class="modal-content">\n' +
    '    <view class="tip-list">\n' +
    '      <text class="tip-title1">您是京东老用户啦</text>\n' +
    '      <text class="tip-title2">无法参与新人活动哦~</text>\n' +
    '      <text class="tip-title3">试试自己开团抢新人福利吧</text>\n' +
    '      <button \n' +
    '        data-btntype="popupReopen"\n' +
    '        class="userLimited-btn"\n' +
    '        bindtap="statetap"\n' +
    '      >我也要开团</button>\n' +
    '      <text class="tip-title4">在京东未下单用户为新用户</text>\n' +
    '    </view>\n' +
    '    <view class="modal-close-con">\n' +
    '      <image class="modal-close" bindtap="closeModal" src="https://img30.360buyimg.com/pop/jfs/t25267/84/278257121/1870/a73064e3/5b6aae4dN8852def7.png"></image>\n' +
    '    </view>\n' +
    '  </view>\n' +
    '</view>',
    h5HtmlVal: '',
  };
  componentWillMount = () => {
    this.miniCssChange();
    this.miniHtmlChange();
  }
  miniCssChange = (e) => {
    let miniCssVal =(e && e.target.value) || this.state.miniCssVal;
    //rpx => px
    let regRpx = /([0-9])rpx\b/g;
    let h5CssVal = miniCssVal.replace(regRpx, '$1px');
    //page => body
    regRpx = /^\s*page\b/g;
    h5CssVal = h5CssVal.replace(regRpx, 'body');

    //['image', 'img'], ['view', 'div'], ['text', 'span']
    let aryRpx = [['image', 'img'], ['view', 'div'], ['text', 'span']];
    aryRpx.forEach((ary) => {
      regRpx = new RegExp(`([^A-Za-z0-9_-])${ary[0]}([ {])`,"g");
      h5CssVal = h5CssVal.replace(regRpx, `$1${ary[1]}$2`);
    })

    this.setState({
      h5CssVal
    })
  }

  miniHtmlChange = (e) =>{
    let miniHtmlVal = (e && e.target.value) || this.state.miniHtmlVal;
    let regRpx = /<view\b/g;
    let h5HtmlVal = miniHtmlVal.replace(regRpx, '<div');
     regRpx = /<image\b(.*?)>/g;
     h5HtmlVal = h5HtmlVal.replace(regRpx, '<img$1 />');
     regRpx = /<text\b/g;
     h5HtmlVal = h5HtmlVal.replace(regRpx, '<span');
    let aryRpx = [["</view>", "</div>"], ["</image>",""],["<text>","<span>"],["</text>","</span>"]];
    aryRpx.forEach((ary) => {
      regRpx = new RegExp(ary[0],"g");
      h5HtmlVal = h5HtmlVal.replace(regRpx, ary[1]);
    })
    //{{tuanPrice[0]}} => {tuanPrice[0]}
    regRpx = /{{(.+?)}}/g;
    h5HtmlVal = h5HtmlVal.replace(regRpx, '{$1}');
    this.miniReactChange(h5HtmlVal);
  }

  miniReactChange = (h5HtmlVal) =>{
    //class=" => className="
    let regRpx = /(\s)class="/g;
    h5HtmlVal = h5HtmlVal.replace(regRpx, '$1className="');
    //bindtap="statetap" => onClick={this.statetap}
    regRpx = /(\W)bindtap="(\w+?)"/g;
    h5HtmlVal = h5HtmlVal.replace(regRpx, '$1onClick={this.$2}');
    this.setState({
      h5HtmlVal
    })
  }

  render() {
    const {h5CssVal, miniCssVal ,miniHtmlVal,h5HtmlVal} = this.state;
    return (
      <div className="App">
        <div className="tit">小程序转H5代码</div>
        <div className="con">
          <div className="con-area">
            <div className="con-area-tit">小程序 html</div>
            <textarea name="area1" id="" cols="80" rows="20" defaultValue={miniHtmlVal} onChange={this.miniHtmlChange.bind(this)}
                      ></textarea>
          </div>
          <div className="con-area">
            <div className="con-area-tit">H5 html</div>
            <textarea name="area2" id="" cols="80" rows="20" value={h5HtmlVal}></textarea>
          </div>
        </div>
        <div className="con">
          <div className="con-area">
            <div className="con-area-tit">小程序 css</div>
            <textarea name="area1" id="" cols="80" rows="20" onChange={this.miniCssChange.bind(this)}
                      defaultValue={miniCssVal}></textarea>
          </div>
          <div className="con-area">
            <div className="con-area-tit">H5 css</div>
            <textarea name="area2" id="" cols="80" rows="20" value={h5CssVal}></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
