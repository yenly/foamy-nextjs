import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), '_posts')

const getAllFiles = function (dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(
        path.join(dirPath, '/', file).replace(POSTS_PATH + '/', '')
      )
    }
  })

  return arrayOfFiles
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = getAllFiles(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
