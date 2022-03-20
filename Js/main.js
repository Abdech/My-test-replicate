const table = document.querySelector('table')

async function getStudent() {
    const res = await fetch("https://smart-identificatio.herokuapp.com/admin/get-all-student")
    const data = await res.json()
    const students = data.message
    console.log(students)

    table.innerHTML = `
      <tr class="bg-blue">
                        <th></th>
                        <th>ID Number</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Department</th>
                        <th>View</th>
                        <th>Status</th>
                    </tr>
    `
    let html = students.map((student, index) => {
      
        return `
        <tr class="activited-student row">
                        <td>${index+1}</td>
                        <td>${student.username}</td>
                        <td>${student.firstName} ${student.lastName} ${student.otherName} </td>
                        <td>${student.level}</td>
                        <td>${student.department}</td>
                        <td><button class="view">VIEW STUDENT</button></td>
                        <td><button class="${
                            student.active = true ? "Deactivated": "Active"
                        }">${student.active}</button></td>
                    </tr>
    `
    }
    )


   table.innerHTML += html
}

getStudent()


