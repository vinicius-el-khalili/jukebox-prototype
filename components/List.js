import SongCard from "./SongCard";

const List = ({searchResults}) => {
    return (
    <>
    {
        searchResults.map( song => (
            <SongCard song={song} key={"6x5g"+song._id}/>
        ))
    }
    </>
    );
}
 
export default List;