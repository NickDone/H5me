
var Lxdme=function (obj){
	this.width=window.innerWidth*0.94;
	this.height=window.innerHeight*0.94;
	
	this.count=obj.count|6;
	
	this.r=Math.max(this.width,this.height)/this.count/3.5;
	
	this.chooseType=["资料","相册","日志","留言","作品","心情"];
	
	this.colors=["#CB9998","#FEFF99","#FE9900"
				,"#666698","#FEFF01","#0099CB"
				,"#FD6766","#019934","#98CB00"
				,"#02979B","#FF6600","#0066CA"
				,"#FFFF00","#339933","#FE0032"
				]
}

Lxdme.prototype.initDom=function(){
	var stage=document.createElement('div');
	var str='<canvas id="canvas" width="'+this.width+'" height="'+this.height+'" style="display: inline-block;"></canvas>';
	stage.setAttribute('style','position: absolute;top:0;left:0;right:0;bottom:0;');
	stage.innerHTML=str;
	document.body.appendChild(stage);

}

Lxdme.prototype.initArrPop=function(){
	for( i=0;i<this.count;i++){
		var randomDirX=Math.random()*10>5?1:-1;
		var randomDirY=Math.random()*10>5?1:-1;
		var tmp={};
		var color = this.colors[Math.floor((Math.random() * 15))];
		while (color.length < 6) {
	            color = 0 + color;
		}
		if(this.width>this.height){
			tmp.x=this.r+i*this.r*3;
			tmp.y=this.r+Math.random()*(this.height-2*this.r)+i;
			tmp.r=this.r;
			tmp.dirX=randomDirX;
			tmp.dirY=randomDirY;
			tmp.color=color;
			tmp.text=this.chooseType[i];
		}else{
			tmp.y=this.r+i*this.r*2;
			tmp.x=this.r+Math.random()*(this.width-2*this.r)+i;
			tmp.r=this.r;
			tmp.dirX=randomDirX;
			tmp.dirY=randomDirY;
			tmp.color=color;
			tmp.text=this.chooseType[i];
		}		
		this.arrPop.push(tmp);
	}
	
}

Lxdme.prototype.init=function(){
	this.initDom();
	this.canvas=document.getElementById('canvas');
	this.ctx=this.canvas.getContext('2d');
	
	this.arrPop=[];
	this.initArrPop();
	this.drawArrPop();
	this.startPop();
	
}

Lxdme.prototype.drawPop=function(obj){
	var gradient=this.ctx.createRadialGradient(obj.x-obj.r/2,obj.y-obj.r/2,obj.r/7,obj.x,obj.y,obj.r*1.3);
	gradient.addColorStop(1,obj.color);
	
	gradient.addColorStop(0,obj.color);
	
	this.ctx.globalAlpha= (Math.sin(0.8) + 1) / 2;  
	this.ctx.strokeStyle="transparent";
	this.ctx.fillStyle=gradient;
	
	this.ctx.beginPath();
    this.ctx.arc(obj.x,obj.y,obj.r,0,Math.PI*2,true);
	this.ctx.fill();
	this.ctx.stroke();
	this.ctx.closePath();
	this.ctx.beginPath();
	this.ctx.font=this.r/2+"pt SimHei";
	
	this.ctx.fillStyle="white";
	this.ctx.fillText(obj.text,obj.x-obj.r/1.7,obj.y+obj.r/4);
	
	this.ctx.stroke();
	this.ctx.closePath();
}

Lxdme.prototype.drawArrPop=function(){
	this.ctx.clearRect(0,0,this.width,this.height);
	for(i=0;i<this.count;i++){
		this.drawPop(this.arrPop[i]);
	}
	
}

Lxdme.prototype.dancePop=function(){
	var maxDistance=this.r*2;
	var perPix=2;
	for(i=0;i<this.count;i++){
		var x=this.arrPop[i].x;
		var y=this.arrPop[i].y;
		var count=0;
		var newX=this.arrPop[i].x+perPix*this.arrPop[i].dirX;
		var newY=this.arrPop[i].y+perPix*this.arrPop[i].dirY;
		var maxX=this.width-this.r;
		var maxY=this.height-this.r;
			
		for(j=0;j<this.count;j++){
			dx=x+perPix*this.arrPop[i].dirX-this.arrPop[j].x;
			dy=y+perPix*this.arrPop[i].dirY-this.arrPop[j].y;
			var distance=Math.sqrt(dx*dx+dy*dy);
			
			if(i==j){
				continue;
			}else if(distance<= maxDistance){
				this.arrPop[i].dirX*=-1;
				this.arrPop[i].dirY*=-1;
				break;
			}else if(newX>=maxX||newX<=this.r){
				this.arrPop[i].dirX*=-1;
			
			}else if(newY>=maxY||newY<=this.r){
				this.arrPop[i].dirY*=-1;
			}
			count++;
			if(count==this.count-1){
				this.arrPop[i].x+=perPix*this.arrPop[i].dirX;
				this.arrPop[i].y+=perPix*this.arrPop[i].dirY;
			}
			
		}	
	}
	this.drawArrPop();
}

Lxdme.prototype.startPop=function(){
	var self=this;
	this.popAnimation=setInterval(function(){
		self.dancePop();
	},20);
	
}


















	
