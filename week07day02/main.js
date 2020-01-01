let baseURL = "https://api.imgflip.com/get_memes"
axios.get(baseURL).then(function(result) {
res = result.data
res.data.memes.forEach(element => {
    document.getElementById("allmeme").innerHTML += 
 `<h5>${element.name}</h5><img src="${element.url}" width="${element.width}" height="${element.height}">`
})
})
