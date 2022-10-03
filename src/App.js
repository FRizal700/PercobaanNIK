import React from "react";
import './App.css';

const dummyData = [
  {
    playerName: "asep",
    email: "asep@gmail.com",
    address: "jakarta",
    NIK : "2134"
  },
  {
    playerName: "yusuf",
    email: "yusuf@gmail.com",
    address: "bandung",
    NIK : "1234"
  },
  {
    playerName: "afif",
    email: "afif@gmail.com",
    address: "karawang",
    NIK : "112233"
  },
  {
    playerName: "iman",
    email: "iman@gmail.com",
    address: "bandung",
    NIK : "4321"
  }
]
  


function App() {
  const [isEdit, setIsEdit] = React.useState(false);
  const [searchedPerson, setSearchedPerson] = React.useState([{
    playerName: "",
    email: "",
    address: "",
    NIK: ""
  }])

  const editData = () => {
    setIsEdit(!isEdit)
  }

  const doSearch = (value) => {
    let lowerCaseText = value.toLowerCase()
    const data = dummyData;
    setSearchedPerson(data.filter((x) => {
      return ((x.playerName).toLowerCase() === lowerCaseText) || 
      ((x.email).toLowerCase() === lowerCaseText) || 
      ((x.address).toLowerCase() === lowerCaseText) || 
      ((x.NIK).toLowerCase() === lowerCaseText)
    }))
  }

  return (
    <div className="App">
      {/* FormInput menerima Props isEdit */}
      <div style={{ marginTop:50, }}>
        <h2>Masukkan NIK</h2>  
      </div>
      <input placeholder={"Search"} style={{ width: 500, borderRadius: 10, marginTop: 10 }} onChange={(v) => doSearch(v.target.value)}/>
      { 
        searchedPerson.map(data => {
          return (
            <div style={{ marginLeft: 20, display: "flex", flexDirection: "row", width: 800, justifyContent: "space-between",
        margin: 20 }}>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>Name = {data.playerName}</div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>Email = {data.email}</div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>Address = {data.address}</div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>NIK = {data.NIK}</div>
            </div>
          )
        })
      }
    </div>
  );

}

export default App;
