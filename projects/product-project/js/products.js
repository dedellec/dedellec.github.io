/* global $ _ */
//$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  /*$.getJSON('data/product.json', function (data){
        
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
            /*ul.list { list-style: none; width: 100%; }
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
            /*ul.grid { list-style: none; margin: 0 auto; padding-left: 25px; }
            ul.grid li { position: relative; display: block; float: left; width: 220px; height: 200px; border-right: 1px solid #b6bdbe; padding: 5px 22px; margin-bottom: 20px; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; }
            ul.grid li.third { border: 0; }
 
            ul.grid li section.left { position: relative; }
            ul.grid li section.right { /* nothing */ //}
 
            /*ul.grid li section.left img.featured-banner { position: absolute; top: 0; }
 
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
  
  
  });*/

$(function(){
    $.getJSON('data/product.json', function (data){
        
        $('<h1>').attr('id', 'header').text('Product Project').appendTo('nav');
        $('<section>').attr('id', 'section-wishlist').appendTo('main');
            var input = document.createElement('input');
        $('<input>').attr('id', 'input-search').appendTo('h1');
        $('<button>').attr('id', 'btn-search').text('Search').appendTo('h1');
        $('h1').append($('<select>').attr('id', 'dropdown'));
            $('select').append($('<option>').text('all'));
            $('select').append($('<option>').text('phone'));
            $('select').append($('<option>').text('case'));
            
            
        // var $searchBar = $('<div>').addClass('search').attr('id', 'input-search').appendTo('h1');
        // $('<input>').attr('id', 'input-search').appendTo($searchBar);
        // $('<button>').attr('id', 'btn-search').text('Search').appendTo($searchBar);
        var productList = function(data){
        var products = data.map(function(product, i){
            var $listItem = $('<li>').addClass(product.type).attr('id', product.id).css('list-style-type', 'none');
            var $listItem2 = $('<li>').addClass('list row').attr('id', i).css('list-style-type', 'none');
            var $img = $('<img>').addClass('dynamic col-md-6').css({'height': '100px', 'width': '125px', 'border-radius': '10px 35px'});
            var $img2 = $('<img>').addClass('dynamic col-md-2').css({'height': '50px', 'width': '75px', 'border-radius': '10px 25px'});
            var $productPhotos = $img.attr('src', './img/product/thumbs/' + product.image).attr('id', 'product-photo');
            var $productPhotos2 = $img2.attr('src', './img/product/thumbs/' + product.image).attr('id', 'product-photo2');
            var $id = $('<div>').attr('id', i).addClass('id');
            var $type = $('<div>').text(product.type, i).addClass('type');
            var $title = $('<div>').text(product.desc, i).addClass('title col-md-8');
            var $title2 = $('<div>').text(product.desc, i).addClass('title2 col-md-4');
            var $price = $('<div>').text('$' + product.price, i).addClass('price');
            var $price2 = $('<div>').text('$' + product.price, i).addClass('price2 col-md-1');
            var $color = $('<div>').text(product.color, i).addClass('color col-md-2');
            var $availableColors = $('<ul>').text(product.availableColors, i).addClass('availableColors col-md-4');
            var $specs = $('<header>').text(product.specs, i).addClass('specs col-md-6');
            var $stock = $('<div>').text('Left in stock ' + product.stock, i).addClass('stock');
            var $modal = $('<div>').addClass('modal').attr('id','modal-box' + i).css('display', 'none').append($('<button>')
                    .addClass('close').attr('id', 'modal-close').text('close'));
                    
                $modal.append($listItem2);
                $listItem.append($img, $productPhotos, $title, $price, $stock, $modal);
                $listItem2.append($img2, $productPhotos2, $title2, $availableColors, $price2, $specs, $id);
                $('#section-wishlist').append($listItem);
    });
        }
    
    
    $('#section-wishlist').append(productList(data));
    $('li').click(function(event){
        console.log(event.currentTarget.id);
        $('#modal-box' + event.currentTarget.id).css({'display': 'block', 'height': '1000px', 'width': '1000px', 'color': '#000000'});
    });
        $('.close').click(function(event){
            console.log('hello');
            $('.modal').remove();
        });
    

        // $('select').click(function(event){
        //     console.log('hello');
        //     return reducedList(data);
        // });
        
        
//         var productCopy = products.slice();
//         $('#dropdown').on('change', function(event){
    
    
//             $('tr').hide();
//             $('td').hide();
    
//       if(event.currentTarget.value === 'all'){
//         $('#dropdown').attr('value', 'all');
//         $('tr').show();
//         $('td').show();
//       } else {
//         $('#dropdown').attr('value', event.currentTarget.value);
//         $('.' + event.currentTarget.value).show();
//       }
    
//   });
  
//   $('#sort-select').on('change', function(event){
    
//      $('tr').remove();
//      $('td').remove();
      
//       if(event.currentTarget.value === 'cost-ascending'){
//         $('#sort-select').attr('value', event.currentTarget.value);
          
//           productCopy.sort(function(a, b){
//             return a.price - b.price;
//           });
//           dataCollection(productCopy);
          
//       } else if (event.currentTarget.value === 'cost-descending'){
//         $('#sort-select').attr('value', event.currentTarget.value);
          
//           productCopy.sort(function(a, b){
//             return b.price - a.price;
//           });
//           dataCollection(productCopy);
//       } else if (event.currentTarget.value === 'no-sort'){
//         $('#sort-select').attr('value', event.currentTarget.value);
//         dataCollection(product);
//       }
      
//     if($('#dropdown').attr('value') !== 'all'){
      
//       $('tr').hide();
//       $('td').hide();
//       $('.' + ($('#dropdown').attr('value'))).show();
//     }
    
//   });
    // function reducedList(collection){
    //     _.reduce(function(prev, curr){
    //         if (prev.toLowerCase === 'phone'){
    //             return prev;
    //         } else if (curr.toLowerCase === 'case'){
    //             return curr;
    //         } else {
    //             return collection;
    //         }
    //     }, []);
    // }
 $('#btn-search').click(function(event){
            $('li').remove();
            var $inputText = $('#input-search')[0].value.toString().toLowerCase();
            return productList(search(data, $inputText));
        });
    function search(collection, term){
        var output = [];
        term = term.toLowerCase();
        _.each(collection, (function(value){
            if(isCollection(value)){
               if (search(value, term).length){
                    output.push(value);
               }
            } else {
                if (typeof value === 'string'){
                    if (value.toLowerCase().indexOf(term) > -1) {
                        output.push(value);
                    }
                }
            }
            }));
            console.log(output)
            return output;
    }
    
    function isCollection(value){
        if (value === null || value instanceof Date) return false;
        if (typeof value === 'object') return true;
        return false;
    };
    // var filteredProducts = data.filter(function(product, i){
    //     var res = Array.from(arguments)[2] || [];
    //     var count = arguments[3] || 1;
    //     _.some(product, function(e, i, a){
    //         if(product)
    //     });
    // });
       
        
    //     function searchedListMaker(array){
    // var $searched = search(array).map(function(product, i, a){
    //   var $searchedProduct =  $('<div>')
    //   .text(product.desc + " $" + product.price)
    //   .prepend($('<img>')
    //         .attr('src', 'img/product/thumbs/' +product.image))
    //   return $searchedProduct;
    // });
    //   return $searched;
    //     }
        var wishList = function(product){
            var $searched = search(product).map(function(e, i, a){
                var $productWishList = $('<div>').text(product.desc + ' $' + product.price).prepend($('<img>').attr('src', 'img/product/thumbs/' + product.image));
                return $productWishList;
            });
            return $searched;
        }
        
        $('#btn-search').click(function(event){
            return wishList;
        });
        
        var searchSamsung = function(product){
            var filteredSamsung = [];
            _.map(function(value){
                filteredSamsung.push(product[value]);
            });
            return filteredSamsung;
        };
        var searchApple = function(product){
            var filteredApple = [];
            _.map(function(value){
                filteredApple.push(product[value]);
            });
            return filteredApple;
        };
        $('#input-search').append(searchSamsung, searchApple);
    
        // $('<button>').addClass('close').text('X').appendTo('#modal-box');
        //     $('.close').css({'background': '#F5F5F5', 'color': '#696969', 'padding': '10px', 'border-radius': '10px 35px'});
        // $('button').click(function(event){
        //     $('.modal').css('display', 'none');
        // });
        $('li').click(function(event){
            $('.modal').css({'height': '600px', 'width': '600px', 'background': '#F5F5F5', 'border-radius': '10px 35px', 'left': '30%', 'top': '30%'});
            });
            
        // $('<div>').addClass('modal-content').attr('id', 'modal-content').appendTo('.modal');
            
        
    $('<div>').addClass('container-fluid').attr('id', 'grid').appendTo('main');
        $('<div>').addClass('row').appendTo('li');
            $('<div>').addClass('col-xs-12 col-md-8');
    
    $('li').css({'list-style-type': 'none', 'border-radius': '15px 50px', 'margin-bottom': '10px', 'background-color': '#F5F5F5', 'padding': '5px'});
    
    var productCopy = data.slice();
    $('#dropdown').on('change', function(event){
    
    $('li').hide();
    
      if(event.currentTarget.value === 'all'){
        $('#dropdown').attr('value', 'all');
        $('li').show();
      } else {
        $('#dropdown').attr('value', event.currentTarget.value);
        console.log($('.' + event.currentTarget.value));
        $('.' + event.currentTarget.value).show();
      }
    
  });
    
    });
    // $('select').css({'background': 'black', 'border-radius': '15px 50px'});
        
    
//     var search = $("#search");
//     var items  = $("#section-wishlist");

//   $("#search").on("click", function(e){

//         var v = search.val().toLowerCase();
//         if(v == "") { 
//           items.show();
//           return;
//       }
//         $.each(items, function(){
//             var searchedProduct = $(this);
//             var foundProduct = searchedProduct.find("label").text().toLowerCase();
//             if(foundProduct.indexOf(v) == -1) 
//                  searchedProduct.hide();
//         });
//     });        

    
  // ALL YOUR CODE GOES ABOVE HERE //
 });