window.onload = function () {
	imgNum('container','box');
	var imgDate = {'data':[{'src':'img/40.jpg'},{'src':'img/41.jpg'},{'src':'img/42.jpg'},{'src':'img/43.jpg'},{'src':'img/44.jpg'},{'src':'img/45.jpg'}]}
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