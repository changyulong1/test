type Data = RootState[] | []
type RootState ={
    "id": number,     // 编号
    "categoryId": number, // 分类ID
    "name": string, // 名称
    "tag": boolean, // 徽标是否显示
    "atlas": boolean, // 图集是否显示
    "isCast": boolean, // 已铸是否显示
    "isExchange": boolean, // 已兑是否显示
    "img": string, // 图片名称
    "is3D": boolean // 是否3d，ture为3d，false为2d
}
type getId = (id:number)=> any
