var fs= require("fs");
/*
fs.appendFile('test.txt', 'data to 卡', 'utf-8', function (err) {
   if (err) throw err;

    //数据被添加到文件的尾部
    console.log('The "data to append" was appended to file!');
});

fs.exists('./test.txt', function (exists) {
  console.log(exists ? "存在" : "不存在!");
  if(exists){
      fs.rename('./test.txt', 'test.php', function(err){
          if(err) throw err;
          console.log('Successful modification');
      })
  }
});

fs.readFile('./process.js', 'utf-8', function(err, data){
    if(err) throw err;
    console.log(data);
})
*/
fs.unlink('./test.php', function(err) {
  if (err) throw err;
  console.log('successfully deleted');
});
