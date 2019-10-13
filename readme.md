## queries

# notifications

* query {  
  notificationById(user_id:14) {  
    id 	  
    user_id  
    message  
    chat_id  
  }  
}  

* mutation{  
  createNotification(notification:{   
    message: "wwewew"  
    sender_id: 12  
    chat_id: 12  
    users: [12 ,12,12,21]  
  }){  
    id  
  }  
}  

* mutation{  
	deleteNotification(user_id:12)  
}  

# users

* hay que cambiar users por User.all en el metodo index del controlador  
* query{  
  allUsers{  
    id  
    username  
    mail  
  }  
}  

* mutation {  
  createUser(user: {  
    username: "dxgcfh"  
    password: "123"  
    mail: "rstdtfygu"  
    verification:true  
    active: true  
    password_confirmation:"123"  
      
  }) {  
    username  
    id   
    mail  
  }  
}  

* mutation {  
  updateUser(user: {  
    id:1  
    username: "dgtffttftfttftft"  
    password: "123"  
    mail: "rstdtfygu"  
    verification:true  
    active: true  
    password_confirmation:"123"  
  }) {  
    username  
    id   
    mail  
  }  
}  

