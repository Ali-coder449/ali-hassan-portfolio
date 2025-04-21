
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  return (
    <div className="relative w-48">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="pl-8 h-9 md:w-48 text-sm"
      />
    </div>
  );
};

export default SearchBar;
