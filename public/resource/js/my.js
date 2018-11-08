dunfo.card = function() {

  var callback_get_itemdb_list = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;

  };

  return {
    get_itemdb_list : function() {
      var url = "/wp/getitemdblist";
      var data = {};
      myajax.ajaxSubmit(url,data,callback_get_itemdb_list);
    }
  };
}();
