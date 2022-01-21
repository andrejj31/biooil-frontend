// import React, { useEffect, useState } from "react";

// export default function useCheckUser() {
//   const [validUser, setValidUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     try {
//       const res = await fetch(`http://localhost:3080/api/checkUser`);
//       const json = await res.json();
//       setValidUser(json);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   });

//   return { validUser, error };
// }
