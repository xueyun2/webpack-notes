const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');
const watchPath = {
    script: './jsDev',
}
let fileInfo = {
    fileName: '', //文件名称
    filePath: '', //文件输出目录
    allPath: '',  //文件路径
}
//返回指定目录下的文件信息{路径-文件名-文件所在文件夹}
function getCatalog(filePath, record, rootPath) {
    let files = fs.readdirSync(filePath);
    files.forEach((filename) => {
        let filder = path.join(filePath, filename);
        let stats = fs.statSync(filder);
        let isDir = stats.isDirectory();//判断是否是文件夹
        let isFile = stats.isFile(); //判断是否是个文件
        if (isDir) {

            getCatalog(filder, record, rootPath)
        }
        if (isFile) {
            let extname = path.extname(filder); //获取文件扩展名
            let chilFilename = path.basename(filder, extname) //获取文件名
            let currentFilePath = path.dirname(filder)   //获取文件路径不带文件名称
            fileInfo = {
                folderName: path.basename(currentFilePath),
                fileName: chilFilename,
                filePath: currentFilePath.replace(path.normalize(rootPath), ""),
                allPath: path.relative(__dirname, filder),
            }
            record.push(fileInfo)
        }
    })
}
//监听目录文件修改返回信息
function getFileInfo(getFilePath, rootPath) {
    let allInfo = []
    getCatalog(getFilePath, allInfo, rootPath);
    return allInfo
}
//监听js文件
console.log('生成配置文件')
let getInfo = getFileInfo(watchPath.script, watchPath.script);
let scriptEntry = {}
getInfo.forEach((item, index) => {
    if (!scriptEntry[item.folderName]) {
        scriptEntry[item.folderName] = [item.allPath]
    } else {
        scriptEntry[item.folderName].push(item.allPath)
    }
})
fs.writeFileSync(path.resolve(__dirname, 'entry.json'), JSON.stringify(scriptEntry), 'utf8');
console.log('执行打包命令')
let start = new Date().getTime(); // 开始时间
exec('npm run bulid', { cwd: path.resolve(__dirname) }, (error, stdout, stderr) => {
    if (!error) {
        console.log('打包成功')
        let end = new Date().getTime(); // 结束时间
        console.log('完成：', (end - start) / 1000);
        return false
    }

})

