export function blobToBase64(blob: Blob): Promise<string> {
	console.log('blobToBase64', blob)
	return new Promise((resolve, _) => {
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result as string)
		reader.readAsDataURL(blob)
	})
}
