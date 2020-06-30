"use strict";

// Page init event
document.addEventListener('init', function (event) {
  var page = event.target;

  //topページ
  if (page.matches('#top-page')) {

    if (!window.localStorage) {
      alert("お使いのブラウザはlocalstorageに対応してません。");
    }

    // topから登録
    page.querySelector('#registerbutton').onclick = function () {
      document.querySelector('#navigator').pushPage('page2.html');
    };
    // topから結果
    page.querySelector('#kindbutton').onclick = function () {
      document.querySelector('#navigator').pushPage('page4.html');
    };
    // topから一覧
    page.querySelector('#listbutton').onclick = function () {
      document.querySelector('#navigator').pushPage('page3.html');
    };
  }

  // 登録ページ
  if (page.matches('#register-page')) {

    $.getJSON("json/data.json", function (json) {               // JSON取得

      $("#genre").change(function () {                         // ジャンルを選択した時
        var genre = $(this).val();                            // genreに選択ジャンルの値代入

        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if (genre == "日本酒") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<ons-button icon="fa-lightbulb" id="dealog" data-id="1"></ons-button>' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<ons-button icon="fa-lightbulb" id="dealog" data-id="2"></ons-button>' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>酒米: </p>' +
            '<ons-select id="select_酒米">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<ons-button icon="fa-lightbulb" id="dealog" data-id="3"></ons-button>' +
            '<p>味: </p>' +
            '<ons-select id="select_味">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.日本酒.種類, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.酒米, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_酒米 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.味, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_味 > .select-input').append(option);
          });

          // ダイヤログ
          $(document).on("click","#dealog", function() {
            var click =  $(this).data('id');
            
            if (click == 1) {
              $('#changeTrivia').html(     // html変更
              '<h1>日本酒の種類</h1>' +
              '<img src="images/sake-table.png">' +
              '<p>日本酒は主に<br>・醸造アルコールが入っているか<br>・お米を何％磨いているか<br>のポイントで分けられています。</p>' +
              '<ons-button id="link">詳しくはこちら(外部サイト)</ons-button>'
              );
              $('#link').click(function(){
                window.open('https://www.kuramotokai.com/howtojizake/tsukuri', '_blank');
              });  
            } else if (click == 2) {
              $('#changeTrivia').html(     // html変更
                '<h1>産地ごとの特色</h1>' +
                '<img src="images/sake-map.png">' +
                '<p>日本酒は、<br>その土地の米と水を<br>原料としているため、<br>地域により味の特徴があります。<br>寒い地域は辛口、<br>暖かい地域は甘口<br>の日本酒が多くなります。</p>' +
                '<ons-button id="link">詳しくはこちら(外部サイト)</ons-button>'
              );
              $('#link').click(function(){
                window.open('https://www.kuramotokai.com/howtojizake/area', '_blank');
              });
            } else if (click == 3) {
              $('#changeTrivia').html(     // html変更
                '<h1>日本酒の味</h1>' +
                '<img src="images/sake_taste.png">' +
                '<p>“甘口・辛口”と言う表現は、<br>日本酒度と酸度の数値によって分けられています。</p>' +
                '<ons-button id="link">詳しくはこちら(外部サイト)</ons-button>'
              );
              $('#link').click(function(){
                window.open('https://www.kuramotokai.com/omosiro/zemi/id/1/', '_blank');
              });
            }

            showTemplateDialog();
          });
          $('#hideDialog').click(function(){
            hideDialog('my-dialog');
          });
        }

        // 赤ワインの場合
        else if (genre == "赤ワイン") {
          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ぶどう: </p>' +
            '<ons-select id="select_ぶどう">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.赤ワイン.種類, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.赤ワイン.ぶどう, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_ぶどう > .select-input').append(option);
          });

        }

        // 白ワインの場合
        else if (genre == "白ワイン") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>味わい: </p>' +
            '<ons-select id="select_味">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ぶどう: </p>' +
            '<ons-select id="select_ぶどう">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.白ワイン.味, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_味 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.白ワイン.ぶどう, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_ぶどう > .select-input').append(option);
          });

        }

        // 焼酎の場合
        else if (genre == "焼酎") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>原料: </p>' +
            '<ons-select id="select_原料">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.焼酎.種類, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.焼酎.原料, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_原料 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_産地 > .select-input').append(option);
          });

        }

        // 果実酒の場合
        else if (genre == "果実酒") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>果実: </p>' +
            '<ons-select id="select_果実">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ベース: </p>' +
            '<ons-select id="select_ベース">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.果実酒.果実, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_果実 > .select-input').append(option);
          });

          $.each(json.genre.果実酒.ベース, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_ベース > .select-input').append(option);
          });

        }

        // カクテルの場合
        else if (genre == "カクテル") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ベース: </p>' +
            '<ons-select id="select_ベース">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>割り材: </p>' +
            '<ons-select id="select_割り材">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.カクテル.種類, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.カクテル.ベース, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_ベース > .select-input').append(option);
          });

          $.each(json.genre.カクテル.割り材, function (index, value) {
            var option = '<option value="' + value + '">' + value + '</option>'
            $('#select_割り材 > .select-input').append(option);
          });
        }

      });

      var itemList = [];
 
      var jsonData = localStorage.getItem('itemList'); 
      var jsData = JSON.parse(jsonData);
      if (jsData) {
        itemList = jsData;
      }
      // 登録
      $('#sendbutton').click(function () {
        

        var send = {};
        send.name = $('#name').val();
        send.ジャンル = $('#genre option:selected').val();

        if ($('#genre option:selected').val() == "日本酒") {
          send.種類 = $('#select_種類 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
          send.酒米 = $('#select_酒米 option:selected').val();
          send.味 = $('#select_味 option:selected').val();
        }
        else if ($('#genre option:selected').val() == "赤ワイン") {
          send.種類 = $('#select_種類 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
          send.ぶどう = $('#select_ぶどう option:selected').val();
        }
        else if ($('#genre option:selected').val() == "白ワイン") {
          send.味 = $('#select_味 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
          send.ぶどう = $('#select_ぶどう option:selected').val();
        }
        else if ($('#genre option:selected').val() == "焼酎") {
          send.種類 = $('#select_種類 option:selected').val();
          send.原料 = $('#select_原料 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
        }
        else if ($('#genre option:selected').val() == "果実酒") {
          send.果実 = $('#select_果実 option:selected').val();
          send.ベース = $('#select_ベース option:selected').val();
        }
        else if ($('#genre option:selected').val() == "カクテル") {
          send.種類 = $('#select_種類 option:selected').val();
          send.ベース = $('#select_ベース option:selected').val();
          send.割り材 = $('#select_割り材 option:selected').val();
        }
        send.memo = $("#memo").val();
        send.ster = $('input:radio[name="star"]:checked').val();


        itemList.push(send);
        itemList = JSON.stringify(itemList);
        localStorage.setItem('itemList', itemList);

      });

      // ダイヤログ
      var showTemplateDialog = function() {
        var dialog = document.getElementById('my-dialog');    
        if (dialog) {
          dialog.show();
        }
      };    
      var hideDialog = function(id) {
        document
          .getElementById(id)
          .hide();
      };
      $('#dealog').click(function() {
        showTemplateDialog();
      });
      $('#hideDialog').click(function(){
        hideDialog('my-dialog');
      });
      


    });

    // 登録から一覧
    page.querySelector('#sendbutton').onclick = function () {
      document.querySelector('#navigator').replacePage('page3.html');
    };

  }

  // 一覧ページ
  if (page.matches('#list-page')) {
    var jsonData = localStorage.getItem('itemList');
    var jsData = JSON.parse(jsonData);
    if (jsData) {
      for (let index = 0; index < jsData.length; index++) {
  
        var items = jsData[index];
  
        var list = '<ons-list-item id="sake' + index + '" odifier="longdivider" tappable>' + '<div class="center">' + '<span class="list-item__title">' + items.name + '</span>' + '<span class="list-item__subtitle">' + items.ジャンル + '</span>' + '</div>' + '</ons-list-item>'
  
        $('.lists').append(list);
  
        // 一覧から詳細
        page.querySelector('#sake' + index).onclick = function () {
          document.querySelector('#navigator').pushPage('page5.html', { data: { number: index } });
        };
  
      }
      
    }

    // ローカルストレージ全消去
    page.querySelector('#alldeletebutton').onclick = function () {
      // 確認ダイヤログ表示
      ons.notification.confirm({
        title: '登録データの全消去',
        message: 'すべての登録データを消去してもよろしいですか？',
        buttonLabels: ['No', 'Yes'],
        animation: 'default',
        cancelable: true,
        callback: function(index) {
          if(index == 1) {                      // yesのとき全消去
            localStorage.clear();
            document.querySelector('#navigator').replacePage('page3.html');
          }
        }
    })
    };

    // 一覧から登録
    page.querySelector('#registerbutton2').onclick = function () {
      document.querySelector('#navigator').pushPage('page2.html');
    };

    // 一覧からtop
    page.querySelector('#topbutton').onclick = function () {
      document.querySelector('#navigator').resetToPage('top.html');
    };

  }

  // 詳細ページ
  if (page.matches('#detail-page')) {
    var number = page.data.number;

    var jsonData = localStorage.getItem('itemList');
    var jsData = JSON.parse(jsonData);
    var items = jsData[number];

    $('#sakeName').html(items.name);

    var key = Object.keys(items);

    for (let index = 0; index < key.length; index++) {        // 登録データ表示

      if (key[index] == "memo") {

        // 改行コードを<br>に変換
          var nl2br = function (str) {
            return str.replace(/\n/g, '<br>');
          }
          var itemMemo = nl2br(items.memo);

        var memo = '<div class="memos">' + '<p>メモ: </p>' + '<p class="note">' +
        itemMemo + '</p>' + '</div>'; 

        $('#detail').append(memo);

      } else if (key[index] == "ster") {

        var ster = '<div class="wrap">' + '<span class="rate rate' + items.ster + '"></span>' + '</div>';

        $('#detail').append(ster);

      } else if (key[index] == "name") {
        continue;
      } else {
        var item = '<div class="item">' + '<p>' + key[index] + ':  </p>' + '<p>' + items[key[index]] + '</p>' + '</div>'

        $('#detail').append(item);
      }

    }

    $('#detail').append('<ons-button icon="md-delete" id="deletebutton"></ons-button>');

    // 登録データ消去
    page.querySelector('#deletebutton').onclick = function () {
      // 確認ダイヤログ表示
      ons.notification.confirm({
        title: items.name + 'の消去',
        message: items.name + 'を消去してもよろしいですか？',
        buttonLabels: ['No', 'Yes'],
        animation: 'default',
        cancelable: true,
        callback: function(index) {
          if(index == 1) {                      // yesのとき全消去
            jsData.splice(number, 1);                    // itemListからnumber番目のデータ削除
            jsData = JSON.stringify(jsData);             // jsDataをjson形式に
            localStorage.setItem('itemList', jsData);    // jsDataをlocalstrageに

            document.querySelector('#navigator').replacePage('page3.html');
          }
        }
    })
    };

    // 詳細から編集
    page.querySelector('#editbutton').onclick = function () {
      document.querySelector('#navigator').replacePage('page6.html', { data: { number: number } });
    };
  }

  // 編集ページ
  if (page.matches('#edit-page')) {
    $.getJSON("json/data.json", function (json) {               // JSON取得
      var number = page.data.number;

      var jsonData = localStorage.getItem('itemList');
      var jsData = JSON.parse(jsonData);
      var items = jsData[number];

      // ジャンル
      var genreKey = Object.keys(json.genre);

      genreKey.forEach(function (data) {                       //ジャンル選択追加
        if (data == items.ジャンル) {                         // ジャンルが登録と同じの時
          var genres = '<option value="' + data + '" selected>' + data + '</option>';
        } else {
          var genres = '<option value="' + data + '">' + data + '</option>';
        }
        $('.select-input').append(genres);
      });


      var target = $('#genre option:selected').val();         // 選択されている値

      if (target == items.ジャンル) {                        // 選択ジャンルの時        
        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if (target == "日本酒") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>酒米: </p>' +
            '<ons-select id="select_酒米">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>味: </p>' +
            '<ons-select id="select_味">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.日本酒.種類, function (index, value) {

            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }

            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.酒米, function (index, value) {
            if (value == items.酒米) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_酒米 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.味, function (index, value) {
            if (value == items.味) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_味 > .select-input').append(option);
          });
        }

        // 赤ワインの場合
        else if (target == "赤ワイン") {
          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ぶどう: </p>' +
            '<ons-select id="select_ぶどう">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.赤ワイン.種類, function (index, value) {
            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.赤ワイン.ぶどう, function (index, value) {
            if (value == items.ぶどう) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ぶどう > .select-input').append(option);
          });

        }

        // 白ワインの場合
        else if (target == "白ワイン") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>味わい: </p>' +
            '<ons-select id="select_味">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ぶどう: </p>' +
            '<ons-select id="select_ぶどう">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.白ワイン.味, function (index, value) {
            if (value == items.味) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_味 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.白ワイン.ぶどう, function (index, value) {
            if (value == items.ぶどう) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ぶどう > .select-input').append(option);
          });

        }

        // 焼酎の場合
        else if (target == "焼酎") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>原料: </p>' +
            '<ons-select id="select_原料">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.焼酎.種類, function (index, value) {
            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.焼酎.原料, function (index, value) {
            if (value == items.原料) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_原料 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

        }

        // 果実酒の場合
        else if (target == "果実酒") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>果実: </p>' +
            '<ons-select id="select_果実">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ベース: </p>' +
            '<ons-select id="select_ベース">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.果実酒.果実, function (index, value) {
            if (value == items.果実) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_果実 > .select-input').append(option);
          });

          $.each(json.genre.果実酒.ベース, function (index, value) {
            if (value == items.ベース) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ベース > .select-input').append(option);
          });

        }

        // カクテルの場合
        else if (target == "カクテル") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ベース: </p>' +
            '<ons-select id="select_ベース">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>割り材: </p>' +
            '<ons-select id="select_割り材">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.カクテル.種類, function (index, value) {
            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.カクテル.ベース, function (index, value) {
            if (value == items.ベース) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ベース > .select-input').append(option);
          });

          $.each(json.genre.カクテル.割り材, function (index, value) {
            if (value == items.割り材) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_割り材 > .select-input').append(option);
          });
        }

        // 名前,メモの初期値設定
        $('.name').html(     // html変更
          '<ons-input type="text" placeholder="お酒の名前" modifier="underbar" id="name" value=' + items.name + '></ons-input>'
        );
        $('.memo').html(     // html変更
          '<textarea name="textarea" id="memo" cols="40" rows="5" placeholder="メモ">' + items.memo + '</textarea>'
        );

        // 星設定
        for (let index = 1; index < 6; index++) {

          var sterValue = 6 - index;

          if (sterValue == items.ster) {
            var ster = '<input id="star' + index + '" type="radio" name="star" value="' + sterValue + '" checked/>' + '<label for="star' + index + '"><span class="text">' + json.val[index - 1] + '</span>★</label>';

          } else {
            var ster = '<input id="star' + index + '" type="radio" name="star" value="' + sterValue + '" />' + '<label for="star' + index + '"><span class="text">' + json.val[index - 1] + '</span>★</label>';
          }
          $('.evaluation').append(ster);

        }

      }


      $("#genre").change(function () {                         // ジャンルを選択した時
        var genre = $(this).val();                            // genreに選択ジャンルの値代入

        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if (genre == "日本酒") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>酒米: </p>' +
            '<ons-select id="select_酒米">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>味: </p>' +
            '<ons-select id="select_味">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.日本酒.種類, function (index, value) {

            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }

            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.酒米, function (index, value) {
            if (value == items.酒米) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_酒米 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.味, function (index, value) {
            if (value == items.味) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_味 > .select-input').append(option);
          });
        }

        // 赤ワインの場合
        else if (genre == "赤ワイン") {
          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ぶどう: </p>' +
            '<ons-select id="select_ぶどう">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.赤ワイン.種類, function (index, value) {
            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.赤ワイン.ぶどう, function (index, value) {
            if (value == items.ぶどう) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ぶどう > .select-input').append(option);
          });

        }

        // 白ワインの場合
        else if (genre == "白ワイン") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>味わい: </p>' +
            '<ons-select id="select_味">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ぶどう: </p>' +
            '<ons-select id="select_ぶどう">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.白ワイン.味, function (index, value) {
            if (value == items.味) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_味 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.白ワイン.ぶどう, function (index, value) {
            if (value == items.ぶどう) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ぶどう > .select-input').append(option);
          });

        }

        // 焼酎の場合
        else if (genre == "焼酎") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>原料: </p>' +
            '<ons-select id="select_原料">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>産地: </p>' +
            '<ons-select id="select_産地">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.焼酎.種類, function (index, value) {
            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.焼酎.原料, function (index, value) {
            if (value == items.原料) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_原料 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == items.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

        }

        // 果実酒の場合
        else if (genre == "果実酒") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>果実: </p>' +
            '<ons-select id="select_果実">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ベース: </p>' +
            '<ons-select id="select_ベース">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.果実酒.果実, function (index, value) {
            if (value == items.果実) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_果実 > .select-input').append(option);
          });

          $.each(json.genre.果実酒.ベース, function (index, value) {
            if (value == items.ベース) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ベース > .select-input').append(option);
          });

        }

        // カクテルの場合
        else if (genre == "カクテル") {

          $('#change').html(     // html変更

            '<div class="topic">' +
            '<p>種類: </p>' +
            '<ons-select id="select_種類">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>ベース: </p>' +
            '<ons-select id="select_ベース">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>' +

            '<div class="topic">' +
            '<p>割り材: </p>' +
            '<ons-select id="select_割り材">' +
            '<option value="" hidden>選択してください</option>' +
            '</ons-select>' +
            '</div>'

          );

          // selectの選択肢変化
          $.each(json.genre.カクテル.種類, function (index, value) {
            if (value == items.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.カクテル.ベース, function (index, value) {
            if (value == items.ベース) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ベース > .select-input').append(option);
          });

          $.each(json.genre.カクテル.割り材, function (index, value) {
            if (value == items.割り材) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_割り材 > .select-input').append(option);
          });
        }

      });

      // 登録
      $('#sendbutton').click(function () {

        var send = {};
        send.name = $('#name').val();
        send.ジャンル = $('#genre option:selected').val();

        if ($('#genre option:selected').val() == "日本酒") {
          send.種類 = $('#select_種類 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
          send.酒米 = $('#select_酒米 option:selected').val();
          send.味 = $('#select_味 option:selected').val();
        }
        else if ($('#genre option:selected').val() == "赤ワイン") {
          send.種類 = $('#select_種類 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
          send.ぶどう = $('#select_ぶどう option:selected').val();
        }
        else if ($('#genre option:selected').val() == "白ワイン") {
          send.味 = $('#select_味 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
          send.ぶどう = $('#select_ぶどう option:selected').val();
        }
        else if ($('#genre option:selected').val() == "焼酎") {
          send.種類 = $('#select_種類 option:selected').val();
          send.原料 = $('#select_原料 option:selected').val();
          send.産地 = $('#select_産地 option:selected').val();
        }
        else if ($('#genre option:selected').val() == "果実酒") {
          send.果実 = $('#select_果実 option:selected').val();
          send.ベース = $('#select_ベース option:selected').val();
        }
        else if ($('#genre option:selected').val() == "カクテル") {
          send.種類 = $('#select_種類 option:selected').val();
          send.ベース = $('#select_ベース option:selected').val();
          send.割り材 = $('#select_割り材 option:selected').val();
        }
        send.memo = $("#memo").val();
        send.ster = $('input:radio[name="star"]:checked').val();

        jsData[number] = (send);
        jsData = JSON.stringify(jsData);
        localStorage.setItem('itemList', jsData);

      });


    });

    // 編集から一覧
    page.querySelector('#sendbutton').onclick = function () {
      document.querySelector('#navigator').replacePage('page3.html');
    };

  }

  // 結果ページ
  if (page.matches('#kind-page')) {
    
    var tweetText = "";
    
    $.getJSON("json/data.json", function (json) {               // JSON取得

      $("#genre").change(function () {                    // ジャンルを選択した時
        var genre = $(this).val();                        // genreに選択ジャンルの値代入

        // tweet表示
        $(".tweetbtn").css('display', 'block');

        // 日本酒の場合
        if (genre == "日本酒") {

          // ポイント集計
          var sakeAggr = {
            ster1: {
              種類: {},
              産地: {},
              酒米: {},
              味: {}
            },
            ster2: {
              種類: {},
              産地: {},
              酒米: {},
              味: {}
            },
            ster3: {
              種類: {},
              産地: {},
              酒米: {},
              味: {}
            },
            ster4: {
              種類: {},
              産地: {},
              酒米: {},
              味: {}
            },
            ster5: {
              種類: {},
              産地: {},
              酒米: {},
              味: {}
            },
          }
          $.each(json.genre.日本酒, function (item, value) {   // 項目1つずつ処理
            var jsonData = localStorage.getItem('itemList');
            var jsData = JSON.parse(jsonData);
            for (let index = 0; index < jsData.length; index++) {
              

              var items = jsData[index];

              if (items.ジャンル == "日本酒") {
                var 登録 = items[item];                        // 各項目登録データ
                if (items.ster == 1) {                         // ster1
                  if (sakeAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    sakeAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    sakeAggr.ster1[item][登録] = 0.5;
                  }
                } else if (items.ster == 2) {                  // ster2
                  if (sakeAggr.ster2[item][登録]) {
                    sakeAggr.ster2[item][登録] += 0.75;
                  } else {
                    sakeAggr.ster2[item][登録] = 0.75;
                  }
                } else if (items.ster == 3) {                  // ster3
                  if (sakeAggr.ster3[item][登録]) {
                    sakeAggr.ster3[item][登録]++;
                  } else {
                    sakeAggr.ster3[item][登録] = 1;
                  }
                } else if (items.ster == 4) {                  // ster4
                  if (sakeAggr.ster4[item][登録]) {
                    sakeAggr.ster4[item][登録] += 1.25;
                  } else {
                    sakeAggr.ster4[item][登録] = 1.25;
                  }
                } else if (items.ster == 5) {                  // ster5
                  if (sakeAggr.ster5[item][登録]) {
                    sakeAggr.ster5[item][登録] += 1.5;
                  } else {
                    sakeAggr.ster5[item][登録] = 1.5;
                  }
                }
              } else {
                continue;
              }
            }
          });

          // 合計値算出
          var sakePoint = {
            種類:{},
            産地:{},
            酒米:{},
            味:{}
          }
          
          for (let sterNum = 1; sterNum < 6; sterNum++) {
            var sterItem = sakeAggr["ster" + sterNum];
            $.each(sterItem, function (item, value) {   // itemは項目valueは選択肢たち
              $.each(value, function (key, val) {   // keyは選択肢valは集計数
                if (sakePoint[item][key]) {
                  sakePoint[item][key] += val;
                } else {
                  sakePoint[item][key] = val;
                }
              });
            });
          }
          
          // 判定
          var kindOf = {                // 結果を入れるとこ
            種類: "",
            産地: "",
            酒米: "",
            味: ""
          }
          var max = 0;                  // 合計比較用
          var maxKey = "";              // 最大値のkeyいれるとこ
          $.each(sakePoint, function (item, value) {   // itemは項目valueは選択肢たち
            $.each(value, function (key, val) {   // keyは選択肢valは合計値
              max = 0;
              if (max <= val) {                
                max = val;
                maxKey = key;
              }
            });
            kindOf[item] = maxKey;
          });

          // 結果表示
          $('#result').html(     // html変更
            '<p>種類:  ' + kindOf.種類 + '</p>'+
            '<p>産地:  ' + kindOf.産地 + '</p>'+
            '<p>酒米:  ' + kindOf.酒米 + '</p>'+
            '<p>味:  ' + kindOf.味 + '</p>'
          );

          tweetText = "私の好みの" + genre + "は、%0a種類:" + kindOf.種類 + "%0a産地:" + kindOf.産地 + "%0a酒米:" + kindOf.酒米 + "%0a味:" + kindOf.味 + "%0aです！%0a";
        }        
        // 赤ワインの場合
        else if (genre == "赤ワイン") {
          // ポイント集計
          var redWineAggr = {
            ster1: {
              種類: {},
              産地: {},
              ぶどう: {}
            },
            ster2: {
              種類: {},
              産地: {},
              ぶどう: {}
            },
            ster3: {
              種類: {},
              産地: {},
              ぶどう: {}
            },
            ster4: {
              種類: {},
              産地: {},
              ぶどう: {}
            },
            ster5: {
              種類: {},
              産地: {},
              ぶどう: {}
            },
          }
          $.each(json.genre.赤ワイン, function (item, value) {   // 項目1つずつ処理
            
            var jsonData = localStorage.getItem('itemList');
            var jsData = JSON.parse(jsonData);
            for (let index = 0; index < jsData.length; index++) {

             var items = jsData[index];

              if (items.ジャンル == "赤ワイン") {
                var 登録 = items[item];                        // 各項目登録データ
                if (items.ster == 1) {                         // ster1
                  if (redWineAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    redWineAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    redWineAggr.ster1[item][登録] = 0.5;
                  }
                } else if (items.ster == 2) {                  // ster2
                  if (redWineAggr.ster2[item][登録]) {
                    redWineAggr.ster2[item][登録] += 0.75;
                  } else {
                    redWineAggr.ster2[item][登録] = 0.75;
                  }
                } else if (items.ster == 3) {                  // ster3
                  if (redWineAggr.ster3[item][登録]) {
                    redWineAggr.ster3[item][登録]++;
                  } else {
                    redWineAggr.ster3[item][登録] = 1;
                  }
                } else if (items.ster == 4) {                  // ster4
                  if (redWineAggr.ster4[item][登録]) {
                    redWineAggr.ster4[item][登録] += 1.25;
                  } else {
                    redWineAggr.ster4[item][登録] = 1.25;
                  }
                } else if (items.ster == 5) {                  // ster5
                  if (redWineAggr.ster5[item][登録]) {
                    redWineAggr.ster5[item][登録] += 1.5;
                  } else {
                    redWineAggr.ster5[item][登録] = 1.5;
                  }
                }
              } else {
                continue;
              }
            }
          });

          // 合計値算出
          var redWinePoint = {
            種類:{},
            産地:{},
            ぶどう:{}
          }
          
          for (let sterNum = 1; sterNum < 6; sterNum++) {
            var sterItem = redWineAggr["ster" + sterNum];
            $.each(sterItem, function (item, value) {   // itemは項目valueは選択肢たち
              $.each(value, function (key, val) {   // keyは選択肢valは集計数
                if (redWinePoint[item][key]) {
                  redWinePoint[item][key] += val;
                } else {
                  redWinePoint[item][key] = val;
                }
              });
            });
          }
          
          // 判定
          var kindOf = {                // 結果を入れるとこ
            種類: "",
            産地: "",
            ぶどう: ""
          }
          var max = 0;                  // 合計比較用
          var maxKey = "";              // 最大値のkeyいれるとこ
          $.each(redWinePoint, function (item, value) {   // itemは項目valueは選択肢たち
            $.each(value, function (key, val) {   // keyは選択肢valは合計値
              max = 0;
              if (max <= val) {                
                max = val;
                maxKey = key;
              }
            });
            kindOf[item] = maxKey;
          });

          // 結果表示
          $('#result').html(     // html変更
            '<p>種類:  ' + kindOf.種類 + '</p>'+
            '<p>産地:  ' + kindOf.産地 + '</p>'+
            '<p>ぶどう:  ' + kindOf.ぶどう + '</p>'
          );

          tweetText = "私の好みの" + genre + "は、%0a種類:" + kindOf.種類 + "%0a産地:" + kindOf.産地 + "%0aぶどう:" + kindOf.ぶどう + "%0aです！%0a"
        }
        // 白ワインの場合
        else if (genre == "白ワイン") {
          // ポイント集計
          var whiteWineAggr = {
            ster1: {
              味: {},
              産地: {},
              ぶどう: {}
            },
            ster2: {
              味: {},
              産地: {},
              ぶどう: {}
            },
            ster3: {
              味: {},
              産地: {},
              ぶどう: {}
            },
            ster4: {
              味: {},
              産地: {},
              ぶどう: {}
            },
            ster5: {
              味: {},
              産地: {},
              ぶどう: {}
            },
          }
          $.each(json.genre.白ワイン, function (item, value) {   // 項目1つずつ処理
            
            var jsonData = localStorage.getItem('itemList');
            var jsData = JSON.parse(jsonData);
            for (let index = 0; index < jsData.length; index++) {

             var items = jsData[index];

              if (items.ジャンル == "白ワイン") {
                var 登録 = items[item];                        // 各項目登録データ
                if (items.ster == 1) {                         // ster1
                  if (whiteWineAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    whiteWineAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    whiteWineAggr.ster1[item][登録] = 0.5;
                  }
                } else if (items.ster == 2) {                  // ster2
                  if (whiteWineAggr.ster2[item][登録]) {
                    whiteWineAggr.ster2[item][登録] += 0.75;
                  } else {
                    whiteWineAggr.ster2[item][登録] = 0.75;
                  }
                } else if (items.ster == 3) {                  // ster3
                  if (whiteWineAggr.ster3[item][登録]) {
                    whiteWineAggr.ster3[item][登録]++;
                  } else {
                    whiteWineAggr.ster3[item][登録] = 1;
                  }
                } else if (items.ster == 4) {                  // ster4
                  if (whiteWineAggr.ster4[item][登録]) {
                    whiteWineAggr.ster4[item][登録] += 1.25;
                  } else {
                    whiteWineAggr.ster4[item][登録] = 1.25;
                  }
                } else if (items.ster == 5) {                  // ster5
                  if (whiteWineAggr.ster5[item][登録]) {
                    whiteWineAggr.ster5[item][登録] += 1.5;
                  } else {
                    whiteWineAggr.ster5[item][登録] = 1.5;
                  }
                }
              } else {
                continue;
              }
            }
          });

          // 合計値算出
          var whiteWinePoint = {
            味:{},
            産地:{},
            ぶどう:{}
          }
          
          for (let sterNum = 1; sterNum < 6; sterNum++) {
            var sterItem = whiteWineAggr["ster" + sterNum];
            $.each(sterItem, function (item, value) {   // itemは項目valueは選択肢たち
              $.each(value, function (key, val) {   // keyは選択肢valは集計数
                if (whiteWinePoint[item][key]) {
                  whiteWinePoint[item][key] += val;
                } else {
                  whiteWinePoint[item][key] = val;
                }
              });
            });
          }
          
          // 判定
          var kindOf = {                // 結果を入れるとこ
            味: "",
            産地: "",
            ぶどう: ""
          }
          var max = 0;                  // 合計比較用
          var maxKey = "";              // 最大値のkeyいれるとこ
          $.each(whiteWinePoint, function (item, value) {   // itemは項目valueは選択肢たち
            $.each(value, function (key, val) {   // keyは選択肢valは合計値
              max = 0;
              if (max <= val) {                
                max = val;
                maxKey = key;
              }
            });
            kindOf[item] = maxKey;
          });

          // 結果表示
          $('#result').html(     // html変更
            '<p>味:  ' + kindOf.味 + '</p>'+
            '<p>産地:  ' + kindOf.産地 + '</p>'+
            '<p>ぶどう:  ' + kindOf.ぶどう + '</p>'
          );

          tweetText = "私の好みの" + genre + "は、%0a味:" + kindOf.味 + "%0a産地:" + kindOf.産地 + "%0aぶどう:" + kindOf.ぶどう + "%0aです！%0a"
        }
        // 焼酎の場合
        else if (genre == "焼酎") {
          // ポイント集計
          var shochuAggr = {
            ster1: {
              種類: {},
              原料: {},
              産地: {}
            },
            ster2: {
              種類: {},
              原料: {},
              産地: {}
            },
            ster3: {
              種類: {},
              原料: {},
              産地: {}
            },
            ster4: {
              種類: {},
              原料: {},
              産地: {}
            },
            ster5: {
              種類: {},
              原料: {},
              産地: {}
            },
          }
          $.each(json.genre.焼酎, function (item, value) {   // 項目1つずつ処理
            
            var jsonData = localStorage.getItem('itemList');
            var jsData = JSON.parse(jsonData);
            for (let index = 0; index < jsData.length; index++) {

             var items = jsData[index];

              if (items.ジャンル == "焼酎") {
                var 登録 = items[item];                        // 各項目登録データ
                if (items.ster == 1) {                         // ster1
                  if (shochuAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    shochuAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    shochuAggr.ster1[item][登録] = 0.5;
                  }
                } else if (items.ster == 2) {                  // ster2
                  if (shochuAggr.ster2[item][登録]) {
                    shochuAggr.ster2[item][登録] += 0.75;
                  } else {
                    shochuAggr.ster2[item][登録] = 0.75;
                  }
                } else if (items.ster == 3) {                  // ster3
                  if (shochuAggr.ster3[item][登録]) {
                    shochuAggr.ster3[item][登録]++;
                  } else {
                    shochuAggr.ster3[item][登録] = 1;
                  }
                } else if (items.ster == 4) {                  // ster4
                  if (shochuAggr.ster4[item][登録]) {
                    shochuAggr.ster4[item][登録] += 1.25;
                  } else {
                    shochuAggr.ster4[item][登録] = 1.25;
                  }
                } else if (items.ster == 5) {                  // ster5
                  if (shochuAggr.ster5[item][登録]) {
                    shochuAggr.ster5[item][登録] += 1.5;
                  } else {
                    shochuAggr.ster5[item][登録] = 1.5;
                  }
                }
              } else {
                continue;
              }
            }
          });

          // 合計値算出
          var shochuPoint = {
            種類:{},
            原料:{},
            産地:{}
          }
          
          for (let sterNum = 1; sterNum < 6; sterNum++) {
            var sterItem = shochuAggr["ster" + sterNum];
            $.each(sterItem, function (item, value) {   // itemは項目valueは選択肢たち
              $.each(value, function (key, val) {   // keyは選択肢valは集計数
                if (shochuPoint[item][key]) {
                  shochuPoint[item][key] += val;
                } else {
                  shochuPoint[item][key] = val;
                }
              });
            });
          }
          
          // 判定
          var kindOf = {                // 結果を入れるとこ
            種類: "",
            原料: "",
            産地: ""
          }
          var max = 0;                  // 合計比較用
          var maxKey = "";              // 最大値のkeyいれるとこ
          $.each(shochuPoint, function (item, value) {   // itemは項目valueは選択肢たち
            $.each(value, function (key, val) {   // keyは選択肢valは合計値
              max = 0;
              if (max <= val) {                
                max = val;
                maxKey = key;
              }
            });
            kindOf[item] = maxKey;
          });

          // 結果表示
          $('#result').html(     // html変更
            '<p>種類:  ' + kindOf.種類 + '</p>'+
            '<p>原料:  ' + kindOf.原料 + '</p>'+
            '<p>産地:  ' + kindOf.産地 + '</p>'
          );

          tweetText = "私の好みの" + genre + "は、%0a種類:" + kindOf.種類 + "%0a原料:" + kindOf.原料 + "%0a産地:" + kindOf.産地 + "%0aです！%0a"
        }
        // 果実酒の場合
        else if (genre == "果実酒") {
          // ポイント集計
          var fruitWineAggr = {
            ster1: {
              果実: {},
              ベース: {}
            },
            ster2: {
              果実: {},
              ベース: {}
            },
            ster3: {
              果実: {},
              ベース: {}
            },
            ster4: {
              果実: {},
              ベース: {}
            },
            ster5: {
              果実: {},
              ベース: {}
            },
          }
          $.each(json.genre.果実酒, function (item, value) {   // 項目1つずつ処理
            
            var jsonData = localStorage.getItem('itemList');
            var jsData = JSON.parse(jsonData);
            for (let index = 0; index < jsData.length; index++) {

             var items = jsData[index];

              if (items.ジャンル == "果実酒") {
                var 登録 = items[item];                        // 各項目登録データ
                if (items.ster == 1) {                         // ster1
                  if (fruitWineAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    fruitWineAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    fruitWineAggr.ster1[item][登録] = 0.5;
                  }
                } else if (items.ster == 2) {                  // ster2
                  if (fruitWineAggr.ster2[item][登録]) {
                    fruitWineAggr.ster2[item][登録] += 0.75;
                  } else {
                    fruitWineAggr.ster2[item][登録] = 0.75;
                  }
                } else if (items.ster == 3) {                  // ster3
                  if (fruitWineAggr.ster3[item][登録]) {
                    fruitWineAggr.ster3[item][登録]++;
                  } else {
                    fruitWineAggr.ster3[item][登録] = 1;
                  }
                } else if (items.ster == 4) {                  // ster4
                  if (fruitWineAggr.ster4[item][登録]) {
                    fruitWineAggr.ster4[item][登録] += 1.25;
                  } else {
                    fruitWineAggr.ster4[item][登録] = 1.25;
                  }
                } else if (items.ster == 5) {                  // ster5
                  if (fruitWineAggr.ster5[item][登録]) {
                    fruitWineAggr.ster5[item][登録] += 1.5;
                  } else {
                    fruitWineAggr.ster5[item][登録] = 1.5;
                  }
                }
              } else {
                continue;
              }
            }
          });

          // 合計値算出
          var fruitWinePoint = {
            果実:{},
            ベース:{}
          }
          
          for (let sterNum = 1; sterNum < 6; sterNum++) {
            var sterItem = fruitWineAggr["ster" + sterNum];
            $.each(sterItem, function (item, value) {   // itemは項目valueは選択肢たち
              $.each(value, function (key, val) {   // keyは選択肢valは集計数
                if (fruitWinePoint[item][key]) {
                  fruitWinePoint[item][key] += val;
                } else {
                  fruitWinePoint[item][key] = val;
                }
              });
            });
          }
          
          // 判定
          var kindOf = {                // 結果を入れるとこ
            果実: "",
            ベース: ""
          }
          var max = 0;                  // 合計比較用
          var maxKey = "";              // 最大値のkeyいれるとこ
          $.each(fruitWinePoint, function (item, value) {   // itemは項目valueは選択肢たち
            $.each(value, function (key, val) {   // keyは選択肢valは合計値
              max = 0;
              if (max <= val) {                
                max = val;
                maxKey = key;
              }
            });
            kindOf[item] = maxKey;
          });

          // 結果表示
          $('#result').html(     // html変更
            '<p>果実:  ' + kindOf.果実 + '</p>'+
            '<p>ベース:  ' + kindOf.ベース + '</p>'
          );

          tweetText = "私の好みの" + genre + "は、%0a果実:" + kindOf.果実 + "%0aベース:" + kindOf.ベース + "%0aです！%0a"
        }
        // カクテルの場合
        else if (genre == "カクテル") {
          // ポイント集計
          var cocktailAggr = {
            ster1: {
              種類: {},
              ベース: {},
              割り材: {}
            },
            ster2: {
              種類: {},
              ベース: {},
              割り材: {}
            },
            ster3: {
              種類: {},
              ベース: {},
              割り材: {}
            },
            ster4: {
              種類: {},
              ベース: {},
              割り材: {}
            },
            ster5: {
              種類: {},
              ベース: {},
              割り材: {}
            },
          }
          $.each(json.genre.カクテル, function (item, value) {   // 項目1つずつ処理
            
            var jsonData = localStorage.getItem('itemList');
            var jsData = JSON.parse(jsonData);
            for (let index = 0; index < jsData.length; index++) {

             var items = jsData[index];

              if (items.ジャンル == "カクテル") {
                var 登録 = items[item];                        // 各項目登録データ
                if (items.ster == 1) {                         // ster1
                  if (cocktailAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    cocktailAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    cocktailAggr.ster1[item][登録] = 0.5;
                  }
                } else if (items.ster == 2) {                  // ster2
                  if (cocktailAggr.ster2[item][登録]) {
                    cocktailAggr.ster2[item][登録] += 0.75;
                  } else {
                    cocktailAggr.ster2[item][登録] = 0.75;
                  }
                } else if (items.ster == 3) {                  // ster3
                  if (cocktailAggr.ster3[item][登録]) {
                    cocktailAggr.ster3[item][登録]++;
                  } else {
                    cocktailAggr.ster3[item][登録] = 1;
                  }
                } else if (items.ster == 4) {                  // ster4
                  if (cocktailAggr.ster4[item][登録]) {
                    cocktailAggr.ster4[item][登録] += 1.25;
                  } else {
                    cocktailAggr.ster4[item][登録] = 1.25;
                  }
                } else if (items.ster == 5) {                  // ster5
                  if (cocktailAggr.ster5[item][登録]) {
                    cocktailAggr.ster5[item][登録] += 1.5;
                  } else {
                    cocktailAggr.ster5[item][登録] = 1.5;
                  }
                }
              } else {
                continue;
              }
            }
          });

          // 合計値算出
          var cocktailPoint = {
            種類:{},
            ベース:{},
            割り材:{}
          }
          
          for (let sterNum = 1; sterNum < 6; sterNum++) {
            var sterItem = cocktailAggr["ster" + sterNum];
            $.each(sterItem, function (item, value) {   // itemは項目valueは選択肢たち
              $.each(value, function (key, val) {   // keyは選択肢valは集計数
                if (cocktailPoint[item][key]) {
                  cocktailPoint[item][key] += val;
                } else {
                  cocktailPoint[item][key] = val;
                }
              });
            });
          }
          
          // 判定
          var kindOf = {                // 結果を入れるとこ
            種類: "",
            ベース: "",
            割り材: ""
          }
          var max = 0;                  // 合計比較用
          var maxKey = "";              // 最大値のkeyいれるとこ
          $.each(cocktailPoint, function (item, value) {   // itemは項目valueは選択肢たち
            $.each(value, function (key, val) {   // keyは選択肢valは合計値
              max = 0;
              if (max <= val) {                
                max = val;
                maxKey = key;
              }
            });
            kindOf[item] = maxKey;
          });

          // 結果表示
          $('#result').html(     // html変更
            '<p>種類:  ' + kindOf.種類 + '</p>'+
            '<p>ベース:  ' + kindOf.ベース + '</p>'+
            '<p>割り材:  ' + kindOf.割り材 + '</p>'
          );

          tweetText = "私の好みの" + genre + "は、%0a種類:" + kindOf.種類 + "%0aベース:" + kindOf.ベース + "%0a割り材:" + kindOf.割り材 + "%0aです！%0a"
        }
        
        //ツイートボタンの処理
        
      });
    });
    $('#twitter_button').click(function() {
      var url = "https://twitter.com/share?url=%23mykindrink&text=" + tweetText + "&count=none&lang=ja";
      window.open(url, '_blank');
    });
    
    // 結果からtop
    page.querySelector('#topbutton').onclick = function () {
      document.querySelector('#navigator').resetToPage('top.html');
    };
  }

});



if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
};