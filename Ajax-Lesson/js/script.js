// （API_KEY には、"取得したAPIキー" を記述）
API_KEY = "fd16bcebf3a90f20e3db6ca6a9fd80bf";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    })

  });
});

// $.ajax()は、Ajaxを実装するメソッド
// オプション（パラメータ）も設定できる
// 今回は、urlとdataTypeの2つを設定している
// url:では、APIにリクエストするURLを指定する

// 今回のURLは、http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid="取得したAPI"
// $('#cityname').val()で#citynameの値を受け取り、URLを結合させている（val()は、HTMLのvalue属性を取得するメソッド）

// dataTypeでは、レスポンスとして取得したいデータの型を指定する
// 今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述する