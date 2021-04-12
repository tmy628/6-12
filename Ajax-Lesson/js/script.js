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
    }).fail(function (data) {
      //通信失敗
    });

  });
});

// .done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッド
// 「通信に成功する」とは、今回はWeb APIが正常に呼び出せたことを意味している
// どちらのメソッドでも(data)を指定しているが、その引数内に取得した結果が入る（dataは任意の変数名）