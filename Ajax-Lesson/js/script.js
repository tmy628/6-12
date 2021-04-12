// （API_KEY には、"取得したAPIキー" を記述）
API_KEY = "fd16bcebf3a90f20e3db6ca6a9fd80bf";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');

    });
  });
});

// $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換される
// 最高気温（temp_max）を取得したい場合は、"data.JSONのオブジェクト名.プロパティ名"で取得している

// $(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加される
// これにより、天気のアイコンを表示することができる
// アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".png