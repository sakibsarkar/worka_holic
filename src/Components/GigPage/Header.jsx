"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const category = ["Web developer", "Devops Engineer", "Full stack developer"];

const Header = ({ setCategory, setRating, setPriceRange, searchValue }) => {


  const router = useRouter()

  // change search value
  const inputRef = useRef(null)
  // search from enter button
  const hanldeSearch = (e) => {
    const keyCode = e.keyCode
    const value = inputRef.current.value
    if (!value) return
    if (keyCode == 13) {
      router.push(`/gig?search=${value}`)
      inputRef.current.blur()
    }
  }

  // search by search btn
  const handleButtonSearch = () => {
    const value = inputRef.current.value
    if (!value) return
    router.push(`/gig?search=${value}`)
    inputRef.current.blur()

  }

  return (
    <div className="flex justify-between max-w-7xl mx-auto pt-16 ">
      <div>
        <input
          className="rounded-r-full rounded-l-full absolute "
          type="text"
          name="search"
          onKeyUp={hanldeSearch}
          placeholder="Search"
          ref={inputRef}
          defaultValue={searchValue}
        />
        <button onClick={handleButtonSearch}>
          <FaSearch className="relative left-52 top-3" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value={""}>
            All Category
          </option>

          {
            category?.map((cat, i) => <option value={cat} key={i}>{cat}</option>)
          }
        </select>
        <select onChange={(e) => setRating(e.target.value)} >
          <option value={""}>
            All Ratings
          </option>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
        <select defaultValue={"price"} name="price" onChange={(e) => setPriceRange(e.target.value)}>
          <option value={""}>
            All price
          </option>
          <option value="0@150">Low - $0 - 150</option>
          <option value="150@300">Mid - $150-  300</option>
          <option value="300@e">High - $300+</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
