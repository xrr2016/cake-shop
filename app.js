window.onload = function () {
	imgNum('container','box');
	var imgDate = {'data':[{'src':'img/40.jpg'},{'src':'img/41.jpg'},{'src':'img/42.jpg'},{'src':'img/43.jpg'},
	{'src':'img/44.jpg'},{'src':'img/45.jpg'},{'src':'img/46.jpg'},{'src':'img/47.jpg'},{'src':'img/48.jpg'},{'src':'img/49.jpg'}
	,{'src':'img/50.jpg'},{'src':'img/51.jpg'},{'src':'img/52.jpg'},{'src':'img/53.jpg'},{'src':'img/54.jpg'},{'src':'img/55.jpg'}
	,{'src':'img/56.jpg'},{'src':'img/57.jpg'},{'src':'img/58.jpg'},{'src':'img/59.jpg'},{'src':'img/60.jpg'},{'src':'img/61.jpg'}
	,{'src':'img/62.jpg'},{'src':'img/63.jpg'},{'src':'img/64.jpg'},{'src':'img/65.jpg'},{'src':'img/66.jpg'},{'src':'img/67.jpg'}
	,{'src':'img/68.jpg'},{'src':'img/69.jpg'},{'src':'img/70.jpg'},{'src':'img/71.jpg'},{'src':'img/72.jpg'},{'src':'img/73.jpg'}
	,{'src':'img/74.jpg'},{'src':'img/75.jpg'},{'src':'img/76.jpg'},{'src':'img/77.jpg'},{'src':'img/78.jpg'},{'src':'img/79.jpg'}
	,{'src':'img/80.jpg'},{'src':'img/81.jpg'},{'src':'img/82.jpg'},{'src':'img/83.jpg'},{'src':'img/84.jpg'},{'src':'img/85.jpg'}
	,{'src':'img/86.jpg'},{'src':'img/87.jpg'},{'src':'img/88.jpg'},{'src':'img/89.jpg'},{'src':'img/90.jpg'},{'src':'img/91.jpg'}
	,{'src':'img/92.jpg'},{'src':'img/93.jpg'},{'src':'img/94.jpg'},{'src':'img/95.jpg'},{'src':'img/96.jpg'},{'src':'img/97.jpg'}]}
	window.onscroll = function(){
		if(checkSlide()){
			var oParent = getContainer();
			for (var i = 0; i < imgDate.data.length; i++) {
					var oContent = document.createElement('div');
					oContent.className = 'box';
					oParent.appendChild(oContent);
					var boximg = document.createElement('div');
					boximg.className = 'box-img';
					oContent.appendChild(boximg);
					var img = document.createElement('img');
					img.src = imgDate.data[i].src;
					boximg.appendChild(img);				
			}
			imgNum('container','box');
		}
	};
};
function getContainer() {
	var oParent = document.getElementById('container');
	return oParent;
}
function checkSlide() {
	var oParent = getContainer();
	var oContent = getChild(oParent,'box');
	var lastBoxHeight = oContent[oContent.length - 1].offsetTop;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if (lastBoxHeight < (scrollTop + pageHeight)) {
		return true;
	}
}
function imgNum(parent,content){
	var oParent = getContainer();
	var oContent = getChild(oParent,content);
	var imgWidth = oContent[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
	oParent.style.cssText = 'width:' + imgWidth * cols + 'px;margin:0 auto';
	var boxHeight = [];
	for(var i =0;i < oContent.length;i++){
		if(i < cols){
			boxHeight[i] = oContent[i].offsetHeight;
		}else{
			var minHeight = Math.min.apply(null,boxHeight);
			var index = getMinHeight(boxHeight,minHeight);
			oContent[i].style.position = 'absolute';
			oContent[i].style.top = minHeight + 'px';
			oContent[i].style.left = oContent[index].offsetLeft + 'px';	
			boxHeight[index] = boxHeight[index] + oContent[i].offsetHeight;
		}
	}
};


function getChild(parent,content){
	var conArr = [];
	var allContent = parent.getElementsByTagName('*');
	for (var i = 0; i < allContent.length; i++) {
		if(allContent[i].className == content){
			conArr.push(allContent[i]);
		}
	}
	return conArr;
};


function getMinHeight (boxHeightArr,minheight){
	for(var i in boxHeightArr){
		if(boxHeightArr[i] == minheight){
			return i;
		}
	}
};