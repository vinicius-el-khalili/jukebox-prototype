const ListResults = ({searchResults}) => {
    return (
    <>
    {
        searchResults.map( song => (
            <p key={"6x5g"+song._id}>{song.title}</p>
        ))
    }
    </>
    );
}
 
export default List;