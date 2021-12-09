(function () {
  /* Load Script function we may need to load jQuery from the Google's CDN */
  /* That code is world-reknown. */
  /* One source: http://snipplr.com/view/18756/loadscript/ */

  var loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    // If the browser is Internet Explorer.
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
      // For any other browser.
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  var initProductCompareLibrary = function (jQuery) {
    var css_library = `.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list,.slick-slider{position:relative;display:block}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{transform:translateZ(0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:""}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.better-product-compare-bar{position:fixed;width:100%;z-index:1;box-shadow:0 12px 58px -7px rgba(69,77,89,.5)}.single-product-compare-value-ex ul{display:none}.better-product-compare-bar a,.better-product-compare-bar a:hover{text-decoration:none}.better-product-compare-bar-items,.better-product-compare-bar-open-close{background:rgba(0,0,0,.9)}.better-product-compare-bar-items{white-space:nowrap;overflow-x:auto;text-align:center;overflow-y:hidden;box-shadow:0 12px 58px -7px rgba(69,77,89,.22)}.better-product-compare-bar-item-container,.better-product-compare-sidebar-item-container{position:relative}.better-product-compare-bar-title{font-size:90%;text-align:center;white-space:normal}.better-product-compare-sidebar-title{font-size:120%}.better-product-compare-sidebar-img{width:40%;float:left;position:relative}.better-product-compare-sidebar-item .better-product-compare-sidebar-title{width:50%;margin-left:5%;float:left}.better-product-compare-sidebar-clearfix{clear:both;float:none}@media (max-width:768px){.better-product-compare-sidebar-img,.better-product-compare-sidebar-title{width:100%;clear:both;float:none}.better-product-compare-bar-item{max-width:100px;height:100px}.better-product-compare-bar-items{height:200px}}.better-product-compare-bar-item-container{padding:20px;display:inline-block;vertical-align:middle}.compare-table-row-attribute-value-ti,.single-product-compare-value-ti{position:relative}a.better-product-compare-single-item-remove{position:absolute;top:5px;right:10px;background:#fff;border-radius:50px;height:25px;width:25px;text-align:center;line-height:25px}.better-product-compare-sidebar-item-container{margin-bottom:20px}.better-product-compare-bar-item-placeholder .better-product-compare-bar-item{background-color:#2f2f2f}.better-product-compare-bar-item img{max-width:100%;height:auto}.better-product-compare-bar-item a.better-product-compare-bar-item-remove,.better-product-compare-bar-item a.better-product-compare-bar-item-remove:hover,a.better-product-compare-sidebar-item-remove{position:absolute;top:15px;right:15px;background:#fff;height:20px;width:20px;text-align:center;color:#000;line-height:18px;border-radius:50%}a.better-product-compare-sidebar-item-remove{top:5px;right:5px}.better-product-compare-sidebar-action-clear{display:block}.better-product-compare-bar-actions{padding:0 20px;font-size:120%;text-align:center;margin:0 auto;bottom:-15px;position:relative;left:0;right:0}@media (max-width:680px){.compare-table-grid .col-xs-2.compare-table-row-attribute-name{width:100%;max-width:100%;flex-basis:100%;-ms-flex-preferred-size:100%;border-top:1px solid #eaeaea;font-weight:700}.better-product-compare-table{word-wrap:break-word;font-size:12px}}a.better-product-compare-table-action-compare,a.better-product-compare-table-action-compare:hover{background-color:#f44336;border-radius:25px;padding:8px 16px;color:#fff;text-decoration:none}.better-product-compare-sidebar-actions{text-align:center}.compare-table-row{padding:5px}.compare-table-row-attribute-name{font-weight:700}#better-product-compare-sidebar-action-compare{margin-top:0;display:inline-block}.better-product-compare-bar-open-close-container{width:100%;text-align:center;position:absolute;height:32px}.better-product-compare-bar-action-clear{margin-right:20px}.better-product-compare-table-action-compare{color:red}.better-product-compare-bar-open-close{color:#fff;height:100%;display:inline-block;padding:5px 10px;border-radius:15px 15px 0 0}.better-product-compare-table-container{position:fixed;top:0;height:100%;overflow-y:scroll;overflow-x:auto;width:100%;background:#000;z-index:2;padding:10px}.better-product-compare-table-container .star-rating,.single-compare-table-container .star-rating{float:left}.compare-table-hidden{display:none}.better-product-compare-table-close{position:absolute;top:20px;right:20px;font-size:55px;line-height:55px;top:10px}.better-product-compare-table{width:100%;padding-top:0px}.better-product-compare-table img{max-width:300px;width:100%}.better-product-compare-table td,.better-product-compare-table th,.single-compare-table td,.single-compare-table th{padding:5px 10px}.better-product-compare-table th,.single-compare-table th{font-weight:700}.better-product-compare-table-hide-similarities,.better-product-compare-table-highlight-differences{margin-left:5px;margin-right:5px;margin-bottom:0;font-weight:700}.single-product-compare-key-column,.single-product-compare-value{padding:10px 5px;min-height:60px}.single-product-compare-key-column:nth-of-type(odd),.single-product-compare-products-slick .single-product-compare-key-column:nth-of-type(odd),.single-product-compare-products-slick .single-product-compare-value:nth-of-type(odd){background-color:#f6f6f6}.single-product-compare-key-column:nth-of-type(2n),.single-product-compare-value:nth-of-type(2n){background-color:#fff}.single-product-compare-products-slick .single-product-compare-value .star-rating{float:none}.single-product-compare-column-key:nth-of-type(odd),.single-product-compare-column-this-product .single-product-compare-column-key:nth-of-type(odd),.single-product-compare-column-this-product .single-product-compare-value:nth-of-type(odd){background-color:#ffffde}.single-product-compare-key{font-size:9px;display:block}.single-product-compare-current-product{font-size:90%;font-weight:700}.grabbable{cursor:move;cursor:grab;cursor:-webkit-grab}.grabbable:active{cursor:grabbing;cursor:-webkit-grabbing}.compare-table-row-ca,.compare-table-row-rm,.single-product-compare-value-ca,.single-product-compare-value-rm{text-align:center}.better-product-compare-sidebar-item-placeholder{border:1px dotted #eaeaea;background-color:#f7f7f7;min-height:20px;margin-bottom:10px}.better-product-compare-autocomplete-icon{background:#f44336;font-size:24px;color:#fff;line-height:24px;float:left;width:13%;padding:10px}.better-product-compare-autocomplete-input{float:left;width:87%}.better-product-compare-group-attributes-icon{float:left;margin-top:7px;margin-right:10px}.better-product-compare-autocomplete input[type=text]{width:190%;height:44px;font-size:13px;margin-bottom:0}.better-product-compare-autocomplete-message{font-size:11px;line-height:11px;color:#333;float:none;clear:both;margin-top:10px;text-align:center}.slick-loading .slick-list{background:#fff url(//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/ajax-loader.gif) 50% no-repeat}.slick-slider .slick-track{float:left}@font-face{font-family:slick;font-weight:400;font-style:normal;src:url(//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/fonts/slick.eot);src:url(//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/fonts/slick.eot#iefix) format("embedded-opentype"),url(//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/fonts/slick.woff) format("woff"),url(//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/fonts/slick.ttf) format("truetype"),url(//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/fonts/slick.svg#slick) format("svg")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:100%;padding:0;transform:translateY(-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0!important}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:slick;font-size:20px;line-height:1;opacity:.75;color:#2196f3;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-20px}[dir=rtl] .slick-prev{right:-20px;left:auto}.slick-prev:before{content:"←"}[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-20px}[dir=rtl] .slick-next{right:auto;left:-20px}.slick-next:before{content:"→"}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:0;background:0 0!important}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:slick;font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:"•";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}.slick-list .slick-track li{clear:none!important;float:left!important}.compare_products_add_all_to_cart_button{display:inline-block}.compare-products-add-all-to-cart-container{width:100%;display:block;text-align:center}.compare-table-row-clear{clear:both;float:none}.compare-table-row-attribute-name,.compare-table-row-attribute-value{float:left}.compare-table-row-attribute-value del,.single-product-compare-value del{font-size:15px;margin-left:5px;opacity:.5}.compare-table-grid .container-fluid{margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}.compare-table-grid .row{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-1rem;margin-left:-1rem}.compare-table-grid .row.reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.compare-table-grid .col.reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.compare-table-grid .col-xs,.compare-table-grid .col-xs-1,.compare-table-grid .col-xs-10,.compare-table-grid .col-xs-11,.compare-table-grid .col-xs-12,.compare-table-grid .col-xs-2,.compare-table-grid .col-xs-3,.compare-table-grid .col-xs-4,.compare-table-grid .col-xs-5,.compare-table-grid .col-xs-6,.compare-table-grid .col-xs-7,.compare-table-grid .col-xs-8,.compare-table-grid .col-xs-9{box-sizing:border-box;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.compare-table-grid .col-xs{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.compare-table-grid .col-xs-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.compare-table-grid .col-xs-2{-ms-flex-preferred-size:16.666%;flex-basis:16.666%;max-width:16.666%}.compare-table-grid .col-xs-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.compare-table-grid .col-xs-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.compare-table-grid .col-xs-5{-ms-flex-preferred-size:41%;flex-basis:41%;max-width:41%}.compare-table-grid .col-xs-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.compare-table-grid .col-xs-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.compare-table-grid .col-xs-8{-ms-flex-preferred-size:66.666%;flex-basis:66.666%;max-width:66.666%}.compare-table-grid .col-xs-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.compare-table-grid .col-xs-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.compare-table-grid .col-xs-11{-ms-flex-preferred-size:91.666%;flex-basis:91.666%;max-width:91.666%}.compare-table-grid .col-xs-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.compare-table-grid .col-xs-offset-1{margin-left:8.333%}.compare-table-grid .col-xs-offset-2{margin-left:16.666%}.compare-table-grid .col-xs-offset-3{margin-left:25%}.compare-table-grid .col-xs-offset-4{margin-left:33.333%}.compare-table-grid .col-xs-offset-5{margin-left:41.666%}.compare-table-grid .col-xs-offset-6{margin-left:50%}.compare-table-grid .col-xs-offset-7{margin-left:58.333%}.compare-table-grid .col-xs-offset-8{margin-left:66.666%}.compare-table-grid .col-xs-offset-9{margin-left:75%}.compare-table-grid .col-xs-offset-10{margin-left:83.333%}.compare-table-grid .col-xs-offset-11{margin-left:91.666%}.compare-table-grid .start-xs{-ms-flex-pack:start;justify-content:flex-start;text-align:start}.compare-table-grid .center-xs{-ms-flex-pack:center;justify-content:center;text-align:center}.compare-table-grid .end-xs{-ms-flex-pack:end;justify-content:flex-end;text-align:end}.compare-table-grid .top-xs{-ms-flex-align:start;align-items:flex-start}.compare-table-grid .middle-xs{-ms-flex-align:center;align-items:center}.compare-table-grid .bottom-xs{-ms-flex-align:end;align-items:flex-end}.compare-table-grid .around-xs{-ms-flex-pack:distribute;justify-content:space-around}.compare-table-grid .between-xs{-ms-flex-pack:justify;justify-content:space-between}.compare-table-grid .first-xs{-ms-flex-order:-1;order:-1}.compare-table-grid .last-xs{-ms-flex-order:1;order:1}@media only screen and (min-width:48em){.compare-table-grid .container{width:46rem}.compare-table-grid .col-sm,.compare-table-grid .col-sm-1,.compare-table-grid .col-sm-10,.compare-table-grid .col-sm-11,.compare-table-grid .col-sm-12,.compare-table-grid .col-sm-2,.compare-table-grid .col-sm-3,.compare-table-grid .col-sm-4,.compare-table-grid .col-sm-5,.compare-table-grid .col-sm-6,.compare-table-grid .col-sm-7,.compare-table-grid .col-sm-8,.compare-table-grid .col-sm-9{box-sizing:border-box;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.compare-table-grid .col-sm{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.compare-table-grid .col-sm-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.compare-table-grid .col-sm-2{-ms-flex-preferred-size:16.666%;flex-basis:16.666%;max-width:16.666%}.compare-table-grid .col-sm-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.compare-table-grid .col-sm-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.compare-table-grid .col-sm-5{-ms-flex-preferred-size:41.666%;flex-basis:41.666%;max-width:41.666%}.compare-table-grid .col-sm-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.compare-table-grid .col-sm-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.compare-table-grid .col-sm-8{-ms-flex-preferred-size:66.666%;flex-basis:66.666%;max-width:66.666%}.compare-table-grid .col-sm-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.compare-table-grid .col-sm-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.compare-table-grid .col-sm-11{-ms-flex-preferred-size:91.666%;flex-basis:91.666%;max-width:91.666%}.compare-table-grid .col-sm-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.compare-table-grid .col-sm-offset-1{margin-left:8.333%}.compare-table-grid .col-sm-offset-2{margin-left:16.666%}.compare-table-grid .col-sm-offset-3{margin-left:25%}.compare-table-grid .col-sm-offset-4{margin-left:33.333%}.compare-table-grid .col-sm-offset-5{margin-left:41.666%}.compare-table-grid .col-sm-offset-6{margin-left:50%}.compare-table-grid .col-sm-offset-7{margin-left:58.333%}.compare-table-grid .col-sm-offset-8{margin-left:66.666%}.compare-table-grid .col-sm-offset-9{margin-left:75%}.compare-table-grid .col-sm-offset-10{margin-left:83.333%}.compare-table-grid .col-sm-offset-11{margin-left:91.666%}.compare-table-grid .start-sm{-ms-flex-pack:start;justify-content:flex-start;text-align:start}.compare-table-grid .center-sm{-ms-flex-pack:center;justify-content:center;text-align:center}.compare-table-grid .end-sm{-ms-flex-pack:end;justify-content:flex-end;text-align:end}.compare-table-grid .top-sm{-ms-flex-align:start;align-items:flex-start}.compare-table-grid .middle-sm{-ms-flex-align:center;align-items:center}.compare-table-grid .bottom-sm{-ms-flex-align:end;align-items:flex-end}.compare-table-grid .around-sm{-ms-flex-pack:distribute;justify-content:space-around}.compare-table-grid .between-sm{-ms-flex-pack:justify;justify-content:space-between}.compare-table-grid .first-sm{-ms-flex-order:-1;order:-1}.compare-table-grid .last-sm{-ms-flex-order:1;order:1}}@media only screen and (min-width:62em){.compare-table-grid .container{width:61rem}.compare-table-grid .col-md,.compare-table-grid .col-md-1,.compare-table-grid .col-md-10,.compare-table-grid .col-md-11,.compare-table-grid .col-md-12,.compare-table-grid .col-md-2,.compare-table-grid .col-md-3,.compare-table-grid .col-md-4,.compare-table-grid .col-md-5,.compare-table-grid .col-md-6,.compare-table-grid .col-md-7,.compare-table-grid .col-md-8,.compare-table-grid .col-md-9{box-sizing:border-box;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.compare-table-grid .col-md{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.compare-table-grid .col-md-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.compare-table-grid .col-md-2{-ms-flex-preferred-size:16.666%;flex-basis:16.666%;max-width:16.666%}.compare-table-grid .col-md-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.compare-table-grid .col-md-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.compare-table-grid .col-md-5{-ms-flex-preferred-size:41.666%;flex-basis:41.666%;max-width:41.666%}.compare-table-grid .col-md-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.compare-table-grid .col-md-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.compare-table-grid .col-md-8{-ms-flex-preferred-size:66.666%;flex-basis:66.666%;max-width:66.666%}.compare-table-grid .col-md-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.compare-table-grid .col-md-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.compare-table-grid .col-md-11{-ms-flex-preferred-size:91.666%;flex-basis:91.666%;max-width:91.666%}.compare-table-grid .col-md-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.compare-table-grid .col-md-offset-1{margin-left:8.333%}.compare-table-grid .col-md-offset-2{margin-left:16.666%}.compare-table-grid .col-md-offset-3{margin-left:25%}.compare-table-grid .col-md-offset-4{margin-left:33.333%}.compare-table-grid .col-md-offset-5{margin-left:41.666%}.compare-table-grid .col-md-offset-6{margin-left:50%}.compare-table-grid .col-md-offset-7{margin-left:58.333%}.compare-table-grid .col-md-offset-8{margin-left:66.666%}.compare-table-grid .col-md-offset-9{margin-left:75%}.compare-table-grid .col-md-offset-10{margin-left:83.333%}.compare-table-grid .col-md-offset-11{margin-left:91.666%}.compare-table-grid .start-md{-ms-flex-pack:start;justify-content:flex-start;text-align:start}.compare-table-grid .center-md{-ms-flex-pack:center;justify-content:center;text-align:center}.compare-table-grid .end-md{-ms-flex-pack:end;justify-content:flex-end;text-align:end}.compare-table-grid .top-md{-ms-flex-align:start;align-items:flex-start}.compare-table-grid .middle-md{-ms-flex-align:center;align-items:center}.compare-table-grid .bottom-md{-ms-flex-align:end;align-items:flex-end}.compare-table-grid .around-md{-ms-flex-pack:distribute;justify-content:space-around}.compare-table-grid .between-md{-ms-flex-pack:justify;justify-content:space-between}.compare-table-grid .first-md{-ms-flex-order:-1;order:-1}.compare-table-grid .last-md{-ms-flex-order:1;order:1}}@media only screen and (min-width:75em){.compare-table-grid .container{width:71rem}.compare-table-grid .col-lg,.compare-table-grid .col-lg-1,.compare-table-grid .col-lg-10,.compare-table-grid .col-lg-11,.compare-table-grid .col-lg-12,.compare-table-grid .col-lg-2,.compare-table-grid .col-lg-3,.compare-table-grid .col-lg-4,.compare-table-grid .col-lg-5,.compare-table-grid .col-lg-6,.compare-table-grid .col-lg-7,.compare-table-grid .col-lg-8,.compare-table-grid .col-lg-9{box-sizing:border-box;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.compare-table-grid .col-lg{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.compare-table-grid .col-lg-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.compare-table-grid .col-lg-2{-ms-flex-preferred-size:16.666%;flex-basis:16.666%;max-width:16.666%}.compare-table-grid .col-lg-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.compare-table-grid .col-lg-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.compare-table-grid .col-lg-5{-ms-flex-preferred-size:41.666%;flex-basis:41.666%;max-width:41.666%}.compare-table-grid .col-lg-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.compare-table-grid .col-lg-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.compare-table-grid .col-lg-8{-ms-flex-preferred-size:66.666%;flex-basis:66.666%;max-width:66.666%}.compare-table-grid .col-lg-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.compare-table-grid .col-lg-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.compare-table-grid .col-lg-11{-ms-flex-preferred-size:91.666%;flex-basis:91.666%;max-width:91.666%}.compare-table-grid .col-lg-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.compare-table-grid .col-lg-offset-1{margin-left:8.333%}.compare-table-grid .col-lg-offset-2{margin-left:16.666%}.compare-table-grid .col-lg-offset-3{margin-left:25%}.compare-table-grid .col-lg-offset-4{margin-left:33.333%}.compare-table-grid .col-lg-offset-5{margin-left:41.666%}.compare-table-grid .col-lg-offset-6{margin-left:50%}.compare-table-grid .col-lg-offset-7{margin-left:58.333%}.compare-table-grid .col-lg-offset-8{margin-left:66.666%}.compare-table-grid .col-lg-offset-9{margin-left:75%}.compare-table-grid .col-lg-offset-10{margin-left:83.333%}.compare-table-grid .col-lg-offset-11{margin-left:91.666%}.compare-table-grid .start-lg{-ms-flex-pack:start;justify-content:flex-start;text-align:start}.compare-table-grid .center-lg{-ms-flex-pack:center;justify-content:center;text-align:center}.compare-table-grid .end-lg{-ms-flex-pack:end;justify-content:flex-end;text-align:end}.compare-table-grid .top-lg{-ms-flex-align:start;align-items:flex-start}.compare-table-grid .middle-lg{-ms-flex-align:center;align-items:center}.compare-table-grid .bottom-lg{-ms-flex-align:end;align-items:flex-end}.compare-table-grid .around-lg{-ms-flex-pack:distribute;justify-content:space-around}.compare-table-grid .between-lg{-ms-flex-pack:justify;justify-content:space-between}.compare-table-grid .first-lg{-ms-flex-order:-1;order:-1}.compare-table-grid .last-lg{-ms-flex-order:1;order:1}}.compare-table-responsive-image{width:100%;height:auto}.single-compare-table-container.has-keys-column label{display:block}.single-compare-table-container.has-keys-column .single-product-compare-keys,.single-product-compare.has-keys-column .single-product-compare-keys{width:20%;float:left}.single-compare-table-container.has-keys-column .single-compare-table,.single-product-compare.has-keys-column .single-product-compare-products-slick{width:80%;float:left}.single-compare-table-container.has-keys-column .single-compare-table .slick-prev{left:-28%}@media print{.better-product-compare-table-container{overflow-y:auto;height:auto;position:absolute}.compare-table-row{padding:0}.compare-table-grid .col-xs-12{line-height:normal}.better-product-compare-bar,.better-product-compare-table-close,.better-product-compare-table-container label,.compare-table-row-rm{display:none!important}}.better-product-compare-bar-layout-2 .better-product-compare-bar-actions{display:inline-block;padding:20px}#better-product-compare-bar-action-clear,.better-product-compare-bar-hide-placeholder-1 .better-product-compare-bar-item-placeholder{display:none}.better-product-compare-accordion-title:hover{cursor:pointer}.better-product-compare-autocomplete-results{box-shadow:0 12px 58px -7px rgba(69,77,89,.5);position:relative;z-index:2;max-height:400px;overflow-y:auto;width:100%}.better-product-compare-autocomplete-result-item{display:block;float:none;clear:both;padding:10px 15px;background-color:#fff}.better-product-compare-autocomplete-result-item:nth-of-type(odd){background-color:#f7f7f7}.better-product-compare-autocomplete-result-item:hover{background-color:#eee}.better-product-compare-autocomplete-result-item-image{width:25%;float:left}.better-product-compare-autocomplete-result-item-name{width:75%;padding:5%;float:left}`;
    var js_matchheight = `
/* Match Height */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});
`;
    var slickJS = $("<script />", {
      src: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
    });
    $("head").append("<style>" + css_library + "</style>");
    $("head").append("<script>" + js_matchheight + "</script>");
    $("head").append(slickJS);
  };
  /* This is my app's JavaScript */

  var initProductCompare = function ($) {
    var elements = {
      // Add to Compare
      addToCompareLink: ".add-to-compare-button",
      removeFromCompareLink: ".remove-from-compare-button",

      // Compare Bar
      openCloseBarLink: $("#better-product-compare-bar-open-close"),
      openCloseBarIcon: $("#better-product-compare-bar-open-close i"),
      openCloseBarContainer: $(
        "#better-product-compare-bar-open-close-container"
      ),
      compareBar: $("#better-product-compare-bar"),
      compareBarItems: $("#better-product-compare-bar-items"),
      compareBarClear: $("#better-product-compare-bar-action-clear"),
      compareBarRemoveLink: ".better-product-compare-bar-item-remove",

      compareItemRemoveLink: ".better-product-compare-single-item-remove",
      itemRemove: ".better-product-table-remove",
      itemPageRemove: ".better-product-page-remove",

      // Compare Sidebar
      compareSidebar: $("#better-product-compare-sidebar"),
      compareSidebarItems: $("#better-product-compare-sidebar-items"),
      compareSidebarClear: $("#better-product-compare-sidebar-action-clear"),
      compareSidebarRemoveLink: ".better-product-compare-sidebar-item-remove",

      // Actions
      clearAllLink: $(".clear-all-compared-products"),

      // Compare Table
      compareTable: $("#better-product-compare-table"),
      compareTableOpenLink: $(".better-product-compare-table-action-compare"),
      compareTableContainer: $("#better-product-compare-table-container"),
      compareTableCloseLink: $("#better-product-compare-table-close"),

      compareTableHideSimilaritiesCheckbox: $(
        ".better-product-compare-table-hide-similarities"
      ),
      compareTableHighlightDifferencesCheckbox: $(
        ".better-product-compare-table-highlight-differences"
      ),

      compareAutocompleteInput: ".better-product-compare-autocomplete-field",
      compareAutocompleteMessage:
      ".better-product-compare-autocomplete-message",

      // Other default settings
      compareBarHidePlaceholder: 0,
      compare_products: "Compare Products",
      compare_now: "Compare Now",
      clear_all: "Clear All",
    };
    var compareProducts = function (config, shop) {
      var Compare = {
        init: function () {
          this.window = $(window);
          this.currentURL = window.location.href;
          this.documentHeight = $(document).height();
          this.windowHeight = this.window.height();
          this.products = [];
          this.data_image = [];
          this.moneyCurrency = window.Shopify.currency.active
          ? window.Shopify.currency.active
          : "USD";
          this.moneyFormats = {
            USD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} USD",
            },
            EUR: {
              money_format: "&euro;{{amount_with_comma_separator}}",
              money_with_currency_format:
              "&euro;{{amount_with_comma_separator}} EUR",
            },
            GBP: {
              money_format: "&pound;{{amount}}",
              money_with_currency_format: "&pound;{{amount}} GBP",
            },
            CAD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} CAD",
            },
            ALL: {
              money_format: "Lek {{amount}}",
              money_with_currency_format: "Lek {{amount}} ALL",
            },
            DZD: {
              money_format: "DA {{amount}}",
              money_with_currency_format: "DA {{amount}} DZD",
            },
            AOA: {
              money_format: "Kz{{amount}}",
              money_with_currency_format: "Kz{{amount}} AOA",
            },
            ARS: {
              money_format: "${{amount_with_comma_separator}}",
              money_with_currency_format:
              "${{amount_with_comma_separator}} ARS",
            },
            AMD: {
              money_format: "{{amount}} AMD",
              money_with_currency_format: "{{amount}} AMD",
            },
            AWG: {
              money_format: "Afl{{amount}}",
              money_with_currency_format: "Afl{{amount}} AWG",
            },
            AUD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} AUD",
            },
            BBD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} Bds",
            },
            AZN: {
              money_format: "m.{{amount}}",
              money_with_currency_format: "m.{{amount}} AZN",
            },
            BDT: {
              money_format: "Tk {{amount}}",
              money_with_currency_format: "Tk {{amount}} BDT",
            },
            BSD: {
              money_format: "BS${{amount}}",
              money_with_currency_format: "BS${{amount}} BSD",
            },
            BHD: {
              money_format: "{{amount}}0 BD",
              money_with_currency_format: "{{amount}}0 BHD",
            },
            BYR: {
              money_format: "Br {{amount}}",
              money_with_currency_format: "Br {{amount}} BYR",
            },
            BZD: {
              money_format: "BZ${{amount}}",
              money_with_currency_format: "BZ${{amount}} BZD",
            },
            BTN: {
              money_format: "Nu {{amount}}",
              money_with_currency_format: "Nu {{amount}} BTN",
            },
            BAM: {
              money_format: "KM {{amount_with_comma_separator}}",
              money_with_currency_format:
              "KM {{amount_with_comma_separator}} BAM",
            },
            BRL: {
              money_format: "R$ {{amount_with_comma_separator}}",
              money_with_currency_format:
              "R$ {{amount_with_comma_separator}} BRL",
            },
            BOB: {
              money_format: "Bs{{amount_with_comma_separator}}",
              money_with_currency_format:
              "Bs{{amount_with_comma_separator}} BOB",
            },
            BWP: {
              money_format: "P{{amount}}",
              money_with_currency_format: "P{{amount}} BWP",
            },
            BND: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} BND",
            },
            BGN: {
              money_format: "{{amount}} Ð»Ð²",
              money_with_currency_format: "{{amount}} Ð»Ð² BGN",
            },
            MMK: {
              money_format: "K{{amount}}",
              money_with_currency_format: "K{{amount}} MMK",
            },
            KHR: {
              money_format: "KHR{{amount}}",
              money_with_currency_format: "KHR{{amount}}",
            },
            KYD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} KYD",
            },
            XAF: {
              money_format: "FCFA{{amount}}",
              money_with_currency_format: "FCFA{{amount}} XAF",
            },
            CLP: {
              money_format: "${{amount_no_decimals}}",
              money_with_currency_format: "${{amount_no_decimals}} CLP",
            },
            CNY: {
              money_format: "&#165;{{amount}}",
              money_with_currency_format: "&#165;{{amount}} CNY",
            },
            COP: {
              money_format: "${{amount_with_comma_separator}}",
              money_with_currency_format:
              "${{amount_with_comma_separator}} COP",
            },
            CRC: {
              money_format: "&#8353; {{amount_with_comma_separator}}",
              money_with_currency_format:
              "&#8353; {{amount_with_comma_separator}} CRC",
            },
            HRK: {
              money_format: "{{amount_with_comma_separator}} kn",
              money_with_currency_format:
              "{{amount_with_comma_separator}} kn HRK",
            },
            CZK: {
              money_format: "{{amount_with_comma_separator}} K&#269;",
              money_with_currency_format:
              "{{amount_with_comma_separator}} K&#269;",
            },
            DKK: {
              money_format: "{{amount_with_comma_separator}}",
              money_with_currency_format: "kr.{{amount_with_comma_separator}}",
            },
            DOP: {
              money_format: "RD$ {{amount}}",
              money_with_currency_format: "RD$ {{amount}}",
            },
            XCD: {
              money_format: "${{amount}}",
              money_with_currency_format: "EC${{amount}}",
            },
            EGP: {
              money_format: "LE {{amount}}",
              money_with_currency_format: "LE {{amount}} EGP",
            },
            ETB: {
              money_format: "Br{{amount}}",
              money_with_currency_format: "Br{{amount}} ETB",
            },
            XPF: {
              money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
              money_with_currency_format:
              "{{amount_no_decimals_with_comma_separator}} XPF",
            },
            FJD: {
              money_format: "${{amount}}",
              money_with_currency_format: "FJ${{amount}}",
            },
            GMD: {
              money_format: "D {{amount}}",
              money_with_currency_format: "D {{amount}} GMD",
            },
            GHS: {
              money_format: "GH&#8373;{{amount}}",
              money_with_currency_format: "GH&#8373;{{amount}}",
            },
            GTQ: {
              money_format: "Q{{amount}}",
              money_with_currency_format: "{{amount}} GTQ",
            },
            GYD: {
              money_format: "G${{amount}}",
              money_with_currency_format: "${{amount}} GYD",
            },
            GEL: {
              money_format: "{{amount}} GEL",
              money_with_currency_format: "{{amount}} GEL",
            },
            HNL: {
              money_format: "L {{amount}}",
              money_with_currency_format: "L {{amount}} HNL",
            },
            HKD: {
              money_format: "${{amount}}",
              money_with_currency_format: "HK${{amount}}",
            },
            HUF: {
              money_format: "{{amount_no_decimals_with_comma_separator}}",
              money_with_currency_format:
              "{{amount_no_decimals_with_comma_separator}} Ft",
            },
            ISK: {
              money_format: "{{amount_no_decimals}} kr",
              money_with_currency_format: "{{amount_no_decimals}} kr ISK",
            },
            INR: {
              money_format: "Rs. {{amount}}",
              money_with_currency_format: "Rs. {{amount}}",
            },
            IDR: {
              money_format: "{{amount_with_comma_separator}}",
              money_with_currency_format: "Rp {{amount_with_comma_separator}}",
            },
            ILS: {
              money_format: "{{amount}} NIS",
              money_with_currency_format: "{{amount}} NIS",
            },
            JMD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} JMD",
            },
            JPY: {
              money_format: "&#165;{{amount_no_decimals}}",
              money_with_currency_format: "&#165;{{amount_no_decimals}} JPY",
            },
            JEP: {
              money_format: "&pound;{{amount}}",
              money_with_currency_format: "&pound;{{amount}} JEP",
            },
            JOD: {
              money_format: "{{amount}}0 JD",
              money_with_currency_format: "{{amount}}0 JOD",
            },
            KZT: {
              money_format: "{{amount}} KZT",
              money_with_currency_format: "{{amount}} KZT",
            },
            KES: {
              money_format: "KSh{{amount}}",
              money_with_currency_format: "KSh{{amount}}",
            },
            KWD: {
              money_format: "{{amount}}0 KD",
              money_with_currency_format: "{{amount}}0 KWD",
            },
            KGS: {
              money_format: "Ð»Ð²{{amount}}",
              money_with_currency_format: "Ð»Ð²{{amount}}",
            },
            LVL: {
              money_format: "Ls {{amount}}",
              money_with_currency_format: "Ls {{amount}} LVL",
            },
            LBP: {
              money_format: "L&pound;{{amount}}",
              money_with_currency_format: "L&pound;{{amount}} LBP",
            },
            LTL: {
              money_format: "{{amount}} Lt",
              money_with_currency_format: "{{amount}} Lt",
            },
            MGA: {
              money_format: "Ar {{amount}}",
              money_with_currency_format: "Ar {{amount}} MGA",
            },
            MKD: {
              money_format: "Ð´ÐµÐ½ {{amount}}",
              money_with_currency_format: "Ð´ÐµÐ½ {{amount}} MKD",
            },
            MOP: {
              money_format: "MOP${{amount}}",
              money_with_currency_format: "MOP${{amount}}",
            },
            MVR: {
              money_format: "Rf{{amount}}",
              money_with_currency_format: "Rf{{amount}} MRf",
            },
            MXN: {
              money_format: "$ {{amount}}",
              money_with_currency_format: "$ {{amount}} MXN",
            },
            MYR: {
              money_format: "RM{{amount}} MYR",
              money_with_currency_format: "RM{{amount}} MYR",
            },
            MUR: {
              money_format: "Rs {{amount}}",
              money_with_currency_format: "Rs {{amount}} MUR",
            },
            MDL: {
              money_format: "{{amount}} MDL",
              money_with_currency_format: "{{amount}} MDL",
            },
            MAD: {
              money_format: "{{amount}} dh",
              money_with_currency_format: "Dh {{amount}} MAD",
            },
            MNT: {
              money_format: "{{amount_no_decimals}} &#8366",
              money_with_currency_format: "{{amount_no_decimals}} MNT",
            },
            MZN: {
              money_format: "{{amount}} Mt",
              money_with_currency_format: "Mt {{amount}} MZN",
            },
            NAD: {
              money_format: "N${{amount}}",
              money_with_currency_format: "N${{amount}} NAD",
            },
            NPR: {
              money_format: "Rs{{amount}}",
              money_with_currency_format: "Rs{{amount}} NPR",
            },
            ANG: {
              money_format: "&fnof;{{amount}}",
              money_with_currency_format: "{{amount}} NA&fnof;",
            },
            NZD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} NZD",
            },
            NIO: {
              money_format: "C${{amount}}",
              money_with_currency_format: "C${{amount}} NIO",
            },
            NGN: {
              money_format: "&#8358;{{amount}}",
              money_with_currency_format: "&#8358;{{amount}} NGN",
            },
            NOK: {
              money_format: "kr {{amount_with_comma_separator}}",
              money_with_currency_format:
              "kr {{amount_with_comma_separator}} NOK",
            },
            OMR: {
              money_format: "{{amount_with_comma_separator}} OMR",
              money_with_currency_format: "{{amount_with_comma_separator}} OMR",
            },
            PKR: {
              money_format: "Rs.{{amount}}",
              money_with_currency_format: "Rs.{{amount}} PKR",
            },
            PGK: {
              money_format: "K {{amount}}",
              money_with_currency_format: "K {{amount}} PGK",
            },
            PYG: {
              money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
              money_with_currency_format:
              "Gs. {{amount_no_decimals_with_comma_separator}} PYG",
            },
            PEN: {
              money_format: "S/. {{amount}}",
              money_with_currency_format: "S/. {{amount}} PEN",
            },
            PHP: {
              money_format: "&#8369;{{amount}}",
              money_with_currency_format: "&#8369;{{amount}} PHP",
            },
            PLN: {
              money_format: "{{amount_with_comma_separator}} zl",
              money_with_currency_format:
              "{{amount_with_comma_separator}} zl PLN",
            },
            QAR: {
              money_format: "QAR {{amount_with_comma_separator}}",
              money_with_currency_format: "QAR {{amount_with_comma_separator}}",
            },
            RON: {
              money_format: "{{amount_with_comma_separator}} lei",
              money_with_currency_format:
              "{{amount_with_comma_separator}} lei RON",
            },
            RUB: {
              money_format:
              "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
              money_with_currency_format:
              "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB",
            },
            RWF: {
              money_format: "{{amount_no_decimals}} RF",
              money_with_currency_format: "{{amount_no_decimals}} RWF",
            },
            WST: {
              money_format: "WS$ {{amount}}",
              money_with_currency_format: "WS$ {{amount}} WST",
            },
            SAR: {
              money_format: "{{amount}} SR",
              money_with_currency_format: "{{amount}} SAR",
            },
            STD: {
              money_format: "Db {{amount}}",
              money_with_currency_format: "Db {{amount}} STD",
            },
            RSD: {
              money_format: "{{amount}} RSD",
              money_with_currency_format: "{{amount}} RSD",
            },
            SCR: {
              money_format: "Rs {{amount}}",
              money_with_currency_format: "Rs {{amount}} SCR",
            },
            SGD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} SGD",
            },
            SYP: {
              money_format: "S&pound;{{amount}}",
              money_with_currency_format: "S&pound;{{amount}} SYP",
            },
            ZAR: {
              money_format: "R {{amount}}",
              money_with_currency_format: "R {{amount}} ZAR",
            },
            KRW: {
              money_format: "&#8361;{{amount_no_decimals}}",
              money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW",
            },
            LKR: {
              money_format: "Rs {{amount}}",
              money_with_currency_format: "Rs {{amount}} LKR",
            },
            SEK: {
              money_format: "{{amount_no_decimals}} kr",
              money_with_currency_format: "{{amount_no_decimals}} kr SEK",
            },
            CHF: {
              money_format: "SFr. {{amount}}",
              money_with_currency_format: "SFr. {{amount}} CHF",
            },
            TWD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} TWD",
            },
            THB: {
              money_format: "{{amount}} &#xe3f;",
              money_with_currency_format: "{{amount}} &#xe3f; THB",
            },
            TZS: {
              money_format: "{{amount}} TZS",
              money_with_currency_format: "{{amount}} TZS",
            },
            TTD: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}} TTD",
            },
            TND: {
              money_format: "{{amount}}",
              money_with_currency_format: "{{amount}} DT",
            },
            TRY: {
              money_format: "{{amount}}TL",
              money_with_currency_format: "{{amount}}TL",
            },
            UGX: {
              money_format: "Ush {{amount_no_decimals}}",
              money_with_currency_format: "Ush {{amount_no_decimals}} UGX",
            },
            UAH: {
              money_format: "â‚´{{amount}}",
              money_with_currency_format: "â‚´{{amount}} UAH",
            },
            AED: {
              money_format: "Dhs. {{amount}}",
              money_with_currency_format: "Dhs. {{amount}} AED",
            },
            UYU: {
              money_format: "${{amount_with_comma_separator}}",
              money_with_currency_format:
              "${{amount_with_comma_separator}} UYU",
            },
            VUV: {
              money_format: "${{amount}}",
              money_with_currency_format: "${{amount}}VT",
            },
            VEF: {
              money_format: "Bs. {{amount_with_comma_separator}}",
              money_with_currency_format:
              "Bs. {{amount_with_comma_separator}} VEF",
            },
            VND: {
              money_format:
              "{{amount_no_decimals_with_comma_separator}}&#8363;",
              money_with_currency_format:
              "{{amount_no_decimals_with_comma_separator}} VND",
            },
            XBT: {
              money_format: "{{amount_no_decimals}} BTC",
              money_with_currency_format: "{{amount_no_decimals}} BTC",
            },
            XOF: {
              money_format: "CFA{{amount}}",
              money_with_currency_format: "CFA{{amount}} XOF",
            },
            ZMW: {
              money_format: "K{{amount_no_decimals_with_comma_separator}}",
              money_with_currency_format:
              "ZMW{{amount_no_decimals_with_comma_separator}}",
            },
          };
          this.moneyFormat = this.moneyFormats.hasOwnProperty(
            this.moneyCurrency
          )
          ? this.moneyFormats[this.moneyCurrency].money_format
          : "${{amount}}";
          this.isMobile = window.matchMedia(
            "only screen and (max-width: 760px)"
          ).matches;
          if (this.isMobile) {
            var toRemove = config.maxProducts - config.maxProductsMobile;
            for (var i = 0; i < toRemove; i++) {
              $(".better-product-compare-bar-item-placeholder")
              .first()
              .remove();
              $(".better-product-compare-sidebar-item-placeholder")
              .first()
              .remove();
            }
          }

          this.renderCustomCSS();
          this.renderAddToCompareButton();
          this.renderCompareBar();
          this.compareBarOpenClose();
          this.compareBarAdd();
          this.compareBarRemove();
          this.itemRemove();
          this.itemPageRemove();

          this.compareTableOpen();
          this.compareTableClose();
          this.compareTableHighlightDifferences();
          this.compareTableHideSimilarities();

          this.loadSaved();
          this.renderHtmlPage();
          this.comparePageOpen();
        },
        formatMoney: function (cents) {
          if (typeof cents === "string") {
            cents = cents.replace(".", "");
          }
          var value = "";
          var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
          var formatString = this.moneyFormat;

          function formatWithDelimiters(number, precision, thousands, decimal) {
            thousands = thousands || ",";
            decimal = decimal || ".";

            if (isNaN(number) || number === null) {
              return 0;
            }

            number = (number / 100.0).toFixed(precision);

            var parts = number.split(".");
            var dollarsAmount = parts[0].replace(
              /(\d)(?=(\d\d\d)+(?!\d))/g,
              "$1" + thousands
            );
            var centsAmount = parts[1] ? decimal + parts[1] : "";

            return dollarsAmount + centsAmount;
          }

          switch (formatString.match(placeholderRegex)[1]) {
            case "amount":
              value = formatWithDelimiters(cents, 2);
              break;
            case "amount_no_decimals":
              value = formatWithDelimiters(cents, 0);
              break;
            case "amount_with_comma_separator":
              value = formatWithDelimiters(cents, 2, ".", ",");
              break;
            case "amount_no_decimals_with_comma_separator":
              value = formatWithDelimiters(cents, 0, ".", ",");
              break;
            case "amount_no_decimals_with_space_separator":
              value = formatWithDelimiters(cents, 0, " ");
              break;
            case "amount_with_apostrophe_separator":
              value = formatWithDelimiters(cents, 2, "'");
              break;
          }
          return formatString.replace(placeholderRegex, value);
        },

        renderCustomCSS: function () {
          var css = "";
          var compareBarPosition = config.compareBarPosition;
          var compareBarBackgroundColor = config.compareBarBackgroundColor;

          var compareBarHeight = config.compareBarHeight;
          var compareBarItemWidth = config.compareBarItemWidth;
          var compareBarItemHeight = config.compareBarItemHeight;
          var compareBarTextColor = config.compareBarTextColor;
          css += `
.better-product-compare-table-container{z-index:99999 !important;}
.better-product-table-remove{
margin-left: 10px;
display: inline-block;
height: 20px;
width: 20px;
text-align: center;
line-height: 18px;
border-radius: 100%;
}
.better-product-page-remove{
margin-left: 10px;
display: inline-block;
height: 20px;
width: 20px;
text-align: center;
line-height: 18px;
border-radius: 100%;
border:0 !important;
}`;
          css += `.better-product-compare-bar {
${compareBarPosition}: 0;
color: ${compareBarTextColor};
}`;

          css += `.better-product-compare-bar, .better-product-compare-bar-item a, .better-product-compare-bar-item a:hover {
color: ${compareBarTextColor};
}`;

          if (compareBarPosition.toLowerCase() === "top") {
            css += `.better-product-compare-bar-open-close-container {
bottom: -32px;
}`;
            css += `.better-product-compare-bar-open-close {
border-radius: 0 0 15px 15px;
}`;
          } else if (compareBarPosition.toLowerCase() == "bottom") {
            css += `.better-product-compare-bar-open-close-container {
top: -32px;
}`;
            css += `.better-product-compare-bar-open-close {
border-radius: 15px 15px 0 0;
}`;
          }

          css += `a.better-product-compare-bar-action-clear, a.better-product-compare-bar-action-clear:hover {
color: ${compareBarTextColor};
}`;

          css += `.better-product-compare-bar-items {
height: ${compareBarHeight}px;
}`;

          css += `.better-product-compare-bar-item {
max-width: ${compareBarItemWidth}px;
width: ${compareBarItemWidth}px;
height: ${compareBarItemHeight}px;
}`;

          css += `.better-product-compare-bar-open-close, .better-product-compare-bar-items {
background-color: ${compareBarBackgroundColor};
color: ${compareBarTextColor};
}`;

          var compareTableTextColor = config.compareTableTextColor;
          var compareTableBackgroundColor = config.compareTableBackgroundColor;
          var compareTableOddBackgroundColor =
              config.compareTableOddBackgroundColor;
          var compareTableEvenBackgroundColor =
              config.compareTableEvenBackgroundColor;
          var compareTableHighlightBackgroundColor =
              config.compareTableHighlightBackgroundColor;

          css += `.better-product-compare-table-container {
color: ${compareTableTextColor};
background-color: ${compareTableBackgroundColor};
}`;

          css += `.better-product-compare-table-container .compare-table-row:nth-child(even) {
background-color: ${compareTableEvenBackgroundColor};
}`;

          css += `.better-product-compare-table-container .compare-table-row:nth-child(odd) {
background-color: ${compareTableOddBackgroundColor};
}`;

          css += `.better-product-compare-table-container .compare-table-row .compare-table-highlight  {
background-color: ${compareTableHighlightBackgroundColor};
}`;

          css += `.better-product-compare-table-close {
color: ${compareTableTextColor};
}`;

          var compareSingleTableTextColor = config.compareTableTextColor;
          var compareSingleTableOddBackgroundColor =
              config.compareTableOddBackgroundColor;
          var compareSingleTableEvenBackgroundColor =
              config.compareTableEvenBackgroundColor;
          var compareSingleTableHighlightBackgroundColor =
              config.compareTableHighlightBackgroundColor;
          css += `.single-compare-table-container {
color: ${compareSingleTableTextColor};
}`;
          css += `.single-compare-keys{
width:20%;
float:left;
}
.single-compare-keys .single-product-compare-key-column{
word-break: break-word;
}
.better-single-compare-table{
width:80%;
float:left;
}
.better-single-compare-table .slick-prev{left:-28%;}
`;

          css += `.single-compare-table-container .single-product-compare-value.even, 
.single-compare-table-container .single-product-compare-key-column.even {
background-color: ${compareSingleTableEvenBackgroundColor};
}`;

          css += `.single-compare-table-container .single-product-compare-value.odd, 
.single-compare-table-container .single-product-compare-key-column.odd {
background-color: ${compareSingleTableOddBackgroundColor};
}`;

          css += `.single-compare-table-container .single-product-compare-value.compare-table-highlight, 
.single-compare-table-container .single-product-compare-key-column.compare-table-highlight  {
background-color: ${compareSingleTableHighlightBackgroundColor};
}`;
          css += `.fa-spin{ -webkit-animation: fa-spin 2s infinite linear; animation: fa-spin 2s infinite linear;}`;
          css += `@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}`;
          css += `.rte ul.slick-dots{margin:0;}`;
          $("body").append(`<style>${css}</style>`);
        },
        renderAddToCompareButton: function () {
          var addToCompareText = config.addToCompareText;
          var addToCompareLink = $("body").find(elements.addToCompareLink);
          if (addToCompareLink) {
            addToCompareLink.each(function () {
              $(this).append(
                `<span class="add-to-compare-text">${addToCompareText}</span>`
              );
            });
          }
        },
        renderCompareBar: function () {
          var html = "";
          var compareBarPage = config.comparePage;
          if (shop.plan === "PREMIUM" && config.pageOrPopup === "popup") {
            compareBarPage = "#";
          } else {
            compareBarPage = config.comparePage;
          }

          html +=
            '<div id="better-product-compare-table-container" class="better-product-compare-table-container compare-table-grid" style="display:none">';
          if (config.hideSimilarities == 1) {
            html +=
              '<label><input type="checkbox" class="better-product-compare-table-hide-similarities" name="hide_similarities" value="1">Hide Similarities</label>';
          }
          if (config.hightLightDifferences == 1) {
            html +=
              '<label><input type="checkbox" class="better-product-compare-table-highlight-differences" name="highlight_differences" value="1">Highlight Differences</label>';
          }
          html +=
            '<a href="#" id="better-product-compare-table-close" class="better-product-compare-table-close"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512" width="45px" height="45px" style="vertical-align:middle;"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></a>';
          html +=
            '<div id="better-product-compare-table" class="better-product-compare-table "></div>';
          html += "</div>";
          html +=
            '<div id="better-product-compare-bar" class="better-product-compare-bar better-product-compare-bar-layout-' +
            config.compareBarLayout +
            " better-product-compare-bar-hide-placeholder-" +
            elements.compareBarHidePlaceholder +
            '">';

          html +=
            '<div id="better-product-compare-bar-open-close-container" class="better-product-compare-bar-open-close-container">';
          html +=
            '<a href="#" id="better-product-compare-bar-open-close" class="better-product-compare-bar-open-close">' +
            elements.compare_products +
            ' <span class="icon-bar"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" class="svg-inline--fa fa-angle-double-up fa-w-10" role="img" viewBox="0 0 320 512" width="14px" height="14px"><path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg></span></a>';
          html += "</div>";

          html +=
            '<div id="better-product-compare-bar-items" class="better-product-compare-bar-items" style="display: none;">';

          for (var i = 0; i < config.maxProducts; i++) {
            html += this.getSingleItemTemplate();
          }

          // Compare Bar Actions
          html +=
            '<div id="better-product-compare-bar-actions" class="better-product-compare-bar-actions">';
          html +=
            '<a href="#" id="better-product-compare-bar-action-clear" class="better-product-compare-bar-action-clear clear-all-compared-products">' +
            elements.clear_all +
            ' <i class="fa fa-times"></i></a>';
          html +=
            '<a href="' +
            compareBarPage +
            '" id="better-product-compare-bar-action-compare" class="better-product-compare-table-action-compare">' +
            elements.compare_now +
            ' <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" viewBox="0 0 320 512" width="22px" height="22px" style="vertical-align:middle;"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg></a>';
          html += "</div>";

          html += "</div>";

          html += "</div>";

          $("body").append(html);
        },
        getSingleItemTemplate() {
          var html = "";
          html +=
            '<div class="better-product-compare-bar-item-container better-product-compare-bar-item-placeholder">';
          html += '<div class="better-product-compare-bar-item">';

          html += "</div>";
          html += "</div>";

          return html;
        },
        loadSaved: function () {
          var that = this;
          var savedProducts = that.readCookie("compare_products_products");
          var urlProducts = that.getParameterByName("compare");
          if (!that.isEmpty(savedProducts)) {
            that.products = savedProducts;
            $.each(savedProducts, function (i, product) {
              that.getSingleProduct(product.handle, true);
            });

            $.each($(elements.addToCompareLink), function (i, index) {
              var $this = $(this);
              var product_id = $(index).data("product-id");
              if (typeof that.products[product_id] != "undefined") {
                $this
                .removeClass("add-to-compare-button")
                .addClass("remove-from-compare-button")
                .html(config.removeFromCompareText);
              }
            });
          } else if (!that.isEmpty(urlProducts)) {
            var jsonStrig = "{";
            var items = urlProducts.split(",");
            for (var i = 0; i < items.length; i++) {
              jsonStrig += '"' + items[i] + '":"' + items[i] + '",';
            }
            jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
            jsonStrig += "}";
            that.products = JSON.parse(jsonStrig);
            $.each(that.products, function (i, product) {
              that.getSingleProduct(product.handle);
            });

            $.each($(elements.addToCompareLink), function (i, index) {
              var $this = $(this);
              var product_id = $(index).data("product-id");
              if (typeof that.products[product_id] != "undefined") {
                $this
                .removeClass("add-to-compare-button")
                .addClass("remove-from-compare-button")
                .html(config.removeFromCompareText);
              }
            });
          }
        },
        compareBarAdd: function () {
          var that = this;
          var product_url;
          $(document).on("click", elements.addToCompareLink, function (e) {
            e.preventDefault();
            var $this = $(this);
            $this
            .addClass("loading")
            .html(
              '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="svg-inline--fa fa-sync-alt fa-w-16 fa-spin" role="img" viewBox="0 0 512 512" width="15px" height="15px"><path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"/></svg>'
            );
            product_url = $this.data("product-url");
            if ($this.attr("href") != "#") {
              that.products = {};
              that.deleteCookie("compare_products_products");
              var savedProducts = that.readCookie("compare_products_products");
              that.buildReplaceState();
              window.location = $this.attr("href");
              return;
            }

            if (product_url == "") {
              $this.html(config.addToCompareText);
              return;
            }

            if (typeof that.products[product_url] != "undefined") {
              $this.html(config.addToCompareText);
              return;
            }

            // if(that.isEmpty(that.products)) {
            // 	that.compareBarClose();
            // }

            that.getSingleProduct(product_url);
          });
        },
        itemRemove: function () {
          var that = this;
          $(document).on("click", elements.itemRemove, function (e) {
            e.preventDefault();
            var product_handle = $(this).data("product-handle");
            $(document)
            .find(
              ".remove-from-compare-button[data-product-url='" +
              product_handle +
              "']"
            )
            .removeClass("remove-from-compare-button")
            .addClass("add-to-compare-button")
            .html(config.addToCompareText);
            $(document)
            .find(
              ".compare-table-row-attribute-value[data-handle='" +
              product_handle +
              "']"
            )
            .remove();
            that.removeProduct(product_handle);
          });
        },
        compareBarRemove: function () {
          var that = this;
          $(".single-compare-table").on(
            "click",
            elements.compareItemRemoveLink,
            function (e) {
              e.preventDefault();
              var $this = $(this);
              var product_url = $this.data("product-url");
              $(document)
              .find(
                '.remove-from-compare-button[data-product-url="' +
                product_url +
                '"]'
              )
              .removeClass("remove-from-compare-button")
              .addClass("add-to-compare-button")
              .html(config.addToCompareText);
              $(document)
              .find(".single-product-compare-column-" + product_url)
              .remove();
              that.removeProduct(product_url);
            }
          );
          $(".better-product-compare-bar-items").on(
            "click",
            elements.compareBarRemoveLink,
            function (e) {
              e.preventDefault();
              var $this = $(this);
              var product_url = $this.data("product-url");
              $(document)
              .find(
                '.remove-from-compare-button[data-product-url	="' +
                product_url +
                '"]'
              )
              .removeClass("remove-from-compare-button")
              .addClass("add-to-compare-button")
              .html(config.addToCompareText);
              that.removeProduct(product_url);
            }
          );

          $(".better-product-compare-sidebar-items").on(
            "click",
            elements.compareSidebarRemoveLink,
            function (e) {
              e.preventDefault();

              var $this = $(this);
              var product_url = $this.data("product-url");

              $(document)
              .find(
                '.remove-from-compare-button[data-product-url="' +
                product_url +
                '"]'
              )
              .removeClass("remove-from-compare-button")
              .addClass("add-to-compare-button")
              .html(config.addToCompareText);
              that.removeProduct(product_url);
            }
          );

          $(document).on("click", elements.removeFromCompareLink, function (e) {
            e.preventDefault();
            var $this = $(this);
            var product_url = $this.data("product-url");
            $(document)
            .find(
              '.remove-from-compare-button[data-product-url="' +
              product_url +
              '"]'
            )
            .removeClass("remove-from-compare-button")
            .addClass("add-to-compare-button")
            .html(config.addToCompareText);
            that.removeProduct(product_url);
          });
        },
        removeProduct: function (product_url) {
          var that = this;
          var barContainer = $(".better-product-compare-bar-items").find(
            '.better-product-compare-bar-item-container[data-product-url="' +
            product_url +
            '"]'
          );
          barContainer
          .addClass("better-product-compare-bar-item-placeholder")
          .removeData("data-product-url");
          barContainer.find(".better-product-compare-bar-item").html("");

          var sidebarContainer = $(
            ".better-product-compare-sidebar-items"
          ).find(
            '.better-product-compare-sidebar-item-container[data-product-url="' +
            product_url +
            '"]'
          );
          sidebarContainer
          .addClass("better-product-compare-sidebar-item-placeholder")
          .removeData("data-product-url");
          sidebarContainer
          .find(".better-product-compare-sidebar-item")
          .html("");

          //delete that.products[product_url];
          var list_products = that.readCookie("compare_products_products");
          list_products = list_products.filter(function (item_product) {
            return item_product.handle != product_url;
          });
          that.products = list_products;

          var list_image = that.data_image;
          list_image = list_image.filter(function (item_image) {
            return item_image.handle != product_url;
          });
          that.data_image = list_image;
          if (window.history.replaceState) {
            that.buildReplaceState();
          }

          that.saveCookie("compare_products_products", that.products, 30);
        },
        getSingleProduct: function (product_url, isSaved) {
          var that = this;
          if (isSaved === undefined) {
            isSaved = false;
          }
          jQuery.ajax({
            url: "/products/" + product_url + ".json",
            type: "get",
            dataType: "JSON",
            success: function (response) {
              if (response.status == "error") {
                var remove = confirm(response.message);

                if (remove == true) {
                  that.settings.clearAllLink.trigger("click");
                  that.getSingleProduct(product_url);
                  return;
                } else {
                  $(
                    '.add-to-compare-button[data-product-url="' +
                    product_url +
                    '"]'
                  ).html(config.addToCompareText);
                  return;
                }
              }
              let product = response.product;
              that.data_image.push({
                handle: product.handle,
                image: product.images[0].src,
              });
              let data = {
                ID: product.id,
                img: product.images[0].src,
                title: product.title,
                url: `products/${product.handle}`,
                handle: product.handle,
              };
              if (!isSaved) {
                that.products.push({ id: product.id, handle: product.handle });
              }
              if (that.isMobile) {
                config.maxProducts = config.maxProductsMobile;
              }

              if (that.getObjectSize(that.products) > config.maxProducts) {
                delete that.products[product_url];
                $(
                  '.add-to-compare-button[data-product-url="' +
                  product_url +
                  '"]'
                ).html(config.addToCompareText);
                $(
                  '.add-to-compare-button[data-product-url="' +
                  product_url +
                  '"]'
                ).removeClass("loading");
                return;
              }
              that.saveCookie("compare_products_products", that.products, 30);

              if (window.history.replaceState) {
                that.buildReplaceState();
              }

              if ($("#better-product-compare-bar").length > 0) {
                that.addProductToBar(data, isSaved);
              }
              if ($("#better-product-compare-sidebar").length > 0) {
                that.addProductToSidebar(data);
              }
              $(
                '.add-to-compare-button[data-product-url="' + product_url + '"]'
              )
              .removeClass("loading add-to-compare-button")
              .addClass("remove-from-compare-button")
              .html(config.removeFromCompareText);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              that.removeProduct(product_url);
              console.log(
                "An Error Occured: " +
                jqXHR.status +
                " " +
                errorThrown +
                "! Please contact System Administrator!"
              );
            },
          });
        },
        addProductToBar: function (product, isSaved) {
          var that = this;
          var emptyBarItemContainers = $(
            ".better-product-compare-bar-item-placeholder"
          );
          var product_url = product.url;
          if (isSaved === undefined) {
            isSaved = false;
          }

          if (emptyBarItemContainers.length > 0) {
            var emptyBarItemContainer = $(emptyBarItemContainers[0]);
            emptyBarItemContainer.attr("data-product-url", product.handle);
            emptyBarItemContainer.removeClass(
              "better-product-compare-bar-item-placeholder"
            );

            var html =
                '<a href="/' +
                product.url +
                '"><img src="' +
                product.img +
                '"></a><a href="#" data-product-url="' +
                product.handle +
                '" class="better-product-compare-bar-item-remove"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512" width="15px" height="15px" style="vertical-align:middle;"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></a>';
            html +=
              '<a href="/' +
              product.url +
              '"><div class="better-product-compare-bar-title">' +
              product.title +
              "</div></a>";
            emptyBarItemContainer
            .find(".better-product-compare-bar-item")
            .html(html);

            if (that.getObjectSize(that.products) >= 2 && !isSaved) {
              that.compareBarOpen();
            }
          }
        },
        addProductToSidebar: function (product) {
          var that = this;
          var emptySidebarItemContainers = $(
            ".better-product-compare-sidebar-item-placeholder"
          );
          var compareBarExists = config.compareBar;

          var product_url = product.url;

          if (emptySidebarItemContainers.length > 0) {
            var emptySidebarItemContainer = $(emptySidebarItemContainers[0]);
            emptySidebarItemContainer.attr("data-product-url", product_url);
            emptySidebarItemContainer.removeClass(
              "better-product-compare-sidebar-item-placeholder"
            );

            var html = '<div class="better-product-compare-sidebar-img">';
            html +=
              '<a href="' +
              product.url +
              '"><img src="' +
              product["img"] +
              '"></a><a href="#" data-product-id="' +
              product_id +
              '" class="better-product-compare-sidebar-item-remove"><i class="fa fa-times"></i></a>';
            html += "</div>";
            html +=
              '<a href="' +
              product.url +
              '"><div class="better-product-compare-sidebar-title">' +
              product.title +
              "</div></a>";
            html +=
              '<div class="better-product-compare-sidebar-clearfix"></div>';
            emptySidebarItemContainer
            .find(".better-product-compare-sidebar-item")
            .html(html);
          }
        },
        compareBarOpenClose: function () {
          var that = this;

          $(document).on(
            "click",
            ".better-product-compare-bar-open-close",
            function (e) {
              e.preventDefault();
              if ($("#better-product-compare-bar-items").is(":visible")) {
                that.compareBarClose();
              } else {
                that.compareBarOpen();
              }
            }
          );
        },
        compareBarOpen: function () {
          $("#better-product-compare-bar-items").slideDown(1000);
          $("#better-product-compare-bar-open-close .icon-bar").html(
            '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-down" class="svg-inline--fa fa-angle-double-down fa-w-10" role="img" viewBox="0 0 320 512" width="14px" height="14px"><path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"/></svg>'
          );
        },
        compareBarClose: function () {
          $("#better-product-compare-bar-items").slideUp(1000);
          $("#better-product-compare-bar-open-close .icon-bar").html(
            '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" class="svg-inline--fa fa-angle-double-up fa-w-10" role="img" viewBox="0 0 320 512" width="14px" height="14px"><path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>'
          );
        },
        compareTableOpen: function () {
          var that = this;
          $(document).on(
            "click",
            ".better-product-compare-table-action-compare",
            function (e) {
              e.preventDefault();
              var link = $(this).attr("href");
              if (that.isEmpty(that.products)) {
                return;
              }
              var products = that.products;
              var data_id = [];
              $.each(products, function (i, product_url) {
                data_id.push(product_url.id);
              });
              if (link == "#") {
                var products = that.products;
                that.compareBarClose();
                jQuery.ajax({
                  url:
                  "https://product-compare.simesy.com/api/get_all_product",
                  type: "post",
                  dataType: "JSON",
                  data: {
                    shop: window.Shopify.shop,
                    productIds: data_id,
                  },
                  success: function (response) {
                    $("#better-product-compare-table-container").slideDown(
                      1000
                    );
                    if (that.isEmpty(response)) {
                      return;
                    }
                    that.renderCompareTable(response.data.nodes);
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    console.log(
                      "An Error Occured: " +
                      jqXHR.status +
                      " " +
                      errorThrown +
                      "! Please contact System Administrator!"
                    );
                  },
                });
              } else {
                window.location = link;
              }
            }
          );
        },
        renderCompareTable: function (data) {
          var that = this;
          var html = "";
          var html_img = "";
          var compareTable = elements.compareTable;

          var maxCols = 12;
          var attributeNameCols = 2;
          var productsCount = that.getObjectSize(that.products);

          maxCols = maxCols - attributeNameCols;

          var singleColXS = Math.floor(12 / productsCount);
          var singleCol = Math.floor(maxCols / productsCount);
          var tableCompareValues = {};
          var compareValue = ".compare-table-row-attribute-value-image";
          tableCompareValues[compareValue] = compareValue;
          compareTable.html();
          html_img +=
            '<div class="row compare-table-row compare-table-row-image">';
          html_img +=
            '<div class="col-xs-12 col-sm-2 compare-table-row-attribute-name compare-table-row-attribute-name-image">Image</div>';
          $.each(data, function (i, products) {
            html_img +=
              '<div class="col-xs-' +
              singleColXS +
              " col-sm-" +
              singleCol +
              ' compare-table-row-attribute-value compare-table-row-attribute-value-image" data-handle="' +
              products.handle +
              '"><img src="' +
              products.featuredImage.originalSrc +
              '"/></div>';
          });
          html_img += "</div>";
          $.each(config.dataToCompare, function (i, compare) {
            if (compare.value) {
              compareValue =
                ".compare-table-row-attribute-value-" + compare.key;
              tableCompareValues[compareValue] = compareValue;
              html +=
                '<div class="row compare-table-row compare-table-row-' +
                compare.key +
                '">';
              html +=
                '<div class="col-xs-12 col-sm-2 compare-table-row-attribute-name compare-table-row-attribute-name-' +
                compare.key +
                '">' +
                compare.label.replace("(" + compare.key + ")", "") +
                "</div>";
              $.each(data, function (i, products) {
                if (compare.key == "title") {
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    products.title +
                    '<a href="#" data-product-handle="' +
                    products.handle +
                    '" class="better-product-table-remove"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512" width="15px" height="15px" style="vertical-align:middle;"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></a></div>';
                }
                if (compare.key == "price") {
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    that.formatMoney(
                    products.priceRangeV2.minVariantPrice.amount
                  ) +
                    "</div>";
                }
                if (compare.key == "type") {
                  var pro_type =
                      products.productType != ""
                  ? products.productType
                  : config.notAvailableText;
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    pro_type +
                    "</div>";
                }
                if (compare.key == "vendor") {
                  var pro_vendor =
                      products.vendor != ""
                  ? products.vendor
                  : config.notAvailableText;
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    pro_vendor +
                    "</div>";
                }
                if (compare.key == "description") {
                  var pro_des =
                      products.vendor != ""
                  ? products.description
                  : config.notAvailableText;
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    pro_des +
                    "</div>";
                }
                if (compare.key == "options") {
                  var html_option = "";
                  $.each(products.options, function (i, option) {
                    html_option +=
                      option.name +
                      ": " +
                      Object.keys(option.values)
                    .map(function (k) {
                      return option.values[k];
                    })
                    .join(", ") +
                      "<br/>";
                  });
                  var text =
                      html_option != "" ? html_option : config.notAvailableText;
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    text +
                    "</div>";
                }
                if (compare.key.includes("product_info")) {
                  var meta_key = compare.key.replace("product_info.", "");
                  var title_meta = config.notAvailableText;
                  $.each(products.metafields.edges, function (i, field) {
                    if (field.node.key == meta_key) {
                      title_meta = field.node.value;
                    }
                  });
                  html +=
                    '<div class="col-xs-' +
                    singleColXS +
                    " col-sm-" +
                    singleCol +
                    " compare-table-row-attribute-value compare-table-row-attribute-value-" +
                    compare.key +
                    '" data-handle="' +
                    products.handle +
                    '">' +
                    title_meta +
                    "</div>";
                }
              });
              html += "</div>";
            }
          });
          html += '<div class="row compare-table-row compare-table-row-more">';
          html +=
            '<div class="col-xs-12 col-sm-2 compare-table-row-attribute-name compare-table-row-attribute-name-more"></div>';
          $.each(data, function (i, products) {
            html +=
              '<div class="col-xs-' +
              singleColXS +
              " col-sm-" +
              singleCol +
              ' compare-table-row-attribute-value compare-table-row-attribute-value-more text-center" data-handle="' +
              products.handle +
              '"><a href="/products/' +
              products.handle +
              '" class="btn button btn-default theme-button theme-btn">Read more</a></div>';
          });
          html_img += "</div>";

          that.tableCompareValues = tableCompareValues;
          $("#better-product-compare-table").html(html_img + html);

          $(".compare-table-row-attribute-value").each(function () {
            var compareValue = "." + $(this).attr("class").slice(43);
          });
        },
        compareTableClose: function () {
          var that = this;

          $("#better-product-compare-table-close").on("click", function (e) {
            e.preventDefault();
            $("#better-product-compare-table-container").slideUp(1000);

            // that.compareBarOpen();
          });
        },
        compareTableHighlightDifferences: function () {
          var that = this;
          $(document).on(
            "click",
            ".better-product-compare-table-highlight-differences",
            function (e) {
              var $this = $(this);

              if ($this.is(":not(:checked)")) {
                $.each(that.tableCompareValues, function (i, index) {
                  $(index).removeClass("compare-table-highlight");
                });
                return;
              }
              $.each(that.tableCompareValues, function (i, index) {
                var values = [];
                var columns = $(index);
                $.each(columns, function () {
                  values.push($(this).text());
                });

                if (values.length > 0) {
                  var allSame = !!values.reduce(function (a, b) {
                    return a === b ? a : NaN;
                  });
                  if (allSame == false) {
                    columns.addClass("compare-table-highlight");
                  }
                }
              });
            }
          );
        },
        compareTableHideSimilarities: function () {
          var that = this;
          $(document).on(
            "click",
            ".better-product-compare-table-hide-similarities",
            function (e) {
              var $this = $(this);

              if ($this.is(":not(:checked)")) {
                $.each(that.tableCompareValues, function (i, index) {
                  var row = index.replace("value", "name");
                  $(row).removeClass("compare-table-hidden");
                  $(index).removeClass("compare-table-hidden");
                });
                return;
              }

              $.each(that.tableCompareValues, function (i, index) {
                var values = [];
                var columns = $this.parent().parent().find(index);

                if (
                  i == ".compare-table-row-attribute-value-rm" ||
                  i.substr(0, 40) == ".compare-table-row-attribute-value-group"
                ) {
                  return;
                }

                $.each(columns, function () {
                  values.push($(this).text());
                });
                if (values.length > 0) {
                  that.tableCompareValues;
                  var allSame = !!values.reduce(function (a, b) {
                    return a === b ? a : NaN;
                    console.log(a);
                    console.log(b);
                  });
                  if (allSame == true) {
                    var row = index.replace("value", "name");
                    $(row).addClass("compare-table-hidden");
                    columns.addClass("compare-table-hidden");
                  }
                }
              });
            }
          );
        },
        renderHtmlPage: function () {
          var html = "";
          if (config.hideSimilarities == 1) {
            html +=
              '<label><input type="checkbox" class="better-product-compare-table-hide-similarities" name="hide_similarities" value="1">Hide Similarities</label>';
          }
          if (config.hightLightDifferences == 1) {
            html +=
              '<label><input type="checkbox" class="better-product-compare-table-highlight-differences" name="highlight_differences" value="1">Highlight Differences</label>';
          }

          html +=
            '<div class="clearfix"><div class="single-compare-keys"></div><div id="better-single-compare-table" class="better-single-compare-table single-compare-table-slick"></div></div>';
          $("#single-compare-table-container").html(html);
        },
        comparePageOpen: function () {
          var num = 0;
          var that = this;
          var handle = window.location.href;
          if (handle.indexOf("pages") != -1) {
            $("#better-product-compare-bar-open-close-container").hide();
            var products = that.products;
            that.compareBarClose();

            if (that.getObjectSize(that.products) > 0) {
              var data_id = [];
              $.each(products, function (i, product_url) {
                data_id.push(product_url.id);
              });
              jQuery.ajax({
                url:
                "https://product-compare.simesy.com/api/get_all_product",
                type: "post",
                dataType: "JSON",
                data: {
                  shop: window.Shopify.shop,
                  productIds: data_id,
                },
                success: function (response) {
                  if (that.isEmpty(response)) {
                    return;
                  }
                  that.renderCompareTablePage(response.data.nodes);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  console.log(
                    "An Error Occured: " +
                    jqXHR.status +
                    " " +
                    errorThrown +
                    "! Please contact System Administrator!"
                  );
                },
              });
            } else {
              var data_id = [];
              var list_id = $(".single-compare-table-container").data(
                "product-id"
              );
              list_id = list_id.split(",");
              $.each(list_id, function (i, v) {
                data_id.push(v.trim());
              });
              jQuery.ajax({
                url:
                "https://product-compare.simesy.com/api/get_all_product",
                type: "post",
                dataType: "JSON",
                data: {
                  shop: window.Shopify.shop,
                  productIds: data_id,
                },
                success: function (response) {
                  if (that.isEmpty(response)) {
                    return;
                  }
                  console.log(response);
                  that.renderCompareTablePage(response.data.nodes);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  console.log(
                    "An Error Occured: " +
                    jqXHR.status +
                    " " +
                    errorThrown +
                    "! Please contact System Administrator!"
                  );
                },
              });
            }
          }
        },

        renderCompareTablePage: function (data) {
          var url = window.location.href;
          var that = this;
          var html = "";
          var html_keys =
              '<div class="single-product-compare-key-column single-product-compare-value-image single-product-compare-value-th even"></div>';
          var compareTable = elements.compareTable;
          var tableCompareValues = {};
          var singleCompareValues = {};
          compareTable.html();
          var number_first = 0;
          var compareValue = ".compare-table-row-attribute-value-image";
          tableCompareValues[compareValue] = compareValue;
          var classCompare = ".single-product-compare-value-image";
          singleCompareValues[classCompare] = classCompare;
          $.each(config.dataToCompare, function (i, compare) {
            var odd_even_key = i % 2 == 0 ? "odd" : "even";
            html_keys +=
              '<div class="single-product-compare-key-column single-product-compare-value-' +
              compare.key.replace("product_info.", "") +
              " single-product-compare-value-th " +
              odd_even_key +
              '"><b>' +
              compare.label.replace("(" + compare.key + ")", "") +
              "</b></div>";
          });
          $(".single-compare-keys").html(html_keys);
          $.each(data, function (i, products) {
            number_first++;
            var number = 1;
            var odd_even_image = number_first % 2 == 0 ? "even" : "odd";
            html +=
              '<div class="single-product-compare-item" data-handle="' +
              products.handle +
              '">';
            html +=
              '<div class="single-product-compare-value ' +
              odd_even_image +
              ' single-product-compare-value-image compare-table-row-attribute-value-image">';
            html += '<span class="single-product-compare-key"></span>';
            html += '<img src="' + products.featuredImage.originalSrc + '"/>';
            html += "</div>";
            $.each(config.dataToCompare, function (i, compare) {
              if (compare.value) {
                compareValue =
                  ".compare-table-row-attribute-value-" +
                  compare.key.replace("product_info.", "");
                var odd_even =
                    (number + number_first) % 2 == 0 ? "even" : "odd";
                number++;
                tableCompareValues[compareValue] = compareValue;

                classCompare =
                  ".single-product-compare-value-" +
                  compare.key.replace("product_info.", "");
                singleCompareValues[classCompare] = classCompare;
                if (compare.key == "title") {
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    compare.key +
                    " compare-table-row-attribute-value-" +
                    compare.key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    products.title +
                    '<a href="#" data-product-handle="' +
                    products.handle +
                    '" class="better-product-page-remove"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512" width="15px" height="15px" style="vertical-align:middle;"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></a>';
                  html += "</div>";
                }
                if (compare.key == "price") {
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    compare.key +
                    " compare-table-row-attribute-value-" +
                    compare.key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    that.formatMoney(
                    products.priceRangeV2.minVariantPrice.amount
                  ) +
                    "";
                  html += "</div>";
                }
                if (compare.key == "type") {
                  var pro_type =
                      products.productType != ""
                  ? products.productType
                  : config.notAvailableText;
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    compare.key +
                    " compare-table-row-attribute-value-" +
                    compare.key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    pro_type +
                    "";
                  html += "</div>";
                }
                if (compare.key == "vendor") {
                  var pro_vendor =
                      products.vendor != ""
                  ? products.vendor
                  : config.notAvailableText;
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    compare.key +
                    " compare-table-row-attribute-value-" +
                    compare.key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    pro_vendor +
                    "";
                  html += "</div>";
                }
                if (compare.key == "description") {
                  var pro_des =
                      products.description != ""
                  ? products.description
                  : config.notAvailableText;
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    compare.key +
                    " compare-table-row-attribute-value-" +
                    compare.key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    pro_des +
                    "";
                  html += "</div>";
                }
                if (compare.key == "options") {
                  var html_option = "";
                  $.each(products.options, function (i, option) {
                    html_option +=
                      option.name +
                      ": " +
                      Object.keys(option.values)
                    .map(function (k) {
                      return option.values[k];
                    })
                    .join(", ") +
                      "<br/>";
                  });
                  var text =
                      html_option != "" ? html_option : config.notAvailableText;
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    compare.key +
                    " compare-table-row-attribute-value-" +
                    compare.key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    text +
                    "";
                  html += "</div>";
                }
                if (compare.key.includes("product_info")) {
                  var meta_key = compare.key.replace("product_info.", "");
                  var title_meta = config.notAvailableText;
                  $.each(products.metafields.edges, function (i, field) {
                    if (field.node.key == meta_key) {
                      title_meta = field.node.value;
                    }
                  });
                  html +=
                    '<div class="single-product-compare-value ' +
                    odd_even +
                    " single-product-compare-value-" +
                    meta_key +
                    " compare-table-row-attribute-value-" +
                    meta_key +
                    '">';
                  html +=
                    '<span class="single-product-compare-key"></span>' +
                    title_meta +
                    "";
                  html += "</div>";
                }
              }
            });
            html +=
              '<div class="single-product-compare-value ' +
              odd_even_image +
              ' single-product-compare-value-more compare-table-row-attribute-value-more text-center">';
            html += '<span class="single-product-compare-key"></span>';
            html +=
              '<a href="/products/' +
              products.handle +
              '" class="btn button btn-default theme-button theme-btn">Read more</a></div>';
            html += "</div>";
          });
          that.tableCompareValues = tableCompareValues;

          that.singleCompareValues = singleCompareValues;
          $("#better-single-compare-table").html(html);

          var sliderArrows = true,
              sliderDots = true,
              sliderInfinite = true,
              sliderToShow = 3,
              sliderToScroll = 1;
          if (shop.plan === "PREMIUM") {
            sliderArrows =
              config.singleCompareTableSliderArrows == 1 ? true : false;
            sliderDots =
              config.singleCompareTableSliderDots == 1 ? true : false;
            sliderInfinite =
              config.singleCompareTableSliderInfinite == 1 ? true : false;
            sliderToShow = config.singleCompareTableSliderSlidesToShow;
            sliderToScroll = config.singleCompareTableSliderSlidesToScroll;
          }
          $(".single-compare-table-slick").slick({
            dots: sliderDots,
            arrows: true,
            infinite: sliderInfinite,
            slidesToShow: parseInt(sliderToShow),
            sliderToScroll: parseInt(sliderToScroll),
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: parseInt(sliderToShow),
                  sliderToScroll: parseInt(sliderToScroll),
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
              });

              $.each(that.singleCompareValues, function (i, index) {
              $(index).matchHeight({ byRow: false });
              });
              },
              itemPageRemove: function () {
              var that = this;
              $(document).on("click", elements.itemPageRemove, function (e) {
              e.preventDefault();
              var product_handle = $(this).data("product-handle");
              var index = $(
              ".single-product-compare-item[data-handle='" +
              product_handle +
              "']"
              ).attr("data-slick-index");
              that.removeProduct(product_handle);
              $(".single-compare-table-slick").slick("slickRemove", index);
              });
              },
              buildReplaceState: function () {
              var that = this;
              var products = that.products;
              /*if (that.settings.disableReplaceState == "1") {
            return;
          }*/

              that.currentURL = that.removeURLParameter(that.currentURL, "compare");

              var queryCheck = that.currentURL.split("?");
              if (queryCheck.length > 1 && queryCheck[1] !== "") {
            var url = that.currentURL + "&";
          } else if (queryCheck.length > 1 && queryCheck[1] == "") {
            var url = that.currentURL;
          } else {
            var url = that.currentURL + "?";
          }
          if (!that.isEmpty(products)) {
            url +=
              "compare=" +
              Object.keys(products)
            .map(function (k) {
              return products[k];
            })
            .join(",");
          }

          //window.history.replaceState("woo_better_compare","WooCommerce Better Compare",url);
        },
        getParameterByName: function (name, url) {
          if (!url) url = window.location.href;
          name = name.replace(/[\[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
              results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return "";
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        removeURLParameter: function (url, parameter) {
          //prefer to use l.search if you have a location/link object
          var urlparts = url.split("?");
          if (urlparts.length >= 2) {
            var prefix = encodeURIComponent(parameter) + "=";
            var pars = urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0; ) {
              //idiom for string.startsWith
              if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
              }
            }

            url = urlparts[0] + "?" + pars.join("&");
            return url;
          } else {
            return url;
          }
        },
        //////////////////////
        ///Helper Functions///
        //////////////////////
        isEmpty: function (obj) {
          if (obj == null) return true;
          if (obj.length > 0) return false;
          if (obj.length === 0) return true;

          for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
          }

          return true;
        },
        saveCookie: function (name, value, days) {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toGMTString();
          }

          var cookie =
              name + "=" + JSON.stringify(value) + expires + "; path=/;";
          document.cookie = cookie;
        },
        readCookie: function (name) {
          var result = document.cookie.match(new RegExp(name + "=([^;]+)"));
          result && (result = JSON.parse(result[1]));
          return result;
        },
        deleteCookie: function (name) {
          document.cookie = [
            name,
            "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/;",
          ].join("");
            },
            getObjectSize: function (obj) {
            var size = 0,
            key;
            for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
            }
            return size;
            },
            };
            Compare.init();
            };
            var pathname = window.location.pathname;
            var after_get_config = function (config, shop) {
            $("body").append(
            '<div class="better-product-compare__compare-bar"></div>'
            );
            var target_selectors = [
            ".grid-uniform > .grid__item > div",
            ".grid__item",
            ".grid-item",
            ".grid .card",
            ".ProductList .ProductItem",
            ".collection .product-item",
            ".collection-products .product",
            ".products-grid .product",
            ".productgrid--items .productgrid--item .productitem",
            ".grid-collection .grid-product",
            ".product__grid-item",
            ".thumbnail",
            "li",
          ];
          var unwanted_selectors = [
            "header",
            "nav",
            ".featured-product",
            ".feature-row",
          ];
            var product_link_selectors = [
            '#shopify-section-collection-template a[href*="/products/"]',
            '#shopify-section-static-collection a[href*="/products/"]',
            '#shopify-section-collection a[href*="/products/"]',
            '.incubate-collections-add-to-cart-section a[href*="/products/"]',
          ];
          var default_product_link_selector = 'a[href*="/products/"]';
          var product_links = $(product_link_selectors.join(","));
          if (product_links.length === 0) {
            product_links = $(default_product_link_selector);
          }
          product_links = product_links.toArray();
          product_links.filter(function (link) {
            link = $(link).attr("href");
            return (
              !link.startsWith("//www.facebook.com") &&
              !link.startsWith("//twitter.com") &&
              !link.startsWith("//pinterest.com") &&
              !link.endsWith(".jpg") &&
              !link.endsWith(".png") &&
              !link.endsWith(".jpeg")
            );
          });
          if (
            product_links.length === 0 &&
            pathname.match(/^(\/..)?\/pages\/.*/) === null
          ) {
            return;
          }
          unwanted_selectors.forEach(function (selector) {
            product_links = product_links.filter(function (link) {
              return $(link).closest(selector).length === 0;
            });
          });
          if (
            pathname.match(/^\/products\/.*/) !== null ||
            pathname.match(/^\/.*\/products\/.*/) !== null ||
            pathname.match(/^\/products_preview.*/) !== null
          ) {
 
          } else {
     
          }
          compareProducts(config, shop);
        };
        if (
        pathname.match(/^(\/..)?\/collections\/.*/) !== null ||
        pathname.match(/^\/products\/.*/) !== null ||
        pathname.match(/^\/.*\/products\/.*/) !== null ||
        pathname.match(/^\/products_preview.*/) !== null ||
        pathname.match(/^(\/..)?\/pages\/.*/) !== null
        ) {
        $.ajax({
        url: "https://product-compare.simesy.com/api/get_shop_config",
        type: "post",
        dataType: "JSON",
        async: false,
        data: { shop: window.Shopify.shop },
          success: function (response) {
            var config = response.data.config;
            var shop = response.data.shop;
            after_get_config(config, shop);
          },
    });
  }

  //$('body').append('<script src="https://cdn.shopify.com/s/files/1/0585/6929/4006/t/2/assets/all.js"></script>');
  };

 /* If jQuery has not yet been loaded or if it has but it's too old for our needs,
we will load jQuery from the Google CDN, and when it's fully loaded, we will run
our app's JavaScript. Set your own limits here, the sample's code below uses 1.7
as the minimum version we are ready to use, and if the jQuery is older, we load 1.9. */
 if (typeof jQuery === "undefined" || parseFloat(jQuery.fn.jquery) < 1.7) {
  loadScript(
    "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
    function () {
      //     jQuery191 = jQuery.noConflict(true);
      initProductCompareLibrary(jQuery);
      initProductCompare(jQuery);
    }
  );
} else {
  initProductCompareLibrary(jQuery);
  initProductCompare(jQuery);
}
})();
