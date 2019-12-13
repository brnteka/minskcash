export default {
	methods: {
		sendForm(formdata) {
			return new Promise((resolve, reject) => {
				const XHR = new XMLHttpRequest();
				const FD = new FormData(formdata);

				XHR.open("POST", "form.php");
				XHR.send(FD);
				XHR.addEventListener("error", function() {
					reject("Ошибка сети");
				});

				XHR.addEventListener("load", function() {
					if (this.readyState === this.DONE && this.status === 200) {
						resolve(this.response);
					} else {
						reject(this.response);
					}
				});
			});
		}
	}
};
