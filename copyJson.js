const fs = require("fs")

try {
  fs.copyFileSync("src/assets/index.json", "public/index.json")
  console.log("finish")
} catch (err) {
  console.error(err)
}
