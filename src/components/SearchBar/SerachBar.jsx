import "./SearchBar.css"

function SerachBar({ search, setSearch }) {

  return (
    <div className="offres-search">
      <svg
        className="offres-search-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
      </svg>
      <input
        type="search"
        className="form-control offres-search-input"
        placeholder="Rechercher une offre..." 
        aria-label="Rechercher une offre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default SerachBar
