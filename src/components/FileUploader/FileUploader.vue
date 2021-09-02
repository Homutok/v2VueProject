<template>
    <v-container>
        <div class="upload-block">
            <p><input type="file" id="file" ref="file" @change="handleFileUpload" multiple/></p>
            <div v-if="this.switchBlock">
                <BlockInfo v-bind:fileInfo="this.fileInfo"/>
            </div>
        </div>
    </v-container>
</template>


<script>

    import BlockInfo from "@/components/FileUploader/BlockInfo"

    export default {
        name: "FileUploader",
        data (){
            return{
                switchBlock:false,
                fileInfo:null,
            }
        },
        components:{
            BlockInfo
        },
        methods:{
            handleFileUpload(event){
                this.switchBlock=true;
                this.fileInfo=event.target.files;
            },
        }
    }
</script>

<style scoped>
.upload-block{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 20px;
    width: 700px;
    padding: 20px 40px 40px;
    background-color: rgba(161,174,255,0.64);
    border-radius: 5px;
    color: #2F242C;
    border-style: dashed;

}
</style>
