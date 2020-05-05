$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="main__contents__talks">
       <div class="main__contents__talks__talk">
          <div class="main__contents__talks__talk__info">
            <div class="main__contents__talks__talk__info__talker">
              ${message.user_name}
            </div>
            <div class="main__contents__talks__talk__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main__contents__talks__talk__content">
            <p class="main__contents__talks__talk__content__detail">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
          </div>

        </div>`
      return html;
    } else {
      var html =
       `<div class="main__contents__talks">
        <div class="main__contents__talks__talk">
          <div class="main__contents__talks__talk__info">
            <div class="main__contents__talks__talk__info__talker">
              ${message.user_name}
            </div>
            <div class="main__contents__talks__talk__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main__contents__talks__talk__content">
            <p class="main__contents__talks__talk__content__detail">
              ${message.content}
            </p>
          </div>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();


    var formData = new FormData(this);

    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__contents').append(html);
      $('form')[0].reset();
      $('.main__footer__btn').attr('disabled', false);　 
      $('.main__contents').animate({ scrollTop: $('.main__contents')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  })
});

