
// Page init event
document.addEventListener('init', function(event) {
  var page = event.target;

  
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
    if (page.matches('#list-page')) {
      page.querySelector('#sake1').onclick = function() {
        document.querySelector('#navigator').pushPage('page5.html');
      };
    } 

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
  
  // 登録ページ変化
  if (page.matches('#register-page')) {
    $.getJSON("json/data.json", function(data){               // JSON取得

      $("#genre").change(function() {                         // ジャンルを選択した時
        var genre = $(this).val();                            // genreに選択ジャンルの値代入
        
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
        // else if(genre == "redWine") {
        //   $('#change').html(     // html変更
            
        //     '<div class="class">' + 
        //       '<p>分類: </p>' + 
        //       '<ons-select id="select_Class">' + 
        //         '<option value="" hidden>選択してください</option>' + 
        //       '</ons-select>' + 
        //     '</div>' + 
    
        //     '<div class="place">' + 
        //       '<p>産地: </p>' + 
        //       '<ons-select id="select_place">' + 
        //         '<option value="" hidden>選択してください</option>' + 
        //       '</ons-select>' + 
        //     '</div>' + 
    
        //     '<div class="rice">' +
        //       '<p>酒米: </p>' +
        //       '<ons-select id="select_rice">' +
        //         '<option value="" hidden>選択してください</option>' + 
        //       '</ons-select>' + 
        //     '</div>' + 

        //     '<div class="taste">' +
        //       '<p>味: </p>' +
        //       '<ons-select id="select_taste">' +
        //         '<option value="" hidden>選択してください</option>' + 
        //       '</ons-select>' + 
        //     '</div>' 

        //   );
          
        //   // selectの選択肢変化
        //   $.each(data.genre.sake.Class, function(index, value){      
        //     var option = '<option value="' + index + '">' + value +'</option>'      
        //     $('#select_Class > .select-input').append(option);      
        //   });
  
        //   $.each(data.place.japan, function(index, value){
        //     var option = '<option value="' + index + '">' + value +'</option>'      
        //     $('#select_place > .select-input').append(option);      
        //   });
  
        //   $.each(data.genre.sake.rice, function(index, value){      
        //     var option = '<option value="' + index + '">' + value +'</option>'      
        //     $('#select_rice > .select-input').append(option);      
        //   });
  
        //   $.each(data.genre.sake.taste, function(index, value){      
        //     var option = '<option value="' + index + '">' + value +'</option>'      
        //     $('#select_taste > .select-input').append(option);      
        //   });              
        
        // }
        // else if(genre == "whiteWine") {
  
        //   console.log(genre);            
        
        // }
  
      });      
  
  
  
    }); 

  } 

});







if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
};