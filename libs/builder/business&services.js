//Business & services block templates

Vvveb.BlocksGroup['BusinessServices'] =
["BusinessServices/home-seppo", "BusinessServices/services-seppo"];

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

Vvveb.Blocks.add("BusinessServices/home-seppo", {
    name: "Services / ",
	dragHtml: '<img width="128" height="128" src="' + Vvveb.baseUrl + 'icons/product.png">',    
    image: "",
    html: `><body><div data-name="sercvices-seppo" class="sercvices-seppo">
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