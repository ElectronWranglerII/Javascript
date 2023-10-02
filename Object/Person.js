class Person{
	constructor(NameFirst, NameMiddle, NameLast, Organization, PhoneWork, PhoneCell, Email, Rank, Address){
		this._ID;
		this._NameFirst;
		this._NameMiddle;
		this._NameLast;
		this._Organization;
		this._PhoneWork;
		this._PhoneCell;
		this._Email;
		this._Rank;
		this._Address;
		if(arguments.length < 4){
			throw "Missing argument(s)";
		}else{
			this._ID = crypto.randomUUID();
			this._NameFirst = NameFirst;
			this._NameMiddle = NameMiddle;
			this._NameLast = NameLast;
			this._Organization = Organization;
		}
		if(arguments.length == 5){
			this._PhoneWork = PhoneWork;
		}
		if(arguments.length == 6){
			this._PhoneCell = PhoneCell;
		}
		if(arguments.length == 7){
			this._Email = Email;
		}
		if(arguments.length == 8){
			this._Rank = Rank;
		}
		if(arguments.length == 9){
			this._Address = Address;
		}
	}

	FirstName(Name){
		if(arguments.length == 0){
			return this._NameFirst;
		}else{
			this._NameFirst = Name;
		}
	}
	
	ID(){
		return this._ID;
	}
	
	LastName(Name){
		if(arguments.length == 0){
			return this._NameLast;
		}else{
			this._NameLast = Name;
		}
	}
	
	Name(Name){
		if(arguments.length == 0){
			return this._NameFirst + " " + this._NameLast;
		}else{
			if(Name.includes(",")){
				let Temp = Name.split(",");
				if(Temp[1].length > 0){
					this.NameFirst = Temp[1];
				}else{
					throw "Invalid first name";
				}
				if(Temp[0].length > 0){
					this.NameLast = Temp[0];
				}else{
					throw "Invalid last name";
				}
			}
		}
	}
	
	Organization(Organization){
		if(arguments.length == 0){
			return this._Organization;
		}else{
			this._Organization = Organization;
		}
	}
	
	toString(){
		let RetVal = "";
		RetVal = this._NameFirst + " " + this._NameLast;
		
		return RetVal;
	}
}
