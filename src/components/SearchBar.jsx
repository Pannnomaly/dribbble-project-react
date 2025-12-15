export default function SearchBar ()
{
    return (
        <div>
            <form>
                <input type="text" name="search" placeholder="Search For Product" />
                <a href="#">
                    <img src="cancle-circle.svg" alt="cancle icon" />
                </a>
            </form>
        </div>
    );
}