'use strict';!function(require,directRequire){const a=require('react'),b=require('./a8c87029da0fa06e986298d447ab0fe2.js'),c=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),d=require('./e298e91f85bae5b5a2b792e6e73a55e3.js'),e=require('./875171e7b864aa58d026d4fa0999fbd1.js'),f=require('./d3b08a7827215cf0e9a08cbd0f38be38.js'),{connect:g}=require('react-redux'),h=require('./3c55dff3626a3ee184d599f076158345.js'),i=require('classnames'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js');class k extends a.Component{constructor(a){super(a),this.state={syncCheck:!1,cloudfunctionRoot:a.cloudfunctionRoot,show:a.show,selectRootShow:!1,selectRootPopUpStyle:{},evnListShow:!1,envSelectIndex:-1}}componentDidMount(){this.props.getEnvList()}componentWillReceiveProps(a){let b={};a.show!=this.props.show&&(b.show=a.show),a.cloudfunctionRoot!=this.props.cloudfunctionRoot&&(b.cloudfunctionRoot=a.cloudfunctionRoot),0<Object.keys(b).length&&this.setState(b)}onAnimationOut(){this.state.show||this.props.setCloud({cloudfunctionRoot:{show:!1}})}onSelectClick(a){a.stopPropagation();let b=a.currentTarget.getBoundingClientRect();this.showSelectRootPopUp(b)}showSelectRootPopUp(a){this.setState({selectRootShow:!0,selectRootPopUpStyle:{left:a.left,top:a.top+a.height,width:a.width}})}onSelectRootPopUpHide(a){this.setState({selectRootShow:!1,cloudfunctionRoot:a})}onCancel(){this.setState({show:!1})}onConfirm(){if(!this.state.cloudfunctionRoot){let a=this.refs.rootSelectInput.getBoundingClientRect();return void this.showSelectRootPopUp(a)}this.props.selectEnv(this.state.envSelectIndex),this.props.setTcbFnRoot(`./${this.state.cloudfunctionRoot}`);const a=this.props.envList[this.state.envSelectIndex];this.state.syncCheck&&a.namespace&&this.props.tcbActions.downloadAllTcbFunc(),this.setState({show:!1})}onSyncCheckClick(){this.setState({syncCheck:!this.state.syncCheck})}onSelectEnvClick(a){a.stopPropagation();let b=a.currentTarget.getBoundingClientRect();this.setState({evnListShow:!0,envListLeft:b.left,envListTop:b.top})}onSelectEnv(a){this.setState({evnListShow:!1,envSelectIndex:a})}onContainerClick(){this.setState({evnListShow:!1,selectRootShow:!1})}render(){const b=this.props,c=this.props.envList.map((a)=>{return a.alias}),d=this.props.envList[this.state.envSelectIndex]||this.props.currentEnv;return a.createElement(e,{show:this.state.show,style:{width:600,marginLeft:-300},inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this)},this.state.selectRootShow?a.createElement(f,{style:this.state.selectRootPopUpStyle,hide:this.onSelectRootPopUpHide.bind(this)}):null,a.createElement(h,{id:'toolbar-cleancache-popup',show:this.state.evnListShow,left:this.state.envListLeft,top:this.state.envListTop,list:c,onSelectClick:this.onSelectEnv.bind(this)}),a.createElement('div',{onClick:this.onContainerClick.bind(this)},a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label',style:{width:'7em',textAlign:'right'}},'\u4E91\u51FD\u6570\u6839\u76EE\u5F55'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-default',onClick:this.onSelectClick.bind(this),ref:'rootSelectInput'},a.createElement('input',{className:'ui-selector-input',placeholder:'\u8BF7\u9009\u62E9',value:this.state.cloudfunctionRoot,readOnly:!0}),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:'ui-icon-arrow-down-o'}))),a.createElement('p',{className:'ui-form-tips'},'\u6307\u5B9A\u6839\u76EE\u5F55\u4E0B\u7684\u76EE\u5F55\u4F5C\u4E3A\u4E91\u51FD\u6570\u76EE\u5F55, ',a.createElement('a',{href:'javascript:;'},'\u4E86\u89E3\u66F4\u591A')))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:{display:0<this.props.envList.length&&!this.props.isSetting?'':'none'}},a.createElement('label',{className:'ui-form-label',style:{width:'7em',textAlign:'right'}}),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-flex',onClick:this.onSyncCheckClick.bind(this)},a.createElement('label',{className:'ui-checkbox'},a.createElement('i',{className:i({"ui-icon-checkbox":!this.state.syncCheck,"ui-icon-checkbox-o":this.state.syncCheck})}),a.createElement('span',{className:'ui-checkbox-text'},' \u4ECE\u7EBF\u4E0A\u73AF\u5883\u4E0B\u8F7D\u5E76\u8986\u76D6\u4E91\u51FD\u6570\u81F3\u672C\u5730\u73AF\u5883 '))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:{display:this.state.syncCheck||this.props.isSetting?'':'none'}},a.createElement('label',{className:'ui-form-label',style:{width:'7em',textAlign:'right'}},'\u9009\u62E9\u73AF\u5883'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-default',onClick:this.onSelectEnvClick.bind(this)},a.createElement('input',{className:'ui-selector-input',placeholder:'\u8BF7\u9009\u62E9',value:d&&d.alias,readOnly:!0}),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:'ui-icon-arrow-down-o'}))),a.createElement('p',{className:'ui-form-tips'},'\u5C06\u4ECE\u8BE5\u7EBF\u4E0A\u73AF\u5883\u4E0B\u8F7D\u5E76\u8986\u76D6\u4E91\u51FD\u6570\u81F3\u672C\u5730\u73AF\u5883'))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onCancel.bind(this)},'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},'\u786E\u5B9A')))))}}module.exports=g((a)=>{const b=a.project.current||{},c=b.tcb||{};let d=b.cloudfunctionRoot||'';return{cloudfunctionRoot:path.posix.normalize(d),show:a.window.cloud&&a.window.cloud.cloudfunctionRoot&&a.window.cloud.cloudfunctionRoot.show,currentEnv:c.currentEnv,envList:c.envList||[]}},(a)=>{return{setCloud:(c)=>{a(b.setCloud(c))},setTcbFnRoot:(b)=>{a(c.setTcbFnRoot(b))},getEnvList:(b)=>{d.getEnvList(b)(a)},selectEnv:(b)=>{a(d.selectEnv(b))},tcbActions:j.bindActionCreators(d,a)}})(k)}(require('lazyload'),require);