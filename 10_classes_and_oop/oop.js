const user = {
    username: "hitesh",
    loginCount: 8,
    signIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
        
        
    }
}
// const user2 = {
//     username: "hitesh",
//     loginCount: 8,
//     signIn: true,

//     getUserDetails: function () {
//         // console.log("Got user details from database");
//         // console.log(`Username:${this.username}`);
//         console.log(this);
        
        
//     }
// }

// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);

const promiseOne = new Promise()
const date = new Date()