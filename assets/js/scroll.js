window.onload = function(){

//変数名の衝突を避けるため、即時関数にする
(function(){

  //クリックイベントを設定する
  document.getElementById("example-button-scrollto").onclick = function(){

    //スクロール位置を変更する
    window.scrollTo( 0 , 1500 );

    //[href="#"]を無視する
    return false;

  }

})();