const con=require('../connection');


class User{
    static async findUser(email){
        const result=new Promise(function(resolve, reject){                                               
                   con.query("select * from Personal_information where email=?",[email],function(err,rows){
                        if(rows === undefined){
                        reject(new Error("Error rows is undefined"));
                    }else{
                        resolve(rows);
                        
                    }
                  })
                }
            
        ) 
          const user =await result.then((val)=>{
          return val
      })
     
        return user[0]
    }
    static async registerUser(NIC,first_name, middle_name, last_name, email, state, address_no,street, phone_number, user_name, password){
        const result=new Promise(function(resolve, reject){
              con.query(
                  "insert into Personal_information (NIC, first_name, middle_name, last_name, address_no,street, state,phone_number, email,user_name, password) values (?) ",[[NIC, first_name, middle_name, last_name, address_no,street, state,phone_number, email,user_name, password]], 
                  function(err, rows){                                                
                     con.query("select * from Personal_information where employee_id=?",[ rows.insertId],function(err,rows){
                          if(rows === undefined){
                          reject(new Error("Error rows is undefined"));
                      }else{
                          resolve(rows);
                          
                      }
                    })
                  }
              )}
          )
            const newuser =await result.then((val)=>{
            return val
        })
          return newuser[0]
    }
}

module.exports=User