var splitNames = function (index, name){
	var strData = name.split(" ");
	if(index > 0) {
		return strData[strData.length-1];
	} else {
		return strData[index];
	}
};

module.exports = splitNames;