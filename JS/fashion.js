var man=[
    {
    id:1,
    name:"Đồ nam",
    code:"TC143NA",
    price:"250.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-23010-0c07jbeyvqmve5"
    },
    {
    id:2,
    name:"Đồ nam",
    code:"TC1342NA",
    price:"380.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-23010-0c07jbeyvqmve5"
    },
    {
    id:3,
    name:"Đồ nam",
    code:"TC323",
    price:"270.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-23010-0c07jbeyvqmve5"
    },
    {
    id:4,
    name:"Đồ nam",
    code:"TC223",
    price:"300.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-23010-0c07jbeyvqmve5"
    }

]
var women=[
    {
    id:1,
    name:"Đồ nữ",
    code:"TC143",
    price:"250.000",
    image:"https://th.bing.com/th/id/R.9c6e9f3530eb3fcd0e6bbf9d0c6b0ee3?rik=i%2bB2IckwTmPiwg&pid=ImgRaw&r=0"
    },
    {
    id:2,
    name:"Đồ nữ",
    code:"TC123",
    price:"200.000",
    image:"https://th.bing.com/th/id/R.9c6e9f3530eb3fcd0e6bbf9d0c6b0ee3?rik=i%2bB2IckwTmPiwg&pid=ImgRaw&r=0"
    },
    {
    id:3,
    name:"Đồ nữ",
    code:"TC323",
    price:"270.000",
    image:"https://th.bing.com/th/id/R.9c6e9f3530eb3fcd0e6bbf9d0c6b0ee3?rik=i%2bB2IckwTmPiwg&pid=ImgRaw&r=0"
    },
    {
    id:4,
    name:"Đồ nữ",
    code:"TC223",
    price:"300.000",
    image:"https://th.bing.com/th/id/R.9c6e9f3530eb3fcd0e6bbf9d0c6b0ee3?rik=i%2bB2IckwTmPiwg&pid=ImgRaw&r=0"
    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }

}

