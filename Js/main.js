

async function getStudent() {
    const res = await fetch("https://smart-identificatio.herokuapp.com/admin/get-all-student")
    const data = res.json()

    console.log(data)
}

getStudent()