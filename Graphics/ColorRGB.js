class ColorRGB{
	constructor(R, G, B){
		if(arguments.length == 0){
			this._R = 127;
			this._G = 127;
			this._B = 127;
		}else if(arguments.length == 3){
			this.Color(R, G, B);
		}else{
			throw "Parameter Mismatch";
		}
	}
	Color(R, G, B){
		if(arguments.length == 0){
			return [this._R, this._G, this._B];
		}else if(arguments.length == 3){
			if(isNaN(R) || isNaN(G) || isNaN(B)){
				throw "Invalid Color Value";
			}else{
				if(R < 0 || R > 255 || G < 0 || G > 255 || B < 0 || B > 255){
					throw "Invalid Color Value";
				}else{
					this._R = Math.floor(R);
					this._G = Math.floor(G);
					this._B = Math.floor(B);
				}
			}
		}else{
			throw "Parameter Mismatch";
		}
	}
	Blue(Value){
		if(isNaN(Value) || Value < 0 || Value > 255){
			throw "Invalid Color Value";
		}else{
			this._B = Math.floor(Value);
		}
	}
	Invert(){
		this._R = 255 - this._R;
		this._G = 255 - this._G;
		this._B = 255 - this._B;
	}
	Green(Value){
		if(isNaN(Value) || Value < 0 || Value > 255){
			throw "Invalid Color Value";
		}else{
			this._G = Math.floor(Value);
		}
	}
	Red(Value){
		if(isNaN(Value) || Value < 0 || Value > 255){
			throw "Invalid Color Value";
		}else{
			this._R = Math.floor(Value);
		}
	}
	CSS(){
		return "rgb(" + this._R.toString() + ", " + this._G.toString() + ", " + this._B.toString() + ")";
	}
}
