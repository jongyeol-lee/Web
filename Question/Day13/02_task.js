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
    markerPosition1 = new kakao.maps.LatLng(37.48659493110084 , 126.92926104080061)

var markerPosition2 = new kakao.maps.LatLng(37.4965 , 126.9392)

var markerPosition3 = new kakao.maps.LatLng(37.5065 , 126.9492)

var markerPosition4 = new kakao.maps.LatLng(37.5165 , 126.9592)

var markerPosition5 = new kakao.maps.LatLng(37.5265 , 126.9692)


var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
    image: markerImage
})

var marker2 = new kakao.maps.Marker({
    position: markerPosition2,
    image: markerImage
})

var marker3 = new kakao.maps.Marker({
    position: markerPosition3,
    image: markerImage
})

var marker4 = new kakao.maps.Marker({
    position: markerPosition4,
    image: markerImage
})

var marker5 = new kakao.maps.Marker({
    position: markerPosition5,
    image: markerImage
})

marker1.setMap(map);
marker2.setMap(map);
marker3.setMap(map);
marker4.setMap(map);
marker5.setMap(map);