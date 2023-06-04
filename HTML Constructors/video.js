/* HTML Video Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class HTMLVideo{
	constructor(){
		this._Autoplay = false;
		this._Content = "";
		this._Controls = false;
		this._Height = "";
		this._Events = "";
		this._GlobalAttribs = "";
		this._Loop = false;
		this._Muted = true;
		this._Parent = "";
		this._Poster = "";
		this._Preload = "";
		this._Source = "";
		this._Width = "";
	}
	
	Append(){
		var Video = document.createElement("video");
		if(this._GlobalAttribs != ""){
			this._GlobalAttribs.Append(Video);
		}
		if(this._Events != ""){
			this._Events.Append(Video);
		}
		Video.innerHTML = this._Contents;
		if(this._Parent != "" && this._Type != ""){
			this._Parent.appendChild(Video);
		}else{
			document.body.appendChild(Video);
		}
	}
	
	HTML(){
		if(this._Source == ""){
			throw "No video source specified";
		}else{
			var _HTML = "<video";
				if(this._GlobalAttribs != ""){
					_HTML += this._GlobalAttribs.HTML();
				}
				if(this._Events != ""){
					_HTML += this._Events.HTML();
				}
				if(this._Autoplay != false){
					_HTML += " autoplay";
				}
				if(this._Controls != false){
					_HTML += " controls";
				}
				if(this._Loop != false){
					_HTML += " loop";
				}
				if(this._Muted != false){
					_HTML += " muted";
				}
				if(this._Poster != ""){
					_HTML += ' poster="' + this._Poster + '"';
				}
				_HTML += ' src="' + this._Source + '"';
				if(this._Height != ""){
					_HTML += ' height="' + this._Height + '"';
				}
				if(this._Width != ""){
					_HTML += ' width="' + this._Width + '"';
				}
				_HTML = _HTML + ">" + this._Contents;
				_HTML += "</video>";
			return _HTML;
		}
	}
	
	AutoplayOff(){
		this._Autoplay = false;
	}
	
	AutoplayOn(){
		this._Autoplay = true;
	}
	
	Contents(HTML){
		this._Contents = HTML;
	}
	
	ControlsOff(){
		this._Controls = false;
	}
	
	ControlsOn(){
		this._Controls = true;
	}
	
	Events(EventObject){
		this._Events = EventObject;
	}
	
	GlobalAttribs(AttribsObject){
		this._GlobalAtrribs = AttribsObject;
	}
	
	Height(Value){
		if(typeof Value != "number"){
			throw "Height value must be numeric";
		}else{
			this._Height = Value;
		}
	}
	
	LoopOff(){
		this._Loop = false;
	}
	
	LoopOn(){
		this._Loop = true;
	}
	
	Mute(){
		this._Muted = true;
	}
	
	Parent(ParentObject){
		this._Parent = ParentObject;
	}
	
	Poster(URLString){
		this._Poster = URLString;
	}
	
	Source(URLString){
		this._Source = URLString;
	}
	
	Unmute(){
		this._Muted = false;
	}
	
	Width(Value){
		if(typeof Value != "number"){
			throw "Width value must be numeric";
		}else{
			this._Width = Value;
		}
	}
}
