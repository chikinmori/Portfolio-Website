function ingredient(id,x,y,width,height,source,countdown){
	this.id = id;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.source = source;
	this.countdown = countdown;
	
	this.Draw = function(context){
		context.drawImage(this.source, this.x, this.y, this.width, this.height);
		//context.fillRect(this.x,this.y,this.width,this.height);
	}
}