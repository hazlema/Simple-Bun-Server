Bun.serve({
    async fetch(req: Request) {
        let url = new URL(req.url)

		switch (`${req.method} ${url.pathname}` as string) {
			case "GET /":
				return new Response(Bun.file("form.html"), { status: 200 })
			case "POST /data": 
				const form = await req.formData()
				return new Response(`Hello ${form.get("name")}`, { status: 200 })
			default: 
				return Response.redirect("/")
		 }
    },
    port: 3000
})
