/*
* Clock/Timer Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class Clock{
	constructor(TimeType, DisplayType){
		if(TimeType == this._TimeTypeCountDown){
			this._TimeType = TimeType;
		} else if(TimeType == this._TimeTypeCountUp){
			this._TimeType = TimeType;
		} else if(TimeType == this._TimeTypeClock){
			this._TimeType = TimeType;
		}
		this._IntervalObject = null;
		this._Days = 0;
		this._Hours = 0;
		this._Minutes = 0;
		this._Seconds = 0;
	}
	
	static TimeTypeCountDown = "Down";
	static TimeTypeCountUp = "Up";
	static TimeTypeClock = "Clock";
	
	get Days(){
		return this._Day;
	}
	
	get Hours(){
		return this._Hour;
	}
	
	get Minutes(){
		return this._Minute;
	}
	
	get Seconds(){
		return this._Second;
	}
	
	set Days(Day){
		if(Day < 0 || Day > 365){
			return false;
		} else{
			this._Day = Day;
			return true;
		}
	}
	
	set Hours(Hour){
		if(Hour < 0 || Hour > 23){
			return false;
		} else{
			this._Hour = Hour;
			return true;
		}
	}
	
	set Minutes(Minute){
		if(Minute < 0 || Minute > 59){
			return false;
		} else{
			this._Minute = Minute;
			return true;
		}
	}
	
	set Seconds(Second){
		if(Second < 0 || Second > 59){
			return false;
		} else{
			this._Second = Second;
			return true;
		}
	}

	start(){
		if(this._Running == 1){
			return false;
		} else{
			var countDownDate = new Date(Date()).getTime() + EndTime * 60 * 1000;
			this._IntervalObject = setInterval(function() {
				var days, hours, Minutes, MinutesTens, MinutesOnes, Seconds, SecondsTens, SecondsOnes;
				var Timeout = false;
				//Calculate remaining time
				CalculateTime(countDownDate);
				//Determine clock color
				UpdateColor();
				//Display remaining time
				var XStep = document.getElementById("digit_map").width / 10;
				DisplayDigit(Minutes_Tens, 0, 0);
				DisplayDigit(Minutes_Ones, XStep, 0);
				DisplayDigit(Seconds_Tens, XStep * 3, 0);
				DisplayDigit(Seconds_Ones, XStep * 4, 0);

				//document.getElementById("demo").innerHTML = Minutes + "m " + Seconds + "s ";
				
				function CalculateTime(countDownDate){
					var now = new Date().getTime();
					var distance = countDownDate - now;
					if(distance < 0){
						Timeout = true;
						distance = -distance;
					}
					days = Math.floor(distance / (1000 * 60 * 60 * 24));
					hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					Minutes = Math.floor((distance % (3600000)) / (1000 * 60));
					Minutes_Tens = Math.floor(Minutes / 10);
					Minutes_Ones = Math.floor(Minutes % 10);
					Seconds = Math.floor((distance % (60000)) / 1000);
					Seconds_Tens = Math.floor(Seconds / 10);
					Seconds_Ones = Math.floor(Seconds % 10);
				}

				function DisplayDigit(Index, XPosition, YPosition){
					var XStart = Index * (document.getElementById("digit_map").width / 10);
					var ctx = document.getElementById("digit_map").getContext("2d");
					var imgData = ctx.getImageData(XStart, 0, document.getElementById("digit_map").width / 10, document.getElementById("digit_map").height);
					var ctx = document.getElementById("clock").getContext("2d");
					ctx.putImageData(imgData, XPosition, YPosition);
				}

				function UpdateColor(){
					//Convert to seconds
					var epoch = Minutes * 60 + Seconds
					var img = document.getElementById("digit_map_red");
					if (Timeout == true){
						//Nothing to see here
					}else if(epoch > 450){
						img = document.getElementById("digit_map_green");
					}else if(epoch > 225){
						img = document.getElementById("digit_map_yellow");
					}
					var ctx = document.getElementById("digit_map").getContext("2d");
					document.getElementById("digit_map").width = img.width;
					document.getElementById("digit_map").height = img.height;
					ctx.drawImage(img, 0, 0);
					document.getElementById("clock").width = img.width / 2;
					document.getElementById("clock").height = img.height;
					//ctx = document.getElementById("clock").getContext("2d");
				}
			}, 250);
		}
	}
	
	stop(){
		if(this._IntervalObject != null){
			clearInterval(this._IntervalObject);
			this._IntervalObject = null;
			return true;
		} else{
			return false;
		}
	}
}
