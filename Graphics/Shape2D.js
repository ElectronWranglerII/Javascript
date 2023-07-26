class Shape2D{
	static None = 0;
	static Circle = 1;
	static Triangle = 2;
	static Tripoint = 3;
	static Square = 4;
	static Diamond = 5;
	static Star = 6;
	static Cross = 7;
	static X = 8;
	
	static #TO_RAD = Math.PI / 180;
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
				this._Weight = Math.ceil(Weight);
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
			case Shape2D.None:
				break;
			case Shape2D.Circle:
				Context.beginPath();
				Context.arc(X, Y, this._Size, 0, Math.PI * 2);
				break;
			case Shape2D.Triangle:
				Radius = Shape2D.#SQRT_THREE_OVER_TWO * this._Size;
				Context.beginPath();
				Context.moveTo(X - Radius, Y + this._Size * 0.5);
				Context.lineTo(X, Y - this._Size);
				Context.lineTo(X + Radius, Y + this._Size * 0.5);
				Context.closePath();
				break;
			case Shape2D.Tripoint:
		console.log(Shape2D.#TO_RAD);
				Radius = Shape2D.#SQRT_THREE_OVER_TWO * this._Size;
				Context.beginPath();
				Context.moveTo(X, Y - this._Size);
				Context.lineTo(X + 0.232052 * this._Size, Y - 0.134 * this._Size);
				Context.lineTo(X + Math.sin(120 * Shape2D.#TO_RAD) * this._Size, Y - Math.cos(120 * Shape2D.#TO_RAD) * this._Size);
				Context.lineTo(X, Y + 0.26795 * this._Size);
				Context.lineTo(X + Math.sin(240 * Shape2D.#TO_RAD) * this._Size, Y - Math.cos(240 * Shape2D.#TO_RAD) * this._Size);
				Context.lineTo(X - 0.232052 * this._Size, Y - 0.134 * this._Size);
				Context.closePath();
				break;
			case Shape2D.Square:
				Radius = Shape2D.#SQRT_TWO_OVER_TWO * this._Size;
				Context.beginPath();
				Context.moveTo(X - Radius, Y - Radius);
				Context.lineTo(X - Radius, Y + Radius);
				Context.lineTo(X + Radius, Y + Radius);
				Context.lineTo(X + Radius, Y - Radius);
				Context.closePath();
				break;
			case Shape2D.Diamond:
				Context.beginPath();
				Context.moveTo(X - this._Size, Y);
				Context.lineTo(X, Y + this._Size);
				Context.lineTo(X + this._Size, Y);
				Context.lineTo(X, Y - this._Size);
				Context.closePath();
				break;
			case Shape2D.Star:
				Context.beginPath();
				Context.moveTo(X, Y - this._Size); //A
				Context.lineTo(X - 0.22451 * this._Size, Y - 0.30902 * this._Size); //F
				Context.lineTo(X - 0.95106 * this._Size, Y - 0.30902 * this._Size); //B
				Context.lineTo(X - 0.30902 * this._Size, Y + 0.11804 * this._Size); //G
				Context.lineTo(X - 0.58779 * this._Size, Y + 0.80902 * this._Size); //C
				Context.lineTo(X, Y + 0.38197 * this._Size); //H
				Context.lineTo(X + 0.58779 * this._Size, Y + 0.80902 * this._Size); //D
				Context.lineTo(X + 0.30902 * this._Size, Y + 0.11804 * this._Size); //I
				Context.lineTo(X + 0.95106 * this._Size, Y - 0.30902 * this._Size); //E
				Context.lineTo(X + 0.22451 * this._Size, Y - 0.30902 * this._Size); //J
				Context.closePath();
				break;
			case Shape2D.Cross:
				Context.beginPath();
				Context.moveTo(X - this._Weight, Y - this._Size);
				Context.lineTo(X - this._Weight, Y - this._Weight);
				Context.lineTo(X - this._Size, Y - this._Weight);
				Context.lineTo(X - this._Size, Y + this._Weight);
				Context.lineTo(X - this._Weight, Y + this._Weight);
				Context.lineTo(X - this._Weight, Y + this._Size);
				Context.lineTo(X + this._Weight, Y + this._Size);
				Context.lineTo(X + this._Weight, Y + this._Weight);
				Context.lineTo(X + this._Size, Y + this._Weight);
				Context.lineTo(X + this._Size, Y - this._Weight);
				Context.lineTo(X + this._Weight, Y - this._Weight);
				Context.lineTo(X + this._Weight, Y - this._Size);
				Context.closePath();
				break;
			case Shape2D.X:
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
			if(	ShapeType == Shape2D.None ||
				ShapeType == Shape2D.Circle ||
				ShapeType == Shape2D.Triangle ||
				ShapeType == Shape2D.Tripoint ||
				ShapeType == Shape2D.Square ||
				ShapeType == Shape2D.Diamond ||
				ShapeType == Shape2D.Star ||
				ShapeType == Shape2D.Cross ||
				ShapeType == Shape2D.X){
				this._Shape = ShapeType;
			}else{
				throw "Invalid Shape Type";
			}
		}
	}
}
