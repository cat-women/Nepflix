import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/navbar.js";
import Movies from "./components/Movies/movies.js";
import Form from "./components/Auth/form.js";

import { getMovies } from "./api/movieApi.js";

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(store => store.auth);
  
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="App">
      <Navbar user={user} isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <Form />}
      <Movies />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui aut
      impedit iure corrupti similique temporibus animi dicta exercitationem vero
      tempore facere iste mollitia, explicabo accusantium voluptas omnis? Quia,
      molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
      qui aut impedit iure corrupti similique temporibus animi dicta
      exercitationem vero tempore facere iste mollitia, explicabo accusantium
      voluptas omnis? Quia, molestias? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Itaque qui aut impedit iure corrupti similique
      temporibus animi dicta exercitationem vero tempore facere iste mollitia,
      explicabo accusantium voluptas omnis? Quia, molestias? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Itaque qui aut impedit iure
      corrupti similique temporibus animi dicta exercitationem vero tempore
      facere iste mollitia, explicabo accusantium voluptas omnis? Quia,
      molestias?
    </div>
  );
}

export default App;
