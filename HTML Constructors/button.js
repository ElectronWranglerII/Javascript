/* HTML Button Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class HTMLButton{
	constructor(){
		this._Autofocus = false;
		this._Content = "";
		this._Disabled = false;
		this._Events = "";
		this._Form = "";
		this._FormAction = "";
		this._FormEncoding = "";
		this._FormMethod = "";
		this._FormValidate = false;
		this._FormTarget = "";
		this._GlobalAttribs = "";
		this._Name = "";
		this._Type = "";
		this._Value = "";
	}
	
	Append(){
		var Button = document.createElement("button");
		if(this._GlobalAttribs != ""){
			this._GlobalAttribs.Append(Button);
		}
		Button.autofocus = this._Autofocus;
		Button.disabled = this._Disabled;
		Button.formnovalidate = ~this._FormValidate;
		if(this._Events != ""){
			this._Events.Append(Button);
		}
		Button.innerHTML = this._Contents;
		if(this._Parent != "" && this._Type != ""){
			this._Parent.appendChild(Button);
		}else{
			document.body.appendChild(Button);
		}
	}
	
	HTML(){
		var _HTML = "<button";
		if(this._GlobalAttribs != ""){
			_HTML += this._GlobalAttribs.HTML();
		}
		if(this._Form != ""){
			_HTML += ' form="' + this._Form + '"';
		}
		if(this._FormAction != ""){
			_HTML += 'formaction="' + this.FormAction + '"';
		}
		if(this._FormMethod != ""){
			_HTML += ' formmethod="' + this._FormMethod + '"';
		}
		if(this._FormTarget != ""){
			_HTML += ' formtarget="' + this._FormTarget + '"';
		}
		if(this._Name != ""){
			_HTML += ' name="' + this._Name + '"';
		}
		if(this._Events != ""){
			_HTML += this._Events.HTML();
		}
		if(this._Autofocus == true){
			_HTML += " autofocus";
		}
		if(this._Disabled == true){
			_HTML += " disabled";
		}
		if(this._FormValidate == false){
			_HTML += " formnovalidate";
		}
		_HTML = _HTML + ">" + this._Contents;
		_HTML += "</button>";
		return _HTML;
	}
	
	AutofocusOff(){
		this._Autofocus = false;
	}
	
	AutofocusOn(){
		this._Autofocus = true;
	}
	
	Disable(){
		this._Disabled = true;
	}
	
	Enable(){
		this._Disabled = false;
	}
	
	Events(EventObject){
		this._Events = EventObject;
	}
	
	Form(IDString){
		this._Form = IDString;
	}
	
	FormAction(URLString){
		this._FormAction = URLString;
	}
	
	FormEncodeApplication(){
		this._FormEncoding = "application/x-www-form-urlencoded";
	}
	
	FormEncodeMultipart(){
		this._FormEncoding = "multipart/form-data";
	}
	
	FormEncodeApplication(){
		this._FormEncoding = "text/plain";
	}
	
	FormEncoding(){
		if(EncodingString.toUpper == "application/x-www-form-urlencoded" || EncodingString.toUpper == "multipart/form-data" || EncodingString.toUpper == "text/plain"){
			this._FormEncoding = EncodingString;
		}
	}
	
	FormMethod(MethodString){
		if(MethodString.toUpper == "GET" || MethodString.toUpper == "POST"){
			this._FormMethod = MethodString;
		}
	}
	
	FormTarget(TargetString){
		this._FormTarget = TargetString;
	}
	
	GlobalAttribs(AttribsObject){
		this._GlobalAtrribs = AttribsObject;
	}
	
	Name(NameString){
		this._Name = NameString;
	}
	
	Type(TypeString){
		if(TypeString.toUpper == "BUTTON" || TypeString.toUpper == "RESET" || TypeString.toUpper == "SUBMIT"){
			this._Type = TypeString;
		}
	}
	
	ValidateOff(){
		this._FormValidate = false;
	}
	
	ValidateOn(){
		this._FormValidate = true;
	}
	
	Value(AlphaNumeric){
		this._Value = AlphaNumeric;
	}
}
