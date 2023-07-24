class ChartView{
	constructor(){
		if(arguments.length == 4){
			this._XStart = arguments[0];
			this._XSize = arguments[2];
			this._YStart = arguments[1];
			this._YSize = arguments[3];
		}else if(arguments.length == 6){
			this._XStart = arguments[0];
			this._XSize = arguments[3];
			this._YStart = arguments[1];
			this._YSize = arguments[4];
			this._ZStart = arguments[2];
			this._ZSize = arguments[5];
		}else{
			throw "Incorrect Number of Arguments";
		}
	}
	End(X, Y, Z){
		if(arguments.length == 0){
			if(this._ZStart == null || this._ZSize == null){
				return [this._XStart + this._XSize, this._YStart + this._YSize];
			}else{
				return [this._XStart + this._XSize, this._YStart + this._YSize, this._ZStart + this._ZSize];
			}
		}else if(arguments.length == 2){
			if(isNaN(X) || isNaN(Y)){
				throw "Invalid Value";
			}else{
				this._XSize = X - this._XStart;
				this._YSize = Y - this._YStart;
			}
		}else if(arguments.length == 3){
			if(isNaN(Z)){
				throw "Invalid Value";
			}else{
				this._ZSize = Z - this._ZStart;
			}
		}
	}
	Shift(X, Y, Z){
		if(arguments.length == 2 || arguments.length == 3){
			if(isNaN(X) || isNaN(Y)){
				throw "Invalid Value";
			}else{
				this._XStart = this._XStart + X;
				this._YStart = this._YStart + Y;
			}
			if(arguments.length == 3){
				if(isNaN(Z)){
					throw "Invalid Value";
				}else{
					if(this._ZStart != null && this._ZSize != null){
						this._ZStart = this.ZStart + Z;
					}
				}
			}
		}
	}
	Size(X, Y, Z){
		if(arguments.length == 0){
			if(this._ZStart == null || this._ZSize == null){
				return [this._XSize, this._YSize];
			}else{
				return [this._XSize, this._YSize, this._ZSize];
			}
		}else if(arguments.length == 2){
			if(isNaN(X) || isNaN(Y)){
				throw "Invalid Value";
			}else{
				this._XSize = X;
				this._YSize = Y;
			}
		}else if(arguments.length == 3){
			if(isNaN(Z)){
				throw "Invalid Value";
			}else{
				this._ZSize = Z;
			}
		}
	}
	Start(X, Y, Z){
		if(arguments.length == 0){
			if(this._ZStart == null || this._ZSize == null){
				return [this._XStart, this._YStart];
			}else{
				return [this._XStart, this._YStart, this._ZStart];
			}
		}else{
			if(isNaN(X) || isNaN(Y)){
				throw "Invalid Value";
			}else{
				this._XStart = X;
				this._YStart = Y;
			}
			if(typeof Z != "undefined"){
				if(isNaN(Z)){
					throw "Invalid Value";
				}else{
					this._ZStart = Z;
				}
			}
		}
	}
}

class Chart{
	constructor(){
		this._BackColor = new ColorRGB(127, 127, 127);
		this._FontSize;
		this._ForeColor = new ColorRGB(127, 127, 127);
		this._ViewXMin;
		this._ViewXMax;
		this._ViewYMin;
		this._ViewYMax;
		this._XMin;
		this._XMax;
		this._YMin;
		this._YMax;
		this._XOffset;
		this._YOffset;
		this._XStep;
		this._YStep;
		this._TargetCanvas;
		this._Dataset;
		this._PlotColor;
		this._AxisNameX;
		this._AxisNameY;
		this._AxisNameZ;
	}
	BackColor(R, G, B){
		this._BackColor.Color(R, G, B);
	}
	BackColorInvert(){
		this._BackColor.Invert();
	}
	FontSize(Value){
		this._FontSize = Value;
	}
	ForeColor(R, G, B){
		this._ForeColor.Color(R, G, B);
	}
	ForeColorInvert(){
		this._ForeColor.Invert();
	}
	View(XMin, YMin, XMax, YMax){
		if(XMin > XMax || YMin > YMax){
			throw "Bounds error";
		}else{
			this._ViewXMin = XMin;
			this._ViewXMax = XMax;
			this._ViewYMin = YMin;
			this._ViewYMax = YMax;
		}
	}
	ViewXMax(Value){
		if(Value < this._ViewXMin){
			throw "Bounds error";
		}else{
			this._ViewXMax = Value;
		}
	}
	ViewXMin(Value){
		if(Value > this._ViewXMax){
			throw "Bounds error";
		}else{
			this._ViewXMin = Value;
		}
	}
	ViewYMax(Value){
		if(Value < this._ViewYMin){
			throw "Bounds error";
		}else{
			this._ViewYMax = Value;
		}
	}
	ViewYMin(Value){
		if(Value > this._ViewYMax){
			throw "Bounds error";
		}else{
			this._ViewYMin = Value;
		}
	}
	DatasetAdd(Dataset){
		if(this._Dataset == null){
			this._Dataset = Dataset;
		}else{
			this._Dataset.push(Dataset);
		}
	}
	DatasetRemove(Dataset){
		let i = 0;
		while(i < this._Dataset.length){
			if(this._Dataset[i] == Dataset){
				this._Dataset.splice(i, 1);
			}else{
				i++;
			}
		}
	}
	Draw(){
		let Canvas = document.getElementById(this._TargetCanvas);
		if(Canvas != null){
			let DrawingContext = Canvas.getContext("2d");
			DrawingContext.font = '"' + this._FontSize + "px Arial";
			//Clear the canvas
			DrawingContext.fillStyle = this._BackColor.CSS();
			DrawingContext.fillRect(0, 0, Canvas.width, Canvas.height);
			//Draw the grid
			if(isNaN(this._ViewXMin) || isNaN(this._ViewXMax) || isNaN(this._ViewYMin) || isNaN(this._ViewYMax)){
				throw "Invalid view";
			}else{
				//Calculate left and right text padding
				let LeftPadding = DrawingContext.measureText(this._ViewXMin);
				let RightPadding = DrawingContext.measureText(this._ViewXMax);
				console.log(LeftPadding.width);
				DrawingContext.lineWidth = 1;
				DrawingContext.strokeStyle = this._ForeColor.CSS();
				let StartX = Math.ceil(this._ViewXMin / this._XStep) * this._XStep;
				let EndX = Math.floor((this._ViewXMax + this._XStep) / this._XStep) * this._XStep;
				console.log(StartX + ", " + EndX);
				let XCount = (EndX - StartX) / this._XStep;
				let X = Math.ceil(LeftPadding.width / 2);
				let XStride = (Canvas.width - Math.ceil(LeftPadding.width / 2) - Math.ceil(RightPadding.width / 2)) / XCount;
				for(let i = 0; i < XCount; i++){
					DrawingContext.beginPath();
					DrawingContext.moveTo(X, 0);
					DrawingContext.lineTo(X, Canvas.height - this._FontSize);
					DrawingContext.stroke();
					console.log((this._ViewXMin + i * this._XStep).toFixed(2));
					X = X + XStride;
				}
			}
		}else{
			throw "Target canvas not found";
		}
	}
	StepX(Value){
		if(isNaN(Value)){
			throw "Invalid value";
		}else{
			this._XStep = Value;
		}
	}
	StepY(Value){
		if(isNaN(Value)){
			throw "Invalid value";
		}else{
			this._YStep = Value;
		}
	}
	Target(Canvas){
		this._TargetCanvas = Canvas;
	}
}
