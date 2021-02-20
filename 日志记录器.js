/* 日志记录器
 * 
 * 功能：记录日志
 * 作者：BCX的一只萌新/MX的一只萌新
 * 最近更新时间：2021-2-20
 * 
 * 使用方法:
 * 新建Data.js
 * 将代码复制进入
 * 在index.js添加下一段注释代码
 * 修改第二行Data.addAdmin为管理员名字，多个需重复使用代码添加
 */
 /*
const Data=require('./Data.js')
Data.addAdmin('XXX') 
*/
var Data=[]
var Admin=[]


function read(){
    for(let i=0;i<Data.length;i++){
        world.say(`{name:${Data[i]["Name"]},'uk':${Data[i]["UK"]},time:${Data[i]['Time']},type:${Data[i]["Type"]},data:${Data[i]["Data"]}}`)
    }
}
function insert(entity,type,data){
    Data.push(
        {
            "Name":entity.player.name,
            "UK":entity.player.userKey,
            "Time":Date().toString(),
            "Type":type,
            "Data":data
        }
    )
}

world.onPlayerJoin(({entity})=>{
    insert(entity,'JOIN',`${entity.player.name}JOIN at ${Date().toString().split('GMT+0000')[0]}`)
})
world.onPlayerLeave(({entity})=>{
    insert(entity,'LEAVE',`${entity.player.name}LEAVE at ${Date().toString().split('GMt+0000')[0]}`)
})
world.onChat(({message,entity})=>{
    insert(entity,'CHAT',`${entity.player.name}SAY ${message} at ${Date().toString().split('GMT+0000')[0]}`)
})

world.onChat(({message,entity})=>{
    if(message=="RDT"&&Admin.includes(entity.player.name)){
        read()
    }
})
module.exports={
    addAdmin:(name)=>{
        Admin.push(name)
    }
}
