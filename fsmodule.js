// import fs from "fs";
import fs from "fs/promises";

// fs.readFile("./hello.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

const readFile = async () => {
  try {
    const res = await fs.readFile("./hello.txt", "utf8");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile("./hello.txt", "I'm writing some random text inside");
    console.log("Writing...");
  } catch (error) {
    console.log(error);
  }
};

const appendFile = async () => {
  try {
    await fs.appendFile("./hello.txt", "\nI'm writing some random text inside");
    console.log("Appending...");
  } catch (error) {
    console.log(error);
  }
};

appendFile();
