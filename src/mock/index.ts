import Mock from 'mockjs'

const article = Mock.mock("/home/article", () => {
    return [
        {
            "name": "藏品",
            "id": 1
        },
        {
            "name": "头像",
            "id": 2
        },
        {
            "name": "盲盒",
            "id": 3
        },
        {
            "name": "其他",
            "id": 4
        }
    ]
})
const listData = Mock.mock("/home/data", () => {
    return {
        "code": 0,
        "data": [
            {
                "id": 129,
                "categoryId": 1,
                "name": "永远的女神#999",
                "tag": true,
                "atlas": true,
                "isCast": true,
                "isExchange": true,
                "img": "pic1.png",
                "is3D": false
            },
            {
                "id": 130,
                "categoryId": 1,
                "name": "永远的女神#999",
                "tag": true,
                "atlas": false,
                "isCast": true,
                "isExchange": false,
                "img": "pic1.png",
                "is3D": true
            },
            {
                "id": 131,
                "categoryId": 1,
                "name": "永远的女神#999",
                "tag": true,
                "atlas": false,
                "isCast": false,
                "isExchange": false,
                "img": "pic1.png",
                "is3D": false
            },
            {
                "id": 132,
                "categoryId": 2,
                "name": "永远的女神#999",
                "tag": true,
                "atlas": true,
                "isCast": true,
                "isExchange": true,
                "img": "pic1.png",
                "is3D": false
            },
            {
                "id": 133,
                "categoryId": 2,
                "name": "永远的女神#999",
                "tag": true,
                "atlas": false,
                "isCast": true,
                "isExchange": false,
                "img": "pic1.png",
                "is3D": true
            },
            {
                "id": 134,
                "categoryId": 2,
                "name": "永远的女神#999",
                "tag": true,
                "atlas": false,
                "isCast": false,
                "isExchange": false,
                "img": "pic1.png",
                "is3D": false
            }
        ]
    }
})
export default {article, listData}
