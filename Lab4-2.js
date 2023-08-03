const user1 = ['1m7', '65kg']
const user2 = ['1m8', '70kg']
const user3 = ['1m5', '45kg']

localStorage.setItem('Phước', JSON.stringify(user1))
localStorage.setItem('An', JSON.stringify(user2))
localStorage.setItem('Linh', JSON.stringify(user3))
localStorage.removeItem('Hà')


function change_name() {
    localStorage.setItem('Hà', JSON.stringify(user1))
    localStorage.removeItem('Phước')
}
function delete_Phuoc() {
    localStorage.removeItem('Phước')
}
function clear_localStorage() {
    localStorage.clear()
}
