##notification queries

query {
  notificationById(user_id:14) {
    id 	
    user_id
    message
    chat_id
  }
}

mutation{
  createNotification(notification:{ 
    message: "wwewew"
    sender_id: 12
    chat_id: 12
    users: [12 ,12,12,21]
  }){
    id
  }
}

mutation{
	deleteNotification(user_id:12)
}