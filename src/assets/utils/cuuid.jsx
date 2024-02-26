function cuuid(length = 8) {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
	var result = "";
	for (var i = length; i > 0; --i)
		result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

export default cuuid;
