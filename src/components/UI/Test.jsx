 import { useState, useEffect } from 'react';
 import PropTypes from 'prop-types';
 
 const Test = ({ prop }) => {
   const [state, setState] = useState(null);
 
   useEffect(() => {
     // TODO: Add effect logic here
     return () => {
       // TODO: Add cleanup logic here
     };
   }, []);
 
   return (
     <div>
       <h1>test</h1>
       content
     </div>
   );
 };
 
 Test.propTypes = {
   prop: PropTypes.any.isRequired,
 };
 
 export default Test;