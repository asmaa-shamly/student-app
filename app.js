// yargs

const yargs = require('yargs')
const command = process.argv[2]
const student = require('./student')

// Add student in termenal
yargs.command({
    command:'add',
    describe:'Add students',
    builder:{
        id:{
            describe:'this is the id for student',
            demandOption:true,
            type:number
        },
        name:{
            describe:'this is student name',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'this is hte degrees for students',
            demandOption:true,
            type:number
        },
        comment:{
            describe:'this is comment to student ',
            demandOption:false,
            type:'string'
        }
    },
    handler:(argv)=>{
        students.addstudent(argv.id,argv.name,argv.degree,argv.comment)
        console.log('id of student', argv.id)
        console.log('name of student', argv.name)
        console.log('degrees of student',argv.degree)
    }
    
})

// Delete student in termenal
yargs.command({
    command:'delete',
    describe:'Delete students',
    builder:{
        id:{
            describe:'this is the id for student',
            demandOption:true,
            type:number
        },
    },
    handler:(argv)=>{
        students.removestudent(argv.id)
    
    }
})

//Read student in termenal
yargs.command({
    command:'read',
    describe:'Read students',
    builder:{
        id:{
            describe:'this is the id for student',
            demandOption:true,
            type:number
        },
    },
    handler:(argv)=>{
        students.readstudent(argv.id)
    }
})


// list students in terminal
yargs.command({
    command:'list',
    describe:'List students',
    handler:(argv)=>{
        students.liststudents()
    }
})


// const yargs = require('yargs')
// const command = process.argv[2]
// yargs.command({
//     command:'test',
//     describe:'test describe',
//     handler:()=>{
//         console.log('test for test')
//     }
// })

// console.log(yargs.argv)
yargs.parse()

// console.log(process.argv)
