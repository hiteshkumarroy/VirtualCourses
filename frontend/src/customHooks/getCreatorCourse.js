import { useEffect } from 'react';
import { serverUrl } from '../App';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCreatorCourseData } from '../redux/courseSlice';

// ✅ Custom Hook (prefix with "use")
export default function getCreatorCourse() {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const creatorCourses = async () => {
      try {
        const result = await axios.get(serverUrl + '/api/course/getcreatorcourse', { 
          withCredentials: true 
        });
        // console.log(result.data);
        dispatch(setCreatorCourseData(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    
    creatorCourses();
  }, [userData, dispatch]); // ✅ Add dispatch to dependencies
}

// Usage in a component:
// import { useCreatorCourse } from './getCreatorCourse';
//
// function MyComponent() {
//   useCreatorCourse(); // ✅ Call the hook inside a component
//   return <div>...</div>;
// }