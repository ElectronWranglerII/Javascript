class DI22600{
	constructor(){
		this._Type = "";
		this._Filename = "";
		this._Column = [];
		this._Data = [];
		this._SampleCount = 0;
		this._SampleStart = 0;
		this._SampleEnd = 0;
		this._WaveformCount = 0;
		this._EndCount = 0;
		this._SampleRate = 0;
		this._ChartRate = 0;
	}
	
	//Returns data for the specified column
	Column(ID){
		if(typeof ID == "number"){
			if(ID > -1 && ID < this._Column.length){
				let ColumnData = [];
				for(let i = 0; i < this._Data.length; i++){
					ColumnData.push(this._Data[i][ID]);
				}
				return ColumnData;
			}
		}else if(typeof ID == "string"){
			for(let i = 0; i < this._Column.length; i++){
				if(this._Column[i] == ID){
					let ColumnData = [];
					for(let j = 0; j < this._Data.length; j++){
						ColumnData.push(this._Data[j][i]);
					}
					return ColumnData;
				}
			}
		}
		return null;
	}
	
	ColumnCount(){
		return this._Column.length;
	}
	
	//Returns the index of the column specified by ID
	ColumnIndex(ID){
		for(let i = 0; i < this._Column.length; i++){
			if(this._Column[i] == ID){
				return i;
			}
		}
		return -1;
	}
	
	ColumnList(Data){
		if(arguments.length == 0){
			return Array.from(this._Column);
		}else{
			this._Column = Data;
		}
	}
	
	ColumnName(ID){
		if(ID > -1 && ID < this._Column.length){
			return this._Column[ID];
		}else{
			return null;
		}
	}
	
	Data(){
		return this._Data;
	}

	//This function parses a file into several parts
	Parse(Data){
		let ColumnNamesFound = false;
		let RowData = [];
		let DataRow = [];
		//Split file into individual lines
		let Line = Data.split("\n");
		//Process each line
		for(let i = 0; i < Line.length; i++){
			//Is the line empty?
			if(Line[i].replace("\r", "") != ""){
				//Does the line contain the file type?
				if(Line[i].includes("Type:")){
					this._Type = Line[i].replace(",", "").split(":")[1].trim();
				//Does the line contain the original filename?
				}else if(Line[i].includes("Original Filename:")){
					this._Filename = Line[i].replace(",", "").split(":")[1].trim();
				//Does the line contain the total sample count?
				}else if(Line[i].includes("Total Samples:")){
					this._SampleCount = parseInt(Line[i].replace(",", "").split(":")[1].trim());
				//Does the line contain the starting sample number?
				}else if(Line[i].includes("Starting Sample:")){
					this._SampleStart = parseInt(Line[i].replace(",", "").split(":")[1].trim());
				//Does the line contain the ending sample number?
				}else if(Line[i].includes("Ending Sample:")){
					this._SampleEnd = parseInt(Line[i].replace(",", "").split(":")[1].trim());
				//Does the line contain the number of waveforms?
				}else if(Line[i].includes("Number of Waveforms:")){
					this._WaveformCount = parseInt(Line[i].replace(",", "").split(":")[1].trim());
				//Does the line contain the number of events?
				}else if(Line[i].includes("Number of Events:")){
					this._EventCount = parseInt(Line[i].replace(",", "").split(":")[1].trim());
				//Does the line contain the sample rate?
				}else if(Line[i].includes("Sample Rate:")){
					this._SampleRate = parseInt(Line[i].replace(",", "").split(":")[1].trim());
				//Does the line contain the amplitude(?) type?
				}else if(Line[i].includes("Amp Type,")){
					this._AmplitudeType = parseInt(Line[i].split(",")[1].trim());
				//Does the line contain labels?
				}else if(Line[i].includes("Label,")){
					this._Label = parseInt(Line[i].split(",")[1].trim());
				//Does the line contain units?
				}else if(Line[i].includes("Units,")){
					this._Units = parseInt(Line[i].split(",")[1].trim());
				//Try splitting the line by commas
				}else{
					RowData = Line[i].split(",");
					if(RowData.length < 2){
					
					}else{
						let Num = parseInt(RowData[0].trim());
						if(isNaN(Num)){
							if(ColumnNamesFound == false){
							//Line probably contains column names
							ColumnNamesFound = true;
								for(let j = 0; j < RowData.length; j++){
									this._Column.push(RowData[j].trim().replace("\r", ""));
								}
							}
						}else{
							//Assume line contains a row of data
							//Pack each data element into an array representing the row
							for(let j = 0; j < RowData.length; j++){
								DataRow.push(RowData[j].trim());
							}
							//Add the row to the data array
							this._Data.push(DataRow);
							//Clear the data row array
							DataRow = [];
						}
					}
				}
			}
		}
	}
	
	//Returns data for the specified row
	Row(ID){
		if(ID < this._Data.length){
			return this._Data[ID];
		}
	}
	
	RowCount(){
		return this._Data.length;
	}
	
	RowInsert(Data){
		this._Data.push(Data);
	}
}
