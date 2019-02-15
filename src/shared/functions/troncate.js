export const troncateTextWithCount = (theText, count) => {
	var troncatedText = "";
	if (theText) {
		if (theText.length > count) {
			for (var i = 0; i <= count; i++) {
				troncatedText += theText[i];
			}
			troncatedText.trim();

			troncatedText += "...";
		} else {
			troncatedText = theText;
		}
	} else {
		return;
	}

	return troncatedText;
};
