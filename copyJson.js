const fs = require("fs")
const path = require("path")

try {
  console.log(fs.existsSync(path.join(process.cwd(), "src/assets/index.json")))
  fs.copyFileSync(
    path.join(process.cwd(), "src/assets/index.json"),
    path.join(process.cwd(), "public/index.json")
  )
  console.log("finish")
} catch (err) {
  console.error(err)
}
