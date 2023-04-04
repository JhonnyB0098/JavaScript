let marks={
    name1:90,
    name2 : 9,
    name3: 56,
    name4: 67
}

for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}