const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'b79c0632-31a3-4fa6-835e-c49c6ca9ef58'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
