const session={
    user:null,
    message:[]
};

export default session;

export function Login(){
    session.user =  {
        Firstname: "Chris",
        Lastname: "Tejada",
        id:613
    }
}