function getFileName(filePath) {
    const filePathParts = filePath.split('\\');
    const fileNameWithExtension = filePathParts[filePathParts.length - 1];
    return (fileNameWithExtension.split('.'))[0];
}

console.log(getFileName(String.raw`c:\Webservers\home\testsite\www\myfile.txt`)); // myfile
