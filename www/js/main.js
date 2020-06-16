"use strict";

// Page init event
document.addEventListener('init', function(event) {
  var page = event.target;
  
  // 登録ページ
  if (page.matches('#register-page')) {
    $.getJSON("json/data.json", function(json){               // JSON取得

      $("#genre").change(function() {                         // ジャンルを選択した時
        var genre = $(this).val();                            // genreに選択ジャンルの値代入
        
        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if(genre == "日本酒") {

          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.日本酒.種類, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.place.japan, function(index, value){
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.日本酒.酒米, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_酒米 > .select-input').append(option);      
          });
  
          $.each(json.genre.日本酒.味, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_味 > .select-input').append(option);      
          });        
        }
        
        // 赤ワインの場合
        else if(genre == "赤ワイン") {
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.赤ワイン.種類, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.place.wine, function(index, value){
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.赤ワイン.ぶどう, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_ぶどう > .select-input').append(option);      
          });
        
        }

        // 白ワインの場合
        else if(genre == "白ワイン") {
  
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
          $.each(json.genre.白ワイン.味, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_味 > .select-input').append(option);      
          });
  
          $.each(json.place.wine, function(index, value){
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.白ワイン.ぶどう, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_ぶどう > .select-input').append(option);      
          });           
        
        }
  
        // 焼酎の場合
        else if(genre == "焼酎") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.焼酎.種類, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_種類 > .select-input').append(option);      
          });
          
          $.each(json.genre.焼酎.原料, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_原料 > .select-input').append(option);      
          });            
        
          $.each(json.place.japan, function(index, value){
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_産地 > .select-input').append(option);      
          });
  
        }
  
        // 果実酒の場合
        else if(genre == "果実酒") {
  
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
          $.each(json.genre.果実酒.果実, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_果実 > .select-input').append(option);      
          }); 
         
          $.each(json.genre.果実酒.ベース, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_ベース > .select-input').append(option);      
          });
        
        }
  
        // カクテルの場合
        else if(genre == "カクテル") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.カクテル.種類, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.genre.カクテル.ベース, function(index, value){
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_ベース > .select-input').append(option);      
          });
  
          $.each(json.genre.カクテル.割り材, function(index, value){      
            var option = '<option value="' + value + '">' + value +'</option>'      
            $('#select_割り材 > .select-input').append(option);      
          });
        }
  
      });
  
      // 登録
      $('#sendbutton').click(function() {
        
        var send = {};
        send.name = $('#name').val();
        send.ジャンル = $('#genre option:selected').val();
        send.memo = $("#memo").val();
        send.ster =  $('input:radio[name="star"]:checked').val();

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
        else if ($('#genre option:selected').val() == "赤ワイン") {
          send.種類 = $('#select_種類 option:selected').val();
          send.ベース = $('#select_ベース option:selected').val();
          send.割り材 = $('#select_割り材 option:selected').val();          
        }

        var number = localStorage.length + 1;        
        var data = JSON.stringify(send);
        localStorage.setItem('data'+number, data);                // データ1, データ2..

      });


    }); 
    // 登録から一覧
    page.querySelector('#sendbutton').onclick = function() {
      document.querySelector('#navigator').replacePage('page3.html');
    };

  } 

  // 一覧ページ
  if (page.matches('#list-page')) {

      for (let index = 1; index < localStorage.length+1; index++) {

        var dataIndex = 'data'+index;
        var jsonData = localStorage.getItem(dataIndex);
        var jsData = JSON.parse(jsonData);
        
        var list = '<ons-list-item id="sake' + index + '" odifier="longdivider" tappable>' + '<div class="center">' + '<span class="list-item__title">' + jsData.name + '</span>' + '<span class="list-item__subtitle">' + jsData.ジャンル + '</span>' + '</div>' + '</ons-list-item>'
        
        $('.lists').append(list);

        // 一覧から詳細
        page.querySelector('#sake' + index).onclick = function() {
          document.querySelector('#navigator').pushPage('page5.html', {data: {number: index}});
        };
        
        console.log(jsData);
        
      }
    

    // 一覧から登録
    page.querySelector('#registerbutton2').onclick = function() {
      document.querySelector('#navigator').pushPage('page2.html');
    };

    // 一覧からtop
    page.querySelector('#topbutton').onclick = function() {
      document.querySelector('#navigator').resetToPage('top.html');
    };

  } 
  
  //topページ
  if (page.matches('#top-page')) {    
    // topから登録
    page.querySelector('#registerbutton').onclick = function() {
      document.querySelector('#navigator').pushPage('page2.html');
    };
      // topから結果
    page.querySelector('#kindbutton').onclick = function() {
      document.querySelector('#navigator').pushPage('page4.html');
    };
      // topから一覧
    page.querySelector('#listbutton').onclick = function() {
      document.querySelector('#navigator').pushPage('page3.html');
    };
  } 

   // 詳細ページ
  if (page.matches('#detail-page')) {
    var number = page.data.number;
    $.getJSON("json/data.json", function(json){               // JSON取得
      var drink = json.data[number];
      $('#sakeName').html(drink.name);

      var key = Object.keys(drink);

      for (let index = 1; index < key.length; index++) {
        
        if (key[index] == "memo") {

          var memo = '<div class="memos">' + '<p>メモ: </p>' + '<p class="note">' + 
          drink.memo + '</p>' + '</div>';

          $('#detail').append(memo);

        } else if (key[index] == "ster") {

          var ster = '<div class="wrap">' + '<span class="rate rate' + drink.ster + '"></span>' + '</div>';

          $('#detail').append(ster);

        } else {
          var item = '<div class="item">' + '<p>' + key[index] + ':  </p>' + '<p>' + drink[key[index]] + '</p>' + '</div>'
          
          $('#detail').append(item);          
        }

      }
      
    });
    
    

    // 詳細から編集
    page.querySelector('#editbutton').onclick = function() {
      document.querySelector('#navigator').pushPage('page6.html', {data: {number: number}});
    };
  } 

  // 結果ページ
  if (page.matches('#kind-page')) {
    // 結果からtop
    page.querySelector('#topbutton').onclick = function() {
      document.querySelector('#navigator').resetToPage('top.html');
    };
  } 
  
  // 編集ページ
  if (page.matches('#edit-page')) {    
    var number = page.data.number;
    $.getJSON("json/data.json", function(json){               // JSON取得

      var drink = json.data[number];

      // ジャンル設定

      var genreKey = Object.keys(json.genre);

      genreKey.forEach(function(data) {                       //ジャンル選択追加
        if (data == drink.ジャンル) {                         // ジャンルが登録と同じの時
          var genres = '<option value="' + data + '" selected>' + data + '</option>'; 
        } else {
          var genres = '<option value="' + data + '">' + data + '</option>';    
        }
        $('.select-input').append(genres);       
      });


      var target = $('#genre option:selected').val();         // 選択されている値
      
      if (target == drink.ジャンル) {                        // 登録ジャンルの時        
        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if(target == "日本酒") {

          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.日本酒.種類, function(index, value){      
            
            if (value == drink.種類) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }

            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.place.japan, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.日本酒.酒米, function(index, value){      
            if (value == drink.酒米) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_酒米 > .select-input').append(option);      
          });
  
          $.each(json.genre.日本酒.味, function(index, value){      
            if (value == drink.味) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_味 > .select-input').append(option);      
          });        
        }
        
        // 赤ワインの場合
        else if(target == "赤ワイン") {
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.赤ワイン.種類, function(index, value){      
            if (value == drink.種類) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }     
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.place.wine, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }     
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.赤ワイン.ぶどう, function(index, value){      
            if (value == drink.ぶどう) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }     
            $('#select_ぶどう > .select-input').append(option);      
          });
        
        }

        // 白ワインの場合
        else if(target == "白ワイン") {
  
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
          $.each(json.genre.白ワイン.味, function(index, value){      
            if (value == drink.味) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }     
            $('#select_味 > .select-input').append(option);      
          });
  
          $.each(json.place.wine, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.白ワイン.ぶどう, function(index, value){      
            if (value == drink.ぶどう) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_ぶどう > .select-input').append(option);      
          });           
        
        }
  
        // 焼酎の場合
        else if(target == "焼酎") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.焼酎.種類, function(index, value){      
            if (value == drink.種類) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_種類 > .select-input').append(option);      
          });
          
          $.each(json.genre.焼酎.原料, function(index, value){      
            if (value == drink.原料) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_原料 > .select-input').append(option);      
          });            
        
          $.each(json.place.japan, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_産地 > .select-input').append(option);      
          });
  
        }
  
        // 果実酒の場合
        else if(target == "果実酒") {
  
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
          $.each(json.genre.果実酒.果実, function(index, value){      
            if (value == drink.果実) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_果実 > .select-input').append(option);      
          }); 
          
          $.each(json.genre.果実酒.ベース, function(index, value){      
            if (value == drink.ベース) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_ベース > .select-input').append(option);      
          });
        
        }
  
        // カクテルの場合
        else if(target == "カクテル") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.カクテル.種類, function(index, value){      
            if (value == drink.種類) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.genre.カクテル.ベース, function(index, value){
            if (value == drink.ベース) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_ベース > .select-input').append(option);      
          });
  
          $.each(json.genre.カクテル.割り材, function(index, value){      
            if (value == drink.割り材) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }
            $('#select_割り材 > .select-input').append(option);      
          });
        } 
        
        // 名前,メモの初期値設定
        $('.name').html(     // html変更
          '<ons-input type="text" placeholder="お酒の名前" modifier="underbar" value=' + drink.name + '></ons-input>'
        );
        $('.memo').html(     // html変更
          '<textarea name="textarea" id="memo" cols="40" rows="5" placeholder="メモ">' + drink.memo + '</textarea>'
        );

        // 星設定
        for (let index = 1; index < 6; index++) {
          
          var sterValue = 6 - index;
  
          if (sterValue == drink.ster) {
            var ster = '<input id="star' + index + '" type="radio" name="star" value="' + sterValue + '" checked/>' + '<label for="star' + index + '"><span class="text">' + json.val[index - 1] + '</span>★</label>'; 
  
          } else {
            var ster = '<input id="star' + index + '" type="radio" name="star" value="' + sterValue + '" />' + '<label for="star' + index + '"><span class="text">' + json.val[index - 1] + '</span>★</label>';      
          }
          $('.evaluation').append(ster);
  
        }

      }


      $("#genre").change(function() {                         // ジャンルを選択した時
        var genre = $(this).val();                            // genreに選択ジャンルの値代入
        
        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if(genre == "日本酒") {

          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.日本酒.種類, function(index, value){      
            
            if (value == drink.種類) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }

            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.place.japan, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.日本酒.酒米, function(index, value){      
            if (value == drink.酒米) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + value + '">' + value +'</option>'              
            }      
            $('#select_酒米 > .select-input').append(option);      
          });
  
          $.each(json.genre.日本酒.味, function(index, value){      
            if (value == drink.味) {
              var option = '<option value="' + value + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }      
            $('#select_味 > .select-input').append(option);      
          });        
        }
        
        // 赤ワインの場合
        else if(genre == "赤ワイン") {
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.赤ワイン.種類, function(index, value){      
            if (value == drink.種類) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }     
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.place.wine, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }     
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.赤ワイン.ぶどう, function(index, value){      
            if (value == drink.ぶどう) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }     
            $('#select_ぶどう > .select-input').append(option);      
          });
        
        }

        // 白ワインの場合
        else if(genre == "白ワイン") {
  
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
          $.each(json.genre.白ワイン.味, function(index, value){      
            if (value == drink.味) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }     
            $('#select_味 > .select-input').append(option);      
          });
  
          $.each(json.place.wine, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }      
            $('#select_産地 > .select-input').append(option);      
          });
  
          $.each(json.genre.白ワイン.ぶどう, function(index, value){      
            if (value == drink.ぶどう) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }      
            $('#select_ぶどう > .select-input').append(option);      
          });           
        
        }
  
        // 焼酎の場合
        else if(genre == "焼酎") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.焼酎.種類, function(index, value){      
            if (value == drink.種類) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_種類 > .select-input').append(option);      
          });
          
          $.each(json.genre.焼酎.原料, function(index, value){      
            if (value == drink.原料) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_原料 > .select-input').append(option);      
          });            
        
          $.each(json.place.japan, function(index, value){
            if (value == drink.産地) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_産地 > .select-input').append(option);      
          });
  
        }
  
        // 果実酒の場合
        else if(genre == "果実酒") {
  
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
          $.each(json.genre.果実酒.果実, function(index, value){      
            if (value == drink.果実) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_果実 > .select-input').append(option);      
          }); 
          
          $.each(json.genre.果実酒.ベース, function(index, value){      
            if (value == drink.ベース) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_ベース > .select-input').append(option);      
          });
        
        }
  
        // カクテルの場合
        else if(genre == "カクテル") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
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
          $.each(json.genre.カクテル.種類, function(index, value){      
            if (value == drink.種類) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_種類 > .select-input').append(option);      
          });
  
          $.each(json.genre.カクテル.ベース, function(index, value){
            if (value == drink.ベース) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_ベース > .select-input').append(option);      
          });
  
          $.each(json.genre.カクテル.割り材, function(index, value){      
            if (value == drink.割り材) {
              var option = '<option value="' + index + '" selected>' + value +'</option>'
            } else {
              var option = '<option value="' + index + '">' + value +'</option>'              
            }
            $('#select_割り材 > .select-input').append(option);      
          });
        }    

      });      


    }); 

    // 編集から一覧
    page.querySelector('#sendbutton').onclick = function() {
      document.querySelector('#navigator').replacePage('page3.html');
    };

  } 



});







if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
};