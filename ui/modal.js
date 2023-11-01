class Modal{
	static _ClassList = new Map();
	
	static ClassAdd(ClassString, CSSString){
		if(arguments.length !== 2){
			return false;
		}else{
			this._ClassList.set(ClassString, CSSString);
			return true;
		}
	}
	
	static ClassList(){
		return this._ClassList;
	}
	
	static ClassRemove(ClassString){
		this._ClassList.delete(ClassString);
		document.getElementById(ClassString).remove();
		return true;
	}
	
	static ClassRename(OldClassString, NewClassString){
		if(this._ClassList.has(OldClassString)){
			this._ClassList.set(NewClassString, this._ClassList.get(OldClassString));
			this._ClassList.delete(OldClassString);
			document.getElementById(OldClassString).id = NewClassString;
		}else{
			return false;
		}
	}
	
	static CSS(){
		let RetVal = "";
		if(this._ClassList.size > 0){
			for(let ClassEntry of this._ClassList.entries()){
				RetVal = RetVal + "<style id='" + ClassEntry[0] + "'>\n\t"
				RetVal = RetVal + ClassEntry[1];
				RetVal = RetVal + "\n</style>\n";
			}
		}
		return RetVal;
	}
	
	constructor(OperandA, OperandB, OperandC, OperandD, OperandE, OperandF){
		this._Class = "";
		this._Contents = "";
		this._Footer = "";
		this._ID = "";
		this._ObjectName = "";
		this._Title = "";
		if(Modal._ClassList.has(OperandB)){
			switch(arguments.length){
				case 6:
					this._Footer = OperandF;
				case 5:
					this._Title = OperandE;
				case 4:
					this._Contents = OperandD;
				case 3:
					this._ID = OperandC;
				case 2:
					this._Class = OperandB;
					this._ObjectName = OperandA;
					break;
				default:
					break;
			}
		}
	}
	
	Class(ClassString){
		if(arguments.length === 0){
			return this._Class;
		}else{
			if(Modal._ClassList.has(ClassString)){
				this._Class = ClassString;
				return true;
			}else{
				return false;
			}
		}
	}
	
	Contents(ContentString){
		if(arguments.length === 0){
			return this._Contents;
		}else{
			this._Contents = ContentString;
			return true;
		}
	}
	
	Hide(){
		let ModalElement = document.getElementById(this._ID);
		if(ModalElement === null){
			return false;
		}else{
			ModalElement.style.display = "none";
			return true;
		}
	}
	
	HTML(){
		let RetVal;
		if(this._ID === "" || this._Class === ""){
			RetVal = false;;
		}else{
			RetVal = "<div id='" + this._ID + "' class='" + this._Class + "'>\n";
			RetVal = RetVal + "\t<div class='Content'>\n";
			RetVal = RetVal + "\t\t<div class='Header'>\n";
			RetVal = RetVal + "\t\t\t<span class='Close' onclick='" + this._ObjectName + ".Hide()'>&times;</span>\n";
			RetVal = RetVal + "\t\t\t<h3>"
			if(this._Title === ""){
				RetVal = RetVal + " ";
			}else{
				RetVal = RetVal + this._Title;
			}
			RetVal = RetVal + "</h3>\n";
			RetVal = RetVal + "\t\t</div>\n";
			RetVal = RetVal + "\t\t<div class='Body'>\n";
			RetVal = RetVal + "\t\t\t<p>" + this._Contents + "</p>\n";
			RetVal = RetVal + "\t\t</div>\n";
			RetVal = RetVal + "\t\t<div class='Footer'>\n";
			RetVal = RetVal + "\t\t\t";
			if(this._Footer === ""){
				RetVal = RetVal + " ";
			}else{
				RetVal = RetVal + this._Footer;
			}
			RetVal = RetVal + "\n";
			RetVal = RetVal + "\t\t</div>\n";
			RetVal = RetVal + "\t</div>\n";
			RetVal = RetVal + "</div>\n";
		}
		return RetVal;
	}
	
	ID(IDString){
		if(arguments.length === 0){
			return this._ID;
		}else{
			this._ID = IDString;
			return true;
		}
	}
	
	ObjectName(NameString){
		if(arguments.length === 0){
			return this._ObjectName;
		}else{
			if(typeof NameString === "string" && NameString !== ""){
				this._ObjectName = NameString;
				return true;
			}
		}
	}
	
	Show(){
		let ModalElement = document.getElementById(this._ID);
		if(ModalElement === null){
			return false;
		}else{
			ModalElement.style.display = "block";
			return true;
		}
	}
	
	Update(){
		document.getElementById(this._ID).remove();
		document.body.innerHTML = document.body.innerHTML + this.HTML();
	}
}
