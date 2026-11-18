function SerachBar({ search, setSearch }) {

  return (
    <div>
      <input type="text"
        className="form-control mb-4"
        placeholder="Rechercher une offre..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default SerachBar
