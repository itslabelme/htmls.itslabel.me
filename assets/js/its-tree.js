$.fn.extend({
    treed: function (o) {
      
      var openedClass = 'fa-folder-open-o';
      var closedClass = 'fa-folder-o';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='fa " + closedClass + "'></i>");
            branch.addClass('branch');

            branch.on('click', function (e) {
                if (this == e.target) {
//                    $('.branch>span').toggleClass('fa-minus');
                    var icon = $(this).children('i:first');
              //      var icon2 = $(this).attr('.span');
                //    icon2.toggleClass('fa-minus');
                    icon.toggleClass(openedClass + " " + closedClass);
                    //$('.span.fa.fa-plus').addClass('test');
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>span.fa').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();

                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

//$('#tree1').treed();

$('#tree2').treed({openedClass:'fa-folder-open-o', closedClass:'fa-folder-o'});

//$('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});
