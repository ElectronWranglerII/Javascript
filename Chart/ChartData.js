class DataPoint2D{
	constructor(X, Y, Label){
		if(isNaN(X) || isNaN(Y)){
			throw "Invalid Value";
		}else{
			this._Label = Label;
			this._X = X;
			this._Y = Y;
		}
	}
	Label(){
		return this._Label;
	}
	ToString(){
		return this._X + ", " + this._Y + ", " + this._Label;
	}
	X(){
		return this._X;
	}
	Y(){
		return this._Y;
	}
}

class DataPoint3D{
	constructor(X, Y, Z, Label){
		if(isNaN(X) || isNaN(Y) || isNaN(Z)){
			throw "Invalid Value";
		}else{
			this._Label;
			this._X = X;
			this._Y = Y;
			this._Z = Z;
		}
	}
	Label(){
		return this._Label;
	}
	ToString(){
		return this._X + ", " + this._Y + ", " + this._Z + ", " + this._Label;
	}
	X(){
		return this._X;
	}
	Y(){
		return this._Y;
	}
	Z(){
		return this._Z;
	}
}

class ChartData{
	constructor(){
		this._Point = new Array();
	}
	Add(DataPoint){
		let Point;
		if(this._Point == null || this._Point.length == 0){
			if(DataPoint instanceof DataPoint2D){
				Point = new DataPoint2D(DataPoint.X(), DataPoint.Y(), DataPoint.Label());
			}else if(DataPoint instanceof DataPoint3D){
				Point = new DataPoint3D(DataPoint.X(), DataPoint.Y(), DataPoint.Z(), DataPoint.Label());
			}else{
				throw "Data Point Type Mismatch";
			}
		}else{
			if(this._Point[0] instanceof DataPoint2D && DataPoint instanceof DataPoint2D){
				Point = new DataPoint2D(DataPoint.X(), DataPoint.Y(), DataPoint.Label());
			}else if(this._Point[0] instanceof DataPoint3D && DataPoint instanceof DataPoint3D){
				Point = new DataPoint3D(DataPoint.X(), DataPoint.Y(), DataPoint.Z(), DataPoint.Label());
			}else{
				throw "Data Point Type Mismatch";
			}
		}
		this._Point.push(Point);
	}
	OrderX(){
		let Swap = true;
		while(Swap == true){
			Swap = false;
			for(let i = 0; i < this._Point.length - 1; i++){
				if(this._Point[i].X() > this._Point[i + 1].X()){
					[this._Point[i], this._Point[i + 1]] = [this._Point[i + 1], this._Point[i]];
					Swap = true;
				}
			}
		}
	}
	OrderY(){
		let Swap = true;
		while(Swap == true){
			Swap = false;
			for(let i = 0; i < this._Point.length - 1; i++){
				if(this._Point[i].Y() > this._Point[i + 1].Y()){
					[this._Point[i], this._Point[i + 1]] = [this._Point[i + 1], this._Point[i]];
					Swap = true;
				}
			}
		}
	}
	OrderZ(){
		if(this._Point instanceof DataPoint3D){
			let Swap = true;
			while(Swap == true){
				Swap = false;
				for(let i = 0; i < this._Point.length - 1; i++){
					if(this._Point[i].Z() > this._Point[i + 1].Z()){
						[this._Point[i], this._Point[i + 1]] = [this._Point[i + 1], this._Point[i]];
						Swap = true;
					}
				}
			}
		}
	}
	Remove(Label){
		for(let i = 0; i < this._Point.length; i++){
			if(this._Point[i].Label() == Label){
				this._Point.splice(i, 1);
				break;
			}
		}
	}
	ToString(){
		let RetVal = "";
		for(let i = 0; i < this._Point.length; i++){
			RetVal = RetVal + this._Point[i].ToString() + "\n";
		}
		return RetVal;
	}
	Value(Label){
		for(let i = 0; i < this._Point.length; i++){
			if(this._Point[i].Label() == Label){
				if(this._Point[i] instanceof DataPoint2D){
					return new DataPoint2D(this._Point[i].X(), this._Point[i].Y(), this._Point[i].Label());
				}else if(this._Point[i] instanceof DataPoint3D){
					return new DataPoint3D(this._Point[i].X(), this._Point[i].Y(), this._Point[i].Z(), this._Point[i].Label());
				}
			}
		}
	}
	X(Label){
		for(let i = 0; i < this._Point.length; i++){
			if(this._Point[i].Label() == Label){
				return this._Point[i].X();
			}
		}
	}
	Y(Label){
		for(let i = 0; i < this._Point.length; i++){
			if(this._Point[i].Label() == Label){
				return this._Point[i].Y();
			}
		}
	}
	Z(Label){
		for(let i = 0; i < this._Point.length; i++){
			if(this._Point[i].Label() == Label && this._Point[i] instanceof DataPoint3D){
				return this._Point[i].Z();
			}
		}
		throw "Data Point Type Mismatch";
	}
}
