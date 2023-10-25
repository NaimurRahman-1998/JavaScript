const payment = true
const mark = 81;

const enroll=(callback)=>{
    console.log('enrollment in progress..')

    setTimeout(()=>{
        if(payment){
            console.log("payment successful")
            callback()
        }
        else {
            console('payment failed')
        }
    },2000)
}

const course = (callback) =>{
    console.log("course is on progress...")

    setTimeout(()=>{
        if(mark >= 80){
            callback()
        }
        else{console.log("u failed")}
    },3000)
}

const certificate = () =>{
    console.log("you completed the course")
}

enroll(()=>{
    course(certificate)
})