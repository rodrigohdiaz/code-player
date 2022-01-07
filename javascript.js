/*to check the height of the window in the browser
		var windowHeight=$(window).height();
		alert(windowHeight);   */

        var windowHeight=$(window).height();
        var menuBarHeight=$("#nav").height();

        var htmlCanvasHeight=windowHeight-menuBarHeight;
        $(".codeContainer").height(htmlCanvasHeight+"px");
        var cssCanvasHeight=windowHeight-menuBarHeight;
        
        


          $(".toggle").click(function(){
          $(this).toggleClass("selected"); 		 	
          var activeDiv=$(this).html();
          $("#"+activeDiv+"Container").toggle();

          var showingDivs=$(".codeContainer").filter(function(){
              return($(this).css("display") !="none");
          }).length;
          var width=100/showingDivs;
          $(".codeContainer").width(width+"%");
        });

        $("#button").click(function(){
            $("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());

            document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
            eval($("#jsCode").val())

        });