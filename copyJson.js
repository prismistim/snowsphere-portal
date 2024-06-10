import fs from 'fs'
import path from 'path'

try {
  console.log(fs.existsSync(path.join(process.cwd(), "assets/index.json")))
  fs.copyFileSync(
    path.join(process.cwd(), "assets/index.json"),
    path.join(process.cwd(), "public/index.json")
  )
  console.log("finish")
} catch (err) {
  console.error(err)
}
