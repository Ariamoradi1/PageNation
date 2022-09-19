const listItems = [
    { id: 1, name: 'Aria', family: 'Moradi' },
    { id: 2, name: 'Kamran', family: 'Rezaei' },
    { id: 3, name: 'Qasem', family: 'Alavi' },
    { id: 4, name: 'Babak', family: 'ZinAli' },
    { id: 5, name: 'Pouria', family: 'Ghasemi' },

    { id: 6, name: 'Amin', family: 'Amini' },
    { id: 7, name: 'Zinab', family: 'Ahmadi' },
    { id: 8, name: 'Kazem', family: 'Kazemi' },
    { id: 9, name: 'Ehsan', family: 'Ehsani' },
    { id: 10, name: 'Kambiz', family: 'Khaki' },

    { id: 11, name: 'Farshad', family: 'Ehsani' },
    { id: 12, name: 'Sasan', family: 'Miri' },
    { id: 13, name: 'Mohsen', family: 'Mahdi Zadeh' },
    { id: 14, name: 'Maedeh', family: 'Ali Pour' },
    { id: 15, name: 'Amir Ali', family: 'Abbasi' },

    { id: 16, name: 'Neda', family: 'Abbasi' },
    { id: 17, name: 'Melika', family: 'Hosseiny' },
    { id: 18, name: 'Mojtaba', family: 'Emami' },
    { id: 19, name: 'Fatemeh', family: 'Fatemi' },
    { id: 20, name: 'Nazi', family: 'NazizAdeh' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

let userListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 5

function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)

    paginatedUsers.forEach(function (user) {
        let userElement = document.createElement('div')
        userElement.classList.add('item')
        userElement.innerHTML = user.name + ' ' + user.family

        usersContainer.appendChild(userElement)
    })

}

function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
    // Codes

    pagesContainer.innerHTML = ''

    let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

    for (let i = 1 ; i < pageCount + 1 ; i++) {
        let btn = paginationButtonGenerator(i, allUesrsArray)
        pagesContainer.appendChild(btn)
    }

}

function paginationButtonGenerator (page, allUesrsArray) {
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')

        button.classList.add('active')


    })

    return button
}

displayUesrsList(listItems, userListContainer, rowsCount, currentPage)
setupPagination(listItems, paginationContainer, rowsCount)