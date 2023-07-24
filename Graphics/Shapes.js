class ChartPoint{
	static None = 0;
	static Circle = 1;
	static Triangle = 2;
	static Square = 3;
	static Diamond = 4;
	static Star = 5;
	static Cross = 6;
	static X = 7;
	
	static #SQRT_TWO_OVER_TWO = (Math.sqrt(2)) / 2;
	static #SQRT_THREE_OVER_TWO = (Math.sqrt(3)) / 2;
	
	constructor(ShapeType, Size, Weight, Fill){
		if(arguments.length == 3 || arguments.length == 4){
			this.Shape(ShapeType);
			if(typeof Size == "number" && !isNaN(Size) && Size > 0){
				this._Size = Math.ceil(Size);
			}else{
				throw "Size Must be a Number Greater Than 1";
			}
			if(typeof Weight == "number" && !isNaN(Weight) && Weight > 0){
				this._Weight = Math.ceil(Size);
			}else{
				throw "Weight Must be a Number Greater Than 1";
			}
			this._Fill = false;
			if(arguments.length == 4){
				if(typeof Fill == "boolean"){
					this._Fill = Fill;
				}else{
					throw "Fill Must be a Boolean";
				}
			}
		}else{
			throw "Incorrect Number of Arguments";
		}
	}
	
	Draw(Context, X, Y){
		let Radius;
		switch(this._Shape){
			case ChartPoint.None:
				break;
			case ChartPoint.Circle:
				Context.beginPath();
				Context.arc(X, Y, this._Size, 0, Math.PI * 2);
				break;
			case ChartPoint.Triangle:
				Radius = ChartPoint.#SQRT_THREE_OVER_TWO * this._Size;
				Context.beginPath();
				Context.moveTo(X - Radius, Y + this._Size * 0.5);
				Context.lineTo(X, Y - this._Size);
				Context.lineTo(X + Radius, Y + this._Size * 0.5);
				Context.closePath();
				break;
			case ChartPoint.Square:
				Radius = ChartPoint.#SQRT_TWO_OVER_TWO * this._Size;
				Context.beginPath();
				Context.moveTo(X - Radius, Y - Radius);
				Context.lineTo(X - Radius, Y + Radius);
				Context.lineTo(X + Radius, Y + Radius);
				Context.lineTo(X + Radius, Y - Radius);
				Context.closePath();
				break;
			case ChartPoint.Diamond:
				Context.beginPath();
				Context.moveTo(X - this._Size, Y);
				Context.lineTo(X, Y + this._Size);
				Context.lineTo(X + this._Size, Y);
				Context.lineTo(X, Y - this._Size);
				Context.closePath();
				break;
			case ChartPoint.Star:
				break;
			case ChartPoint.Cross:
				break;
			case ChartPoint.X:
				break;
			default:
				throw "Undefined Shape Type";
				break;
		}
		if(this._Fill == true){
			Context.fill();
		}
		Context.stroke();
	}
	
	FillColor(){
	
	}
	
	Shape(ShapeType){
		if(arguments.length == 0){
			return this._Shape;
		}else if(arguments.length == 1){
			if(	ShapeType == ChartPoint.None ||
				ShapeType == ChartPoint.Circle ||
				ShapeType == ChartPoint.Triangle ||
				ShapeType == ChartPoint.Square ||
				ShapeType == ChartPoint.Diamond ||
				ShapeType == ChartPoint.Star ||
				ShapeType == ChartPoint.Cross ||
				ShapeType == ChartPoint.X){
				this._Shape = ShapeType;
			}else{
				throw "Invalid Shape Type";
			}
		}
	}
}
