//Business & services block templates

Vvveb.BlocksGroup['BusinessServices'] =
    ["BusinessServices/home-seppo", "BusinessServices/services-seppo","BusinessServices/about-seppo", "BusinessServices/news-seppo", "BusinessServices/portfolio-seppo", "BusinessServices/pricing-seppo","BusinessServices/index-felix", "BusinessServices/about-felix","BusinessServices/features-felix","BusinessServices/prices-felix", ];

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


// ANGEL


Vvveb.Blocks.add("BusinessServices/index-felix", {
    name: "Index-felix",
dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
image: "",
html: `

<body>
  <div class="fondo" data-name="felix">
      <div class=grey-opacity>
          <style>
              html{
              margin: 0px;
              }
          .fondo{
          background: url(http://paul-themes.com/html/felix-demo/img/bg/masthead.jpg) 	50% 0 no-repeat;
          background-size: cover;
          width: 100%;
          height: 100vh;
          
          }
          
          .grey-opacity {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.349);
          
          }
              
              
          .mobile * {
          background-attachment: scroll!important;
          }  
          .masked {
          position: relative;
          
          }
          body {
          font-family: 'Lora', serif;
          font-size: 1em;
          font-weight: 400;
          line-height: 1.62;
          color: #767676;
          background-color: #fff;
          width:100%;
          height: 100%;
          margin: 0px;
          
          }
          
          .opener {
          display: table-cell;
          vertical-align: middle;
          color: rgb(255, 255, 255);
          /*padding: 13em 0 7em;*/
          width: 100%;
          height: 100vh;
          
          }
              
          
          html {
          -webkit-font-smoothing: antialiased;
          
          }
          
              
          ::selection {
          background-color: #ff7b7b;
          color: #fff;
          
          }
          .container{
            margin-left: 10px;
          }
          .control {
          margin-top: 2.2em;
          
          }
              
              .btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.8em;
          letter-spacing: 0.1em;
          line-height: 1;
          position: relative;
          display: inline-block;
          background: #ff7b7b;
          border: 2px solid #ff7b7b;
          padding: 1.4em 3em 1.4em;
          border-radius: 3em;
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          -webkit-transition: background-color .3s ease-out;
          -o-transition: background-color .3s ease-out;
          transition: background-color .3s ease-out;
          z-index: 1;
          }
              
          .play-home img {
          display: inline-block;
          width: 5.6em;
          z-index: 1;
          }
              
          .text-white {
          color: #fff;
          text-decoration: none;
          
          }
              
          h1, .h1{
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          padding-left: 12px;
          font-size: 3.1em;
          line-height: 1.1;
          margin: 0 0 0.4em;
          
          }
          

          </style>
                  <div class="opener rel-1 ">
                  <div class="container">
                  <h1>Felix innovations</h1>
                  <p>Present your product, app, service and more</p>
                  <div class="control">
                      <a href="#request" class="btn" data-toggle="modal">Get start now</a>
                  </div>
                  <div class="control wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                      <a href="https://www.youtube.com/watch?v=ANwf8AE3_d0" class="text-white play-home js-play">
                      <img alt="" src="http://paul-themes.com/html/felix-demo/img/play-btn.png">
                      <span>Watch vdeo</span>
                      </a>
                  </div>
                  </div>
                  </div>
      </div>
  </div>
  
</body>

`,	
	});


    Vvveb.Blocks.add("BusinessServices/about-felix", {
        name: "about-felix",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `

    <body>
    <div class="about" data-name="felix-about">
        <style>
    
    html {
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }
    
    .mobile * {
        background-attachment: scroll!important;
    }
    .section-title {
        margin-top: 0;
    }
    h2, .h2 {
        font-family: 'Montserrat', sans-serif;
        position: relative;
        font-size: 2.1em;
        line-height: 1.4;
        font-weight: 700;
        color: #343434;
        margin-bottom: 0.5em;
    }
    h3, .h3 {
        font-family: montserrat,sans-serif;
        font-size: 1.15em;
        line-height: 1.25;
        font-weight: 700;
        color: #343434;
        margin-top: 1.6em;
        margin-bottom: .8em;
    }
    .lead-text {
        font-size: 1.4em;
        line-height: 1.68em;
        margin-top: 0;
    }
    .text-center {
        text-align: center;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: lora,serif;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.62;
        color: #767676;
    }
    .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        /*esto es boostrap*/
    }
    
    .clearfix:before, .clearfix:after, .dl-horizontal dd:before, .dl-horizontal dd:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after, .form-horizontal .form-group:before, .form-horizontal .form-group:after, .btn-toolbar:before, .btn-toolbar:after, .btn-group-vertical>.btn-group:before, .btn-group-vertical>.btn-group:after, .nav:before, .nav:after, .navbar:before, .navbar:after, .navbar-header:before, .navbar-header:after, .navbar-collapse:before, .navbar-collapse:after, .pager:before, .pager:after, .panel-body:before, .panel-body:after, .modal-header:before, .modal-header:after, .modal-footer:before, .modal-footer:after {
        content: " ";
        display: table;
    }
    .icon {
        font-size: 3.8em;
        line-height: 1;
        color: #ff7b7b;
        
        
        
        
    }
    .ion-social-github-outline:before {
        content:url('https://api.iconify.design/ion-social-github-outline.svg') no-repeat center center / contain;
        color: #ff7b7b;
        /*display: inline-block;
        font-family: "Ionicons";
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        text-rendering: auto;
        line-height: 1;
        -webkit-font-smoothing: antialiased;*/
    }
    .ion-ios-cloud-download-outline:before {
        content: url('https://api.iconify.design/ion:cloud-download-outline.svg') no-repeat center center / contain;
    }
    
    
    
    .ion-social-android-outline:before {
        content:url('https://api.iconify.design/typcn:vendor-android.svg') no-repeat center center / contain;
    }
    
        </style>
        <section id="about" class="about text-center section">
        <div class="container">
        <div class="row">
            <div class="text-center col-md-8 col-md-offset-2">
            <h2 class="section-title">Meet Felix</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        </div>
        <div class="section-body">
            <div class="row row-columns row-padding">
            <div class="column column-padding col-md-4">
                <i class="text-primary icon ion-social-github-outline"></i>
                <span class="iconify icon" data-icon="ion-social-github-outline" data-inline="false"></span>
                
                <h3>Functional</h3>
               
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae provident enim cum quidem aut corporis</p>
            </div>
            <div class="column column-padding col-md-4">
                <i class="text-primary icon ion-ios-cloud-download-outline"></i>
                <span class="iconify icon" data-icon="ion:cloud-download-outline" data-inline="false"></span>
                <h3>Easy customize</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae provident enim cum quidem aut corporis</p>
            </div>
            <div class="column column-padding col-md-4">
                <i class="text-primary icon ant-design:android-outline"></i>
                <span class="iconify icon" data-icon="ant-design:android-outline" data-inline="false"></span>
                <h3>Modern &amp; Creative</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae provident enim cum quidem aut corporis</p>
            </div>
            </div>
        </div>
       
        
    </section>
    </div>
</body>

    `,	
	});


    Vvveb.Blocks.add("BusinessServices/features-felix", {
        name: "features-felix",
    dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
    image: "",
    html: `
    <body>
    <div class="masthead" data-name="felix-features">
      <style>
        .mobile * {
          background-attachment: scroll !important;
        }
        .lead-text {
          font-size: 1.4em;
          line-height: 1.68em;
          margin-top: 0;
        }
        h2,
        .h2 {
          font-family: montserrat, sans-serif;
          position: relative;
          font-size: 2.1em;
          line-height: 1.4;
          font-weight: 700;
          color: #343434;
          margin-bottom: 0.5em;
        }
        h3 {
          color: #343434;
          font-family: lora, sans-serif;
          font-size: 1.17em;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
        }
        h4,
        .h4 {
          font-family: montserrat, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          color: #343434;
          margin: 0;
        }
        .feature-number {
          font-family: montserrat, sans-serif;
          font-weight: 400;
          font-size: 3em;
          /*font-size: 42px;*/
          line-height: 1;
          width: 1.3em;
        }
        .col-feature-content {
          margin-top: 9em;
          /* margin-left: 10px; */
          margin-right: 10px;
        }
        .col-feature-content-sec2 {
          margin-top: 9em;
          margin-left: 10px;
          margin-right: 10px;
        }

        .text-primary {
          color: #ff7b7b !important;
        }
        p {
          margin-right: 10px;
        }
        .media-left,
        .media-right,
        .media-body {
          display: table-cell;
          vertical-align: top;
        }
        .media-left,
        .media > .pull-left {
          padding-right: 10px;
        }
        .feature-img {
          /*margin-top: 10%;*/
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .section-title {
          margin-top: 50px;
          font-family: montserrat, sans-serif;
          /*font-weight: 700;*/
        }

        .column {
          margin-top: 4em;
        }
        .col-feature {
          padding-left: 30px;
          margin-bottom: 180px;
        }
        body {
          font-family: lora, serif;
          font-size: 1em;
          font-weight: 400;
          line-height: 1.62;
          color: #767676;
        }

        .iconify {
          font-size: 3.8em;
          line-height: 1;
          color: #ff7b7b;
        }
        .ion-speedometer:before {
          content: url("https://api.iconify.design/ion-ios-speedometer-outline.svg")
            no-repeat center center / contain;
          /*display: inline-block;
          font-family: "Ionicons";
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          text-rendering: auto;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;*/
        }

        .ion-android-bulb:before {
          content: url("https://api.iconify.design/ion-android-bulb.svg")
            no-repeat center center / contain;
        }
        .ion-monitor:before {
          content: "\f20a";
        }
        .ion-ios-chatboxes-outline:before {
          content: "\f3f9";
        }
      </style>
      <div class="row-columns row">
        <div class="text-center column col-md-6">
          <img
            alt=""
            class="feature-img"
            src="http://paul-themes.com/html/felix-demo/img/feature-img.png"
          />
        </div>

        <!-- ACCOMPLISH MORE 
        **********************************************
        **********************************************-->

        <div class="col-feature col-feature-content column col-md-6">
          <h2 class="section-title">
            Accomplish more,<br />
            every day.
          </h2>
          <div class="section-body">
            <div class="column">
              <div class="media-left">
                <div class="feature-number text-primary">4K</div>
              </div>
              <div class="media-right">
                <h4>Ionicons</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas harum, hic officiis commodi
                </p>
              </div>
            </div>
            <div class="column">
              <div class="media-left">
                <div class="feature-number text-primary">2X</div>
              </div>
              <div class="media-right">
                <h4>Smart Responsive</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas harum, hic officiis commodi
                </p>
              </div>
            </div>
            <div class="column">
              <div class="media-left">
                <div class="feature-number text-primary">4%</div>
              </div>
              <div class="media-right">
                <h4>Multipurpose</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas harum, hic officiis commodi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WE LIKE TO DO THINGS 
        **********************************************
        **********************************************-->
      <div class="row-columns row">
        <div class="text-center column col-md-5 col-md-push-7">
          <img
            alt=""
            class="feature-img"
            src="http://paul-themes.com/html/felix-demo/img/feature-img2.png"
          />
        </div>
        <div class="col-feature-content-sec2 column col-md-7 col-md-pull-5">
          <h2 class="section-title">
            We like to make things<br />
            easy and fun.
          </h2>
          <div class="section-body">
            <div class="row row-columns">
              <div class="column col-md-6">
                <div class="media-left">
                  <i class="text-primary icon ion-speedometer"></i>
                  <span
                    class="iconify"
                    data-icon="ion-ios-speedometer-outline"
                    data-inline="false"
                  ></span>
                </div>
                <div class="media-right">
                  <h4>Bootstrap 3x</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div class="column col-md-6">
                <div class="media-left">
                  <!-- <i class="text-primary icon ion-android-bulb"></i> -->
                  <span
                    class="iconify"
                    data-icon="ion-android-bulb"
                    data-inline="false"
                  ></span>
                </div>
                <div class="media-right">
                  <h4>Font Awesome</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div class="column col-md-6">
                <div class="media-left">
                  <!-- <i class="text-primary icon ion-monitor"></i> -->
                  <span
                    class="iconify"
                    data-icon="ion-monitor"
                    data-inline="false"
                  ></span>
                </div>
                <div class="media-right">
                  <h4>Clean design</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div class="column col-md-6">
                <div class="media-left">
                  <!-- <i class="text-primary icon ion-ios-chatboxes-outline"></i> -->
                  <span
                    class="iconify"
                    data-icon="ion-ios-chatboxes-outline"
                    data-inline="false"
                  ></span>
                </div>
                <div class="media-right">
                  <h4>Easy to customize</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FEATURES 
      **********************************************
      **********************************************-->
      <section id="features" class="features bgc-light section">
        <div class="container">
          <div class="row-columns row">
            <div class="text-center column col-md-6">
              <img
                alt=""
                class="feature-img"
                src="http://paul-themes.com/html/felix-demo/img/feature-img3.png"
              />
            </div>
            <div class="col-feature col-feature-content column col-md-6">
              <h2 class="section-title">Felix is with you everywhere.</h2>
              <p class="lead-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas harum, hic officiis commodi
              </p>
              <div class="section-body">
                <div class="column">
                  <h3>Ionicons</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas harum, hic officiis commodi
                  </p>
                </div>
                <div class="column">
                  <h3>Smart Responsive</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas harum, hic officiis commodi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
    `,	
});
Vvveb.Blocks.add("BusinessServices/prices-felix", {
    name: "prices-felix",
dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
image: "",
html: `
<body>
  <div class="prices" data-name="felix-prices">
    
      <style>
        h4,
        .h4 {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          color: #343434;
          margin: 0;
        }

        html {
          font-size: 87%;
          -webkit-font-smoothing: antialiased;
        }

        .prices {
          text-align: center;
          background: url(http://paul-themes.com/html/felix-demo/img/bg/prices.jpg) 50% no-repeat;
          background-size: cover;

        }


        .masked:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .mobile * {
          background-attachment: scroll !important;
        }

        .masked {
          position: relative;
        }

        .section {
          padding: 7em 0;
        }

        body {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 14px;
          /* line-height: 1.42857143; */
          color: #333;
          background-color: #fff;
        }

        .mobile * {
          background-attachment: scroll !important;
        }

        .masked {
          position: relative;
        }

        .section {
          padding: 7em 0;
        }

        .rel-1 {
          position: relative;
          z-index: 1;
        }

        .container {
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        body {
          font-family: 'Lora', serif;
          font-size: 1em;
          font-weight: 400;
          line-height: 1.62;
          color: #767676;
        }

        .row-price {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

        }

        .col-price {
          text-align: left;
          width: 100%;
          max-width: 500px;
          display: inline-block;
          position: relative;
          padding: 15px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .price-box {
          position: relative;
          background-color: #fff;
        }

        .price-inner {
          padding-bottom: 40px;
        }

        .price-title {
          padding: 2em 3em 1.7em;
          margin-bottom: 0;
          font-size: 0.7em;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: #f7f7f7;
        }

        .price {
          font-family: 'Montserrat', sans-serif;
          padding: 2em 3em;
          line-height: 1;
          color: #343434;
          border-bottom: 1px solid #dddddd;
        }

        .price-amount {
          font-size: 4em;
        }

        b,
        strong {
          font-weight: bold;
        }

        .price-features {
          padding: 1em 3em;
        }

        .price-features ul {
          margin-top: 0;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        ul,
        ol {
          margin-top: 0px;
          margin-bottom: 10px;
        }

        ul,
        ol {
          margin-top: 0;
          margin-bottom: 10px;
        }

        ol li,
        ul li {
          margin-top: 10px;
        }

        .price-features ul li {
          padding: 8px 0;
        }

        ::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
        }

        .price-footer {
          padding: 0 3em;
          text-align: center;
        }

        .mobile * {
          background-attachment: scroll !important;
        }

        .btn-b-gray {
          border-color: rgba(35, 35, 35, 0.1);
          border-width: 2px;
          background-color: transparent;
          color: #343434;
          width: 100%;
        }

        .btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.8em;
          letter-spacing: 0.1em;
          position: relative;
          display: inline-block;
          /*background: #ff7b7b;*/
          border: 2px solid #817a7a38;
          padding: 1.4em 3em 1.4em;
          border-radius: 3em;
          text-decoration: none;
          color: rgb(90, 88, 88);
          text-transform: uppercase;
          -webkit-transition: background-color .3s ease-out;
          -o-transition: background-color .3s ease-out;
          transition: background-color .3s ease-out;
        }

        .btn-b-primary {
          border-color: #ff7b7b;
          background-color: transparent;
          color: #ff7b7b;
          width: 100%;
        }

        .col-price.leading .price-title {
          color: #fff;
          background-color: #ff7b7b;
        }

        .price-currency {
          display: inline-block;
          vertical-align: top;
          font-size: 2em;
        }

        .price-delimiter {
          font-size: 3em;
        }
      </style>

      <section id="prices" class="prices masked section" data-stellar-background-ratio="0.7">
        <div class="container rel-1">
          <div class="row-price">
            <div class="col-price">
              <div class="price-box">
                <div class="price-body">
                  <div class="price-inner">
                    <header class="price-header">
                      <h4 class="price-title">Basic</h4>
                      <div class="price">
                        <strong class="price-amount">Free</strong>
                      </div>
                    </header>
                    <div class="price-features">
                      <ul>
                        <li>Enhanced Security</li>
                        <li>No Time Tracking</li>
                        <li>Enhanced Security</li>
                      </ul>
                    </div>
                    <div class="price-footer">
                      <a href="#request" class="btn btn-b-gray btn-block" data-toggle="modal">Select plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="leading col-price wow flipInY" style="visibility: visible">
              <div class="price-box">
                <div class="price-body">
                  <div class="price-inner">
                    <header class="price-header">
                      <h4 class="price-title">Optimal</h4>
                      <div class="price">
                        <span class="price-currency">$</span>
                        <strong class="price-amount">40</strong><span class="price-delimiter">/</span><span
                          class="price-period">mo</span>
                      </div>
                    </header>
                    <div class="price-features">
                      <ul>
                        <li>Enhanced Security</li>
                        <li>No Time Tracking</li>
                        <li>Enhanced Security</li>
                      </ul>
                    </div>
                    <div class="price-footer">
                      <a href="#request" class="btn btn-b-primary btn-block" data-toggle="modal">Select plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-price">
              <div class="price-box">
                <div class="price-body">
                  <div class="price-inner">
                    <header class="price-header">
                      <h4 class="price-title">Premium</h4>
                      <div class="price">
                        <span class="price-currency">$</span>
                        <strong class="price-amount">100</strong><span class="price-delimiter">/</span><span
                          class="price-period">mo</span>
                      </div>
                    </header>
                    <div class="price-features">
                      <ul>
                        <li>Enhanced Security</li>
                        <li>No Time Tracking</li>
                        <li>Enhanced Security</li>
                      </ul>
                    </div>
                    <div class="price-footer">
                      <a href="#request" class="btn btn-b-gray btn-block" data-toggle="modal">Select plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  </div>
</body>

`,	
});


Vvveb.Blocks.add("BusinessServices/reviews-felix", {
    name: "reviews-felix",
dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
image: "",
html: `








<body>
    <div class="prices-main" data-name="felix-reviews">
        <style>
           
        </style>
        <!-- Reviews -->

        <section id="reviews" class="reviews text-center bgc-light section">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-8 col-md-offset-2">
                        <h2 class="section-title">Buyers about product</h2>
                        <p class="lead-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>

                <!-- CARROUSEL -->
                <div class="section-body">
                    <div class="row">
                        <div class="review-carousel carousel">
                            <div class="review">
                                <div class="text-center">
                                    <img alt="" class="img-circle"
                                        src="http://paul-themes.com/html/felix-demo/img/reviews/1.jpg">
                                    <h3>James Thornton</h3>
                                    <p>
                                        «Design is the method of putting form and content together; there is no single
                                        definition. Design can be aesthetics</p>
                                </div>
                            </div>
                            <div class="review">
                                <div class="text-center">
                                    <img alt="" class="img-circle"
                                        src="http://paul-themes.com/html/felix-demo/img/reviews/2.jpg">
                                    <h3>James Thornton</h3>
                                    <p>
                                        «Design is the method of putting form and content together; there is no single
                                        definition. Design can be aesthetics</p>
                                </div>
                            </div>
                            <div class="review">
                                <div class="text-center">
                                    <img alt="" class="img-circle"
                                        src="http://paul-themes.com/html/felix-demo/img/reviews/1.jpg">
                                    <h3>James Thornton</h3>
                                    <p>
                                        «Design is the method of putting form and content together; there is no single
                                        definition. Design can be aesthetics</p>
                                </div>
                            </div>
                            <div class="review">
                                <div class="text-center">
                                    <img alt="" class="img-circle"
                                        src="http://paul-themes.com/html/felix-demo/img/reviews/1.jpg">
                                    <h3>James Thornton</h3>
                                    <p>
                                        «Design is the method of putting form and content together; there is no single
                                        definition. Design can be aesthetics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>

    <script src="https://code.jquery.com/jquery-1.11.3.js"integrity="sha256-IGWuzKD7mwVnNY01LtXxq3L84Tm/RJtNCYBfXZw3Je0=" crossorigin="anonymous"></script>
    <script src=https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js></script>

    <script>
        
        $(".review-carousel").owlCarousel({
            itemsTablet: [768, 1],
            itemsDesktopSmall: [979, 2],
            itemsDesktop: [1199, 3],
            items: 3,
            responsiveRefreshRate: 0,
            autoHeight: true
        });
        console.log("dentro");
    </script>
</body>
`,	
});