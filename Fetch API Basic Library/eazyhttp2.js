class EasyHTTP{
    
    //make an http get request
    get(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err))
        })
    }

    //make an http post request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data=> resolve(data))
            .catch(err => reject(err))
        })
    }

    //make an http post request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data=> resolve(data))
            .catch(err => reject(err))
        })
    }

    //make an http get request
    detete(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve('DELETED DATA'))
            .catch(err => reject(err))
        })
    }
}