import React from 'react';
import './Board.css';
import List from './List';


const Info = [
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Sofia Cooper", birthday: "1995-07-24", id: "1"
    },
    {
        img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Miller Wright", birthday: "1998-05-29", id: "2"
    },
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Tara Kelly", birthday: "1991-07-24", id: "3"
    },
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Freddie Watson", birthday: "1999-10-15", id: "4"
    },
    {
        img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Brianna Baker", birthday: "1994-07-05", id: "5"
    },
    {
        img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Brad Myers", birthday: "1997-01-28", id: "6"
    }
]

function Board() {
    return (
        <main id='site-main'>
            <h1 className="text-dark title">Birthday Remainder</h1>

            <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 5)} upcoming={true}></List>
            </div>
        </main>
    );
}

//today birthday
function Today(person) {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay === day && currentMonth === month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth) {
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter = person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        if (currentDay === day) return 0;
        return month >= currentMonth && month <= currentMonth + toMonth;
    })

    return filter;

}

export default Board;