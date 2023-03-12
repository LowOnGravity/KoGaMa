// ==UserScript==
// @name         Dynamic Profile
// @namespace    https://github.com/LowOnGravity
// @version      1F
// @description  Makes stuff fancy
// @author       Simon
// @match        https://www.kogama.com/*
// @match        https://kogama.com.br/*
// @match        https://friends.kogama.com/*
// @icon         https://i.imgur.com/rbx4tiy.png
// @grant        none
// ==/UserScript==

const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}


injectCss("Dynamic Website",`


 :root {
        --bg: #17181c; /* background */
        --bg-dark: #121316;  /* darken */
        --main: #34cd63;  /* green */
        --tmain: #34cd6391;  /* sopmething4sure */
        --border: 1px solid #74747724  /* green border */
    }
::-webkit-scrollbar {
    width: 3px !important;
}


/* Hover Friendlist */
._1Yhgq {min-width: unset;position: absolute; right:0;}
._1Yhgq {max-width: 65px;min-width: 65px;transition: 0.5s ease;}
._1Yhgq:hover {max-width: 240px;min-width: 240px;transition: 0.5s ease;}


._3TORb {
background-color: transparent;
}
._3TORb ._1Yhgq, ._3TORb ._3iXbw {
background-color: transparent;
}
._3TORb ._2E1AL {
display: none;
}


  		/* Can delete comments again */
		#root-page-mobile #profile-news-feed a.destroy {
			background: url(/static/img/destroy.png)
			    padding-left: 10px ;
		}
		#root-page-mobile .comments a.destroy {
			border: 1px solid #f5627d;
			border-radius: 25px;
    		cursor: pointer;
    		right: 70px;
    		top: 14px;
    		width: 20px;
    		height: 20px;
			}
            	#root-page-mobile #profile-news-feed a.destroy {
							opacity: 0.5;
								    transition:  0.5s;
						}
												#root-page-mobile #profile-news-feed a.destroy:hover {
													opacity: 1;
								    transition:  0.5s;
										}


/* dynamic menu */

body#root-page-mobile header#pageheader {
height: 10px;
  transition:  0.5s;
  opacity: 0;
  }
  body#root-page-mobile header#pageheader:hover {
height: 48px;
  transition:  0.5s;
  opacity: 1;
  }

 /* dynamic profile */
#mobile-page #profile-page .section-top .progression .progression-item .data   {

opacity: 0.1;
	    transition:  0.5s;
}

#mobile-page #profile-page .section-top .progression .progression-item .data:hover {
	  opacity: 1;
	    transition:  0.5s;
}


  .zUJzi
  {
    width: 110px;
    height: 10px;
    transition: height 0.3s;
    transition: width 0.3s;
  }
  .zUJzi:hover
  {
   height: 400px;
   width: 500px;
       transition: height 0.3s;
    transition: width 0.3s;
  }


 }`)