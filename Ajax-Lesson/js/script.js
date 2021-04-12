$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができる
// 特定の属性を持つ要素のみ取得したいときは、 $('要素[属性]') と記述する
// 属性値が特定の値に等しい要素だけを取得したいときは、 $('要素[属性 = "値"]') と記述する
// 属性値が特定の値に等しくない要素だけを取得したいときは、 $('要素[属性 != "値"]') と記述する
// .hide();は、特定のHTML要素を非表示にするメソッド
// $('#tab-contents .tab[id != "tab1"]').hide();と記述することで、id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になる

// $('#tab-menu a').on('click', function(event) {
//   イベント発生時に行われる処理
// });
// 「id="tab-menu"のaタグがクリックされたときに、処理を実行してください」の意味

// $("#tab-contents .tab").hide();
// id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示にする

// $("#tab-menu .active").removeClass("active");
// .removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
// ここでは、activeが削除対象のクラスとして指定されている
// CSSの#tab-menu .activeの設定では、タブのクラスがactiveのときは背景色が白色／文字色が黒色になるように設定されている
// タブを切り替えるときは、このCSS設定もいったん削除しなければならないので、.removeClass()にactiveクラスを指定している

// $(this).addClass("active");
// .addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
// ここでは、activeが追加対象のクラスとして指定されている
// $(this)のとき → タブがクリックされたときにactiveクラスが追加される

// $($(this).attr("href")).show();
// .attr()は、HTML要素の属性を取得したり設定できるメソッド
// ここでは、href属性を取得するように指定している
// .show()は要素を表示するメソッドなので、取得したhref属性の中身が表示されることになる
// $(this)のとき → タブがクリックされたときに取得したhref属性の中身が表示される

