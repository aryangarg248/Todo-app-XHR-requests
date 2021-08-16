import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Person from './Person';
import ReactPaginate from "react-paginate";

function ShowPerson() {
  const [person, setPerson] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);


  useEffect(() => {
    axios
      .get(
        'https://reqres.in/api/users?page=2'
      )
      .then(response => {
        setPerson(response.data.data);
        console.log(person)

      })
      .catch(error => console.log(error));
  } , []);

  const usersPerPage = 3;
  const pageCount = Math.ceil(person.length / usersPerPage);
  const pagesVisited = pageNumber * usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayPerson = person
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(item => {
      return (
        <Person
          key={item.id}
          first_name={item.first_name}
          last_name={item.last_name}
          email = {item.email}
          avatar = {item.avatar}
        />
      );
    })
  return (
    <div>
      {displayPerson}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}/>
    </div>
  )
}

export default ShowPerson
