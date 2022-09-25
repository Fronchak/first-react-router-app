export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Seach contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              className="sr-only"
              aria-label="polite"
            ></div>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}