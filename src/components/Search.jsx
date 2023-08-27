import { useRef } from "react";
export const Search = ({fn})=>{
    const artist = useRef();
    return(
    <>
    <label>Artist name</label>
    <input ref={artist} type="text" className="form-control" placeholder="Type here"/>
    <button className="btn btn-success"onClick={()=>{
        fn(artist.current.value);
    }}>Search</button>
    </>)
}