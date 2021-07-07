const fs = require('fs')
const { title } = require('process')
const addstudent = (id ,name, degree,comment)=> {
    const students = loadstudent()

    // check duplicated title
    const duplicateid =students.filter((student)=>{
        return student.id===id
    })
    if(duplicateid.length===0){
        students.push({
            id,
            name,
            degree,
            comment
        })
        savestudents(students)
        console.log('saved successfuly')
    }
    else{
        console.log('Error duplicate id')
    }
}

// //////////////////////////////////////////////////////////////////
// Remove or Delete note

const removestudent=(id)=>{
    const students = loadstudent()
    const studentstokeep=students.filter((student)=>{
        return student.id!==id
    })
    console.log('students to keep ',studentstokeep)
    savestudents(studentstokeep)
}
// //////////////////////////////////////////////////////////////////
// Read student

const readstudent = (id)=>{
    const students = loadstudent()
    const student = students.find((student)=>{
        return student.id===id
    })
    if(student){
        console.log(student)
        console.log('the id  is '+ student.id)
        console.log('his name is '+ student.name)
        console.log('his degrees is '+ student.degree)
    }
    else{
        console.log('not found')
    }
}
// /////////////////////////////////////////////
// list all notes

const liststudents=()=>{
    const students = loadstudent()
    students.forEach(student => {
        console.log('this is a list student ', student)
        
    });
}

// ////////////////////////////////////////////

// return array
const loadstudent= ()=>{
    try{
        const dataBuffer = fs.readFileSync('student.json').toString();
        return  JSON.parse(dataBuffer);
    }
    catch(e){
        return[];
    }
}

const savestudents=(students)=>{
    const savedata = JSON.stringify(students)
    fs.writeFileSync('students.json',savedata)
}

module.exports={
    addstudent,
    removestudent,
    readstudent,
    liststudents
}