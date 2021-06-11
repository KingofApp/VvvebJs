//Business & services block templates

Vvveb.BlocksGroup['BusinessServices'] =
    ["BusinessServices/home-seppo", "BusinessServices/services-seppo","BusinessServices/about-seppo", "BusinessServices/news-seppo", "BusinessServices/portfolio-seppo", "BusinessServices/pricing-seppo","BusinessServices/team-seppo","BusinessServices/skills-seppo","BusinessServices/clients-seppo","BusinessServices/index-felix", "BusinessServices/about-felix","BusinessServices/features-felix","BusinessServices/prices-felix","BusinessServices/reviews-felix", ];

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
Vvveb.Blocks.add("BusinessServices/team-seppo", {
  name: "team / Team page",
  dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
  image: "",
  html: `<body><div data-name="team-seppo" class="team-seppo site-content center-relative">
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
a {
margin: 0;
padding: 0;
font-size: 100%;
outline: none;
vertical-align: baseline;
background: transparent;
}    
.center-relative {
margin-left: auto;
margin-right: auto;
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
   body p, body pre {
margin-bottom: 13px;
} 
#team {
background-image: url(https://demo.cocobasic.com/seppo-html/images/on_black_left.png);
background-color: #000000;
background-position: left center;
background-repeat: no-repeat;
background-size: auto;
}

.section {
position: relative;
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
 .content-1170 {
width: 1170px;
    max-width: 95%;
}  
    .block {
display: block;
}
   .section-wrapper {
position: relative;
padding: 130px 0 30px 0;
} 
    .member {
text-align: center;
margin: 35px auto;
max-width: 100%;
}
    .member img {
  display: block;
margin: 0 auto;
width: 100% !important;
vertical-align: middle;
max-width: 700px;
}

.site-wrapper img {
max-width: 100%;
max-height: 100%;
width: auto;
height: auto;
}
    [data-jarallax-element] {
transform: none !important;
}
   [data-jarallax-element] {
z-index: 30 !important;
} 
 .member-info {
display: block;
margin: 0 auto !important;
width: 80%;
padding: 10%;
       background-color: #fff; 
        text-align: left;
position: relative;
z-index: 31;
        vertical-align: middle;
}   
    .member-postition {
margin: 0;
font-size: 13px;
letter-spacing: 2px;
}
   .member-name {
font-size: 35px;
font-weight: 700;
color: #000;
line-height: 150%;
margin-bottom: 35px;
margin-top: -5px;
padding: 0;
} 
    .member-content {
font-size: 16px;
line-height: 170%;
margin-bottom: 50px;
}
 .member-social-holder {
right: 0 !important;
left: 0 !important;
width: 100%;
text-align: center;
padding: 25px 0;
position: absolute;
bottom: -35px;
background: #47ea4e;
}   
.social {
display: inline-block;
font-size: 25px;
margin-right: 20px;
}     
body .social a {
       text-decoration: none; 
color: #fff !important;
transition: all .3s ease;
}      
</style>
<div id="team" class="section">                   
              <div class="page-title-holder">
                  <h3 class="entry-title">
                      TEAM             
                  </h3>
              </div>
              <div class="section-wrapper block content-1170 center-relative">                                                
                  <div class="content-wrapper">
                      <div class="member member-left">
                          <img src="https://demo.cocobasic.com/seppo-html/images/about_item_01.jpg" alt="" data-threshold="0 0" data-jarallax-element="60 0" style="position: relative; transform: translate3d(0px, 0px, 0px);">
                          <div class="member-info">
                              <p class="member-postition">CEO</p>
                              <h5 class="member-name">Marty Stone</h5>
                              <div class="member-content">
                                  <p>
                                      Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.
                                  </p>
                                  <div class="member-social-holder" data-jarallax-element="0 30" style="transform: translate3d(-5.94712px, 0px, 0px);">
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-facebook" data-inline="false" data-width="30" data-height="30"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-twitter" data-inline="false" data-width="30" data-height="30"><path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-instagram" data-inline="false" data-width="30" data-height="30"><path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"></path><path d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28z" fill="currentColor"></path><path d="M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-youtube" data-inline="false" data-width="30" data-height="30"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-behance" data-inline="false" data-width="30" data-height="30"><path d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8z" fill="currentColor"></path><path d="M204.8 262.4h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3c0-26-19.7-25.7-19.7-25.7z" fill="currentColor"></path><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224s224-100.3 224-224S379.7 32 256 32zm47.2 137.6h77.1v23h-77.1v-23zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5c31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7c-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2z" fill="currentColor"></path><path d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                  <div id="jarallax-container-3" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><div style="position: fixed;"></div></div></div>
                              </div>
                          </div>
                      </div>

                      <br>

                      <div class="member member-right small-screen">
                          <img src="https://demo.cocobasic.com/seppo-html/images/about_item_02.jpg" alt="" data-threshold="0 0" data-jarallax-element="60 0" style="position: relative; transform: translate3d(0px, -62.0228px, 0px);"><div class="member-info">
                              <p class="member-postition">DESIGNER</p>
                              <h5 class="member-name">John Williams</h5>
                              <div class="member-content">
                                  <p>
                                      Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.
                                  </p>
                                  <div class="member-social-holder" data-jarallax-element="0 -30" style="transform: translate3d(87.1286px, 0px, 0px);">
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-facebook" data-inline="false" data-width="30" data-height="30"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-twitter" data-inline="false" data-width="30" data-height="30"><path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-instagram" data-inline="false" data-width="30" data-height="30"><path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"></path><path d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28z" fill="currentColor"></path><path d="M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-youtube" data-inline="false" data-width="30" data-height="30"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-behance" data-inline="false" data-width="30" data-height="30"><path d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8z" fill="currentColor"></path><path d="M204.8 262.4h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3c0-26-19.7-25.7-19.7-25.7z" fill="currentColor"></path><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224s224-100.3 224-224S379.7 32 256 32zm47.2 137.6h77.1v23h-77.1v-23zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5c31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7c-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2z" fill="currentColor"></path><path d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                  <div id="jarallax-container-4" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><div style="position: fixed;"></div></div></div>
                              </div>
                          </div>
                          
                      </div>

                      <br>

                      <div class="member member-left">
                          <img src="https://demo.cocobasic.com/seppo-html/images/about_item_03.jpg" alt="" data-threshold="0 0" data-jarallax-element="60 0" style="position: relative; transform: translate3d(0px, -224.386px, 0px);">
                          <div class="member-info">
                              <p class="member-postition">DEVELOPER</p>
                              <h5 class="member-name">Vanessa Doe</h5>
                              <div class="member-content">
                                  <p>
                                      Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.
                                  </p>
                                  <div class="member-social-holder" data-jarallax-element="0 30" style="transform: translate3d(-168.31px, 0px, 0px);">
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-facebook" data-inline="false" data-width="30" data-height="30"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-twitter" data-inline="false" data-width="30" data-height="30"><path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-instagram" data-inline="false" data-width="30" data-height="30"><path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"></path><path d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28z" fill="currentColor"></path><path d="M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-youtube" data-inline="false" data-width="30" data-height="30"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                      <div class="social">
                                          <a href="#" target="_blank">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" style="color: white; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify" data-icon="ion:logo-behance" data-inline="false" data-width="30" data-height="30"><path d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8z" fill="currentColor"></path><path d="M204.8 262.4h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3c0-26-19.7-25.7-19.7-25.7z" fill="currentColor"></path><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224s224-100.3 224-224S379.7 32 256 32zm47.2 137.6h77.1v23h-77.1v-23zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5c31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7c-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2z" fill="currentColor"></path><path d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3z" fill="currentColor"></path></svg>
                                          </a>
                                      </div>
                                  <div id="jarallax-container-7" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><div style="position: fixed;"></div></div></div>
                              </div>
                          </div>
                      </div>
                  </div>                        
              </div>
          </div>
</div>
<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
</body>`,
});

Vvveb.Blocks.add("BusinessServices/skills-seppo", {
  name: "Skills / skills page",
  dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
  image: "",
  html: `<body><div data-name="skills-seppo" class="skills-seppo site-content center-relative">
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
    a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      outline: none;
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
    body p, body pre {
      margin-bottom: 13px;
  }
    .section {
      position: relative;
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
    .content-1170 {
      width: 1170px;
        max-width: 95%;
  }
    .section-wrapper {
      position: relative;
      padding: 130px 0 30px 0;
  }
    .block {
      display: block;
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
    .last {
      clear: right;
  }
    .skills-holder {
      position: relative;
      margin: 40px 0;
  }
    .skill-holder {
      margin-bottom: 30px;
  }
    .skill-percent {
      line-height: 100%;
      font-weight: 100;
      display: block;
      width: 100%;
      font-size: 40px;
      vertical-align: text-top;
  }
    .skill-text {
      display: block;
      width: 100%;
        margin-right: 0;
      float: right;
      vertical-align: text-top;
  }
    .skill-text span {
      margin-bottom: 10px;
      display: block;
        font-size: 22px;
      line-height: 35px;
  }
    .skill {
      width: 100%;
      height: 3px;
      background-color: rgba(202, 202, 202, 0.3);
      margin-bottom: 30px;
  }
    .skill-fill {
      width: 75%;
      height: 10px;
      background-color: #000;
  }
    .skill-holder:after {
      clear: both;
      display: block;
      content: "";
  }
    .clear {
      clear: both;
  }
  </style>
    <div id="skills" class="section">                   
                      <div class="page-title-holder">
                          <h3 class="entry-title">
                              SKILLS             
                          </h3>
                      </div>
                      <div class="section-wrapper block content-1170 center-relative">                                                
                          <div class="content-wrapper">
  
                              <div class="one_half ">
                                  <p class="title-description-up">
                                      OUR NUMBERS
                                  </p>
                                  <h2 class="entry-title medium-text">
                                      Check our <br>
                                      Skills
                                  </h2>
                                  <p>
                                      Code the energy hidden in matter citizens of distant epochs from which we spring drake equation perga inconspicuous motespatch clean designed code and energy matter.
                                  </p>
                                  <br>
                                  <div class="button-holder text-left">
                                      <a href="#" class="button">LEARN MORE</a>
                                  </div>
                              </div>
  
                              <div class="one_half last">
                                  <div class="skills-holder">
  
                                      <div class="skill-holder">
                                          <div class="skill-percent">75%</div>
                                          <div class="skill-text">
                                              <span>Creativity</span>
                                              <div class="skill">
                                                  <div class="skill-fill" data-fill="75%" style="width: 75%;"></div>                                                    
                                              </div>                                                
                                          </div>                                            
                                      </div>
  
                                      <div class="skill-holder">
                                          <div class="skill-percent">45%</div>
                                          <div class="skill-text">
                                              <span>Cooking</span>
                                              <div class="skill">
                                                  <div class="skill-fill" data-fill="45%" style="width: 45%;"></div>                                                    
                                              </div>                                                
                                          </div>                                            
                                      </div>
  
                                      <div class="skill-holder">
                                          <div class="skill-percent">90%</div>
                                          <div class="skill-text">
                                              <span>PhP</span>
                                              <div class="skill">
                                                  <div class="skill-fill" data-fill="90%" style="width: 90%;"></div>                                                    
                                              </div>                                                
                                          </div>                                            
                                      </div>
  
                                      <div class="skill-holder">
                                          <div class="skill-percent">65%</div>
                                          <div class="skill-text">
                                              <span>Marketing</span>
                                              <div class="skill">
                                                  <div class="skill-fill" data-fill="65%" style="width: 65%;"></div>                                                    
                                              </div>                                                
                                          </div>                                            
                                      </div>
  
                                      <div class="skill-holder">
                                          <div class="skill-percent">85%</div>
                                          <div class="skill-text">
                                              <span>Design</span>
                                              <div class="skill">
                                                  <div class="skill-fill" data-fill="85%" style="width: 85%;"></div>                                                    
                                              </div>                                                
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


Vvveb.Blocks.add("BusinessServices/milestones-seppo", {
  name: "milestones / milestones page",
  dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
  image: "",
  html: `
<body>
  <div data-name="milestones-seppo" class="milestones-seppo site-content center-relative">
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

          h5 {
              font-size: 28px;
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

          body p,
          body pre {
              margin-bottom: 13px;
          }

          .section {
              position: relative;
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

          .content-1170 {
              width: 1170px;
              max-width: 95%;
          }

          .section-wrapper {
              position: relative;
              padding: 130px 0 30px 0;
          }

          #millstones {
              background-image: url(https://demo.cocobasic.com/seppo-html/images/on_black_left.png);
              background-color: #000000;
              background-position: left bottom;
              background-repeat: no-repeat;
              background-size: auto;
          }

          ul.milestones-holder {
              padding: 0;
              list-style: none;
              margin: 0;
          }

          li.milestone {
              width: 100%;
              margin-bottom: 60px;
              display: block;
              max-width: 350px;
              margin-left: auto !important;
              margin-right: auto !important;
              text-align: center;
              margin: 30px 9% 30px 0
          }

          li.milestone>div {
              width: 100% !important;
              display: block;
              margin-left: auto !important;
              margin-right: auto !important;
              text-align: center !important;
          }

          .milestone-info-left {
              margin: 0 auto;
              display: block;
              width: 100%;
              text-align: center;
          }

          p.milestone-num {
              font-size: 65px;
              line-height: 100%;
              font-weight: 700;
              position: relative;
              margin-bottom: 0;
              color: #000000;
              text-shadow: -1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3;
          }

          li.milestone h5 {
              color: #fff;
              padding-top: 0;
              line-height: 115%;
              max-width: 100%;
              margin-top: 20px;
          }
      </style>
      <div id="millstones" class="section">
          <div class="page-title-holder">
              <h3 class="entry-title">
                  MILESTONES
              </h3>
          </div>
          <div class="section-wrapper block content-1170 center-relative">
              <div class="content-wrapper">
                  <ul class="milestones-holder">

                      <li class="milestone">
                          <div class="milestone-info-left">
                              <p class="milestone-num">135</p>
                          </div>
                          <div class="milestone-info-right">
                              <h5>Terabytes of files uploaded</h5>
                              <p class="milestone-text">
                                  Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.
                              </p>
                          </div>
                      </li>

                      <li class="milestone">
                          <div class="milestone-info-left">
                              <p class="milestone-num">67K</p>
                          </div>
                          <div class="milestone-info-right">
                              <h5>Lines of CSS code wrote</h5>
                              <p class="milestone-text">
                                  Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.
                              </p>
                          </div>
                      </li>

                      <li class="milestone">
                          <div class="milestone-info-left">
                              <p class="milestone-num">74</p>
                          </div>
                          <div class="milestone-info-right">
                              <h5>Cups of coffee drinked per week</h5>
                              <p class="milestone-text">
                                  Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.
                              </p>
                          </div>
                      </li>

                      <li class="milestone">
                          <div class="milestone-info-left">
                              <p class="milestone-num">389</p>
                          </div>
                          <div class="milestone-info-right">
                              <h5>Happy clients served this year</h5>
                              <p class="milestone-text">
                                  Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.
                              </p>
                          </div>
                      </li>

                  </ul>
              </div>
          </div>
      </div>
  </div>
</body>`,
});


Vvveb.Blocks.add("BusinessServices/clients-seppo", {
  name: "clients / clients page",
  dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',
  image: "",
  html: `
<body> <div data-name="clients-seppo" class="clients-seppo" id="content">
<!--<link rel="stylesheet" type="text/css" href="https://demo.cocobasic.com/seppo-html/style.css">-->

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
  #clients {
  background-image: url(https://demo.cocobasic.com/seppo-html/images/quote_image_01.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
  .center-relative {
  margin-left: auto;
  margin-right: auto;
}
.section {
  position: relative;
}
  .content-1170 {
  width: 1170px;
  max-width: 95%;
}
  .no-page-title .section-wrapper {
  padding: 65px 0 35px 0;
  position: relative;
}
  [data-jarallax-element] {
  transform: none !important;
}

.one {
  display: block;
  clear: both;
  margin-bottom: 30px;
}
[data-jarallax-element] {
  z-index: 30 !important;
}
  .text-slider-wrapper {
  font-size: 24px;
  line-height: 35px;
  background-color: #000;
  padding: 10%;
  width: 80%;
}
  .relative {
  position: relative;
}
  .text-slider-header-quotes {
  margin-bottom: 60px;
  background-image: url(https://demo.cocobasic.com/seppo-html/images/quotes_image.png);
  background-repeat: no-repeat;
  width: 87px;
  height: 74px;
  background-size: 87px 74px;
}
  .owl-carousel .owl-stage-outer {
  height: auto !important;
}
 .owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block;}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;cursor:hand;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{/* opacity:0 */}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url(owl.video.play.png) no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}
  
  .text-slider-wrapper .text-slide {
  text-align: left;
  font-size: 20px;
  line-height: 170%;
  overflow: hidden;
}
  .text-slide-content {
  margin-bottom: 60px;
}
  .text-slider-wrapper img.text-slide-img {
  width: 70px !important;
  height: 70px;
  border-radius: 90%;
  display: block;
  margin-bottom: 10px;
  margin-right: 25px;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}
  .text-slider-wrapper .text-slide-name {
  font-size: 18px;
  line-height: 100%;
  margin: 0 12px 0 0;
      display: block;
  margin-bottom: 5px;
  vertical-align: middle;
}
  .text-slider-wrapper .text-slide-position {
  display: block;
  font-size: 14px;
  line-height: 125%;
      letter-spacing: 4px;
  color: #fff;
      vertical-align: middle;
  margin: 0;
}
  .text-slider-wrapper .text-slide:after {
  content: "";
  display: table;
  clear: both;
}
  .owl-carousel .owl-stage:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
  .text-slider-wrapper .owl-nav {
  position: absolute;
  bottom: 10px;
  right: 0;
}
  .text-slider-wrapper .owl-theme .owl-prev {
  background-image: url(https://demo.cocobasic.com/seppo-html/images/nav_left.png) !important;
  background-color: transparent !important;
  font-size: 0;
  width: 30px;
  padding: 0;
  height: 30px;
  background-repeat: no-repeat !important;
  background-size: 30px !important;
  transition: .3s;
  opacity: 0.7;
  margin-right: 10px;
}
  .text-slider-wrapper .owl-theme .owl-next {
  background-image: url(https://demo.cocobasic.com/seppo-html/images/nav_right.png) !important;
  background-color: transparent !important;
  font-size: 0;
  width: 30px;
  padding: 0;
  height: 30px;
  background-repeat: no-repeat !important;
  background-size: 30px !important;
  transition: .3s;
  opacity: 0.7;
}
  .owl-theme .owl-dots {
  padding-top: 25px;
  line-height: 0;
}
  .clear {
  clear: both;
}
</style>
    <div id="clients" class="section no-page-title">
          <div class="section-wrapper block content-1170 center-relative">
              <div class="content-wrapper">
                  <div class="one" data-threshold="0 0" data-jarallax-element="120 0">
                      <script>
                          var textSlider_speed = "2000";
                          var textSlider_auto = "true";
                          var textSlider_hover = "true";
                      </script>
                      <div class="text-slider-wrapper relative">
                          <div class="text-slider-header-quotes"></div>
                          <div id="textSlider" class="text-slider slider owl-carousel owl-theme owl-loaded owl-drag">
                              
                              
                              
                          <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-976px, 0px, 0px); transition: all 0s ease 0s; width: 3660px;"><div class="owl-item animated owl-animated-out fadeOut cloned" style="width: 244px; left: 237px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus
                                      lobortis, pulvinar lorem eu, porta elit suspendisse blandit porta magna, nec
                                      scelerisque urna viverra lorem gravida.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_04.jpg" alt="">
                                  <p class="text-slide-name">John Smith</p>
                                  <p class="text-slide-position">GURU</p>
                              </div></div><div class="owl-item animated owl-animated-in fadeIn cloned" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Suspendisse enim erat, vehicula sit amet odio eu, congue gravida magna mauris a
                                      ex aliquam, ornare tortor sit amet, placerat ante aenean sit amet sem et metus
                                      elementum pellentesque.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_02.jpg" alt="">
                                  <p class="text-slide-name">Peter Hall</p>
                                  <p class="text-slide-position">CEO</p>
                              </div></div><div class="owl-item cloned" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada,
                                      pharetra eros id, malesuada diam vivamus eu gravida lacus nulla at consectetur
                                      quam vestibulum ac arcu sed.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_03.jpg" alt="">
                                  <p class="text-slide-name">Jane Williams</p>
                                  <p class="text-slide-position">DESIGNER</p>
                              </div></div><div class="owl-item cloned" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus
                                      lobortis, pulvinar lorem eu, porta elit suspendisse blandit porta magna, nec
                                      scelerisque urna viverra lorem gravida.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_04.jpg" alt="">
                                  <p class="text-slide-name">John Smith</p>
                                  <p class="text-slide-position">GURU</p>
                              </div></div><div class="owl-item active" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada,
                                      pharetra eros id, malesuada diam vivamus eu gravida lacus nulla at consectetur
                                      quam vestibulum ac arcu sed.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_03.jpg" alt="">
                                  <p class="text-slide-name">Jane Williams</p>
                                  <p class="text-slide-position">DESIGNER</p>
                              </div></div><div class="owl-item animated owl-animated-out fadeOut" style="width: 244px; left: 237px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus
                                      lobortis, pulvinar lorem eu, porta elit suspendisse blandit porta magna, nec
                                      scelerisque urna viverra lorem gravida.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_04.jpg" alt="">
                                  <p class="text-slide-name">John Smith</p>
                                  <p class="text-slide-position">GURU</p>
                              </div></div><div class="owl-item animated owl-animated-in fadeIn" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Suspendisse enim erat, vehicula sit amet odio eu, congue gravida magna mauris a
                                      ex aliquam, ornare tortor sit amet, placerat ante aenean sit amet sem et metus
                                      elementum pellentesque.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_02.jpg" alt="">
                                  <p class="text-slide-name">Peter Hall</p>
                                  <p class="text-slide-position">CEO</p>
                              </div></div><div class="owl-item cloned" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus
                                      lobortis, pulvinar lorem eu, porta elit suspendisse blandit porta magna, nec
                                      scelerisque urna viverra lorem gravida.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_04.jpg" alt="">
                                  <p class="text-slide-name">John Smith</p>
                                  <p class="text-slide-position">GURU</p>
                              </div></div><div class="owl-item cloned" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Suspendisse enim erat, vehicula sit amet odio eu, congue gravida magna mauris a
                                      ex aliquam, ornare tortor sit amet, placerat ante aenean sit amet sem et metus
                                      elementum pellentesque.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_02.jpg" alt="">
                                  <p class="text-slide-name">Peter Hall</p>
                                  <p class="text-slide-position">CEO</p>
                              </div></div><div class="owl-item cloned" style="width: 244px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada,
                                      pharetra eros id, malesuada diam vivamus eu gravida lacus nulla at consectetur
                                      quam vestibulum ac arcu sed.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_03.jpg" alt="">
                                  <p class="text-slide-name">Jane Williams</p>
                                  <p class="text-slide-position">DESIGNER</p>
                              </div></div><div class="owl-item animated owl-animated-out fadeOut cloned" style="width: 244px; left: 237px;"><div class="text-slide">
                                  <p class="text-slide-content">
                                      Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus
                                      lobortis, pulvinar lorem eu, porta elit suspendisse blandit porta magna, nec
                                      scelerisque urna viverra lorem gravida.
                                  </p>
                                  <img class="text-slide-img" src="https://demo.cocobasic.com/seppo-html/images/quote_image_04.jpg" alt="">
                                  <p class="text-slide-name">John Smith</p>
                                  <p class="text-slide-position">GURU</p>
                              </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>
                          <div class="clear"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" integrity="sha512-jGsMH83oKe9asCpkOVkBnUrDDTp8wl+adkB2D+//JtlxO4SrLoJdhbOysIFQJloQFD+C4Fl1rMsQZF76JjV0eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.2.1/js/jquery.tooltipster.min.js" integrity="sha512-mmSw55EmRRGbCfB0lKHvPUpLFGUsuhI2YIb/j33FGOKiUThGp5+hF5gs+bAOE52TVeDIZ0Vyu1L19ChsfB4kjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script>
          function textSliderSettings() {
              $(".text-slider").each(function () {
                  var id = $(this).attr('id');
                  var auto_value = window[id + '_auto'];
                  var hover_pause = window[id + '_hover'];
                  var speed_value = window[id + '_speed'];
                  auto_value = (auto_value === 'true') ? true : false;
                  hover_pause = (hover_pause === 'true') ? true : false;
                  $('#' + id).owlCarousel({
                      loop: true,
                      autoHeight: false,
                      smartSpeed: 1000,
                      autoplay: auto_value,
                      autoplayHoverPause: hover_pause,
                      autoplayTimeout: speed_value,
                      responsiveClass: true,
                      dots: false,
                      animateIn: 'fadeIn',
                      animateOut: 'fadeOut',
                      nav: true,
                      items: 1
                  });
              });
          }
          textSliderSettings();
      </script>
             
</div></body>`,
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