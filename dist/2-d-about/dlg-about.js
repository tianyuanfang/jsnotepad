var $dlgAbout=function(){var a=$('<div class="notepad-dlg-mask notepad-dlg-about"><div class="dialogbox notepad-dlgbox"><div class="notepad-dlg-titlebar"><p class="title">关于“记事本”</p><span class="close-btn">✖</span></div><div class="main notepad-dlg-main"><h1 class="slogan">JSNotepad</h1><hr><img class="app-logo" src="images/notepad-icon-32.png" alt="JSNotepad"><div class="info"><p>作者：田圆方</p><p>QQ：1784634905</p><p>仓库地址：<a href="https://github.com/tianyuanfang/jsnotepad/" target="_blank">https://github.com/tianyuanfang/jsnotepad/</a></p></div><input class="btn-ok btn" type="button" value="确定"></div></div></div>'),n=a.find(".btn-ok"),t=a.find(".close-btn"),d=a.find(".notepad-dlg-titlebar");function o(){a.remove()}return{show:function(){$("body").append(a),a.find(".dialogbox").draggable({handle:d}),n.click(o),t.click(o)}}}();