all: .image

.image: hello.js package.json
	docker build -t ibmcom/hello .
	docker push ibmcom/hello
	touch .image

clean:
	rm -f .image
