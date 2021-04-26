
exports.search = (name, nsfw) => {

    try {

    if(nsfw === true){
        const result = require(`./GIFS/NSFW/${name}.json`)
        return result
    }else{
        const result = require(`./GIFS/${name}.json`)
        return result
    }
    }catch(e){
        console.log("une erreur est survenue")
    }
}

exports.random = (name, nsfw) => {

    try {

    if(nsfw === true){
        const search = require(`./GIFS/NSFW/${name}.json`)
        let result = search[Math.floor(Math.random() * search.length)]
        return result
    }else{
        const search = require(`./GIFS/${name}.json`)
        let result = search[Math.floor(Math.random() * search.length)]
        return result
    }
    }catch (e) {
        console.log("une erreur est survenue")
    }
}