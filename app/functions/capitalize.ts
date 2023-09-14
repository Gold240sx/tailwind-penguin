export const formatCapitalizeAllWords = (string: string) => {
	return string
		.replace(/\b[a-z]/gi, function (letter) {
			return letter.toUpperCase()
		})
		.replace(/'\b[a-z]/gi, function (letter) {
			return letter.toUpperCase()
		})
		.replace(/\s+/g, " ")
		.trim()
}
