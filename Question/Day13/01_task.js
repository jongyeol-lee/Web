var container= document.getElementById('map')

var options= {
    center: new kakao.maps.LatLng(37.48659493110084 , 126.92926104080061),
    level: 3,
}

var map= new kakao.maps.Map(container, options);

var imageSrc = '../images/kitten-3.jpg', 
    imageSize = new kakao.maps.Size(40, 40), 
    imageOption = {offset: new kakao.maps.Point(20, 20)}; 

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    markerPosition = new kakao.maps.LatLng(37.48659493110084 , 126.92926104080061)

var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
})

marker.setMap(map);