class Rubber{
	
	constructor(x,y,r)
	{
		var options = {
			'restitution':0.3,
			'friction':5,
			'density':1
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	
	display()
	{
			var rubberpos=this.body.position;	
			var angle = this.body.angle;	
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rotate(angle);
			//draw the ellipse here to display the rubber ball
			ellipse(55, 46, 55, 55);
			pop();
	}

}