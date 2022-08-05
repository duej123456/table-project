import React,{useEffect,useState} from 'react'
import axios from 'axios'
import * as ReactBoostrap from 'react-bootstrap'

const Table = () => {
    const [posts,setPosts] = useState({ blogs: []})

    useEffect(() => {
        const fetchPostList = async() => {
            const {data} = await axios("https://jsonplaceholder.typicode.com/posts")
        setPosts({blogs:data})
        }
        fetchPostList()
    },[setPosts])
    //放api

return (
    <div>
    <ReactBoostrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
            posts.blogs && posts.blogs.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                </tr>
            ))
        }
      </tbody>
    </ReactBoostrap.Table>
    </div>
    )
}

export default Table