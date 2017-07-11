/* global $ _ */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function (data){
        
    $(document).ready(function(){
	$("a.switcher").bind("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = 
		//data.map(function(product){
            //var $title = $('<div>').text(product.desc).addClass('title').appendTo('section');
        //});
		$("ul#products");
		var classNames = $(this).attr('class').split(' ');
		
		var gridthumb = "images/products/grid-default-thumb.png";
		var listthumb = "images/products/list-default-thumb.png";
		
		if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "gridview") {
				$(this).addClass("active");
				$("#listview").removeClass("active");
			
				$("#listview").children("img").attr("src","images/list-view.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/grid-view-active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("list");
				theproducts.addClass("grid");
			
				// update all thumbnails to larger size
				$("img.thumb").attr("src",gridthumb);
			}
			
			else if(theid == "listview") {
				$(this).addClass("active");
				$("#gridview").removeClass("active");
					
				$("#gridview").children("img").attr("src","images/grid-view.png");
					
				var theimg = $(this).children("img");
				theimg.attr("src","images/list-view-active.png");
					
				// remove the grid view and change to list
				theproducts.removeClass("grid")
				theproducts.addClass("list");
				// update all thumbnails to smaller size
				$("img.thumb").attr("src",listthumb);
			} 
		}

	});
});
    <head>
        <span class="list-style-buttons">
        <a href="#" id="gridview" class="switcher"><img src="images/grid-view.png" alt="Grid"></a>
        <a href="#" id="listview" class="switcher active"><img src="images/list-view-active.png" alt="List"></a>
        </span>
        /** list view **/
            ul.list { list-style: none; width: 100%; }
            ul.list li { display: block; background: #c9d0d1; padding: 10px 15px; }
 
            ul.list li.alt { background: #d7dfe0; }
 
            ul.list li section.left { display: block; float: left; width: 350px; position: relative; padding-left: 20px; }
            ul.list li section.right { display: block; float: right; margin-right: 10px; width: 250px; text-align: right; }
 
            ul.list li section.left img.thumb { float: left; margin-right: 10px; }
            ul.list li section.left img.featured-banner { position: absolute; left: -18px; top: 35px; }
 
            ul.list li section.left h3 { font-family: "Trebuchet MS", Arial, sans-serif; font-weight: bold; text-transform: uppercase; color: #707375; font-size: 1.4em; line-height: 1.6em; }
            ul.list li section.left span.meta { color: #93989b; font-weight: normal; font-size: 1.1em; }
 
            ul.list li section.right span.price { font-weight: bold; display: block; margin-bottom: 15px; color: #ad3939; font-size: 1.6em; text-align: right; }
 
            ul.list li section.right a.firstbtn { margin-right: 7px; }
        /** grid view **/
            ul.grid { list-style: none; margin: 0 auto; padding-left: 25px; }
            ul.grid li { position: relative; display: block; float: left; width: 220px; height: 200px; border-right: 1px solid #b6bdbe; padding: 5px 22px; margin-bottom: 20px; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; }
            ul.grid li.third { border: 0; }
 
            ul.grid li section.left { position: relative; }
            ul.grid li section.right { /* nothing */ }
 
            ul.grid li section.left img.featured-banner { position: absolute; top: 0; }
 
            ul.grid li section.left h3 { font-family: "Trebuchet MS", Arial, sans-serif; font-weight: bold; text-transform: uppercase; color: #707375; font-size: 1.4em; line-height: 1.5em; }
            ul.grid li section.left span.meta { display: block; color: #93989b; font-weight: normal; font-size: 1.1em; margin-bottom: 7px; }
 
            ul.grid li section.right span.price { font-weight: bold; display: block; margin-bottom: 5px; color: #ad3939; font-size: 1.75em; }
 
            ul.grid li section.right span.darkview {
            opacity: 0;
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 190px;
            height: 200px;
            margin: 0 15px;
            border-radius: 6px;
            background: rgba(40, 45, 55, 0.75);
            overflow: hidden;
            text-align: center;
            padding-top: 35px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            transition: opacity 0.2s linear 0s;
            -webkit-transition: opacity 0.2s linear 0s;
            -moz-transition: opacity 0.25s linear 0s;
            -o-transition: opacity 0.25s linear 0s;
            }
            ul.grid li:hover section.right span.darkview { opacity: 1; }
 
            ul.grid li section.right span.darkview a.firstbtn { display: block; margin-bottom: 10px; }
    </head>
    <body>
        <!-- row 1 -->
        <li class="clearfix">
            <section class="left">
                <img src="images/products/list-default-thumb.png" alt="default thumb" class="thumb">
                <h3>Product Name</h3>
                <span class="meta">Product ID: 543J423</span>
            </section>
 
            <section class="right">
                <span class="price">$45.00</span>
                <span class="darkview">
                <a href="javascript:void(0);" class="firstbtn"><img src="images/read-more-btn.png" alt="Read More..."></a>
                <a href="javascript:void(0);"><img src="images/add-to-cart-btn.png" alt="Add to Cart"></a>
                </span>
            </section>
        </li>
    <!-- row 2 -->
        <li class="clearfix">
            <section class="left">
                <img src="images/products/list-default-thumb.png" alt="default thumb" class="thumb">
                <h3>Product Name</h3>
                <span class="meta">Product ID: 543J423</span>
            </section>
 
            <section class="right">
                <span class="price">$45.00</span>
                <span class="darkview">
                <a href="javascript:void(0);" class="firstbtn"><img src="images/read-more-btn.png" alt="Read More..."></a>
                <a href="javascript:void(0);"><img src="images/add-to-cart-btn.png" alt="Add to Cart"></a>
                </span>
            </section>
        </li>
    </body>
    
    <main>
    </main>
  
  
  });
  // ALL YOUR CODE GOES ABOVE HERE //
 });