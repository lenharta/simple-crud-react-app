import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/posts";
import useAxiosFetch from "../hooks/useAxiosFetch";
// import useWindowSize from "./hooks/useWindowSize";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [userContacts, setUserContacts] = useState("");
  const [postEmail, setPostEmail] = useState("");
  const [postMessage, setPostMessage] = useState("");

  const navigate = useNavigate();

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  // With Out Using Custom Hook
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       // if you wanted to check response is in 200 range
  //       // if (response && response.data) {setPosts(response.data)}
  //       setPosts(response.data);
  //     } catch (err) {
  //       // FROM AXIOS DOCUMENTATION
  //       if (err.response) {
  //         // not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  // Could Move Function to recieving component
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");

      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //

  // Could Move Function to recieving component
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");

      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //

  // Could Move Function to recieving component
  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);

      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    const id = userContacts.length
      ? userContacts[userContacts.length - 1].id + 1
      : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newUserContact = { id, email: postEmail, datetime, message: postMessage };
    try {
      const response = await api.post("/userContacts", newUserContact);
      const allUserContacts = [...userContacts, response.data];
      setUserContacts(allUserContacts);
      setPostEmail("");
      setPostMessage("");

      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        searchResults,
        isLoading,
        fetchError,
        search,
        setSearch,
        posts,
        setPosts,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        editBody,
        setEditBody,
        editTitle,
        setEditTitle,
        userContacts,
        setUserContacts,
        postEmail,
        setPostEmail,
        postMessage,
        setPostMessage,
        setEditTitle,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleSubmitContact,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
