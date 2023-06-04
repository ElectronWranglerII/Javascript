/* HTML Div Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class HTMLDiv{
	constructor(){
		this._Contents = "";
		this._Events = "";
		this._GlobalAttribs = "";
		this._Parent = "";
		this._Properties = "";
	}
	
	Append(){
		var Div = document.createElement("div");
		if(this._GlobalAttribs != ""){
			this._GlobalAttribs.Append(Div);
		}
		if(this._Events != ""){
			this._Events.Append(Div);
		}
		if(this._Properties != ""){
			this._Properties.Append(Div);
		}
		Div.innerHTML = this._Contents;
		if(this._Parent != "" && this._Type != ""){
			this._Parent.appendChild(Div);
		}else{
			document.body.appendChild(Div);
		}
	}
	
	HTML(){
		var _HTML = "<div";
			if(this._GlobalAttribs != ""){
				_HTML += this._GlobalAttribs.HTML();
			}
			if(this._Events != ""){
				_HTML += this._Events.HTML();
			}
			if(this._Properties != ""){
				_HTML += this._Properties.HTML();
			}
			_HTML = _HTML + ">" + this._Contents;
			_HTML += "</div>";
		return _HTML;
	}
	
	Contents(HTML){
		this._Contents = HTML;
	}
	
	Events(EventObject){
		this._Events = EventObject;
	}
	
	GlobalAttribs(AttribsObject){
		this._GlobalAtrribs = AttribsObject;
	}
	
	Parent(ParentObject){
		this._Parent = ParentObject;
	}
	
	Properties(PropertyObject){
		this._Properties = PropertyObject;
	}
}
