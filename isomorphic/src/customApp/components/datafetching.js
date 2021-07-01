// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import data from "../../languageProvider/locales/en_US.json";

// function DataFetching({toSearch}) {

//   const [search, setSearch] = useState([]);

//   useEffect(() => {
//     console.log(toSearch)
//     console.log("current state is " + search)
//     let isMounted = true;
//     axios
//       .get(
//         "https://bv-online-assessment.herokuapp.com/api/bookings/" + toSearch
//       )
//       .then((res) => {
//         console.log(res);
//         if (isMounted) setSearch(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

//   return (
//     <div className="row">
//       <div className="col-md-1"></div>
//       <div className="col-md-11">
//         <br></br>
//         <img
//           style={{ width: "200px", height: "180px" }}
//           src={search.profile_picture}
//           class="rounded float-left"
//         />
//         <br></br>
//         <br></br>
//         <p>Hi, {search.guest_name}</p>
//         <br></br>

//         <p>
//          {data.text1}
//         </p>
//         <br></br>
//         <div className="row">
//           <div className="col-md-2">
//   <p>{data.property_name}</p>
//           </div>
//           <div className="col-md-9">
//             <p>
//               <strong>{search.property_name}</strong>
//             </p>
//           </div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-2">
//   <p>{data.check_in_date}</p>
//           </div>
//           <div className="col-md-2">
//             <p>
//               <strong>{search.check_in_date}</strong>
//             </p>
//           </div>
//           <div className="col-md-2">
//             <p>{data.check_out_date}</p>
//           </div>
//           <div className="col-md-2">
//             <p>
//               <strong>{search.check_out_date}</strong>
//             </p>
//           </div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-2">
//   <p>{data.Arrivaltime}</p>
//           </div>
//           <div className="col-md-9">
//             <p>--:--(Please set your arrival time)</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DataFetching;

import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../../languageProvider/locales/en_US.json";
import TimePicker from "react-time-picker";

function DataFetching(props) {
  const [search, setSearch] = useState([]);
  const [value, onChange] = useState("10:00");

  console.log(value);

  useEffect(() => {
    axios
      .get(
        "https://bv-online-assessment.herokuapp.com/api/bookings/" +
          props.serach
      )
      .then((res) => {
        console.log(res);
        setSearch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
function handleClick(){

  console.log("set");

  // useEffect(() => {
  //   axios
  //     .put(
  //       "https://bv-online-assessment.herokuapp.com/api/bookings/"+props.serach+"/"+value 
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       //setSearch(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get(
        "https://bv-online-assessment.herokuapp.com/api/bookings/" +
          props.serach
      )
      .then((res) => {
        console.log(res);
        setSearch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

}



  if (search) {
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-11">
          <br></br>
          <img
            style={{ width: "200px", height: "180px" }}
            src={search.profile_picture}
            class="rounded float-left"
          />
          <br></br>
          <br></br>
          <p>Hi, {search.guest_name}</p>
          <br></br>

          <p>{data.text1}</p>
          <br></br>
          <div className="row">
            <div className="col-md-2">
              <p>{data.property_name}</p>
            </div>
            <div className="col-md-9">
              <p>
                <strong>{search.property_name}</strong>
              </p>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-2">
              <p>{data.check_in_date}</p>
            </div>
            <div className="col-md-2">
              <p>
                <strong>{search.check_in_date}</strong>
              </p>
            </div>
            <div className="col-md-2">
              <p>{data.check_out_date}</p>
            </div>
            <div className="col-md-2">
              <p>
                <strong>{search.check_out_date}</strong>
              </p>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-2">
              <p>{data.Arrivaltime}</p>
            </div>
            <div className="col-md-9">
              <p>--:--(Please set your arrival time)</p>
              <div>
                <TimePicker onChange={onChange} value={value} />
              </div>
              <button onClick={handleClick}>
                SET
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ color: "red" }}>Please input correct Code</p>
      </div>
    );
  }
}

export default DataFetching;
