import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto pt-16 ">
      <div>
        <input
          className="rounded-r-full rounded-l-full absolute "
          type="text"
          name="search"
          placeholder="Search"
          id=""
        />
        <button>
          <FaSearch className="relative left-52 top-3" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <select defaultValue={"category"} name="category">
          <option disabled value={"category"}>
            Category
          </option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <select defaultValue={"ratings"} name="ratings">
          <option disabled value={"ratings"}>
            Ratings
          </option>
          <option value="Ratings1">Ratings 1</option>
          <option value="Ratings2">Ratings 2</option>
          <option value="Ratings3">Ratings 3</option>
        </select>
        <select defaultValue={"price"} name="price">
          <option disabled value={"price"}>
            price
          </option>
          <option value="price1">price 1</option>
          <option value="price2">price 2</option>
          <option value="price3">price 3</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
