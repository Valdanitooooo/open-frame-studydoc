function GetString(s){var rootObject = this, parts = s.toLowerCase( ).split('.'), iCount = parts.length;for (var i = 0; i < iCount; i++){var currentPart = parts[i];rootObject = rootObject[currentPart];if (rootObject == null){return '';}}return rootObject.toString( );}
registerNamespace("live.shared.strings");
live.shared.strings.dialog_cancel ="取消";
live.shared.strings.dialog_insert ="插入";
live.shared.strings.dialog_ok ="确定";
registerNamespace("live.shared.globalsettings.rte.blockmenu");
live.shared.globalsettings.rte.blockmenu.labels ="正常,地址,标题 3,标题 2,标题 1";
live.shared.globalsettings.rte.blockmenu.values ="P,ADDRESS,H3,H2,H1";
live.shared.globalsettings.rte.bold ="B,B";
registerNamespace("live.shared.globalsettings.rte.emote");
live.shared.globalsettings.rte.emote.labels ="微笑,大笑,眨眼,惊讶,吐舌,热烈的笑脸,生气,困惑,尴尬,悲伤,哭泣,失望,天使,咬牙切齿,书呆子,生病,聚会,困了,正在思考,保守秘密,悄悄话,讽刺,转动眼睛,红心,破碎的心,MSN Messenger 图标,猫脸,狗脸,蜗牛,黑羊,沉睡的弯月,星星,太阳,彩虹,左侧拥抱,右侧拥抱,红唇,红玫瑰,凋谢的玫瑰,时钟,礼品盒,生日蛋糕,照相机,灯泡,咖啡杯,电话听筒,移动电话,汽车,飞机,计算机,金钱,电影胶片,音符,比萨,足球,电子邮件,男孩,女孩,有棕榈树的小岛,雨伞";
live.shared.globalsettings.rte.emote.map ="emo.gif";
live.shared.globalsettings.rte.emote.url ="emoticons/";
registerNamespace("live.shared.globalsettings.rte.fontmenu");
live.shared.globalsettings.rte.fontmenu.fonts ="Arial,Arial Black,Comic Sans MS,Courier New,Garamond,Lucida Handwriting,Segoe UI,Times New Roman,黑体,宋体";
live.shared.globalsettings.rte.imagebar ="左对齐,默认对齐方式,右对齐,顶端对齐,居中对齐,底端对齐";
live.shared.globalsettings.rte.italic ="I,I";
registerNamespace("live.shared.globalsettings.rte.sizemenu");
live.shared.globalsettings.rte.sizemenu.labels ="特小,小,正常,大,较大,特大,最大";
registerNamespace("live.shared.globalsettings.rte.toolbar");
live.shared.globalsettings.rte.toolbar.map ="images/toolbarmap.png";
live.shared.globalsettings.rte.underline ="U,U";
registerNamespace("live.shared.marketinfo");
live.shared.marketinfo.rteformaticonfont ="Verdana, Simsun";
live.shared.marketinfo.rteformaticonsize ="9pt";
registerNamespace("live.shared.strings.colors");
live.shared.strings.colors.clear ="清除颜色";
live.shared.strings.colors.more ="更多颜色";
registerNamespace("live.shared.strings.linkmenu");
live.shared.strings.linkmenu.delimeter ="：";
live.shared.strings.linkmenu.dialoglabel ="插入链接";
live.shared.strings.linkmenu.newwindowlabel ="在新窗口中打开";
live.shared.strings.linkmenu.nofollow ="防止搜索引擎对此链接进行索引";
live.shared.strings.linkmenu.textinfo ="在此输入链接标题";
live.shared.strings.linkmenu.textlabel ="标题";
live.shared.strings.linkmenu.urlinfo ="在此输入链接地址";
live.shared.strings.linkmenu.urllabel ="链接";
registerNamespace("live.shared.strings.toolbar");
live.shared.strings.toolbar.backgroundcolor ="文本突出显示颜色";
live.shared.strings.toolbar.bold ="加粗";
live.shared.strings.toolbar.bulletedlist ="项目符号列表";
live.shared.strings.toolbar.copy ="复制";
live.shared.strings.toolbar.cut ="剪切";
live.shared.strings.toolbar.decreaseindent ="减少缩进";
live.shared.strings.toolbar.emoticons ="表情图释";
live.shared.strings.toolbar.html ="HTML";
live.shared.strings.toolbar.htmltip ="查看 HTML";
live.shared.strings.toolbar.increaseindent ="增加缩进";
live.shared.strings.toolbar.insertline ="插入横线";
live.shared.strings.toolbar.insertlink ="插入链接";
live.shared.strings.toolbar.insertsearchlink ="插入搜索链接";
live.shared.strings.toolbar.italics ="斜体";
live.shared.strings.toolbar.justifycenter ="居中对齐";
live.shared.strings.toolbar.justifyleft ="左对齐";
live.shared.strings.toolbar.justifyright ="右对齐";
live.shared.strings.toolbar.numberedlist ="编号列表";
live.shared.strings.toolbar.paragraph ="段落大小";
live.shared.strings.toolbar.paste ="粘贴";
live.shared.strings.toolbar.size ="字体大小";
live.shared.strings.toolbar.style ="字体样式";
live.shared.strings.toolbar.textcolor ="文本颜色";
live.shared.strings.toolbar.underline ="下划线";
