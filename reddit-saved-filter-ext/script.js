var filter_form = '<input type="text" id="filter-subreddit" placeholder="Filter Subreddit">';
$('.bottom').before(filter_form);

$('.titlebox').on('input', '#filter-subreddit', function(){
  filter_subreddit($(this).val());
});

function filter_subreddit(target_subreddit='') {
  if(target_subreddit == '')
    return;
  var $saved = $(".saved");
  $saved.each(function(index) {
    var $thing = $saved.eq(index);
    var subreddit = $thing.attr('data-subreddit');
    if(subreddit.indexOf(target_subreddit) != -1)
      $thing.show();
    else
      $thing.hide();
  });
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
   filter_subreddit($('#filter-subreddit').val());
});
observer.observe(document.querySelector("#siteTable"), {
  childList: true
});
