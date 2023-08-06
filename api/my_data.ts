 
import { readFileSync } from 'fs'
import path from 'path'
import type { VercelRequest, VercelResponse } from '@vercel/node'
 
export default function handler(request: VercelRequest, response: VercelResponse) {
  const file = path.join(process.cwd(), 'src/assets/', 'index.json')
  const stringified = readFileSync(file, 'utf8')
 
  response.setHeader('Content-Type', 'application/json')
  return response.end(stringified)
}
