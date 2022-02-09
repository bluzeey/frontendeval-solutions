$("input").bind("input", function() {
    var $this = $(this);
    setTimeout(function() {
        if ( $this.val().length > parseInt($this.attr("maxlength"),1) )
            $this.next("input").focus();
    },0);
});