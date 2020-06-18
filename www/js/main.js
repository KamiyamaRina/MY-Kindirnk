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

        var turn = localStorage.length + 1;
        var data = JSON.stringify(send);
        localStorage.setItem('data' + turn, data);                // データ1, データ2..

      });


    });

    // 登録から一覧
    page.querySelector('#sendbutton').onclick = function () {
      document.querySelector('#navigator').replacePage('page3.html');
    };

  }

  // 一覧ページ
  if (page.matches('#list-page')) {

    for (let index = 1; index < localStorage.length + 1; index++) {

      var dataIndex = 'data' + index;
      var jsonData = localStorage.getItem(dataIndex);
      var jsData = JSON.parse(jsonData);

      var list = '<ons-list-item id="sake' + index + '" odifier="longdivider" tappable>' + '<div class="center">' + '<span class="list-item__title">' + jsData.name + '</span>' + '<span class="list-item__subtitle">' + jsData.ジャンル + '</span>' + '</div>' + '</ons-list-item>'

      $('.lists').append(list);

      // 一覧から詳細
      page.querySelector('#sake' + index).onclick = function () {
        document.querySelector('#navigator').pushPage('page5.html', { data: { number: index } });
      };

    }

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

    var dataNumber = 'data' + number;
    var jsonData = localStorage.getItem(dataNumber);
    var jsData = JSON.parse(jsonData);

    $('#sakeName').html(jsData.name);

    var key = Object.keys(jsData);

    for (let index = 0; index < key.length; index++) {        // 登録データ表示

      if (key[index] == "memo") {

        var memo = '<div class="memos">' + '<p>メモ: </p>' + '<p class="note">' +
          jsData.memo + '</p>' + '</div>';

        $('#detail').append(memo);

      } else if (key[index] == "ster") {

        var ster = '<div class="wrap">' + '<span class="rate rate' + jsData.ster + '"></span>' + '</div>';

        $('#detail').append(ster);

      } else if (key[index] == "name") {
        continue;
      } else {
        var item = '<div class="item">' + '<p>' + key[index] + ':  </p>' + '<p>' + jsData[key[index]] + '</p>' + '</div>'

        $('#detail').append(item);
      }

    }



    // 詳細から編集
    page.querySelector('#editbutton').onclick = function () {
      document.querySelector('#navigator').replacePage('page6.html', { data: { number: number } });
    };
  }

  // 編集ページ
  if (page.matches('#edit-page')) {
    $.getJSON("json/data.json", function (json) {               // JSON取得
      var number = page.data.number;

      var dataNumber = 'data' + number;
      var jsonData = localStorage.getItem(dataNumber);
      var jsData = JSON.parse(jsonData);

      // var drink = json.data[number];

      // ジャンル
      var genreKey = Object.keys(json.genre);

      genreKey.forEach(function (data) {                       //ジャンル選択追加
        if (data == jsData.ジャンル) {                         // ジャンルが登録と同じの時
          var genres = '<option value="' + data + '" selected>' + data + '</option>';
        } else {
          var genres = '<option value="' + data + '">' + data + '</option>';
        }
        $('.select-input').append(genres);
      });


      var target = $('#genre option:selected').val();         // 選択されている値

      if (target == jsData.ジャンル) {                        // 選択ジャンルの時        
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

            if (value == jsData.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }

            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.酒米, function (index, value) {
            if (value == jsData.酒米) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_酒米 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.味, function (index, value) {
            if (value == jsData.味) {
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
            if (value == jsData.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.赤ワイン.ぶどう, function (index, value) {
            if (value == jsData.ぶどう) {
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
            if (value == jsData.味) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_味 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.白ワイン.ぶどう, function (index, value) {
            if (value == jsData.ぶどう) {
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
            if (value == jsData.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.焼酎.原料, function (index, value) {
            if (value == jsData.原料) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_原料 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == jsData.産地) {
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
            if (value == jsData.果実) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_果実 > .select-input').append(option);
          });

          $.each(json.genre.果実酒.ベース, function (index, value) {
            if (value == jsData.ベース) {
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
            if (value == jsData.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.カクテル.ベース, function (index, value) {
            if (value == jsData.ベース) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_ベース > .select-input').append(option);
          });

          $.each(json.genre.カクテル.割り材, function (index, value) {
            if (value == jsData.割り材) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_割り材 > .select-input').append(option);
          });
        }

        // 名前,メモの初期値設定
        $('.name').html(     // html変更
          '<ons-input type="text" placeholder="お酒の名前" modifier="underbar" id="name" value=' + jsData.name + '></ons-input>'
        );
        $('.memo').html(     // html変更
          '<textarea name="textarea" id="memo" cols="40" rows="5" placeholder="メモ">' + jsData.memo + '</textarea>'
        );

        // 星設定
        for (let index = 1; index < 6; index++) {

          var sterValue = 6 - index;

          if (sterValue == jsData.ster) {
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

            if (value == jsData.種類) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }

            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.酒米, function (index, value) {
            if (value == jsData.酒米) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + value + '">' + value + '</option>'
            }
            $('#select_酒米 > .select-input').append(option);
          });

          $.each(json.genre.日本酒.味, function (index, value) {
            if (value == jsData.味) {
              var option = '<option value="' + value + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
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
            if (value == jsData.種類) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.赤ワイン.ぶどう, function (index, value) {
            if (value == jsData.ぶどう) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
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
            if (value == jsData.味) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_味 > .select-input').append(option);
          });

          $.each(json.place.wine, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_産地 > .select-input').append(option);
          });

          $.each(json.genre.白ワイン.ぶどう, function (index, value) {
            if (value == jsData.ぶどう) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
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
            if (value == jsData.種類) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.焼酎.原料, function (index, value) {
            if (value == jsData.原料) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_原料 > .select-input').append(option);
          });

          $.each(json.place.japan, function (index, value) {
            if (value == jsData.産地) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
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
            if (value == jsData.果実) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_果実 > .select-input').append(option);
          });

          $.each(json.genre.果実酒.ベース, function (index, value) {
            if (value == jsData.ベース) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
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
            if (value == jsData.種類) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_種類 > .select-input').append(option);
          });

          $.each(json.genre.カクテル.ベース, function (index, value) {
            if (value == jsData.ベース) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
            }
            $('#select_ベース > .select-input').append(option);
          });

          $.each(json.genre.カクテル.割り材, function (index, value) {
            if (value == jsData.割り材) {
              var option = '<option value="' + index + '" selected>' + value + '</option>'
            } else {
              var option = '<option value="' + index + '">' + value + '</option>'
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

        var data = JSON.stringify(send);
        localStorage.setItem('data' + number, data);                // データ1, データ2..

      });


    });

    // 編集から一覧
    page.querySelector('#sendbutton').onclick = function () {
      document.querySelector('#navigator').replacePage('page3.html');
    };

  }

  // 結果ページ
  if (page.matches('#kind-page')) {
    $.getJSON("json/data.json", function (json) {               // JSON取得

      $("#genre").change(function () {                    // ジャンルを選択した時
        var genre = $(this).val();                        // genreに選択ジャンルの値代入

        var dataNumber = 'data' + number;
        var jsonData = localStorage.getItem(dataNumber);
        var jsData = JSON.parse(jsonData);                      // localstrageデータ取得

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
            
            for (let index = 1; index < localStorage.length + 1; index++) {

              var dataIndex = 'data' + index;
              var jsonData = localStorage.getItem(dataIndex);
              var jsData = JSON.parse(jsonData);                  // localstrage取得

              if (jsData.ジャンル == "日本酒") {
                var 登録 = jsData[item];                        // 各項目登録データ
                if (jsData.ster == 1) {                         // ster1
                  if (sakeAggr.ster1[item][登録]) {             // [登録]がすでにある場合
                    sakeAggr.ster1[item][登録] += 0.5;
                  } else {                                      // [登録]がない場合
                    sakeAggr.ster1[item][登録] = 0.5;
                  }
                } else if (jsData.ster == 2) {                  // ster2
                  if (sakeAggr.ster2[item][登録]) {
                    sakeAggr.ster2[item][登録] += 0.75;
                  } else {
                    sakeAggr.ster2[item][登録] = 0.75;
                  }
                } else if (jsData.ster == 3) {                  // ster3
                  if (sakeAggr.ster3[item][登録]) {
                    sakeAggr.ster3[item][登録]++;
                  } else {
                    sakeAggr.ster3[item][登録] = 1;
                  }
                } else if (jsData.ster == 4) {                  // ster4
                  if (sakeAggr.ster4[item][登録]) {
                    sakeAggr.ster4[item][登録] += 1.25;
                  } else {
                    sakeAggr.ster4[item][登録] = 1.25;
                  }
                } else if (jsData.ster == 5) {                  // ster5
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
          console.log(sakeAggr);      // 集計チェック用

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
          console.log(sakePoint);        // 合計チェック用
          
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

                console.log(val);
                console.log(key);
                
              }
            });
            kindOf[item] = maxKey;
            console.log("item:" + item);
            console.log("key:" + key);
          });
          console.log(kindOf);            // 判定チェック用    

          // 結果表示
          $('.result').html(     // html変更
            '<p>種類:  ' + kindOf.種類 + '</p>'+
            '<p>産地:  ' + kindOf.産地 + '</p>'+
            '<p>酒米:  ' + kindOf.酒米 + '</p>'+
            '<p>味:  ' + kindOf.味 + '</p>'
          );


        }
        // 赤ワインの場合
        if (genre == "赤ワイン") {
          $('.result').html(     // html変更
            '<p>種類: </p>' +
            '<p>産地: </p>' +
            '<p>ぶどう: </p>'
          );
          // ポイント集計
          var redWinePoint = {
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
          for (let index = 1; index < localStorage.length + 1; index++) {

            var dataIndex = 'data' + index;
            var jsonData = localStorage.getItem(dataIndex);
            var jsData = JSON.parse(jsonData);                  // localstrage取得

            if (jsData.ジャンル == "赤ワイン") {
              $.each(json.genre.赤ワイン, function (item, value) {   // 項目1つずつ処理
                var 登録 = jsData[item];                        // 各項目登録データ
                if (jsData.ster == 1) {                         // ster1
                  if (redWinePoint.ster1[item][登録]) {             // [登録]がすでにある場合
                    redWinePoint.ster1[item][登録]++;
                  } else {                                      // [登録]がない場合
                    redWinePoint.ster1[item][登録] = 1;
                  }
                } else if (jsData.ster == 2) {                  // ster2
                  if (redWinePoint.ster2[item][登録]) {
                    redWinePoint.ster2[item][登録]++;
                  } else {
                    redWinePoint.ster2[item][登録] = 1;
                  }
                } else if (jsData.ster == 3) {                  // ster3
                  if (redWinePoint.ster3[item][登録]) {
                    redWinePoint.ster3[item][登録]++;
                  } else {
                    redWinePoint.ster3[item][登録] = 1;
                  }
                } else if (jsData.ster == 4) {                  // ster4
                  if (redWinePoint.ster4[item][登録]) {
                    redWinePoint.ster4[item][登録]++;
                  } else {
                    redWinePoint.ster4[item][登録] = 1;
                  }
                } else if (jsData.ster == 5) {                  // ster5
                  if (redWinePoint.ster5[item][登録]) {
                    redWinePoint.ster5[item][登録]++;
                  } else {
                    redWinePoint.ster5[item][登録] = 1;
                  }
                }
              });
            } else {
              continue;
            }
          }
          // 確認用
          console.log(redWinePoint);
        }
        // 白ワインの場合
        if (genre == "白ワイン") {
          $('.result').html(     // html変更
            '<p>味わい: </p>' +
            '<p>産地: </p>' +
            '<p>ぶどう: </p>'
          );
          // ポイント集計
          var whiteWinePoint = {
            ster1: {
              味わい: {},
              産地: {},
              ぶどう: {}
            },
            ster2: {
              味わい: {},
              産地: {},
              ぶどう: {}
            },
            ster3: {
              味わい: {},
              産地: {},
              ぶどう: {}
            },
            ster4: {
              味わい: {},
              産地: {},
              ぶどう: {}
            },
            ster5: {
              味わい: {},
              産地: {},
              ぶどう: {}
            },
          }
          for (let index = 1; index < localStorage.length + 1; index++) {

            var dataIndex = 'data' + index;
            var jsonData = localStorage.getItem(dataIndex);
            var jsData = JSON.parse(jsonData);                  // localstrage取得

            if (jsData.ジャンル == "白ワイン") {
              $.each(json.genre.白ワイン, function (item, value) {   // 項目1つずつ処理
                var 登録 = jsData[item];                        // 各項目登録データ
                if (jsData.ster == 1) {                         // ster1
                  if (whiteWinePoint.ster1[item][登録]) {             // [登録]がすでにある場合
                    whiteWinePoint.ster1[item][登録]++;
                  } else {                                      // [登録]がない場合
                    whiteWinePoint.ster1[item][登録] = 1;
                  }
                } else if (jsData.ster == 2) {                  // ster2
                  if (whiteWinePoint.ster2[item][登録]) {
                    whiteWinePoint.ster2[item][登録]++;
                  } else {
                    whiteWinePoint.ster2[item][登録] = 1;
                  }
                } else if (jsData.ster == 3) {                  // ster3
                  if (whiteWinePoint.ster3[item][登録]) {
                    whiteWinePoint.ster3[item][登録]++;
                  } else {
                    whiteWinePoint.ster3[item][登録] = 1;
                  }
                } else if (jsData.ster == 4) {                  // ster4
                  if (whiteWinePoint.ster4[item][登録]) {
                    whiteWinePoint.ster4[item][登録]++;
                  } else {
                    whiteWinePoint.ster4[item][登録] = 1;
                  }
                } else if (jsData.ster == 5) {                  // ster5
                  if (whiteWinePoint.ster5[item][登録]) {
                    whiteWinePoint.ster5[item][登録]++;
                  } else {
                    whiteWinePoint.ster5[item][登録] = 1;
                  }
                }
              });
            } else {
              continue;
            }
          }
          // 確認用
          console.log(whiteWinePoint);
        }
        // 焼酎の場合
        if (genre == "焼酎") {
          $('.result').html(     // html変更
            '<p>種類: </p>' +
            '<p>原料: </p>' +
            '<p>産地: </p>'
          );
          // ポイント集計
          var shochuPoint = {
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
          for (let index = 1; index < localStorage.length + 1; index++) {

            var dataIndex = 'data' + index;
            var jsonData = localStorage.getItem(dataIndex);
            var jsData = JSON.parse(jsonData);                  // localstrage取得

            if (jsData.ジャンル == "焼酎") {
              $.each(json.genre.焼酎, function (item, value) {   // 項目1つずつ処理
                var 登録 = jsData[item];                        // 各項目登録データ
                if (jsData.ster == 1) {                         // ster1
                  if (shochuPoint.ster1[item][登録]) {             // [登録]がすでにある場合
                    shochuPoint.ster1[item][登録]++;
                  } else {                                      // [登録]がない場合
                    shochuPoint.ster1[item][登録] = 1;
                  }
                } else if (jsData.ster == 2) {                  // ster2
                  if (shochuPoint.ster2[item][登録]) {
                    shochuPoint.ster2[item][登録]++;
                  } else {
                    shochuPoint.ster2[item][登録] = 1;
                  }
                } else if (jsData.ster == 3) {                  // ster3
                  if (shochuPoint.ster3[item][登録]) {
                    shochuPoint.ster3[item][登録]++;
                  } else {
                    shochuPoint.ster3[item][登録] = 1;
                  }
                } else if (jsData.ster == 4) {                  // ster4
                  if (shochuPoint.ster4[item][登録]) {
                    shochuPoint.ster4[item][登録]++;
                  } else {
                    shochuPoint.ster4[item][登録] = 1;
                  }
                } else if (jsData.ster == 5) {                  // ster5
                  if (shochuPoint.ster5[item][登録]) {
                    shochuPoint.ster5[item][登録]++;
                  } else {
                    shochuPoint.ster5[item][登録] = 1;
                  }
                }
              });
            } else {
              continue;
            }
          }
          // 確認用
          console.log(shochuPoint);
        }
        // 果実酒の場合
        if (genre == "果実酒") {
          $('.result').html(     // html変更
            '<p>果実: </p>' +
            '<p>ベース: </p>'
          );
          // ポイント集計
          var fuluitWinePoint = {
            ster1: {
              果実: {},
              ベース: {},
            },
            ster2: {
              果実: {},
              ベース: {},
            },
            ster3: {
              果実: {},
              ベース: {},
            },
            ster4: {
              果実: {},
              ベース: {},
            },
            ster5: {
              果実: {},
              ベース: {},
            },
          }
          for (let index = 1; index < localStorage.length + 1; index++) {

            var dataIndex = 'data' + index;
            var jsonData = localStorage.getItem(dataIndex);
            var jsData = JSON.parse(jsonData);                  // localstrage取得

            if (jsData.ジャンル == "果実酒") {
              $.each(json.genre.果実酒, function (item, value) {   // 項目1つずつ処理
                var 登録 = jsData[item];                        // 各項目登録データ
                if (jsData.ster == 1) {                         // ster1
                  if (fuluitWinePoint.ster1[item][登録]) {             // [登録]がすでにある場合
                    fuluitWinePoint.ster1[item][登録]++;
                  } else {                                      // [登録]がない場合
                    fuluitWinePoint.ster1[item][登録] = 1;
                  }
                } else if (jsData.ster == 2) {                  // ster2
                  if (fuluitWinePoint.ster2[item][登録]) {
                    fuluitWinePoint.ster2[item][登録]++;
                  } else {
                    fuluitWinePoint.ster2[item][登録] = 1;
                  }
                } else if (jsData.ster == 3) {                  // ster3
                  if (fuluitWinePoint.ster3[item][登録]) {
                    fuluitWinePoint.ster3[item][登録]++;
                  } else {
                    fuluitWinePoint.ster3[item][登録] = 1;
                  }
                } else if (jsData.ster == 4) {                  // ster4
                  if (fuluitWinePoint.ster4[item][登録]) {
                    fuluitWinePoint.ster4[item][登録]++;
                  } else {
                    fuluitWinePoint.ster4[item][登録] = 1;
                  }
                } else if (jsData.ster == 5) {                  // ster5
                  if (fuluitWinePoint.ster5[item][登録]) {
                    fuluitWinePoint.ster5[item][登録]++;
                  } else {
                    fuluitWinePoint.ster5[item][登録] = 1;
                  }
                }
              });
            } else {
              continue;
            }
          }
          // 確認用
          console.log(fuluitWinePoint);
        }
        // カクテルの場合
        if (genre == "カクテル") {
          $('.result').html(     // html変更
            '<p>種類: </p>' +
            '<p>ベース: </p>' +
            '<p>割り材: </p>'
          );
          // ポイント集計
          var CocktailPoint = {
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
          for (let index = 1; index < localStorage.length + 1; index++) {

            var dataIndex = 'data' + index;
            var jsonData = localStorage.getItem(dataIndex);
            var jsData = JSON.parse(jsonData);                  // localstrage取得

            if (jsData.ジャンル == "カクテル") {
              $.each(json.genre.カクテル, function (item, value) {   // 項目1つずつ処理
                var 登録 = jsData[item];                        // 各項目登録データ
                if (jsData.ster == 1) {                         // ster1
                  if (CocktailPoint.ster1[item][登録]) {             // [登録]がすでにある場合
                    CocktailPoint.ster1[item][登録]++;
                  } else {                                      // [登録]がない場合
                    CocktailPoint.ster1[item][登録] = 1;
                  }
                } else if (jsData.ster == 2) {                  // ster2
                  if (CocktailPoint.ster2[item][登録]) {
                    CocktailPoint.ster2[item][登録]++;
                  } else {
                    CocktailPoint.ster2[item][登録] = 1;
                  }
                } else if (jsData.ster == 3) {                  // ster3
                  if (CocktailPoint.ster3[item][登録]) {
                    CocktailPoint.ster3[item][登録]++;
                  } else {
                    CocktailPoint.ster3[item][登録] = 1;
                  }
                } else if (jsData.ster == 4) {                  // ster4
                  if (CocktailPoint.ster4[item][登録]) {
                    CocktailPoint.ster4[item][登録]++;
                  } else {
                    CocktailPoint.ster4[item][登録] = 1;
                  }
                } else if (jsData.ster == 5) {                  // ster5
                  if (CocktailPoint.ster5[item][登録]) {
                    CocktailPoint.ster5[item][登録]++;
                  } else {
                    CocktailPoint.ster5[item][登録] = 1;
                  }
                }
              });
            } else {
              continue;
            }
          }
          // 確認用
          console.log(CocktailPoint);
        }


      });
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