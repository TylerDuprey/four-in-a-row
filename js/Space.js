// JavaScript Document
class Space {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.id = `space-${x}-${y}`;
		this.token = null;
		this.diameter = 76;
		this.radius = this.diamter/2;
	}
	
	drawSVGSpace() {
		/* Get the Circle SVG from W3C */
		const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");	
		/* Set attributes to the SVG tag */
		svgSpace.setAttributeNS(null, "id", this.id);
		svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
		svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
		svgSpace.setAttributeNS(null, "r", this.radius - 8);
		svgSpace.setAttributeNS(null, "fill", "black");
		svgSpace.setAttributeNS(null, "stroke", "none");
		/* Append the SVG element to the page */
		document.getElementById("mask").appendChild(svgSpace);   
	}
	
}