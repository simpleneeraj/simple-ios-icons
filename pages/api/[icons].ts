import path from "path"
import fsPro from "fs/promises"
import { IconsDataTypes } from "typings/ui"
import { ReqType, Restype } from "typings"

let contentArr: IconsDataTypes[] = new Array()

const GetIcons = async (req: ReqType, res: Restype) => {
  let destination = req.body.path
  console.log(req.query);
  switch (req.method) {
    case "POST":
      let contentArr = await readingDirectory(`public/${destination}`)
      res.send(contentArr)
      break;
    default:
      res.status(400).json({ message: 'Error' })
      break;
  }

}

export default GetIcons

const readingDirectory = async (destination: string,) => {
  const files = await fsPro.readdir(destination)
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const correctPath = `${destination}/${file}`.replace("public/", "")
    let fileName = path.basename(file, path.extname(file))
    contentArr.push({
      name: fileName,
      iconPath: correctPath,
    })
  }
  return Promise.resolve(contentArr)
}
