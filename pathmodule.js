import path from "path";
import url from "url";

const filePath = "./dir1/dir2/hello.txt";

console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));

console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(fileName);
