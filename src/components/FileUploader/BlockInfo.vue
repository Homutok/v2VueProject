<template>
    <div class="info-block">
      <p><b>Полное имя файла:</b>{{fileInfo[0].name }}</p>
      <p><b>Имя файла без расширения:</b>{{fileInfo[0].name.slice(0,fileInfo[0].name.length-getFileExtensionOnly(fileInfo[0].name).length)}}</p>
      <p><b>Тип файла:</b>{{fileInfo[0].type}}</p>
      <p><b>Расширение файла:</b> {{getFileExtensionOnly(fileInfo[0].name) }}</p>
      <p><b>Размер файла:</b>{{fileInfo[0].size *1e-6}} мб</p>
      <p><b>Сумма SHA1:</b><br> {{getFileInfo(1,function (result){SHA1=result})}}{{SHA1}}</p>
      <p><b>Сумма SHA256:</b><br>{{getFileInfo(0,function (result){SHA256 = result})}}{{SHA256}}</p>
    </div>
</template>
//https://github.com/emn178/js-sha256 - SHA256
//https://www.npmjs.com/package/js-sha1 - SHA1
<script>
import sha1 from 'js-sha1'
import sha256 from 'js-sha256'
    export default {
        name: "BlockInfo",
        props:[
            'fileInfo'
        ],
        data(){
            return{
                SHA1:null,
                SHA256:null,
            }
        },
        methods:{
            getFileExtensionOnly(fileName)
            {
              return  fileName.substr(fileName.lastIndexOf('.'));
            },
            getFileInfo(shaCode,callback){
                let  reader = new FileReader();
                reader.readAsArrayBuffer(this.fileInfo[0]);
                reader.onload = function(){
                  if(shaCode)
                      callback(sha1(reader.result));
                  else
                      callback(sha256(reader.result));
                };
                reader.onerror = function() {
                    callback(reader.error);
                };
            },
        },
        watch: {
          //Надо сделать слежение за изменениями в файле по хэш сумме и нахождение самого в файле в данном каталоге
        }
    }
</script>

<style scoped>
.info-block{
  text-align: left;
}
</style>
