//Business & services block templates

Vvveb.BlocksGroup['BusinessServices'] =
    ["BusinessServices/home-seppo", "BusinessServices/services-seppo","BusinessServices/about-seppo", "BusinessServices/news-seppo", "BusinessServices/portfolio-seppo", "BusinessServices/pricing-seppo"];

Vvveb.Blocks.add("BusinessServices/home-seppo", {
    name: "Home / welcome page",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `
    <body><div id="content" data-name="seppo-home" class="site-content center-relative seppo-home">
  	
  <style>
    body {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    line-height: 35px;
    font-weight: 400;
    color: #b3b3b3;
    background-color: #ffffff;
    overflow-x: hidden;
    margin: 0;
    height: 100%;
	}
    .center-relative {
    margin-left: auto;
    margin-right: auto;
    
	}
    .seppo-home #home {
    background-image: url(https://demo.cocobasic.com/seppo-html/images/hero_image_01.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: calc(100vh - 77px);
    display: flex;
    height: 100vh;
    }
    .seppo-home .section-wrapper {
    margin: auto;
    padding: 0;
	}
    
    .seppo-home h1.big-text {
    text-align: center;
    font-size: 40px;
    color: #fff;
    line-height: 120%;
    margin-bottom: 40px;
    padding: 20px 0;
	}
    .seppo-home .button-holder {
    text-align: center !important;
	}
    .seppo-home a.button {
    display: inline-block;
    color: #fff;
    background-color: #47ea4e;
    text-align: left;
    padding: 10px 40px;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    transition: all .2s linear;
    margin-bottom: 17px;
    border: 2px solid #47ea4e;
    border-radius: 50px;
    font-size: 14px;
    letter-spacing: 2px;
    box-sizing: border-box;
}
</style>
  <div id="home" class="section no-page-title">
                    <div class="section-wrapper block content-1170 center-relative">                                                
                        <div class="content-wrapper">                           
                            <h1 class="big-text">
                                Technology <br>                               
                                &amp; Visual Agency
                            </h1>
                            <div class="button-holder text-left">
                                <a href="#" class="button">LEARN MORE</a>
                            </div>
                        </div>                        
                    </div>
  </div>
                </div></body>`,
});

Vvveb.Blocks.add("BusinessServices/services-seppo", {
    name: "Services / ",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `<body><div data-name="sercvices-seppo" class="sercvices-seppo">
    <style>
     *{
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      }
         h1, h2, h3, h4, h5, h6 {
          padding: 20px 0;
      }
      body {
      font-family: 'Rubik', sans-serif;
      font-size: 18px;
      line-height: 35px;
      font-weight: 400;
      color: #b3b3b3;
      background-color: #ffffff;
      overflow-x: hidden;
      }
      
      
    .sercvices-seppo #services {
      background-image: url(https://demo.cocobasic.com/seppo-html/images/on_black_left.png);
      background-color: #000000;
      background-position: left bottom;
      background-repeat: no-repeat;
      background-size: auto;
      }
      .page-title-holder {
      width: 200px;
      height: 100px;
          position: absolute;
      top: 0;
      left: 0;
      background-color: #47ea4e;
      display: inline-block;
      z-index: 98;
      }
      .entry-title {
      margin-top: 18px;
      font-size: 16px;
      line-height: 149%;
      font-weight: 400;
      word-break: break-word;
      text-align: center;
      color: #fff;
      letter-spacing: 2px;
      }
      .page-title-holder:after {
      border-width: 100px 60px 0 0;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;  
      border-color: #47ea4e transparent transparent transparent;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      }
      .section-wrapper {
      padding: 130px 0 30px 0;
      }
      .content-1170, .content-960, .content-570 {
      max-width: 95%;
      }
      .one_half, .one_third, .one_fourth, .two_third, .three_fourth {
      width: 100% !important;
      float: none;
      margin-right: auto !important;
      margin-left: auto !important;
      text-align: center;
      position: relative;
      margin-bottom: 30px;
      }
      .service-holder {
      margin: 0 auto;
      text-align: center;
      max-width: 300px;
      }
      .service-holder:after {
      content: "";
      display: block;
      clear: both;
  }
      .service-num {
      font-size: 264px;
      font-weight: 700;
      color: #000000;
      text-shadow: -1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3;
      line-height: 100%;
      height: 165px;
      overflow: hidden;
      margin-bottom: -10px;
      -webkit-transform: translateZ(0);
      }
      .service-txt h4 {
      font-size: 46px;
      color: #fff;
      font-weight: 700;
      line-height: 110%;
      }
      body p, body pre {
      margin-bottom: 13px;
      }
      .button-holder {
      text-align: center !important;
      }
      a.button-dot {
      color: #fff !important;
      font-size: 16px;
      position: relative;
      }
      body a {
      text-decoration: none;
      color: #47ea4e;
      transition: color .3s ease;
      }
      a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      outline: none;
      vertical-align: baseline;
      background: transparent;
      }
      a.button-dot:before {
      content: "";
      width: 30px;
      height: 30px;
      border: 2px solid #fff;
      background: transparent;
      border-radius: 90%;
      top: -7px;
      position: absolute;
      transition: .3s;
      }
      a.button-dot:hover:before {
      width: calc(100% + 30px);
      height: 51px;
      border-radius: 50px;
      top: -18px;
      }
      a.button-dot span {
      transition: .3s;
      display: inline-block;
      margin-left: 50px;
      letter-spacing: 2px;
      }
    </style>
    <div id="services" class="section">                   
                      <div class="page-title-holder">
                          <h3 class="entry-title">
                              SERVICES             
                          </h3>
                      </div>
                      <div class="section-wrapper block content-1170 center-relative">                                                
                          <div class="content-wrapper">
  
                              <div class="one_third ">
                                  <div class="service-holder">
                                      <p class="service-num">1</p>
                                      <div class="service-txt">
                                          <h4>Preciese</h4>
                                          <p>
                                              Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada pharetra eros.
                                          </p>
                                          <br>
                                          <div class="button-holder text-left">
                                              <a href="#" class="button-dot">
                                                  <span>MORE</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="one_third ">
                                  <div class="service-holder">
                                      <p class="service-num">2</p>
                                      <div class="service-txt">
                                          <h4>Support</h4>
                                          <p>
                                              Est sem integer suscipit enim quis dictum feugiat etiam pellentesque curabitur donec porttitor.
                                          </p>
                                          <br>
                                          <div class="button-holder text-left">
                                              <a href="#" class="button-dot">
                                                  <span>MORE</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="one_third last">
                                  <div class="service-holder">
                                      <p class="service-num">3</p>
                                      <div class="service-txt">
                                          <h4>Responsive</h4>
                                          <p>
                                              Donec vel est sem integer suscipit enim quis lorem posuere vestibulum metus tempor vitae.
                                          </p>
                                          <br>
                                          <div class="button-holder text-left">
                                              <a href="#" class="button-dot">
                                                  <span>MORE</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>    
                              <div class="clear"></div>
                          </div>                        
                      </div>
                  </div>
                </div></body>`,
});

Vvveb.Blocks.add("BusinessServices/about-seppo", {
    name: "About / company description",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `<body>
    <div data-name="sercvices-seppo" class="sercvices-seppo">
    <style>
      body {
      font-family: 'Rubik', sans-serif;
      font-size: 18px;
      line-height: 35px;
      font-weight: 400;
      color: #b3b3b3;
      background-color: #ffffff;
      overflow-x: hidden;
      }
      
      *{
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      }
      h1, h2, h3, h4, h5, h6 {
      padding: 20px 0;
      }
      .sercvices-seppo #about {
      background-image: url(images/on_white_right.png);
      background-color: #ffffff;
      background-position: right center;
      background-repeat: no-repeat;
      background-size: auto; 
      }
      .page-title-holder {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #47ea4e;
      width: 200px;
      display: inline-block;
      z-index: 98;
      height: 100px;
      }
      .page-title-holder:after {
      border-width: 100px 60px 0 0;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-color: #47ea4e transparent transparent transparent;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      }
      h3.entry-title {
      margin-top: 18px;
      margin-bottom: 0 !important;
          font-size: 16px;
      line-height: 149%;
      font-weight: 400;
      word-break: break-word;
      text-align: center;
      color: #fff;
      letter-spacing: 2px;
      }
      .section-wrapper {
      padding: 130px 0 30px 0;
      }
      .center-relative {
      margin-left: auto;
      margin-right: auto;
      }
      .one_half, .one_third, .one_fourth, .two_third, .three_fourth {
      width: 100% !important;
      float: none;
      margin-right: auto !important;
      margin-left: auto !important;
      text-align: center;
      position: relative;
      margin-bottom: 30px;
      }
      .title-description-up {
      font-size: 16px;
      margin-bottom: 0;
      letter-spacing: 2px;
      }
      .medium-text {
      font-size: 40px;
      line-height: 105%;
      padding-top: 10px;
      color: #000;
      font-weight: 700;
      padding-bottom: 35px;
      }
      body p, body pre {
      margin-bottom: 13px;
      }
      .button-holder {
      text-align: center !important;
      }
      body a.button {
      display: inline-block;
      color: #fff;
      background-color: #47ea4e;
      text-align: left;
      padding: 10px 40px;
      cursor: pointer;
      vertical-align: middle;
      text-decoration: none;
      transition: all .2s linear;
      margin-bottom: 17px;
      border: 2px solid #47ea4e;
      border-radius: 50px;
      font-size: 14px;
      letter-spacing: 2px;
      box-sizing: border-box;
      }
       img {
      max-width: 90%;
      max-height: 100%;
      width: auto;
      height: auto;
      
      }
    </style>
                    <div id="about" class="section">                   
                      <div class="page-title-holder">
                          <h3 class="entry-title">
                              ABOUT             
                          </h3>
                      </div>
                      <div class="section-wrapper block content-1170 center-relative">                                                
                          <div class="content-wrapper">
  
                              <div class="one_half">
                                  <p class="title-description-up">
                                      WHO WE ARE
                                  </p>
                                  <h2 class="entry-title medium-text">
                                      Live up to <br> 
                                      your creative potential.
                                  </h2>
                                  <p>
                                      Code the energy hidden in matter citizens of distant epochs from which we spring drake equation perga inconspicuous motespatch clean designed code and energy matter.
                                  </p>
                                  <br>
                                  <div class="button-holder text-left">
                                      <a href="#" class="button">
                                          LEARN MORE
                                      </a>
                                  </div>
                              </div>
  
                              <div class="one_half last" data-threshold="0 0" data-jarallax-element="120 0" style="transform: translate3d(0px, -23.1142px, 0px);">
                                  <img src="https://demo.cocobasic.com/seppo-html/images/about_01.jpg" alt="">                     
                              <div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><div style="position: absolute;"></div></div></div>
                              <div class="clear"></div>
                          </div>                        
                      </div>
                  </div>
              </div>
          </body>`,
});

Vvveb.Blocks.add("BusinessServices/news-seppo", {
    name: "News",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `<body><div data-name="news-seppo" class="news-seppo">
    <style>
      *{
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      }
      body {
      font-family: 'Rubik', sans-serif;
      font-size: 18px;
      line-height: 35px;
      font-weight: 400;
      color: #b3b3b3;
      background-color: #ffffff;
      overflow-x: hidden;
      }
      .news-seppo{
      margin-left: auto;
      margin-right: auto;
      }
      .center-relative {
      margin-left: auto;
      margin-right: auto;
      }
      #news {
      background-image: url(https://demo.cocobasic.com/seppo-html/images/on_white_left.png);
      background-color: #ffffff;
      background-position: left center;
      background-repeat: no-repeat;
      background-size: auto;
      }
      .page-title-holder {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #47ea4e;
      width: 200px;
      display: inline-block;
      z-index: 98;
      height: 100px;
      }
      h3.entry-title {
      font-size: 16px;
      line-height: 149%;
      font-weight: 400;
      word-break: break-word;
      text-align: center;
      color: #fff;
      letter-spacing: 2px;
      margin-top: 18px;
      margin-bottom: 0 !important;
      }
      .page-title-holder:after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 100px 60px 0 0;
      border-color: #47ea4e transparent transparent transparent;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      }
      .section-wrapper {
      padding: 130px 0 30px 0;
      }
      .content-1170, .content-960, .content-570 {
      max-width: 95%;
      }
      .content-1170 {
      width: 1170px;
      }
      .blog-holder-scode {
      width: 100%;
      transform: none;
      margin-top: 0;
      text-align: center;
      }
      .blog-item-holder-scode {
      display: block;
      text-align: center;
      width: 100%;
      margin-left: auto;
      margin-right: auto !important;
      max-width: 400px;
      vertical-align: text-top;
      margin: 30px 0;
      }
      .post-thumbnail {
      margin-top: 0;
      overflow: hidden;
      }
      body a {
      text-decoration: none;
      color: #47ea4e;
      transition: color .3s ease;
      }
      a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      outline: none;
      vertical-align: baseline;
      background: transparent;
      }
      .latest-posts-background-featured-image-holder {
      width: 100%;
      height: 300px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      transition: .3s;
      }
      .blog-item-holder-scode h4 {
      padding: 0;
      margin: 35px 0;
      }
      h4 {
      font-size: 30px;
      }
      h1, h2, h3, h4, h5, h6 {
      padding: 20px 0;
      }
      .blog-item-holder-scode h4 a {
      color: #000 !important;
      font-size: 32px;
      line-height: 110%;
      font-weight: 700;
      transition: .3s;
      letter-spacing: -1px;
      }
      .excerpt {
      margin-top: 20px;
      }
      .blog-holder-scode > article:first-of-type .post-thumbnail {
      margin-top: 0;
      }
      .post-thumbnail {
      margin-top: 70px;
      }
      .button-holder {
      text-align: center !important;
      }
      body a.button {
      display: inline-block;
      color: #fff;
      background-color: #47ea4e;
      text-align: left;
      padding: 10px 40px;
      cursor: pointer;
      vertical-align: middle;
      text-decoration: none;
      transition: all .2s linear;
      margin-bottom: 17px;
      border: 2px solid #47ea4e;
      border-radius: 50px;
      font-size: 14px;
      letter-spacing: 2px;
      box-sizing: border-box;
  }
    </style>
    <div id="news" class="section">                   
                      <div class="page-title-holder">
                          <h3 class="entry-title">
                              NEWS             
                          </h3>
                      </div>
                      <div class="section-wrapper block content-1170 center-relative" style="padding-right: 0px; border-top-left-radius: 0px; border-top-right-radius: 0px;">                                                
                          <div class="content-wrapper">
                              <div class="blog-holder-scode latest-posts-scode block center-relative">
  
                                  <article class="relative blog-item-holder-scode">
                                      <div class="post-thumbnail">
                                          <a href="single.html">
                                              <div class="latest-posts-background-featured-image-holder" data-background-image="https://demo.cocobasic.com/seppo-html/images/blog_img_01.jpg" style="background-image: url(&quot;https://demo.cocobasic.com/seppo-html/images/blog_img_01.jpg&quot;);"></div>
                                          </a>                                            
                                      </div>
                                      <h4 class="entry-title">
                                          <a href="single.html">
                                              How to write rogue mote of dust love
                                          </a>
                                      </h4>
                                      <div class="excerpt">
                                          Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...
                                      </div>
                                  </article>
  
                                  <article class="relative blog-item-holder-scode">
                                      <div class="post-thumbnail">
                                          <a href="single.html">
                                              <div class="latest-posts-background-featured-image-holder" data-background-image="https://demo.cocobasic.com/seppo-html/images/blog_img_02.jpg" style="background-image: url(&quot;https://demo.cocobasic.com/seppo-html/images/blog_img_02.jpg&quot;);"></div>
                                          </a>                                           
                                      </div>
                                      <h4 class="entry-title">
                                          <a href="single.html">
                                              Epochs encyclopa galactica stellar
                                          </a>
                                      </h4>
                                      <div class="excerpt">
                                          Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...
                                      </div>
                                  </article>
  
                                  <article class="relative blog-item-holder-scode">
                                      <div class="post-thumbnail">
                                          <a href="single.html">
                                              <div class="latest-posts-background-featured-image-holder" data-background-image="https://demo.cocobasic.com/seppo-html/images/blog_img_03.jpg" style="background-image: url(&quot;https://demo.cocobasic.com/seppo-html/images/blog_img_03.jpg&quot;);"></div>
                                          </a>                                           
                                      </div>
                                      <h4 class="entry-title">
                                          <a href="single.html">
                                              How to write rogue mote of dust love
                                          </a>
                                      </h4>
                                      <div class="excerpt">
                                          Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...
                                      </div>
                                  </article>                                                                    
                              </div>
                              <br>
                              <div class="button-holder center-text">
                                  <a href="blog.html" class="button">
                                      GO TO BLOG
                                  </a>
                              </div>
                          </div>
                          <div class="clear"></div>
                      </div>
                  </div>
    
   </div></body>`,
});

Vvveb.Blocks.add("BusinessServices/portfolio-seppo", {
    name: "Portfolio / seppo",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `<body><div data-name="portfolio-seppo" class="portfolio-seppo center-relative">
    <style>
      *{
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      }
      body {
      font-family: 'Rubik', sans-serif;
      font-size: 18px;
      line-height: 35px;
      font-weight: 400;
      color: #b3b3b3;
      background-color: #ffffff;
      overflow-x: hidden;
      }
      .center-relative {
      margin-left: auto;
      margin-right: auto;
      }
      .page-title-holder {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #47ea4e;
      width: 200px;
      display: inline-block;
      z-index: 98;
      height: 100px;
      }
      h1, h2, h3, h4, h5, h6 {
      padding: 20px 0;
      }
      .section h3.entry-title {
      font-size: 16px;
      line-height: 149%;
      font-weight: 400;
      word-break: break-word;
      text-align: center;
      color: #fff;
      letter-spacing: 2px;
      margin-top: 18px;
      margin-bottom: 0 !important;
      }
      .page-title-holder:after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 100px 60px 0 0;
      border-color: #47ea4e transparent transparent transparent;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      }
      .center-relative {
      margin-left: auto;
      margin-right: auto;
      }
      .no-padding .section-wrapper {
      padding: 0 !important;
      width: 100%;
      max-width: 100%;
      }
      .portfolio-load-content-holder {
      opacity: 0;
      transform: translateY(70px);
      transition: all .5s ease;
      width: 1170px;
      max-width: 90%;
      margin: 0 auto;
      }
      #portfolio-grid {
      transition: all .5s ease;
      opacity: 1;
      transform: translateY(0px);
      }
      .grid {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      max-width: 100%;
      font-size: 0;
      line-height: 0;
      }
      .grid-item, .grid-sizer {
      width: 100% !important;
      }
      .grid-item {
      float: left;
      font-size: 0;
      line-height: 0;
      width: 100%;
      overflow: hidden;
      }
      body a {
      text-decoration: none;
      color: #47ea4e;
      transition: color .3s ease;
      }
      a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      outline: none;
      vertical-align: baseline;
      background: transparent;
      }
      .grid-item img {
      width: 100% !important;
      height: auto;
      display: block;
      }
      .site-wrapper img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      }
      .grid-item a.item-link:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity .3s ease-in-out;
        }
    </style>
      <div id="portfolio" class="section no-padding">                   
                        <div class="page-title-holder">
                            <h3 class="entry-title">
                                PORTFOLIO                        
                            </h3>
                        </div>
                        <div class="section-wrapper block content-1170 center-relative">                                                
                            <div class="content-wrapper">
                                <div id="portfolio-wrapper">
                                    <div class="portfolio-load-content-holder"></div>
                                    <div class="grid" id="portfolio-grid" style="position: relative; height: auto;display: flex; flex-direction: column; ">
                                        <div class="grid-sizer"></div>
    
                                        <div id="p-item-1" class="grid-item element-item p_one_fourth">
                                            <a class="item-link ajax-portfolio" href="#" data-id="1">
                                                <img src="https://demo.cocobasic.com/seppo-html/images/portfolio_item_01.jpg" alt="">
                                            </a>
                                        </div>
    
                                        <div id="p-item-2" class="grid-item element-item p_one_half">
                                            <a class="item-link ajax-portfolio" href="#" data-id="2">
                                                <img src="https://demo.cocobasic.com/seppo-html/images/portfolio_item_02.jpg" alt="">
                                            </a>
                                        </div>
    
                                        <div id="p-item-3" class="grid-item element-item p_one_fourth">
                                            <a class="item-link ajax-portfolio" href="#" data-id="3">
                                                <img src="https://demo.cocobasic.com/seppo-html/images/portfolio_item_03.jpg" alt="">
                                            </a>
                                        </div>
    
                                        <div id="p-item-4" class="grid-item element-item p_one_fourth">
                                            <a class="item-link ajax-portfolio" href="#" data-id="4">
                                                <img src="https://demo.cocobasic.com/seppo-html/images/portfolio_item_04.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>                           
                            </div>                        
                        </div>
                    </div>
      </div></body>`,
});

Vvveb.Blocks.add("BusinessServices/pricing-seppo", {
    name: "pricing / seppo",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `<body>
    <div data-name="sercvices-seppo" class="sercvices-seppo site-content center-relative">
        <style>
            * {
                margin: 0;
                padding: 0;
                border: 0;
                outline: none;
                font-size: 100%;
                vertical-align: baseline;
                background: transparent;
            }

            body {
                font-family: 'Rubik', sans-serif;
                font-size: 18px;
                line-height: 35px;
                font-weight: 400;
                color: #b3b3b3;
                background-color: #ffffff;
                overflow-x: hidden;
            }

            h1,h2,h3,h4,h5,h6 {
                padding: 20px 0;
            }

            .center-relative {
                margin-left: auto;
                margin-right: auto;
            }

            .section {
                position: relative;
            }

            #pricing {
                background-image: url(https://demo.cocobasic.com/seppo-html/images/on_white_right.png);
                background-color: #ffffff;
                background-position: right bottom;
                background-repeat: no-repeat;
                background-size: auto;
            }

            .page-title-holder {
                position: absolute;
                top: 0;
                left: 0;
                background-color: #47ea4e;
                width: 200px;
                display: inline-block;
                z-index: 98;
                height: 100px;
            }

            .section h3.entry-title {
                font-size: 16px;
                line-height: 149%;
                font-weight: 400;
                word-break: break-word;
                text-align: center;
                color: #fff;
                letter-spacing: 2px;
                margin-top: 18px;
                margin-bottom: 0 !important;
            }

            .page-title-holder:after {
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 100px 60px 0 0;
                border-color: #47ea4e transparent transparent transparent;
                position: absolute;
                top: 0;
                right: 0;
                transform: translateX(100%);
            }

            .section-wrapper {
                position: relative;
                padding: 130px 0 30px 0;
                padding-bottom: 70px;
            }

            .content-1170 {
                width: 1170px;
                max-width: 95%;
            }

            .one_half, .one_third, .one_fourth, .two_third, .three_fourth {
                width: 100% !important;
                float: none;
                margin-right: auto !important;
                margin-left: auto !important;
                text-align: center;
                position: relative;
                margin-bottom: 30px;
            }

            .pricing-table {
                margin-bottom: 100px;
            }

            .pricing-table {
                padding-bottom: 20px;
                background-color: #ffffff;
                margin-top: 30px;
                max-width: 350px;
                margin-left: auto;
                margin-right: auto;
                border: 2px solid #000;
                position: relative;
                text-align: left;
            }

            .pricing-num {
                font-size: 200px;
                font-weight: 700;
                color: #ffffff;
                text-shadow: -1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3;
                line-height: 100%;
                margin-bottom: -10px;
                position: absolute;
                top: -50px;
                right: -9px;
                z-index: 1;
            }

            .pricing-num:before {
                content: "";
                width: 150px;
                background-color: white;
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                z-index: -1;
            }

            .pricing-wrapper {
                padding: 0 10%;
            }

            .pricing-table-title {
                color: #000;
                font-size: 21px;
                font-weight: 500;
                padding: 40px 0;
                margin-bottom: 25px;
            }

            .pricing-table-price {
                font-size: 100px;
                line-height: 120%;
                color: #47ea4e;
                font-weight: 700;
            }

            .pricing-table-desc {
                font-size: 16px;
                letter-spacing: 2px;
            }

            .pricing-table-content-holder {
                margin-bottom: 40px;
            }

            .pricing-table ul {
                padding: 0;
                list-style: none;
                margin-top: 25px;
            }

            .pricing-table ul li {
                padding: 10px 0;
                color: #000;
                display: flex;
                align-items: center;
            }

            .pricing-list svg {
                margin-right: 25px;
            }

            .fa {
                display: inline-block;
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
                text-rendering: auto;
            }
            .pricing-button {
    text-align: center;
}
body a.button {
    display: inline-block;
    color: #fff;
    background-color: #47ea4e;
    text-align: left;
    padding: 10px 40px;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    transition: all .2s linear;
    margin-bottom: 17px;
    border: 2px solid #47ea4e;
    border-radius: 50px;
    font-size: 14px;
    letter-spacing: 2px;
    box-sizing: border-box;
}
        </style>
        <div id="pricing" class="section">
            <div class="page-title-holder">
                <h3 class="entry-title">
                    PRICING
                </h3>
            </div>
            <div class="section-wrapper block content-1170 center-relative">
                <div class="content-wrapper">

                    <div class="one_third">
                        <div class="pricing-table ">
                            <p class="pricing-num">1</p>
                            <div class="pricing-wrapper">
                                <div class="pricing-table-header">
                                    <div class="pricing-table-title">BASIC</div>
                                </div>
                                <div class="pricing-table-price">$25</div>
                                <div class="pricing-table-desc">PER MONTH</div>
                                <div class="pricing-table-content-holder">
                                    <ul>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            Unlimited Support
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            5GB Server Space
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            2 Users per Project
                                        </li>
                                        <li class="pricing-list included-no">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: grey; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:close" data-inline="false"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
                                            Email Integration
                                        </li>
                                        <li class="pricing-list included-no">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: grey; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:close" data-inline="false"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
                                            Unlimited Download
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-button">
                                <a href="#" class="button scroll">
                                    CHOOSE PLAN
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="one_third">
                        <div class="pricing-table ">
                            <p class="pricing-num">2</p>
                            <div class="pricing-wrapper">
                                <div class="pricing-table-header">
                                    <div class="pricing-table-title">ADVANCED</div>
                                </div>
                                <div class="pricing-table-price">$50</div>
                                <div class="pricing-table-desc">PER MONTH</div>
                                <div class="pricing-table-content-holder">
                                    <ul>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            Unlimited Support
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            5GB Server Space
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            2 Users per Project
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            Email Integration
                                        </li>
                                        <li class="pricing-list included-no">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: grey; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:close" data-inline="false"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
                                            Unlimited Download
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-button">
                                <a href="#" class="button scroll">
                                    CHOOSE PLAN
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="one_third last">
                        <div class="pricing-table ">
                            <p class="pricing-num">3</p>
                            <div class="pricing-wrapper">
                                <div class="pricing-table-header">
                                    <div class="pricing-table-title">EXPERT</div>
                                </div>
                                <div class="pricing-table-price">$75</div>
                                <div class="pricing-table-desc">PER MONTH</div>
                                <div class="pricing-table-content-holder">
                                    <ul>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            Unlimited Support
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            5GB Server Space
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            2 Users per Project
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            Email Integration
                                        </li>
                                        <li class="pricing-list included-yes">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="color: green; background: url(&quot;https://api.iconify.design/ion:checkmark.svg?color=green&quot;) 50% 50% / contain no-repeat; font-size: 25px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify fa fa-check" data-icon="ion:checkmark" data-inline="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>
                                            Unlimited Download
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-button">
                                <a href="#" class="button scroll">
                                    CHOOSE PLAN
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
</body>`,
});
