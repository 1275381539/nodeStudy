// 判断当前目录下有没有upload目录，如果没有创建这个目录，如果有不做操作

const fs = require('fs')
var path = './upload';
 
fs.readdir('./',(err,data)=>{  // 读取当前目录下所有文件
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
    if(data && data.length>0){ // 当前目录下存在文件
        for(var i = 0;i<data.length;i++){ 

            if(data[i] == 'upload'){ // 判断存在的文件或者目录中有没有名称为upload的

                fs.stat(path,(err,data)=>{ // 如果有名称为upload的文件或者目录，判断它是文件还是目录
                    if(err){
                        console.log(err);
                        return;
                    }
                    if(data.isDirectory()){  // 是目录，直接返回
                        console.log('已经存在upload目录');
                        return;
                    }else{ // 是文件，先删除文件，在进行创建
                        fs.unlink('./upload',(err,data)=>{  
                            if(err){
                                console.log(err);
                                return;
                            }
                            console.log('删除文件成功')
                            mkdir(path)
                        })
                    }
                })
            }else{
                mkdir(path)
            }
        }
    }else{ // 当前目录下没有任何的文件
        mkdir(path)
    }
})


function mkdir(dir){
    fs.mkdir('./upload',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`创建成功`)
    })
}