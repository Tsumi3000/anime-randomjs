
exports.search = (name) => {

    try {

        const result = require(`./GIFS/${name}.json`)
        return result

    }catch(e){

        try{

        const result = require(`./GIFS/NSFW/${name}.json`)
        return result

        } catch (e) {

            console.log("La requête demandée n'existe pas")

        }
    }
}

exports.random = (name) => {

    try {

        const search = require(`./GIFS/${name}.json`)
        const result = search[Math.floor(Math.random() * search.length)]
        return result

    }catch(e){

        try{

            const search = require(`./GIFS/NSFW/${name}.json`)
            const result = search[Math.floor(Math.random() * search.length)]
        return result

        } catch (e) {

            console.log("La requête demandée n'existe pas")
            
        }
    }
}