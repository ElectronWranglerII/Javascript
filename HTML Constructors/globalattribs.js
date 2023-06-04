/* HTML Global Attribute Utilities
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class HTMLGlobalAttrib{
	constructor(){
		this._AccessKey = "";
		this._ClassName = "";
		this._DataTag = "";
		this._DataString = "";
		this._Draggable = false;
		this._DropAction = "";
		this._Editable = false;
		this._Hidden = false;
		this._ID = "";
		this._Language = "";
		this._Parent = "";
		this._SpellCheck = false;
		this._TabIndex = "";
		this._TextDirection = "";
		this._Title = "";
		this._Translate = false;
	}
	Append(Target){
		var RenderTarget;
		if(arguments.length === 0){
			if(this._Parent == ""){
				throw "No parent";
			}else{
				RenderTarget = this._Parent;
			}
		}else{
			RenderTarget = Target;
		}
		if(this._AccessKey != ""){
			RenderTarget.accessKey = this._AccessKey;
		}
		if(this._ClassName != ""){
			RenderTarget.className = this._ClassName;
		}
		if(this._DataTag != ""){
			RenderTarget.dataTag = this._DataTag;
		}
		if(this._DataString != ""){
			RenderTarget.dataString = this._DataString;
		}
		if(this._Draggable != false){
			RenderTarget.draggable = "true";
		}
		if(this._DropAction != ""){
			RenderTarget.dropAction = this._DropAction;
		}
		if(this._Editable != false){
			RenderTarget.editable = "true";
		}
		if(this._Hidden != false){
			RenderTarget.hidden = "true";
		}
		if(this._ID != ""){
			RenderTarget.id = this._ID;
		}
		if(this._Language != ""){
			RenderTarget.language = this._Language;
		}
		if(this._SpellCheck != false){
			RenderTarget.spellCheck = "true";
		}
		if(this._TabIndex != ""){
			RenderTarget.tabIndex = this._TabIndex;
		}
		if(this._TextDirection != ""){
			RenderTarget.textDirection = this._TextDirection;
		}
		if(this._Title != ""){
			RenderTarget.title = this._Title;
		}
		if(this._Translate != false){
			RenderTarget.translate = "true";
		}
	}
	HTML(){
		var _HTML = "";
		if(this._AccessKey != ""){
			_HTML += ' accesskey = "' + this._AccessKey + '"';
		}
		if(this._ClassName != ""){
			_HTML += ' class = "' + this._ClassName + '"';
		}
		if(this._DataTag != ""){
			_HTML += ' data-' + this._DataTag + '"' + this._DataString + '"';
		}
		if(this._Draggable != false){
			_HTML += ' draggable = "true"';
		}
		if(this._DropAction != ""){
			_HTML += ' dropzone = "' + this._DropAction + '"';
		}
		if(this._Editable != false){
			_HTML += ' contenteditable = "true"';
		}
		if(this._Hidden != false){
			_HTML += ' hidden';
		}
		if(this._ID != ""){
			_HTML += ' ID = "' + this._ID + '"';
		}
		if(this._Language != ""){
			_HTML += ' lang = "' + this._Language + '"';
		}
		if(this._SpellCheck != false){
			_HTML += ' spellcheck = "true"';
		}
		if(this._TabIndex != ""){
			_HTML += ' tabindex = "' + this._TabIndex + '"';
		}
		if(this._TextDirection != ""){
			_HTML += ' dir = "' + this._TextDirection + '"';
		}
		if(this._Title != ""){
			_HTML += ' title = "' + this._Title + '"';
		}
		if(this._Translate != false){
			_HTML += ' translate = "yes"';
		}
		return _HTML;
	}
	AccessKey(Key){
		this._AccessKey = Key;
	}
	ClassName(Name){
		this._ClassName = Name;
	}
	Data(DataString){
		this._DataString = DataString;
	}
	Data(DataTag){
		this._DataString = DataString;
	}
	Draggable(Flag){
		this._Draggable = FlagValue(Flag);
	}
	DropAction(Action){
		this._DropAction = Action;
	}
	Editable(Flag){
		this._Editable = FlagValue(Flag);
	}
	Hidden(Flag){
		this._Hidden = FlagValue(Flag);
	}
	ID(ID){
		this._ID = ID;
	}
	Language(Language){
		this._Language = Language;
	}
	SpellCheck(Flag){
		this._SpellCheck = FlagValue(Flag);
	}
	TabIndex(Index){
		this._TabIndex = Index;
	}
	TextDirection(Direction){
		this._TextDirection = Direction;
	}
	Title(Title){
		this._Title = Title;
	}
	Translate(Flag){
		this._Translate = FlagValue(Flag);
	}
}
