import fs from 'fs'
import path from 'path'

try {
  console.log(fs.existsSync(path.join(process.cwd(), "assets/me.json")))
  fs.copyFileSync(
    path.join(process.cwd(), "assets/me.json"),
    path.join(process.cwd(), "public/me.json")
  )
  console.log("finish")
} catch (err) {
  console.error(err)
}
