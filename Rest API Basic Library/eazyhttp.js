/* THIS IS A ES5 Library */

function easyHttp(){
    this.http = new XMLHttpRequest();
}


//MAKE AN HTTP GET REQUEST
easyHttp.prototype.get = function(url, callback){
    
    this.http.open('GET', url, true);

    let self = this  // to avoid scope problems with this
    this.http.onload = function(){  
        /* When inside a function the this keyword pertains to the function. So we cannot use 'this.http.status === 200'. This would be wrong as 'this' keyword has a different scope inside this function */
        
        if(self.http.status === 200){
           // console.log(self.http.responseText);
           //'return self.http.responseText' wont work wothout callback;

           callback(null, self.http.responseText);
        }
        else{
            callback('Error' + self.http.status);
        }
    }

    this.http.send();
}


//MAKE AN HTTP POST REQUEST


easyHttp.prototype.post = function(url,data, callback){
   //data is a regular javascript object so remember to stringify 
    
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    
    let self = this
    
    this.http.onload = function(){
        callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));

}

//MAKE AN HTTP PUT REQUEST

easyHttp.prototype.put = function(url,data, callback){
    //data is a regular javascript object so remember to stringify 
     
     this.http.open('PUT',url,true);
     this.http.setRequestHeader('Content-type','application/json');
     
     let self = this
     
     this.http.onload = function(){
         callback(null,self.http.responseText);
     }
 
     this.http.send(JSON.stringify(data));

 }

//MAKE AN HTTP DELETE REQUEST

easyHttp.prototype.delete = function(url, callback){
    
    this.http.open('DELETE', url, true);

    let self = this  // to avoid scope problems with this
    this.http.onload = function(){  
        /* When inside a function the this keyword pertains to the function. So we cannot use 'this.http.status === 200'. This would be wrong as 'this' keyword has a different scope inside this function */
        
        if(self.http.status === 200){
           // console.log(self.http.responseText);
           //'return self.http.responseText' wont work wothout callback;

           callback(null, /*self.http.responseText*/ 'Post Deleted');
        }
        else{
            callback('Error' + self.http.status);
        }
    }

    this.http.send();
}