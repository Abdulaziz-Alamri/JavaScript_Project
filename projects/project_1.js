let books = [
    [1, 'Start with why', 'Simon Sinek', 80.0, 13],
    [2, 'But how do it know', 'J. Clark Scott	', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero to One', 'Peter Thiel', 45.0, 12],
    [5, "You don't know JS", 'Kyle Simpson', 39.9, 9]
];

function search(query) {

    for (let i = 0; i < books.length; i++) {
        if (books[i][0] == query || books[i][1] == query || books[i][2] == query) {
            console.log(`Book found
        ID: ${books[i][0]}
        Title: ${books[i][1]}
        Author: ${books[i][3]}\n`);
            return;
        }
    }
    console.log(` ${query} Not Found\n`);
}
function sellBook(title, request, balance) {

    for (let i = 0; i < books.length; i++) {
        if (books[i][1] == title) {
            if (request <= books[i][4]) {
                if (balance >= books[i][3] * request) {
                    console.log('Your request is available for purchase');
                    console.log('Purchase Completed\n');
                    books[i][4] -= request;
                    return;
                } else {
                    console.log('Error: Not enough Balance\n');
                    return;
                }
            } else {
                console.log(`Error: There is only ${books[i][4]} available\n`);
                return;
            }
        }
    }
    console.log(`Error: ${title} Book Not Found`);
}


search(1);
search(10);
search('But how do it know');
search('Robert Cecil Martin');
search('Abdulaziz Alamri');

sellBook('But how do it know', 5, 1000);
sellBook('Clean Code', 7, 50);
sellBook('Zero to One', 10, 400);
sellBook('Visual Studio Code ', 10, 400);
