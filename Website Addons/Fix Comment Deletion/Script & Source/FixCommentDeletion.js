
const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}


injectCss("CanDeleteComments",`

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

 }`)