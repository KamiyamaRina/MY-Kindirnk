
// Page init event
document.addEventListener('init', function(event) {
  var page = event.target;
  
  // 登録ページ変化
  if (page.matches('#register-page')) {
    $.getJSON("json/data.json", function(data){               // JSON取得

      $("#genre").change(function() {                         // ジャンルを選択した時
        var genre = $(this).val();                            // genreに選択ジャンルの値代入
        
        // 名前、メモ、星表示
        $(".name, .memo, .ster").css('display', 'block');

        // 日本酒の場合
        if(genre == "sake") {

          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
              '<ons-select id="select_Class">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>産地: </p>' + 
              '<ons-select id="select_place">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' +
              '<p>酒米: </p>' +
              '<ons-select id="select_rice">' +
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 

            '<div class="topic">' +
              '<p>味: </p>' +
              '<ons-select id="select_taste">' +
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' 

          );
          
          // selectの選択肢変化
          $.each(data.genre.sake.Class, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_Class > .select-input').append(option);      
          });
  
          $.each(data.place.japan, function(index, value){
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_place > .select-input').append(option);      
          });
  
          $.each(data.genre.sake.rice, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_rice > .select-input').append(option);      
          });
  
          $.each(data.genre.sake.taste, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_taste > .select-input').append(option);      
          });        
        }
        
        // 赤ワインの場合
        else if(genre == "redWine") {
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
              '<ons-select id="select_Class">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>産地: </p>' + 
              '<ons-select id="select_place">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' +
              '<p>ぶどう: </p>' +
              '<ons-select id="select_grape">' +
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' 

          );
          
          // selectの選択肢変化
          $.each(data.genre.redWine.Class, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_Class > .select-input').append(option);      
          });
  
          $.each(data.place.wine, function(index, value){
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_place > .select-input').append(option);      
          });
  
          $.each(data.genre.redWine.grape, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_grape > .select-input').append(option);      
          });
        
        }

        // 白ワインの場合
        else if(genre == "whiteWine") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>味わい: </p>' + 
              '<ons-select id="select_taste">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>産地: </p>' + 
              '<ons-select id="select_place">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' +
              '<p>ぶどう: </p>' +
              '<ons-select id="select_grape">' +
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' 

          );
          
          // selectの選択肢変化
          $.each(data.genre.whiteWine.taste, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_taste > .select-input').append(option);      
          });
  
          $.each(data.place.wine, function(index, value){
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_place > .select-input').append(option);      
          });
  
          $.each(data.genre.whiteWine.grape, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_grape > .select-input').append(option);      
          });           
        
        }
  
        // 焼酎の場合
        else if(genre == "shochu") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
              '<ons-select id="select_Class">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>原料: </p>' + 
              '<ons-select id="select_material">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>産地: </p>' + 
              '<ons-select id="select_place">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' 

          );
          
          // selectの選択肢変化
          $.each(data.genre.shochu.Class, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_Class > .select-input').append(option);      
          });
          
          $.each(data.genre.shochu.material, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_material > .select-input').append(option);      
          });            
        
          $.each(data.place.japan, function(index, value){
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_place > .select-input').append(option);      
          });
  
        }
  
        // 果実酒の場合
        else if(genre == "fruitWine") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>果実: </p>' + 
              '<ons-select id="select_fruit">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>ベース: </p>' + 
              '<ons-select id="select_base">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>'

          );
          
          // selectの選択肢変化
          $.each(data.genre.fruitWine.fruit, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_fruit > .select-input').append(option);      
          }); 
         
          $.each(data.genre.fruitWine.base, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_base > .select-input').append(option);      
          });
        
        }
  
        // カクテルの場合
        else if(genre == "cocktail") {
  
          $('#change').html(     // html変更
            
            '<div class="topic">' + 
              '<p>分類: </p>' + 
              '<ons-select id="select_Class">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' + 
              '<p>ベース: </p>' + 
              '<ons-select id="select_base">' + 
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' + 
    
            '<div class="topic">' +
              '<p>割り材: </p>' +
              '<ons-select id="select_mixer">' +
                '<option value="" hidden>選択してください</option>' + 
              '</ons-select>' + 
            '</div>' 

          );
          
          // selectの選択肢変化
          $.each(data.genre.cocktail.Class, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_Class > .select-input').append(option);      
          });
  
          $.each(data.genre.cocktail.base, function(index, value){
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_base > .select-input').append(option);      
          });
  
          $.each(data.genre.cocktail.mixer, function(index, value){      
            var option = '<option value="' + index + '">' + value +'</option>'      
            $('#select_mixer > .select-input').append(option);      
          });
        }
  
      });
  
    }); 

  } 

  // 一覧ページ
  if (page.matches('#list-page')) {
    $.getJSON("json/data.json", function(json){               // JSON取得
      var dataList = json.data;

      for (let index = 0; index < dataList.length; index++) {

        var listItem = dataList[index];
        
        var list = '<ons-list-item id="sake" odifier="longdivider" tappable>' + '<div class="center">' + '<span class="list-item__title">' + listItem.name + '</span>' + '<span class="list-item__subtitle">' + listItem.genre + '</span>' + '</div>' + '</ons-list-item>'
        
        $('.lists').append(list);

        
      }
      
      // 一覧から詳細
      page.querySelector('#sake').onclick = function() {
        document.querySelector('#navigator').pushPage('page5.html');
      };
      
    });

  } 
  
  // ページの動き
    // topから登録
    if (page.matches('#top-page')) {
      page.querySelector('#registerbutton').onclick = function() {
        document.querySelector('#navigator').pushPage('page2.html');
      };
    } 
    // topから結果
    if (page.matches('#top-page')) {
      page.querySelector('#kindbutton').onclick = function() {
        document.querySelector('#navigator').pushPage('page4.html');
      };
    }

    // topから一覧
    if (page.matches('#top-page')) {
      page.querySelector('#listbutton').onclick = function() {
        document.querySelector('#navigator').pushPage('page3.html');
      };
    } 

    // 登録から一覧
    if (page.matches('#register-page')) {
      page.querySelector('#sendbutton').onclick = function() {
        document.querySelector('#navigator').replacePage('page3.html');
      };
    } 

    // 一覧から詳細
    // if (page.matches('#list-page')) {
    //   page.querySelector('#sake').onclick = function() {
    //     document.querySelector('#navigator').pushPage('page5.html');
    //   };
    // } 

    // 詳細から編集
    if (page.matches('#detail-page')) {
      page.querySelector('#editbutton').onclick = function() {
        document.querySelector('#navigator').pushPage('page6.html');
      };
    } 

    // 編集から一覧
    if (page.matches('#edit-page')) {
      page.querySelector('#sendbutton').onclick = function() {
        document.querySelector('#navigator').replacePage('page3.html');
      };
    } 

    // 一覧から登録
    if (page.matches('#list-page')) {
      page.querySelector('#registerbutton2').onclick = function() {
        document.querySelector('#navigator').pushPage('page2.html');
      };
    } 

    // 一覧からtop
    if (page.matches('#list-page')) {
      page.querySelector('#topbutton').onclick = function() {
        document.querySelector('#navigator').resetToPage('top.html');
      };
    } 

    // 結果からtop
    if (page.matches('#kind-page')) {
      page.querySelector('#topbutton').onclick = function() {
        document.querySelector('#navigator').resetToPage('top.html');
      };
    } 
  

});







if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
};