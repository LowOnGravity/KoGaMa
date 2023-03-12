
const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}


injectCss("Lonely Theme",`

body#root-page-mobile {
    background-image: url("https://i.imgur.com/rbx4tiy.png");
 background-position: center;
 background-repeat: no-repeat;
 background-attachment: fixed;
 background-size: cover;
 height: 100%;
}




/* posts and stuff */
#profile-news-feed ul.news-feed-thumbs>li.item {
   background-color: hsl(225.02deg 87.69% 38.28% / 7%);
   border-radius: 25px;
    color: rgb(124 229 235);
}

        /* Here goes Comment box */
#root-page-mobile #profile-news-feed .feed-comments .comments form textarea {
       background-color:  #71bdd64f;
       border-radius: 25px;
       color: #ebbe7c;
           text-shadow: 0 0 4px #fff;
   }
       /* Post Creation Box */
.pure-form input[type=color], .pure-form input[type=date], .pure-form input[type=datetime-local], .pure-form input[type=datetime], .pure-form input[type=email], .pure-form input[type=month], .pure-form input[type=number], .pure-form input[type=password], .pure-form input[type=search], .pure-form input[type=tel], .pure-form input[type=text], .pure-form input[type=time], .pure-form input[type=url], .pure-form input[type=week], .pure-form select, .pure-form textarea {

   background-color: hsl(225.02deg 87.69% 38.28% / 7%);
   border-radius: 25px;
         color: #ebbe7c;
           text-shadow: 0 0 4px #fff;


}

    /* Post Button */
    .pure-button-primary, .pure-button-selected, a.pure-button-primary, a.pure-button-selected {
        background-color: hsl(225.02deg 87.69% 38.28% / 7%);
        border-radius: 25px;
  }




			/* text required */
			.control-group.error input, .control-group.error textarea, input.error, textarea.error {
				border:	1px solid #4b5fa796;
				}
				.control-group.error ul.help-inline {
    			list-style: none;
				color: #2b98ffba;
				}


/* Comments under games */
#root-page-mobile .comments li {
    border-radius: 25px;
    background-color: hsl(225.02deg 87.69% 38.28% / 7%);
}

#root-page-mobile .comments li .body{
    border-radius: 25px;
    background-color: hsl(225.02deg 87.69% 38.28% / 7%);
    box-shadow: none;
    --webkit-box-shadow: none;
}

                       #root-page-mobile .comments li .body:hover {
                       background-color: hsl(177.87deg 100% 83.86% / 14%);
                       }


	/* weird arrow */
	#root-page-mobile .comments li .body .arrow-left-border {
		display: none;
	}
		#root-page-mobile .comments li .body .arrow-left {
		display: none;
		}

      /* username colors */
      #root-page-mobile .comments li .header .username a {
            color: #6ab4de;
            font-weight: 100;
        }
                        #root-page-mobile .comments li .body:hover .username a {
                       color: #6ab4de;
                       font-weight: 300;
                       }

       /* comment text color */
        #root-page-mobile .comments li .text {
            color: rgb(124 229 235);
        }

		/* Can delete comments again */
		#root-page-mobile #profile-news-feed a.destroy {
			background: url(/static/img/destroy.png)
			    padding-left: 10px ;
		}
		#root-page-mobile .comments a.destroy {
			border: 1px solid #a9b8eb;
			border-radius: 25px;
    		cursor: pointer;
    		right: 70px;
    		top: 14px;
    		width: 20px;
    		height: 20px;

			}

	/* timestamps */
	#root-page-mobile .comments li .header .time {
		display: none;
	}


          /* Report / Block Comment Buton */
            .pure-button-secondary, a.pure-button-secondary {
                background-color: hsl(225.02deg 87.69% 38.28% / 7%);
                color:  rgb(124 229 235);
            }

                    /* Context menu RB Button */
                    #root-page-mobile .comments li .header .comments-menu-button-container .comments-menu-button .comment-menu-types li a {
                        background-color: hsl(225.02deg 87.69% 38.28% / 7%);
                        color:  rgb(124 229 235);

                    }

                    #root-page-mobile .comments li .header .comments-menu-button-container .comments-menu-button .comment-menu-types {
                        background-color: hsl(225.02deg 87.69% 38.28% / 7%);
                        color:  rgb(124 229 235);
                        border-radius: 25px;
                        }

						/* Make it dynamic */
						.pure-button-secondary, a.pure-button-secondary {
							opacity: 0.1;
								    transition:  0.5s;
						}
								.pure-button-secondary, a.pure-button-secondary:hover {
									opacity: 1;
										    transition:  0.5s;
								}
						#root-page-mobile #profile-news-feed a.destroy {
							opacity: 0.1;
								    transition:  0.5s;
						}
												#root-page-mobile #profile-news-feed a.destroy:hover {
													opacity: 1;
								    transition:  0.5s;
										}

				/* Fix padding */
				#root-page-mobile #profile-news-feed .feed-comments .comments ul.comment-list li .body .username a {
					margin-left: 10px;
				}
				#root-page-mobile .comments li .text {
					margin-left: 12px;
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

/* Side Friend Panel */
#root-page-mobile #content.authenticated #content-container #main-content
{
background-image: url("https://i.imgur.com/rbx4tiy.png");
 background-position: center;
 background-repeat: no-repeat;
 background-attachment: fixed;
 background-size: cover;
 height: 100%;
}

/* dynamic dms */
.zUJzi
  {
    width: 110px;
    height: 10px;
    transition: height 0.3s;
    transition: width 0.3s;
    opacity: 0.1;
  }
  .zUJzi:hover
  {
   height: 400px;
   width: 500px;
       transition: height 0.3s;
    transition: width 0.3s;
     opacity: 1;
  }




._3TORb ._1Yhgq {
   background-color: transparent;
    background-image: url("https://i.imgur.com/rbx4tiy.png");
 background-position: center;
 background-repeat: no-repeat;
 background-attachment: fixed;
 background-size: cover;

}
._3TORb {
	background-color: #161b1f00;
}
._3TORb ._1Yhgq {
   background-color: transparent;
}

._3TORb ._2E1AL {
   display:none;
}
._3TORb ._1Yhgq, ._3TORb ._3iXbw {
   height: 1000%;
}

/* Hover Friendlist */
._1Yhgq {min-width: unset;position: absolute; right:0;}
._1Yhgq {max-width: 65px;min-width: 65px;transition: 0.5s ease;}
._1Yhgq:hover {max-width: 240px;min-width: 240px;transition: 0.5s ease;}
 }



/* useless */

footer #footer-company{
   display: none;
}

footer #footer-links{
   display: none;
}

footer #footer-about{
   display: none;
}



footer #footer-header {
	display: none;
}
footer #footer-company {
	display: none;
}


 }`)